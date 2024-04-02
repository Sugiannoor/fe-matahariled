import { Badge, Button,Card,Image,Pagination, Text, } from "@mantine/core"
import React, { useState } from "react";
import { HistoryQuery } from "../../types/history";
import { useHistories } from "../../api/getHistories";

type Props = HistoryQuery;
export const CardPortofolio:React.FC<Props> = (props) => {
    const [params, setParams] = useState<HistoryQuery>({
        page: 1,
        limit: 8,
        search: '',
        sort: 'desc',
        sort_by: 'created_at',
      });
      const { data, isLoading, isError } = useHistories({ params: { ...params, ...props } });
    if (isLoading || isError)
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={`skp_${i}`} className="w-full bg-white rounded-lg overflow-hidden">
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
        {data.data.map((items) => (
         <Card withBorder shadow="sm" radius="md">
         <Card.Section withBorder inheritPadding py="xs" className="text-end">
           <Badge>{items.category_name}</Badge>
         </Card.Section>
   
         <Text mt="sm" size="lg" className="font-bold text-2xl line-clamp-2">
           {items.title}
         </Text>
         <Text mt="sm" c="dimmed" size="md" className="line-clamp-2 flex flex-grow">
           {items.description}
         </Text>
   
         <Card.Section mt="sm">
           <Image src={`http://127.0.0.1:8000${items.path_file}`} className="aspect-video"/>
         </Card.Section>

         <Card.Section mt="sm" p="sm">
          <Button variant="outline" fullWidth>
            Detail
          </Button>
         </Card.Section>
       </Card>
        ))}
      </div>

      {data.data.length == 0 && (
        <div className="col-span-12 flex flex-col items-center justify-center py-24 mx-auto max-w-md">
          <p className="text-lg font-bold mb-4 text-center">
            Belum Ada Product</p>
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
  )
}
