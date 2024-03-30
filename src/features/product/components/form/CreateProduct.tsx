import { Tiptap } from "@/components/tiptap/TipTap";
import { Button, FileInput, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist, IconPhoto } from "@tabler/icons-react";

export const CreateProduct = () => {
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      thumbnail: undefined,
      category: '',
    },
  });
  return (
    <form onSubmit={form.onSubmit((v)=> console.log(v))}>
      <div className="grid grid-cols-2 gap-5">
        <TextInput
          label="Nama Product"
          placeholder="Ex. Videotron"
          required
          {...form.getInputProps("name")}
        />
        <Select
          searchable
          label="Kategori"
          placeholder="Pilih Kategori"
          required
          data={["CCTV", "Videotron"]}
          {...form.getInputProps("category")}
        />
      </div>
      <FileInput
        label="Thumbnail"
        placeholder="Pilih Thumbnail"
        my="md"
        accept="image/png, image/jpeg, image/webp"
        leftSection={<IconPhoto/>}
        {...form.getInputProps('thumbnail')}
      />
      <Tiptap 
      value={form.values['description']}
      onChange={(v)=> form.setFieldValue('description', v)}
      />
      <div className="flex justify-end gap-2">
        <Button mt="md" type="submit" leftSection={<IconChecklist/>}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
