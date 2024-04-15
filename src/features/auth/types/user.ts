export type User = {
    user_id: number;
    full_name: string;
    username: string;
    phone_number: string;
    email: string;
    address: string;
    role: "Customer" | "Superadmin" | "Admin";
}