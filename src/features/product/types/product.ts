import { Pagination } from "@/types/api";
import { GeneralEntity } from "@/types/general";

export type Product = {
    product_id: number;
    name: string;
    category: string
    category_id: number;
    file_id: number;
    description: string;
    path_image: string;


}& GeneralEntity

export type ProductDTO = {
    name: string;
    description: string;
    category_id: number;
    file: File | undefined;
}

export type ProductQuery = {
    category?: string;
    role?: string
  } & Pagination;