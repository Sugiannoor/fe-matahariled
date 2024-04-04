import { Button, Text, Title } from "@mantine/core";
import { IconColorSwatch, IconCube, IconLibrary, IconLibraryPlus, IconTemplate, IconTerminal } from "@tabler/icons-react";

export const OurProduct = () => {
  return (
    <div className="w-[75%] mx-auto py-20">
      <Title className="text-2xl lg:text-5xl text-center">PRODUK KAMI</Title>
      <Text className="text-md lg:text-lg my-5 text-center w-[70%] mx-auto">
        Berikut ini adalah pilihan beberapa jenis produk kami saat ini yang siap
        diimplementasikan di berbagai jenis industri
      </Text>
      <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-red-100 text-red-600 inline-block">
            <IconColorSwatch size={50} />
          </div>
          <h2 className="font-semibold text-lg text-gray-600">DIgital Signage</h2>
        </div>
        <div className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600 inline-block">
              <IconTerminal size={50} />
          </div>
          <h2 className="font-semibold text-lg text-gray-600">Controller</h2>
          <div className="mt-1">
        
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-teal-100 text-teal-600 inline-block">
                <IconCube size={50} />
          </div>
          <h2 className="font-semibold text-lg text-gray-600">Video Wall</h2>
          <div className="mt-1">
            
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600 inline-block">
            <IconLibraryPlus size={50} />
          </div>
          <h2 className="font-semibold text-lg text-gray-600">Jumlah Portofolio</h2>
        </div>
        <div className="bg-gray-50 rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600 inline-block">
            <IconTemplate size={50}/>
          </div>
          <h2 className="font-semibold text-lg text-gray-600">Easy Board</h2>
        </div>
      </div>
      </div>
      <Button color="yellow" size="lg" className="bg-[#FFBC07] transition-all duration-300 mt-10 mx-auto block">
        Selengkapnya
      </Button>
    </div>
  );
};
