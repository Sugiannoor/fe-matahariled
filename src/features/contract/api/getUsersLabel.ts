import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { GeneralResponse, Pagination } from "@/types/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GeneralSelect } from "@/types/general";

  
  export async function getUserLabel() {
    const res = await axios.get<GeneralResponse<GeneralSelect[]>>('/user/label');
    
    return res.data.data;
}

type QueryFnType = typeof getUserLabel;

type UseLabelOptions = {
    params?: Pagination;
    config?: QueryConfig<QueryFnType>;
  };

  export function useLabelUser({ config }: UseLabelOptions = {}) {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      ...config,
      queryKey: ['categories'],
      queryFn: getUserLabel,
    });
  }