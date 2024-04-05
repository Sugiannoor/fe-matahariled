import { CarauselBestProduct } from "@/components/carausel/CarouselBestProduct"
import { HeroProductPage } from "@/components/hero/HeroProductPage"
import { DataCardProduct } from "@/features/product/pages/DataCardProduct"

export const Product = () => {
  return (
    <main>
        {/* <CarauselBestProduct/> */}
        <HeroProductPage/>
        <div className="text-xl lg:text-4xl mt-10    font-bold text-center">PRODUK KAMI</div>
        <DataCardProduct/>
    </main>
  )
}
