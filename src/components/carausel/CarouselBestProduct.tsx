import { Carousel } from "@mantine/carousel";
import { Badge, Image, Text, Title } from "@mantine/core";

const content = [
  {
    url: "/loginImage.jpg",
    title: "LED SCREEN P10 OUTDOOR",
    description:
      "Pemanfaatan videotron outdoor dapat meningkatkan keuntungan perusahaan melalui keunggulan-keunggulannya seperti daya tarik visual yang tinggi",
  },
  {
    url: "/loginImage.jpg",
    title: "LED SCREEN P10 OUTDOOR",
    description:
      "Pemanfaatan videotron outdoor dapat meningkatkan keuntungan perusahaan melalui keunggulan-keunggulannya seperti daya tarik visual yang tinggi",
  },
];

export function CarauselBestProduct() {
  const slides = content.map((content, i) => (
    <Carousel.Slide key={i}>
      <div className="absolute top-32 left-28">
        <Badge variant="outline" color="white">PRODUK UNGGULAN</Badge>
        <Title className="text-2xl lg:text-5xl text-[#FFBC07]">{content.title}</Title>
        <Text className="w-[50%] text-white mt-5">{content.description}</Text>
      </div>
      <Image src={content.url} className="aspect-video max-h-[75vh]" />
    </Carousel.Slide>
  ));

  return (
  <>
  <Carousel withIndicators className="max-h-[75vh]" loop controlSize={40}>{slides}</Carousel>;
  </>)
}
