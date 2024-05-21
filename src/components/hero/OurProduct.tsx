import { Button, Text, Title } from "@mantine/core";
import {
  IconArtboard,
  IconBrandAndroid,
  IconBuilding,
  IconClockBolt,
  IconDots,
  IconDualScreen,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const OurProduct = () => {
  return (
    <div className="w-[75%] mx-auto py-20">
      <Title className="text-2xl lg:text-5xl text-center">PRODUK KAMI</Title>
      <Text className="text-md lg:text-lg my-5 text-center w-[70%] mx-auto">
        Berikut ini adalah pilihan beberapa jenis produk kami saat ini yang siap
        diimplementasikan di berbagai jenis industri
      </Text>
      <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
          <Link
            to={"/product/category/1"}
            className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200"
          >
            <div className="p-1.5 rounded-lg text-center bg-red-100 text-red-600">
              <IconArtboard size={50} className="mx-auto" />
            </div>
            <h2 className="font-semibold mt-2 text-xl text-center text-gray-600">
              LED & LCD Display
            </h2>
          </Link>
          <Link
            to={"/product/category/2"}
            className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200"
          >
            <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600">
              <IconClockBolt size={50} className="mx-auto" />
            </div>
            <h2 className="font-semibold mt-2 text-xl text-center text-gray-600">
              Videotron Rental
            </h2>
            <div className="mt-1"></div>
          </Link>
          <Link
            to={"/product/category/3"}
            className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200"
          >
            <div className="p-1.5 rounded-lg bg-teal-100 text-teal-600">
              <IconDualScreen size={50} className="mx-auto" />
            </div>
            <h2 className="font-semibold mt-2 text-xl text-center text-gray-600">
              Interactive Display
            </h2>
            <div className="mt-1"></div>
          </Link>
          <Link
            to={"/product/category/4"}
            className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200"
          >
            <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
              <IconBuilding size={50} className="mx-auto" />
            </div>
            <h2 className="font-semibold mt-2 text-xl text-gray-600 text-center">
              Lighting Building
            </h2>
          </Link>
          <Link
            to={"/product/category/5"}
            className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200"
          >
            <div className="p-1.5 rounded-lg bg-sky-100 text-sky-600">
              <IconBrandAndroid size={50} className="mx-auto" />
            </div>
            <h2 className="font-semibold mt-2 text-xl text-center text-gray-600">
              Software
            </h2>
          </Link>
          <Link
            to={"/product/category/6"}
            className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200"
          >
            <div className="p-1.5 rounded-lg bg-gray-100 text-gray-600">
              <IconDots size={50} className="mx-auto" />
            </div>
            <h2 className="font-semibold mt-2 text-xl text-center text-gray-600">
              Lainnya
            </h2>
          </Link>
        </div>
      </div>
      <Link to={"product"}>
      <Button
        size="lg"
        className="bg-p transition-all duration-300 mt-10 mx-auto block"
        >
        Selengkapnya
      </Button>
        </Link>
    </div>
  );
};
