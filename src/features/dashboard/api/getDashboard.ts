import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { GeneralResponse, Pagination } from "@/types/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { dashboard } from "../types/dashboard";

  
  export async function getDashboard() {
    const res = await axios.get<GeneralResponse<dashboard>>('/dashboard')
    
    return res.data.data;
}

type QueryFnType = typeof getDashboard

type UseDashboardOptions = {
    params?: Pagination;
    config?: QueryConfig<QueryFnType>;
  };

  export function useDashboard({ config}: UseDashboardOptions = {}) {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      ...config,
      queryKey: ['dashboard'],
      queryFn: getDashboard,
    });
  }