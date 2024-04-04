export type GeneralEntity = {
    created_at?: Date;
    updated_at?: Date
}

export type GeneralSelect = {
    value: number;
    label: string;
}

export type UserRole = "Customer" | "Admin" | "SuperAdmin"