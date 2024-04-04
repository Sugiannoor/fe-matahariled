import { useDashboard } from "@/features/dashboard/api/getDashboard"
import { Loader, Title } from "@mantine/core"

export const ListProfileWeb = () => {
    const {data} = useDashboard ()
  return (
    <section className="w-full">
        <Title className="text-center mb-2">PROFILE WEBSITE</Title>
        <div className="w-40 h-1 bg-black mx-auto rounded-xl"></div>
        <div className="grid grid-cols-4 gap-5 mt-10 w-[80%] mx-auto">
            <div className="p-4">
                <p>{data?.user_count !== undefined ? (
                    <span className="text-4xl">{`${data.user_count} +`}</span>
                ):(
                    <Loader type="dots"/>
                )}</p>
                <p className="text-2xl font-semibold">User</p>
            </div>
            <div className="p-4">
                <p>{data?.contract_count !== undefined ? (
                    <span className="text-4xl">{`${data.contract_count} +`}</span>
                ):(
                    <Loader type="dots"/>
                )}</p>
                <p className="text-2xl font-semibold">Kontrak</p>
            </div>
            <div className="p-4">
                <p>{data?.product_count !== undefined ? (
                    <span className="text-4xl">{`${data.product_count} +`}</span>
                ):(
                    <Loader type="dots"/>
                )}</p>
                <p className="text-2xl font-semibold">Produk</p>
            </div>
            <div className="p-4">
                <p>{data?.history_count !== undefined ? (
                    <span className="text-4xl">{`${data.history_count}`}</span>
                ):(
                    <Loader type="dots"/>
                )}</p>
                <p className="text-2xl font-semibold">Portofolio</p>
            </div>
        </div>

    </section>
  )
}
