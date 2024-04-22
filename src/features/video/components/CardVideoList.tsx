import { Card, Badge, Button} from '@mantine/core';
import { VideoType } from '../types/video';
    
type params = {
    data?: VideoType[]
}

export function CardVideoList({data}: params) {
  
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
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((list) => (
          <Card
            key={list?.video_id}
            className="w-full bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
          >
            <div className="w-full aspect-video bg-gray-200 relative">
              <img
                src={`http://127.0.0.1:8000${list?.embed}`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "default.jpeg";
                }}
              />
            </div>
            <div className="mt-4 flex-grow">
              <Badge bg='orange'>{list?.history}</Badge>
              <h2 className="line-clamp-2 text-xl font-bold my-1">
                {list?.title}
              </h2>
            </div>
            <Button
              variant="outline"
              color="black"
              mt="md"
            >
              Detail
            </Button>
          </Card>
        ))}
      </div>

      {data?.length == 0 && (
        <div className="col-span-12 flex flex-col items-center justify-center py-24 mx-auto max-w-md">
          <p className="text-lg font-bold mb-4 text-center">
            Belum Ada Product
          </p>
        </div>
      )}
      </>
  );
}