import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GeneralResponse } from "@/types/api";
import { HistoryProduct } from "@/features/history/types/history";

type ProductRequest = {
  ProductId: number | string;
};

export async function getHistoryByIdPorduct({ ProductId }: ProductRequest) {
  const res = await axios.get<GeneralResponse<HistoryProduct[]>>(
    `/history/product/${ProductId}`
  );

  return res.data.data;
}

type QueryFnType = typeof getHistoryByIdPorduct;

type UseProductOptions = {
  ProductId: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useHistoryProduct({ config, ProductId }: UseProductOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["histories", ProductId],
    queryFn: () => getHistoryByIdPorduct({ ProductId }),
  });
}
