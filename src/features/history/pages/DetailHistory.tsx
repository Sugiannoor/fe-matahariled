import { useParams } from "react-router-dom";
import { Badge, Card, Image, Loader, Text } from "@mantine/core";
import { useHistory } from "../api/getHistoryById";
import { TabsHistory } from "../components/TabsHistory";

const DetailHistory = () => {
  const { id } = useParams();
  const ProductId = Number(id);
  const { data, isLoading, isError } = useHistory({ ProductId });
  if (isLoading || isError)
    return (
      <div className="flex justify-center mt-72">
        <Loader type="dots" />
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
                {data.category_name}
              </Badge>
              <h2 className="text-2xl font-bold my-1">{data.title}</h2>
            </div>
            <Text c="dimmed" fw={400} size="sm" mt="md">
              {data.description}
            </Text>
          </div>
        </div>
      </Card>
      <TabsHistory embed={data.embed} />
    </div>
  );
};

export default DetailHistory;
