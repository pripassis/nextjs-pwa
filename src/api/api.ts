import axios, { AxiosResponse } from "axios";
import { Item, Noticia } from "../models/post.interface";

const instance = axios.create({
  baseURL: "http://servicodados.ibge.gov.br/api/v3",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

interface ParamsProps {
  de?: string;
  para?: string;
  tipo?: "noticias" | "release";
}

const requests = {
  get: (url: string, params?: ParamsProps) =>
    instance
      .get(url, {
        params: { de: params?.de, para: params?.para, tipo: params?.tipo },
      })
      .then(responseBody),
};

export const Post = {
  getNoticia: (params?: ParamsProps): Promise<Noticia> =>
    requests.get("/noticias", params),
  getNoticiaById: (id: number): Promise<Item> =>
    requests.get(`/noticias/${id}`),
};
