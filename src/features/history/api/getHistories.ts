import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { PaginatedResult, Pagination } from "@/types/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { HistoryDatatableType } from "../types/history";

type HistoryRequest = {
    product_id?: number
    params?: Pagination;
  };
  
  export async function getHistories({ params }: HistoryRequest) {
    const res = await axios.get<PaginatedResult<HistoryDatatableType>>('/history/datatable', {
      params,
    });
    
    return res.data.data;
}

type QueryFnType = typeof getHistories;

type UseUserOptions = {
    params?: Pagination;
    config?: QueryConfig<QueryFnType>;
  };

  export function useHistories({ config, params }: UseUserOptions = {}) {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      ...config,
      queryKey: ['histories', params],
      queryFn: () => getHistories({ params }),
    });
  }