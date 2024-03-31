import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { PaginatedResult, Pagination } from "@/types/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { Product } from "../types/product";

type ProductRequest = {
    params?: Pagination;
  };
  
  export async function getProducts({ params }: ProductRequest) {
    const res = await axios.get<PaginatedResult<Product>>('/product/datatable', {
      params,
    });
    
    return res.data.data;
}

type QueryFnType = typeof getProducts;

type UseUserOptions = {
    params?: Pagination;
    config?: QueryConfig<QueryFnType>;
  };

  export function useProducts({ config, params }: UseUserOptions = {}) {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      ...config,
      queryKey: ['products', params],
      queryFn: () => getProducts({ params }),
    });
  }