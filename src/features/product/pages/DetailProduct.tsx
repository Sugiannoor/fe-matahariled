import { useParams } from "react-router-dom";
import { useProduct } from "../api/getProductById";
import { Badge, Card, Chip, Group, Image, Text } from "@mantine/core";
import { CardGradient } from "../components/card/CardGradient";

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
    <div className="p-32">
      <Card withBorder radius="md" p={0} className="mb-5">
        <Group wrap="nowrap" gap={20}>
          <Image
            src={`http://127.0.0.1:8000${data.path_file}`}
            className="aspect-video max-h-72 w-full"
          />
          <div>
            <Badge
              tt="uppercase"
              fw={700}
              size="xs"
              className="text-sm p-3 bg-orange-400"
            >
              {data.category}
            </Badge>
            <Text mt="xs" mb="md" fw={600} className="text-4xl">
              {data.title}
            </Text>
          </div>
        </Group>
      </Card>
      <CardGradient description={data.description} />
    </div>
  );
};

export default DetailProduct;
