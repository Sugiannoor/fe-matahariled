import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GeneralResponse } from "@/types/api";

type ProductRequest = {
  ProductId: number | string;
};

export async function getGalleryByIdProduct({ ProductId }: ProductRequest) {
  const res = await axios.get<GeneralResponse<string[]>>(
    `/gallery/${ProductId}`
  );

  return res.data.data;
}

type QueryFnType = typeof getGalleryByIdProduct;

type UseProductOptions = {
  ProductId: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useGalleryByIdProduct({
  config,
  ProductId,
}: UseProductOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["galleries", ProductId],
    queryFn: () => getGalleryByIdProduct({ ProductId }),
  });
}
