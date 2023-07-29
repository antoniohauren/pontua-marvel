export type MarvelApiBaseResponse<T> = {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  etag: string;
  status: string;
  data: Data<T>;
};

type Data<T> = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
};
