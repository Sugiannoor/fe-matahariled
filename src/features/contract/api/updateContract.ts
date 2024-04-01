
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { Contract, ContractDTO } from "../types/contract";

type ContractReuest = {
  data: ContractDTO;
};

export async function UpdateContract({ data }: ContractReuest) {
   

const res = await axios.put<GeneralResponse<Contract>>(`/contract/${data.contract_id}`, data);

return res.data;
}
type UseUpdateUserOptions = {
    config?: MutationConfig<typeof UpdateContract>;
  };
  
  export function useUpdateContract({ config }: UseUpdateUserOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(UpdateContract, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['contracts'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }