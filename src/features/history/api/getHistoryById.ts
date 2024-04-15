import { useQuery } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';
import { HistoryDatatableType } from '../types/history';


type HistoryRequest = {
  id: number | string;
};

export async function getHistory({ id }: HistoryRequest) {
  const res = await axios.get<GeneralResponse<HistoryDatatableType>>(`/history/${id}`);

  return res.data.data;
}

type QueryFnType = typeof getHistory;

type UseAgencyOptions = {
  id: number | string;
  config?: QueryConfig<QueryFnType>;
};

export function useAgency({ config, id }: UseAgencyOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['history', id],
    queryFn: () => getHistory({ id }),
  });
}
