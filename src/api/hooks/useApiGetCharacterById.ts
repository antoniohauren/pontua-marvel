import { extractData, getUrl } from "@/api/api.helpers";
import { MarvelApiCharacterResponse } from "@/api/domain/heroes.domain";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useApiGetCharacterById(id: number) {
  function queryFn() {
    return axios
      .get<MarvelApiCharacterResponse>(getUrl(`characters/${id}`))
      .then(extractData);
  }

  return useQuery({
    queryKey: ["characters"],
    queryFn,
    select: (data) => {
      const hero = data.data.results[0];
      return {
        id: hero.id,
        name: hero.name,
        description: hero.description,
        imageUrl: hero.thumbnail.path + "." + hero.thumbnail.extension,
        series: hero.series.items.map((item) => item.name),
        comics: hero.comics.items.map((item) => item.name),
        events: hero.events.items.map((item) => item.name),
      };
    },
  });
}
