import { Badge, Button, Card, Pagination } from "@mantine/core";
import { ProductQuery } from "../../types/product";
import React, { useState } from "react";
import { useProducts } from "../../api/getProducts";

type Props = ProductQuery;
export const CardProduct: React.FC<Props> = (props) => {
  const [params, setParams] = useState<ProductQuery>({
    page: 1,
    limit: 8,
    search: "",
    sort: "desc",
    sort_by: "created_at",
  });
  const { data, isLoading, isError } = useProducts({
    params: { ...params, ...props },
  });
  const convertHtmlToPlainText = (htmlString: string) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlString, 'text/html');
    return parsedHtml.body.textContent;
  };

  const products = data?.data.map((product) => ({
    ...product,
    description: convertHtmlToPlainText(product.description),
  }));
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
        {products?.map((product) => (
          <Card
            key={product.product_id}
            className="w-full bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
          >
            <div className="w-full aspect-video bg-gray-200 relative">
              <img
                src={`http://127.0.0.1:8000${product.path_file}`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "default.jpeg";
                }}
              />
            </div>
            <div className="mt-4 flex-grow">
              <Badge>{product.category}</Badge>
              <h2 className="line-clamp-2 text-xl font-bold my-1">
                {product.name}
              </h2>
              <p className="text-md mt-4 text-gray-600 line-clamp-2">
                {product.description}
              </p>
            </div>
            <Button variant="outline" color="blue" mt="md">
              Detail
            </Button>
          </Card>
        ))}
      </div>

      {data.data.length == 0 && (
        <div className="col-span-12 flex flex-col items-center justify-center py-24 mx-auto max-w-md">
          <p className="text-lg font-bold mb-4 text-center">
            Belum Ada Product
          </p>
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

    //   pagination dll
  );
};
