import {TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { TableComplaintUser } from "../components/table/TableComplaintUser";


export const DataComplaintUser = () => {
  return (
    <main>
      <h1 className="text-2xl lg:text-3xl text-gray-700 font-semibold">Data History</h1>
      <div className="mt-3 w-16 h-[0.15rem] bg-primary-800 rounded-lg"></div>
      <section className="my-4 flex justify-end">
        <div className="space-x-4 flex items-center">
          <div className="max-w-xs w-full">
            <TextInput
              leftSection={<IconSearch size={16} />}
              placeholder="Cari "
            />
          </div>
        </div>
      </section>

      <section className="mb-8 w-full">
        <TableComplaintUser/>
      </section>
    </main>
  );
};
