import axios, { AxiosResponse } from "axios";
import { Item, Noticia } from "../models/post.interface";

const instance = axios.create({
  baseURL: "http://servicodados.ibge.gov.br/api/v3",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const Post = {
  getNoticia: (): Promise<Noticia> => requests.get("/noticias"),
  getNoticiaById: (id: number): Promise<Item> =>
    requests.get(`/noticias/${id}`),
};
