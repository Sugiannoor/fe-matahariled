import { Pagination } from "@/types/api";
import { GeneralEntity } from "@/types/general";

export type Product = {
  product_id: number;
  name: string;
  category: string;
  specification: string;
  category_id: number;
  file_id: number;
  description: string;
  path_file: string;
  gallery: File[] | undefined;
} & GeneralEntity;

export type ProducById = {
  product_id: number;
  title: string;
  category: string;
  specification: string;
  category_id: number;
  file_id: number;
  description: string;
  path_file: string;
} & GeneralEntity;

export type ProductDTO = {
  product_id?: number;
  name: string;
  description: string;
  specification: string;
  category_id: number;
  file: File | undefined;
  gallery: File[] | undefined;
};

export type ProductQuery = {
  category_id?: number;
} & Pagination;
