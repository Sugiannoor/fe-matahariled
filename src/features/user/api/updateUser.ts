
import { UserDTO, UserTableType } from "../types/user";
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";

type UserReuest = {
  data: UserDTO;
};

export async function updateUser({ data }: UserReuest) {
  const res = await axios.put<GeneralResponse<UserTableType>>("/user/", data);

  return res.data;
}
type UseCreateUserOptions = {
    config?: MutationConfig<typeof updateUser>;
  };
  
  export function useUpdateUser({ config }: UseCreateUserOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(updateUser, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['users'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }