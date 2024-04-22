import { useParams } from "react-router-dom";
import { useProduct } from "../api/getProductById";
import { Badge, Card, Chip, Group, Image, Text } from "@mantine/core";
import { CardGradient } from "../components/card/CardGradient";
import { TabsProduct } from "../Tabs/TabsProduct";

const DetailProduct = () => {
  const { id } = useParams();
  const ProductId = Number(id);
  const { data, isLoading, isError } = useProduct({ ProductId });
  if (isLoading || isError)
    return (
      <div>
        <div className="w-full bg-white rounded-lg overflow-hidden">
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
      </div>
    );
  return (
    <div className="lg:p-32 p-4 pt-32">
      <Card withBorder radius="md" p={0} className="mb-5">
        <div className="flex flex-col lg:flex-row gap-5">
          <Image
            src={`http://127.0.0.1:8000${data.path_file}`}
            className="aspect-video max-h-72 w-full"
          />
          <div className="p-10">
            <div>
              <Badge tt="uppercase" fw={700} bg="orange" size="md">
                {data.category}
              </Badge>
              <h2 className="text-2xl font-bold my-1">{data.title}</h2>
            </div>
              <Text c="dimmed" fw={400} size="sm" mt="md">{data.description}</Text>
          </div>
        </div>
      </Card>
      <TabsProduct description={data.specification} />
    </div>
  );
};

export default DetailProduct;
