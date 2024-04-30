import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GeneralResponse } from "@/types/api";
import { ProducById } from "../types/product";

type ProductRequest = {
  ProductId: number | string;
};

type GalleryPath = {
    path: string
}

export async function getGalleryByIdProduct({ ProductId }: ProductRequest) {
  const res = await axios.get<GeneralResponse<GalleryPath[]>>(
    `/gallery/${ProductId}`
  );

  return res.data.data;
}

type QueryFnType = typeof getGalleryByIdProduct;

type UseProductOptions = {
  ProductId: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useGalleryByIdProduct({ config, ProductId }: UseProductOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["galleries", ProductId],
    queryFn: () => getGalleryByIdProduct({ ProductId }),
  });
}
