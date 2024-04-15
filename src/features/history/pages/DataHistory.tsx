import { Button, Select, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { HistoryQuery } from "../types/history";
import { useLabelProducts } from "@/features/contract/api/getProductsLabel";
import { TableHistory } from "../components/table/TableHistory";
import { modals } from "@mantine/modals";
import { CreateHistory } from "../components/form/CreateHistory";

export const DataHistory = () => {
  const [query, setQuery] = useState<HistoryQuery>({
    search: "",
    limit: undefined,
    product_id: undefined,
  });

  const handleCreate = () => {
    modals.open ({
      size: "lg",
      title: "Tambah Portofolio",
      children: <CreateHistory/>
    })
  }

  const [params] = useDebouncedValue(query, 200);
  const { data, isLoading } = useLabelProducts();

  const convertedData = data?.map((item) => ({
    value: item.value.toString(), //
    label: item.label || "",
  }));

  return (
    <main>
      <h1 className="text-2xl lg:text-3xl text-gray-700 font-semibold">
        Portofolio Kegiatan
      </h1>
      <div className="mt-3 w-16 h-[0.15rem] bg-primary-800 rounded-lg"></div>
      <section className="my-4 flex justify-between">
        <Button onClick={handleCreate}>Tambah Data</Button>
        <div className="space-x-4 flex items-center">
          <div className="max-w-xs w-full">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari Judul"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
          <div className="max-w-xs w-full">
            <Select
              data={convertedData}
              searchable
              placeholder="Produk"
              value={query.product_id?.toString() ?? null}
              disabled={isLoading}
              clearable
              onChange={(v) => {
                const product_id= v ? parseInt(v, 10) : undefined;
                setQuery({ ...query, product_id: product_id });
              }}
            />
          </div>
        </div>
      </section>
      <section className="mb-8 w-full">
        <TableHistory {...params} />
      </section>
    </main>
  );
};
