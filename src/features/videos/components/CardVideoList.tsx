import { Card, Button, Pagination, Title, Grid } from "@mantine/core";
import { VideoQuery } from "../types/video";
import { useState } from "react";
import { useVideos } from "../api/getVideos";

type props = {
  toolbar?: React.ReactNode;
} & VideoQuery;

export const CardVideoList: React.FC<props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState<VideoQuery>({
    page: 1,
    limit: 10,
    search: "",
    sort: "desc",
    sort_by: "created_at",
  });
  const { data, isLoading, isError } = useVideos({
    params: { ...params, ...props },
  });
  if (isLoading || isError)
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={`skp_${i}`}
              className="w-full bg-white rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-video bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 w-20 bg-gray-200 animate-pulse rounded-lg mt-1 mb-2"></div>
                <div className="bg-gray-200 animate-pulse h-5 w-full rounded-md mb-2"></div>
                <div className="bg-gray-200 animate-pulse h-5 w-1/2 rounded-md mb-2"></div>

                <div className="h-4 w-12 bg-gray-200 rounded-md animate-pulse"></div>

                <div className="space-y-2 mt-2">
                  <div className="bg-gray-200 w-full h-7 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 ">
        {data.data?.map((list) => (
          <div
            key={list.video_id}
            className="max-w-[560px] bg-gray-200"
            dangerouslySetInnerHTML={{ __html: list?.embed }}
          />
        ))}
      </div>

      {data.data.length == 0 && (
        <div className="col-span-12 flex flex-col items-center justify-center py-24 mx-auto max-w-md">
          <p className="text-lg font-bold mb-4 text-center">Belum Ada Video</p>
        </div>
      )}

      <div className="my-6">
        <Pagination
          total={data.last_page}
          value={data.current_page}
          onChange={(page) => setParams({ ...params, page })}
          withEdges
        />
      </div>
    </>
  );
};
