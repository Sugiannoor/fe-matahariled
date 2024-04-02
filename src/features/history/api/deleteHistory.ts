
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { HistoryDatatableType } from "../types/history";

type HistoryRequest = {
  id: number
};

export async function deleteHistory({ id }: HistoryRequest) {
  const res = await axios.delete<GeneralResponse<HistoryDatatableType>>(`/History/${id}`);

  return res.data;
}
type UseDeleteHistoryOptions = {
    config?: MutationConfig<typeof deleteHistory>;
  };
  
  export function useDeleteHistory({ config }: UseDeleteHistoryOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(deleteHistory, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['histories'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }