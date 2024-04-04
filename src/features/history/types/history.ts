import { Pagination } from "@/types/api";
import { GeneralEntity } from "@/types/general";

export type HistoryDTO = {
  history_id?: number
  title: string;
  description: string;
  product_id: number;
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
    description: string;
    path_file: string;
    product_name: string
    category_name: string
}&GeneralEntity

export type HistoryQuery = {
    product_id?: number
}&Pagination