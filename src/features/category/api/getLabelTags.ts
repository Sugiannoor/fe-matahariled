import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { GeneralResponse, Pagination } from "@/types/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GeneralSelect } from "@/types/general";

  
  export async function getTagLabel() {
    const res = await axios.get<GeneralResponse<GeneralSelect[]>>('/tag/label');
    
    return res.data.data;
}

type QueryFnType = typeof getTagLabel;

type UseLabelOptions = {
    params?: Pagination;
    config?: QueryConfig<QueryFnType>;
  };

  export function useLabelTag({ config }: UseLabelOptions = {}) {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      ...config,
      queryKey: ['tags'],
      queryFn: getTagLabel,
    });
  }