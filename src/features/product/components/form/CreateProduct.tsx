import { Tiptap } from "@/components/tiptap/TipTap";
import { Button, FileInput, Select, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist, IconPhoto } from "@tabler/icons-react";
import { useCreateProduct } from "../../api/createProduct";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { useLabelCategory } from "../../api/getLabelCategory";

export const CreateProduct = () => {
  const navigate = useNavigate ()
  const {mutateAsync, isLoading } = useCreateProduct();
  const {data, isLoading: cLoading} = useLabelCategory()

  const convertedLabel = data?.map ((item)=> ({
    value: item.value.toString(),
    label: item.label
  }))
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      specification: '',
      file: undefined,
      category_id: 0,
      gallery: [],
    },
  });
  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync(
      {
        data: {
          ...values,
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Produk berhasil dibuat',
          });
          navigate("/admin/product")
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Produk gagal dibuat',
          });
        },
      }
    );
  });
  return (
    <form onSubmit={handleSubmit}>
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
          disabled={cLoading}
          data={convertedLabel}
          {...form.getInputProps("category_id")}
        />
      </div>
      <FileInput
        label="Thumbnail"
        placeholder="Pilih Thumbnail"
        my="md"
        required
        accept="image/png, image/jpeg, image/webp"
        leftSection={<IconPhoto/>}
        {...form.getInputProps('file')}
      />
      <FileInput
        label="Gallery"
        placeholder="Pilih Photo"
        my="md"
        required
        accept="image/png, image/jpeg, image/webp"
        multiple
        leftSection={<IconPhoto/>}
        {...form.getInputProps('gallery')}
      />
        <Textarea
          label="Deskripsi"
          mb="md"
          placeholder="Ex. Videotron dengan LED Kualitas Tinggi"
          required
          {...form.getInputProps("description")}
        />
      <Tiptap 
      value={form.values['specification']}
      onChange={(v)=> form.setFieldValue('specification', v)}
      />
      <div className="flex justify-end gap-2">
        <Button mt="md" type="submit" leftSection={<IconChecklist/>} loading={isLoading}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
