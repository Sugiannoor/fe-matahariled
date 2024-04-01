import { Pagination } from "@/types/api";
import { GeneralEntity } from "@/types/general";

export type Contract = {
    no: number,
    contract_id: number
    title: string;
    user_id: number
    product: {
        id: number,
        name: string;
    }[];
    username: string;
    description: string;
    start_date: string;
    end_date: string;
}& GeneralEntity

export type ContractQuery = {
    user_id?:number;
    product_id?:number;
}&Pagination

export type ContractDTO = {
    contract_id?:number
    description: string;
    product_ids: number[];
    user_id: number;
    title: string;
    start_date: string;
    end_date: string;
}