import { Pagination } from "@/types/api";
import { GeneralEntity } from "@/types/general";

export type UserTableType = {
    no: number;
    email: string;
    user_id: number;
    username: string;
    role: string;
    phone_number: string;
}&GeneralEntity

export type UserDTO = {
    full_name: string;
    role: string;
    email: string;
    password: string;
    username: string;
}

export type UserQuery = {
    full_name?: string;
    username?: string
    role?: string
  } & Pagination;