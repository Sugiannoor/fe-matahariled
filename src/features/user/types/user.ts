import { Pagination } from "@/types/api";
import { GeneralEntity } from "@/types/general";

export type UserTableType = {
    no: number;
    email: string;
    full_name: string
    user_id: number;
    username: string;
    role: string;
    phone_number: string;
}&GeneralEntity

export type UserDTO = {
    user_id?: number;
    full_name: string;
    role: string;
    email: string;
    password?: string;
    username: string;
}

export type UserQuery = {
    full_name?: string;
    username?: string
    role?: string
  } & Pagination;