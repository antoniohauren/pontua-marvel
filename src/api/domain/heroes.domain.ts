import { MarvelApiBaseResponse } from "@/api/domain/baseApi.domain";

export type MarvelApiCharacterResponse =
  MarvelApiBaseResponse<MarvelApiCharacter>;

type MarvelApiCharacter = {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Collection;
  series: Collection;
  stories: Collection;
  events: Collection;
  urls: Url[];
};

type Thumbnail = {
  path: string;
  extension: string;
};

type Url = {
  type: string;
  url: string;
};

type Item = {
  resourceURI: string;
  name: string;
  type?: string;
};

type Collection = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};
