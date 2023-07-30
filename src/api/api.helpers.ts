import { apiKey, baseUrl } from "@/api/api.consts";
import { AxiosResponse } from "axios";

export function getUrl(q: string, limit = 16) {
  const url = new URL(baseUrl + q);
  url.searchParams.append("apikey", apiKey);
  url.searchParams.append("limit", String(limit));

  return url.toString();
}

export function extractData<T>(res: AxiosResponse<T>): T {
  return res.data;
}
