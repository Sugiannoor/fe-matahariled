import { CardVideoList } from "@/features/videos/components/CardVideoList";
import { Title } from "@mantine/core";

export const Video = () => {
  return (
    <div className="p-10 mt-20">
      {/* <Title className="">Video</Title> */}
      <CardVideoList />
    </div>
  );
};
