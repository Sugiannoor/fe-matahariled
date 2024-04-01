import { Button, Select, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { TableProduct } from "../components/table/TableProduct";
import { useLabelCategory } from "../api/getLabelCategory";
import { useState } from "react";
import { ProductQuery } from "../types/product";
import { useDebouncedValue } from "@mantine/hooks";

export const DataProduct = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<ProductQuery>({
    search: "",
    limit: undefined,
    category_id: undefined,
  });

  const [params] = useDebouncedValue(query, 200);
  const { data, isLoading } = useLabelCategory();

  const convertedData = data?.map((item) => ({
    value: item.value.toString(), //
    label: item.label || "",
  }));

  return (
    <main>
      <h1 className="text-2xl lg:text-3xl text-gray-700 font-semibold">
        Data Product
      </h1>
      <div className="mt-3 w-16 h-[0.15rem] bg-primary-800 rounded-lg"></div>
      <section className="my-4 flex justify-between">
        <Button onClick={() => navigate("create")}>Tambah Data</Button>
        <div className="space-x-4 flex items-center">
          <div className="max-w-xs w-full">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari "
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
          <div className="max-w-xs w-full">
            <Select
              data={convertedData}
              searchable
              placeholder="Kategori"
              value={query.category_id?.toString() ?? null}
              disabled={isLoading}
              onChange={(v) => {
                const categoryId = v ? parseInt(v, 10) : undefined;
                setQuery({ ...query, category_id: categoryId });
              }}
            />
          </div>
        </div>
      </section>
      <section className="mb-8 w-full">
        <TableProduct {...params} />
      </section>
    </main>
  );
};
