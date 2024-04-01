import { useDebouncedValue } from "@mantine/hooks";
import React, { useState } from "react";
import { ProductQuery } from "../types/product";
import { CardProduct } from "../components/card/CardProduct";
import { Select, TextInput } from "@mantine/core";
import { IconCategory, IconSearch } from "@tabler/icons-react";
import { useLabelCategory } from "../api/getLabelCategory";

export const DataCardProduct = () => {
  const [query, setQuery] = useState<ProductQuery>({
    search: "",
    category_id: undefined,
    limit: 10,
  });
  const [params] = useDebouncedValue(query, 200);
  const { data, isLoading } = useLabelCategory();

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
              placeholder="Cari Nama Product"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
          <div className="max-w-xs">
            <Select
              leftSection={<IconCategory size={16} />}
              placeholder="Pilih Kategory"
              data={convertedData}
              value={query.category_id?.toString()}
              disabled={isLoading}
              onChange={(v) => {
                const categoryId = v ? parseInt(v, 10) : undefined;
                setQuery({ ...query, category_id: categoryId });
              }}
              clearable
            />
          </div>
        </div>
        <CardProduct {...params} />
      </section>
    </main>
  );
};
