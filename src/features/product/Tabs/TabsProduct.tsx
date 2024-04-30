import {
  Badge,
  Button,
  Card,
  Image,
  Loader,
  Tabs,
  Text,
  rem,
} from "@mantine/core";
import { IconPhoto, IconPlayerPlay, IconSettings } from "@tabler/icons-react";
import { CardGradient } from "../components/card/CardGradient";
import { GalleryProduct } from "../components/gallery/GalleryProduct";
import { useHistoryProduct } from "../api/getHistoryByIdProduct";

type paramsTabs = {
  description?: string;
  ProductId: number | string;
};

export function TabsProduct({ description, ProductId }: paramsTabs) {
  const iconStyle = { width: rem(12), height: rem(12) };
  const { data, isError, isLoading } = useHistoryProduct({ ProductId });

  if (isLoading || isError) {
    return <Loader />;
  }

  return (
    <Tabs defaultValue="gallery">
      <Tabs.List className="mb-10">
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab
          value="spesifikasi"
          leftSection={<IconSettings style={iconStyle} />}
        >
          Spesifikasi
        </Tabs.Tab>
        <Tabs.Tab
          value="portofolio"
          leftSection={<IconPlayerPlay style={iconStyle} />}
        >
          Portofolio
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        <GalleryProduct />
      </Tabs.Panel>

      <Tabs.Panel value="spesifikasi">
        <CardGradient description={description} />
      </Tabs.Panel>
      <Tabs.Panel value="portofolio">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((items) => (
            <Card withBorder shadow="sm" radius="md">
              <Card.Section
                withBorder
                inheritPadding
                py="xs"
                className="text-end"
              >
                <Badge>{items.category}</Badge>
              </Card.Section>

              <Text
                mt="sm"
                size="lg"
                className="font-bold text-2xl line-clamp-2"
              >
                {items.title}
              </Text>
              <Text
                mt="sm"
                c="dimmed"
                size="md"
                className="line-clamp-2 flex flex-grow"
              >
                {items.description}
              </Text>

              <Card.Section mt="sm">
                <Image
                  src={import.meta.env.VITE_API_URL + `${items.path_file}`}
                  className="aspect-video"
                />
              </Card.Section>

              <Card.Section mt="sm" p="sm">
                <Button variant="outline" fullWidth>
                  Detail
                </Button>
              </Card.Section>
            </Card>
          ))}
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}
