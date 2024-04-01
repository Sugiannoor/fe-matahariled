import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { GeneralResponse, Pagination } from "@/types/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GeneralSelect } from "@/types/general";

  
  export async function getProductsLabel() {
    const res = await axios.get<GeneralResponse<GeneralSelect[]>>('/product/label');
    
    return res.data.data;
}

type QueryFnType = typeof getProductsLabel;

type UseLabelOptions = {
    params?: Pagination;
    config?: QueryConfig<QueryFnType>;
  };

  export function useLabelProducts({ config }: UseLabelOptions = {}) {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      ...config,
      queryKey: ['products'],
      queryFn: getProductsLabel,
    });
  }