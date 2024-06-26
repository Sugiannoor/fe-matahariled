import { Button, Select, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { CreateContract } from "@/features/contract/components/form/CreateContract";
import { TableContract } from "@/features/contract/components/table/TableContract";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { ContractQuery } from "../types/contract";
import { useLabelUser } from "../api/getUsersLabel";

export const DataContract = () => {
  const [query, setQuery] = useState<ContractQuery>({
    search: "",
    limit: undefined,
    user_id: undefined,
    product_id: undefined,
  });

  const [params] = useDebouncedValue(query, 200);
  const { data, isLoading } = useLabelUser();

  const convertedData = data?.map((item) => ({
    value: item.value.toString(), //
    label: item.label || "",
  }));

  const handleCreate = () => {
    modals.open({
      title: "Tambah Kontrak",
      size: "lg",
      children: <CreateContract />,
    });
  };
  return (
    <main>
      <h1 className="text-2xl lg:text-3xl text-gray-700 font-semibold">
        Data Kontrak
      </h1>
      <div className="mt-3 w-16 h-[0.15rem] bg-primary-800 rounded-lg"></div>
      <section className="my-4 flex justify-between">
        <Button onClick={() => handleCreate()}>Tambah Data</Button>
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
              placeholder="Filter User"
              value={query.user_id?.toString() ?? null}
              disabled={isLoading}
              onChange={(v) => {
                const userId = v ? parseInt(v, 10) : undefined;
                setQuery({ ...query, user_id: userId });
              }}
            />
          </div>
        </div>
      </section>

      <section className="mb-8 w-full">
        <TableContract {...params} />
      </section>
    </main>
  );
};
