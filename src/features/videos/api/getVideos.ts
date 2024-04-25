import { PaginatedResult, Pagination } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { VideoType } from "../types/video";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { axios } from "@/lib/axios";

type videoRequest = {
  params?: Pagination;
};

export async function getVideos({ params }: videoRequest) {
  const res = await axios.get<PaginatedResult<VideoType>>("/video/datatable", {
    params,
  });

  return res.data.data;
}

type QueryFnType = typeof getVideos;

type UseVideosOptions = {
  params?: Pagination;
  config?: QueryConfig<QueryFnType>;
};

export function useVideos({ config, params }: UseVideosOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["videos", params],
    queryFn: () => getVideos({ params }),
  });
}
