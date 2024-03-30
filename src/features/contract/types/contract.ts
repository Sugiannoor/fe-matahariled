import { GeneralEntity } from "@/types/general";

export type Contract = {
    no: number,
    contract_id: number
    contract_code: string;
    title: string;
    product_name: string;
    customer_name: string;
    description: string;
    start_date: string;
    end_date: string;
}& GeneralEntity