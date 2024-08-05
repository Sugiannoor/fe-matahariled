import { UserForm } from "../types/user";
import { GeneralResponse } from "@/types/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";

type UserReuest = {
  data: UserForm;
};

export async function createUser({ data }: UserReuest) {
  const res = await axios.post<GeneralResponse<UserForm>>(
    "/auth/register",
    data
  );

  return res.data;
}
type UseCreateUserOptions = {
  config?: MutationConfig<typeof createUser>;
};

export function useCreateUser({ config }: UseCreateUserOptions = {}) {
  const queryClient = useQueryClient();
  return useMutation(createUser, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["users"]);
      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
