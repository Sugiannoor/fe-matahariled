import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { GeneralResponse } from "@/types/api";
import storage from "@/utils/storage";

import { User } from "../types/user";

export const CREDS_KEY = "creds";

export async function getCreds() {
  const res = await axios.get<GeneralResponse<User>>("/auth/profile");

  return res.data.data;
}

export async function loadCreds() {
  if (!storage.getToken()) return null;

  const data = await getCreds();

  return data;
}

export function useCreds() {
  return useQuery([CREDS_KEY], loadCreds, {
    onError: () => {
      storage.clearToken();
    },
  });
}
