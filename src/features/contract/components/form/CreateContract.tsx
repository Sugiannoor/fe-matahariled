import { Button, Select, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist } from "@tabler/icons-react";

export const CreateContract = () => {
  const form = useForm({
    initialValues: {
      product_id: 0,
      customer_id: 0,
      title: "",
      description: "",
      start_date: "",
      end_date: "",
    },
  });
  return (
    <form onSubmit={form.onSubmit((v) => console.log(v))}>
      <TextInput
        label="Judul Kontral"
        placeholder="Ex. Kontrak Videotron"
        required
        {...form.getInputProps("title")}
      />
      <div className="grid grid-cols-2 gap-5">
        <Select
          searchable
          label="Pilih Customer"
          mt="md"
          placeholder="Pilih Customer"
          required
          data={["Sugi", "Alfi", "Pita"]}
          {...form.getInputProps("customer_id")}
        />
        <Select
          searchable
          label="Pilih Product"
          mt="md"
          placeholder="Pilih Product"
          required
          data={["Sugi", "Alfi", "Pita"]}
          {...form.getInputProps("product_id")}
        />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-4">
        <TextInput
          label="Tanggal Kontrak"
          type="date"
          required
          {...form.getInputProps("start_date")}
        />
        <TextInput
          label="Tanggal Selesai"   
          type="date"
          required
          {...form.getInputProps("end_date")}
        />
      </div>
      <Textarea
        label="Deskirpsi Kontrak"
        placeholder="Pemasangan Videotron"
        mt="md"
        {...form.getInputProps("description")}
      />

      <div className="flex justify-end gap-2">
        <Button mt="md" type="submit" leftSection={<IconChecklist />}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
