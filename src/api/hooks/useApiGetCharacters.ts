import { extractData, getUrl } from "@/api/api.helpers";
import { MarvelApiCharacterResponse } from "@/api/domain/heroes.domain";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useApiGetCharacters(page = 0, search = "") {
  page = page * 16;
  function queryFn() {
    return axios
      .get<MarvelApiCharacterResponse>(getUrl("characters", page, search))
      .then(extractData);
  }

  return useQuery({
    queryKey: ["characters", page, search],
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
