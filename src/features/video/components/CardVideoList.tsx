import { Card, Badge, Button, Title,} from '@mantine/core';
import { VideoType } from '../types/video';
    
type params = {
    data?: VideoType
}[]
export function CardVideoList(data: params) {
  return (
<>
    <Title>Video</Title>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((list) => (
          <Card
            key={list.data?.video_id}
            className="w-full bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
          >
            <div className="w-full aspect-video bg-gray-200 relative">
              <img
                src={`http://127.0.0.1:8000${list.data?.embed}`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "default.jpeg";
                }}
              />
            </div>
            <div className="mt-4 flex-grow">
              <Badge bg='orange'>{list.data?.history}</Badge>
              <h2 className="line-clamp-2 text-xl font-bold my-1">
                {list.data?.title}
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