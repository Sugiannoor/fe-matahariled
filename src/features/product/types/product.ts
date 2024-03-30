import { GeneralEntity } from "@/types/general";

export type Product = {
    no: number;
    product_id: number;
    name: string;
    category: string
    description: string;
    path_image: string;


}& GeneralEntity