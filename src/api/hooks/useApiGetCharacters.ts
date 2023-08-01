import { extractData, getUrl } from "@/api/api.helpers";
import { MarvelApiCharacterResponse } from "@/api/domain/heroes.domain";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useApiGetCharacters(page = 0, search = "", limit?: number) {
  page = page * 16;
  function queryFn() {
    return axios
      .get<MarvelApiCharacterResponse>(
        getUrl("characters", page, search, limit)
      )
      .then(extractData);
  }

  return useQuery({
    queryKey: ["characters", page, search, limit],
    queryFn,
    select: (data) => {
      return {
        items: data.data.results.map((hero) => ({
          id: hero.id,
          name: hero.name,
          description: hero.description,
          imageUrl: hero.thumbnail.path + "." + hero.thumbnail.extension,
        })),
        total: data.data.total,
      };
    },
  });
}
