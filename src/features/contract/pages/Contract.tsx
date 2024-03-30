import { Button, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { CreateContract } from "@/features/contract/components/form/CreateContract";
import { TableContract } from "@/features/contract/components/table/TableContract";


export const DataContract = () => {

  const handleCreate = () => {
    modals.open ({
      title: "Tambah Kontrak",
      size: 'lg',
      children: (
        <CreateContract/>
      )
    })
  }
  return (
    <main>
      <h1 className="text-2xl lg:text-3xl text-gray-700 font-semibold">Data Kontrak</h1>
      <div className="mt-3 w-16 h-[0.15rem] bg-primary-800 rounded-lg"></div>
      <section className="my-4 flex justify-between">
        <Button onClick={()=> handleCreate()}>
          Tambah Data
        </Button>
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
        <TableContract/>
      </section>
    </main>
  );
};
