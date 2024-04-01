
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { Contract } from "../types/contract";

type ContractRequest = {
  id: number
};

export async function deleteContract({ id }: ContractRequest) {
  const res = await axios.delete<GeneralResponse<Contract>>(`/contract/${id}`);

  return res.data;
}
type UseDeleteContractOptions = {
    config?: MutationConfig<typeof deleteContract>;
  };
  
  export function useDeleteContract({ config }: UseDeleteContractOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(deleteContract, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['contracts'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }