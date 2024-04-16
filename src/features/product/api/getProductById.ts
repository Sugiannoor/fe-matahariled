import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GeneralResponse } from "@/types/api";
import { ProducById } from "../types/product";

type ProductRequest = {
  ProductId: number | string;
};

export async function getProduct({ ProductId }: ProductRequest) {
  const res = await axios.get<GeneralResponse<ProducById>>(
    `/product/${ProductId}`
  );

  return res.data.data;
}

type QueryFnType = typeof getProduct;

type UseProductOptions = {
  ProductId: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useProduct({ config, ProductId }: UseProductOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["product", ProductId],
    queryFn: () => getProduct({ ProductId }),
  });
}
