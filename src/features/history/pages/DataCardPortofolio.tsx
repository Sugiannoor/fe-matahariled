import { useDebouncedValue } from "@mantine/hooks";
import { useState } from "react";
import { Select, TextInput } from "@mantine/core";
import { IconCategory, IconSearch } from "@tabler/icons-react";
import { useLabelProducts } from "@/features/contract/api/getProductsLabel";
import { HistoryQuery } from "../types/history";
import { CardPortofolio } from "../components/card/CardPortofolio";

export const DataCardPortofolio = () => {
  const [query, setQuery] = useState<HistoryQuery>({
    search: "",
    product_id: undefined,
    limit: 8,
  });
  const [params] = useDebouncedValue(query, 200);
  const { data, isLoading } = useLabelProducts();

  const convertedData = data?.map((item) => ({
    value: item.value.toString(), //
    label: item.label || "",
  }));
  return (
    <main>
      <section className="space-y-4 mb-4 p-5 lg:p-16">
        <div className="space-x-4 flex items-center">
          <div className="max-w-xs w-full">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari Konten"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
          <div className="max-w-xs">
            <Select
              leftSection={<IconCategory size={16} />}
              placeholder="Pilih Produk"
              data={convertedData}
              value={query.product_id?.toString()}
              disabled={isLoading}
              onChange={(v) => {
                const productId = v ? parseInt(v, 10) : undefined;
                setQuery({ ...query, product_id: productId });
              }}
              clearable
            />
          </div>
        </div>
        <CardPortofolio {...params} />
      </section>
    </main>
  );
};
