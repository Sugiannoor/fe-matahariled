import { HeroProductPage } from "@/components/hero/HeroProductPage";
import { DataCardProductByCategory } from "@/features/product/pages/DataCardProductByCategory";

export const ProductByCategory = () => {
  return (
    <main>
      {/* <CarauselBestProduct/> */}
      <HeroProductPage />
      {/* <div className="text-xl lg:text-4xl mt-10 font-bold text-center">
        PRODUK KAMI
      </div> */}
      <DataCardProductByCategory />
    </main>
  );
};
