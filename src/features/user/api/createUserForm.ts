import { UserDTO, UserTableType } from "../types/user";
import { GeneralResponse } from "@/types/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";

type UserReuest = {
  data: UserDTO;
};

export async function createUserForm({ data }: UserReuest) {
  const formData = new FormData();
  formData.append("full_name", data.full_name);
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("phone_number", data.phone_number);
  formData.append("role", data.role);
  if (data.address) formData.append("address", data.address);
  if (data.password) formData.append("password", data.password);

  if (data.file) {
    formData.append("file", data.file, data.file.name);
  }

  const res = await axios.post<GeneralResponse<UserTableType>>(
    "/user/",
    formData
  );

  return res.data;
}
type UseCreateUserOptions = {
  config?: MutationConfig<typeof createUserForm>;
};

export function useCreateUserForm({ config }: UseCreateUserOptions = {}) {
  const queryClient = useQueryClient();
  return useMutation(createUserForm, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["users"]);
      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
