import { GeneralEntity } from "@/types/general";

export type ComplaintDTO = {
    contract_id: number;
    title: string;
    status: "Baru"
    description: string;
    attachment?: File
}

export type Complaint = {
    no: number;
    contract_code: string;
    contract_id: number;
    title: string;
    desription: string;
    status: "Baru" | "Proses" | "Selesai";
}&GeneralEntity