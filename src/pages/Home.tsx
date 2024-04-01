import { Footer } from "@/components/footer/Footer"
import { HeroImageRight } from "@/components/hero/Hero"
import { ActionsGrid } from "@/components/service/ActionGrid"
import { DataCardProduct } from "@/features/product/pages/DataCardProduct"

export const Home = () => {
  return (
    <>
    <HeroImageRight/>
    <DataCardProduct/>
    <Footer/>
    </>

  )
}
