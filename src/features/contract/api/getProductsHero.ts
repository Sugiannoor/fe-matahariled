import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { GeneralResponse, Pagination } from "@/types/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
type HeroProduct = {
  product_id: number;
  path: string;
};
export async function getProductsHero() {
  const res = await axios.get<GeneralResponse<HeroProduct[]>>("/product/hero");

  return res.data.data;
}

type QueryFnType = typeof getProductsHero;

type useHeroProducts = {
  params?: Pagination;
  config?: QueryConfig<QueryFnType>;
};

export function useHeroProducts({ config }: useHeroProducts = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["products"],
    queryFn: getProductsHero,
  });
}
