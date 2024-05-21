import { Tabs, rem } from "@mantine/core";
import { IconPlayerPlay, IconSettings, IconVideo } from "@tabler/icons-react";

type params = {
  embed?: string;
};

export function TabsHistory({ embed }: params) {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="video">
      <Tabs.List className="mb-10">
        <Tabs.Tab value="video" leftSection={<IconVideo style={iconStyle} />}>
          Video
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

      <Tabs.Panel value="video">
        {embed == undefined ? (
          <div>Video Tidak Tersedia</div>
        ) : (
          <div
            className="max-w-[560px] bg-gray-200"
            dangerouslySetInnerHTML={{ __html: embed }}
          />
        )}
      </Tabs.Panel>
    </Tabs>
  );
}
