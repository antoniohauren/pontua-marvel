import { extractData, getUrl } from "@/api/api.helpers";
import { MarvelApiCharacterResponse } from "@/api/domain/heroes.domain";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useApiGetCharacters() {
  function queryFn() {
    return axios
      .get<MarvelApiCharacterResponse>(getUrl("characters"))
      .then(extractData);
  }

  return useQuery({
    queryKey: ["characters"],
    queryFn,
    select: (data) => {
      return data.data.results.map((hero) => ({
        id: hero.id,
        name: hero.name,
        description: hero.description,
        imageUrl: hero.thumbnail.path + "." + hero.thumbnail.extension,
      }));
    },
  });
}
