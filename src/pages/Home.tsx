import { ListProfileWeb } from "@/components/about/ListProfileWeb";
import { ScrollToTop } from "@/components/affix/ScrollToTop";
import { CarauselProduct } from "@/components/carausel/CarauselProduct";
import { CarauselBestProduct } from "@/components/carausel/CarouselBestProduct";
import { Footer } from "@/components/footer/Footer";
import { HeroImageRight } from "@/components/hero/Hero";
import { HeroProdType, HeroProduct } from "@/components/hero/HeroProd";
import { OurProduct } from "@/components/hero/OurProduct";
import { VidoeHighlight } from "@/components/video/VidoeHighlight";
import { DataCardPortofolio } from "@/features/history/pages/DataCardPortofolio";
import { DataCardProduct } from "@/features/product/pages/DataCardProduct";

export const Home = () => {
  const HeroProducts: HeroProdType = {
    title: "Distributor dan Agen Produk Display",
    description:
      "Matahari Teknologi Jaya menjadi perusahaan terkemuka yang mengedepankan inovasi teknologi dengan memberi solusi dan nillai tambah bagi mitra bisnis dan masyarakat luas",
    src_image: "/loginImage.jpg",
  };
  return (
    <>
      <HeroImageRight />
      <OurProduct />
      <DataCardProduct/>
      <HeroProduct {...HeroProducts} />
      <CarauselProduct />
      <VidoeHighlight/>
      {/* <ListProfileWeb /> */}
      {/* <DataCardPortofolio/> */}
      <Footer />
      <ScrollToTop />
    </>
  );
};
