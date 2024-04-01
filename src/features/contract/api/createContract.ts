
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { Contract, ContractDTO } from "../types/contract";

type ContractReuest = {
  data: ContractDTO;
};

export async function CreateContract({ data }: ContractReuest) {
   

const res = await axios.post<GeneralResponse<Contract>>("/contract", data);

return res.data;
}
type UseCreateUserOptions = {
    config?: MutationConfig<typeof CreateContract>;
  };
  
  export function useCreateContract({ config }: UseCreateUserOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(CreateContract, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['contracts'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }