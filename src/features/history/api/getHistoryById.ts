import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GeneralResponse } from "@/types/api";
import { HistoryDatatableType } from "../types/history";

type HistoryRequest = {
  ProductId: number | string;
};

export async function getHistory({ ProductId }: HistoryRequest) {
  const res = await axios.get<GeneralResponse<HistoryDatatableType>>(
    `/history/${ProductId}`
  );

  return res.data.data;
}

type QueryFnType = typeof getHistory;

type UseHistory = {
  ProductId: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useHistory({ config, ProductId }: UseHistory) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["history", ProductId],
    queryFn: () => getHistory({ ProductId }),
  });
}
