import { Pagination } from "@/types/api";
import { GeneralEntity } from "@/types/general";

export type HistoryDTO = {
  history_id?: number
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  product_id: number;
  user_id: number;
  video_title?: string;
  embed?: string;
  file?: File;
};

export type History = {
  history_id: number;
  title: string;
  description: string;
  product_id: number;
  file: File;
} & GeneralEntity;

export type HistoryDatatableType = {
    history_id: number
    product_id: number;
    title: string;
    start_date: string
    end_date: string;
    description: string;
    path_file: string;
    product_name: string
    user_id: number;
    user: string
    video_id?: number;
    video_title?: string
    embed?: string;
    category_name: string
}&GeneralEntity

export type HistoryQuery = {
    product_id?: number
}&Pagination

type User = {
  full_name: string;
  photo: string
}
export type HistoryUser = {
  history_id: number;
  title: string;
  user: User
}