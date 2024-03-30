import { Button, FileInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist, IconX} from "@tabler/icons-react";
import { ComplaintDTO } from "../../types/complaint";

export const CreateUser = () => {
  const form = useForm<ComplaintDTO>({
    initialValues: {
      contract_id: 0,
      title: "",
      description: "",
      status: "Baru",
      attachment: undefined
    },
  });
  return (
    <form onSubmit={form.onSubmit((v)=> console.log(v))}>
        <TextInput
          label="Judul Keluhan"
          placeholder="Ex. Videotron Tidak Berfungsi"
          required
          {...form.getInputProps("title")}
        />
        <TextInput
          label="Deskripsi Keluhan"
          placeholder="Ex. Budi123"
          required
          {...form.getInputProps("description")}
        />
        <FileInput
          label="Lampiran"
          mt='md'
          placeholder="Lampiran Jika Ada"
          {...form.getInputProps("attachment")}
        />
      <div className="flex justify-end gap-2">
        <Button mt="md" type="submit" leftSection={<IconChecklist/>}>
          Simpan
        </Button>
        <Button mt="md"leftSection={<IconX/>}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
