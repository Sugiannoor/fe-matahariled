import { Tiptap } from "@/components/tiptap/TipTap";
import { Button, FileInput, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist, IconPhoto } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useLabelCategory } from "../../api/getLabelCategory";
import { useUpdateProduct } from "../../api/updateProduct";
import { Product } from "../../types/product";
import React from "react";
import { modals } from "@mantine/modals";
import { Link } from "react-router-dom";

type props = {
    product: Product
}
export const UpdateProduct:React.FC<props> = ({product}) => {
  const {mutateAsync, isLoading } = useUpdateProduct();
  const {data, isLoading: cLoading} = useLabelCategory()

  const convertedLabel = data?.map ((item)=> ({
    value: item.value.toString(),
    label: item.label
  }))
  const form = useForm({
    initialValues: {
      product_id: product.product_id,
      name: product.name,
      description: product.description,
      file: undefined,
      category_id: String(product.category_id),
    },
  });
  const handleSubmit = form.onSubmit(async (values) => {
    const category_id = Number(values.category_id)
    await mutateAsync(
      {
        data: {
          ...values,
          category_id
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Produk berhasil diupdate',
          });
          modals.closeAll();
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
      {product.path_file && (
        <Link to={`http://127.0.0.1:8000${product.path_file}`} target="_blank">
            <div className="flex gap-1 mt-5">
            <IconPhoto color="gray"/>
            <span className="text-sm">
            Thumbnail Sebelumnya
            </span>
            </div>
        </Link>
      )}
      <FileInput
        label="Thumbnail"
        placeholder="Pilih Thumbnail"
        my="md"
        required
        accept="image/png, image/jpeg, image/webp"
        leftSection={<IconPhoto/>}
        {...form.getInputProps('file')}
      />
      <Tiptap 
      value={form.values['description']}
      onChange={(v)=> form.setFieldValue('description', v)}
      />
      <div className="flex justify-end gap-2">
        <Button mt="md" type="submit" leftSection={<IconChecklist/>} loading={isLoading}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
