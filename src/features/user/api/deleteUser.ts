
import { UserTableType } from "../types/user";
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";

type UserReuest = {
  id: number
};

export async function deleteUser({ id }: UserReuest) {
  const res = await axios.delete<GeneralResponse<UserTableType>>(`/user?id=${id}`);

  return res.data;
}
type UseDeleteUserOptions = {
    config?: MutationConfig<typeof deleteUser>;
  };
  
  export function useDeleteUser({ config }: UseDeleteUserOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(deleteUser, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['users'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }