import { Button, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { TableUser } from "../components/table/TableUser";
import { modals } from "@mantine/modals";
import { CreateUser } from "../components/form/CreateUser";
import { useState } from "react";
import { UserQuery } from "../types/user";
import { useDebouncedValue } from "@mantine/hooks";

export const DataUser = () => {
  const [query, setQuery] = useState<UserQuery>({
    search: "",
    full_name: undefined,
    username: undefined,
  });
  const [params] = useDebouncedValue(query, 500);
  const handleCreate = () => {
    modals.open({
      title: "Tambah User",
      size: "lg",
      children: <CreateUser />,
    });
  };
  return (
    <main>
      <h1 className="text-2xl lg:text-3xl text-gray-700 font-semibold">
        Data User
      </h1>
      <div className="mt-3 w-16 h-[0.15rem] bg-primary-800 rounded-lg"></div>
      <Button onClick={() => handleCreate()} className="mb-5">
        Tambah
      </Button>
      <section className="space-y-4 mb-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari nama / username"
              value={query.search}
              onChange={(v) => setQuery({ ...query, search: v.target.value })}
            />
          </div>
        </div>
      </section>

      <section className="mb-8 w-full">
        <TableUser {...params} />
      </section>
    </main>
  );
};
