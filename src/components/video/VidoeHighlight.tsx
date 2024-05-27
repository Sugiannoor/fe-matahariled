import { Button, Title } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons-react";

export const VidoeHighlight = () => {
  return (
    <div>
      <Title className="text-center my-4">ALBUM VIDEO</Title>
      <iframe
        className="mx-auto w-[75%]"
        height={513}
        src="https://youtu.be/RxDxi-9MuWc?si=fH4wSf0q4jKEasp5"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      />
      <Button
        rightSection={<IconPlayerPlay />}
        size="md"
        className="bg-p transition-all duration-300 mt-10 mx-auto block"
      >
        Selengkapnya
      </Button>
    </div>
  );
};
