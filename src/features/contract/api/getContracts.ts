import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { PaginatedResult, Pagination } from "@/types/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { Contract, ContractQuery } from "../types/contract";

type ContractRequest = {
    params?: Pagination;
  }&ContractQuery;
  
  export async function getContracts({ params }: ContractRequest) {
    const res = await axios.get<PaginatedResult<Contract>>('/contract/datatable', {
      params,
    });
    
    return res.data.data;
}

type QueryFnType = typeof getContracts;

type UseUserOptions = {
    params?: Pagination;
    config?: QueryConfig<QueryFnType>;
  };

  export function useContracts({ config, params }: UseUserOptions = {}) {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      ...config,
      queryKey: ['contracts', params],
      queryFn: () => getContracts({ params }),
    });
  }