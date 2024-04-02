import { Footer } from "@/components/footer/Footer"
import { HeroImageRight } from "@/components/hero/Hero"
import { DataCardPortofolio } from "@/features/history/pages/DataCardPortofolio"
import { DataCardProduct } from "@/features/product/pages/DataCardProduct"

export const Home = () => {
  return (
    <>
    <HeroImageRight/>
    <DataCardProduct/>
    <DataCardPortofolio/>
    <Footer/>
    </>

  )
}
