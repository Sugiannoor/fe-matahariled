import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GeneralResponse } from "@/types/api";
import { HistoryDatatableType } from "../types/history";

type HistoryRequest = {
  id: number | string;
};

export async function getHistory({ id }: HistoryRequest) {
  const res = await axios.get<GeneralResponse<HistoryDatatableType>>(
    `/history/${id}`
  );

  return res.data.data;
}

type QueryFnType = typeof getHistory;

type UseHistory = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useHistory({ config, id }: UseHistory) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["history", id],
    queryFn: () => getHistory({ id }),
  });
}
