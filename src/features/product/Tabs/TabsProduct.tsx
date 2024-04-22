import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconPlayerPlay, IconSettings} from '@tabler/icons-react';
import { CardGradient } from '../components/card/CardGradient';

type paramsTabs = {
    description ?: string 
}
export function TabsProduct({description}: paramsTabs) {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="gallery">
      <Tabs.List className='mb-10'>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="spesifikasi" leftSection={<IconSettings style={iconStyle} />}>
            Spesifikasi
        </Tabs.Tab>
        <Tabs.Tab value="video" leftSection={<IconPlayerPlay style={iconStyle} />}>
            Video
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="spesifikasi">
          <CardGradient description={description} />
      </Tabs.Panel>
      <Tabs.Panel value="video">
          Video
      </Tabs.Panel>
    </Tabs>
  );
}