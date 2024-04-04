import { Button, Text, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

export type HeroProdType = {
  title: string;
  src_image: string;
  description?: string;
  button_link?: string;
};
export const HeroProduct: React.FC<HeroProdType> = ({
  title,
  description,
  src_image,
  button_link,
}) => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-auto lg:pt-10 bg-[#22272B]">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="aspect-square">
        <img src={src_image} alt="" className="object-cover h-full rounded-md" />
      </div>
      <div className="p-5 lg:p-32">
        <Title className="text-white text-3xl lg:text-5xl line  ">{title}</Title>
        <div className="mt-10 lg:mt-32">
          <Text className="line-clamp-5 text-gray-50 text-base lg:text-lg">{description}</Text>
          <Button className="mt-8 text-black bg-[#FFBC07] transition-all duration-300" size="lg" color="yellow" onClick={() => navigate(`/${button_link}`)}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </section>
  );
};
