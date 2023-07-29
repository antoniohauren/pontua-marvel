import { apiKey, baseUrl } from "@/api/api.consts";
import { AxiosResponse } from "axios";

export function getUrl(q: string) {
  const url = new URL(baseUrl + q);
  url.searchParams.append("apikey", apiKey);

  return url.toString();
}

export function extractData<T>(res: AxiosResponse<T>): T {
  return res.data;
}
