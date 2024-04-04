import { Carousel } from "@mantine/carousel";
import classes from "./Carausel.module.css";
import { Button, Center } from "@mantine/core";

export function CarauselProduct() {
  return (
    <Carousel
      withIndicators
      height="50vh"
      controlSize={40}
      className="bg-gray-50"
      classNames={classes}
      loop
    >
      <Carousel.Slide className="flex flex-col">
        <Center className="justify-center my-auto flex-col">
            <img src="/matahariled.png" alt="matahariled logo" className="mb-4"/>
          <p className="text-2xl lg:text-5xl font-bold text-[#238BE6]">Matahari LED</p>
          <p className="text-md text-gray-400 mt-2">
            Persiapkan dirimu untuk petualangan baru!
          </p>
          <Button className="bg-[#238BE6] hover:bg-[#238be6ec] text-white font-bold py-2 px-4 rounded mt-4">
            Mulai Sekarang
          </Button>
        </Center>
      </Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  );
}
