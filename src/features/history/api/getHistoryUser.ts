import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { GeneralResponse, Pagination } from "@/types/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { HistoryUser } from "../types/history";

  
  export async function getHistoryUser() {
    const res = await axios.get<GeneralResponse<HistoryUser[]>>('/history/user');
    
    return res.data.data;
}

type QueryFnType = typeof getHistoryUser;

type UseLabelOptions = {
    params?: Pagination;
    config?: QueryConfig<QueryFnType>;
  };

  export function useHistoryUser({ config }: UseLabelOptions = {}) {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      ...config,
      queryKey: ['histories'],
      queryFn: getHistoryUser,
    });
  }