import { Button, FileInput, Select, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist, IconPhoto } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useCreateHistory } from "../../api/createHistory";
import { useLabelProducts } from "@/features/contract/api/getProductsLabel";
import { modals } from "@mantine/modals";

export const CreateHistory = () => {
  const {mutateAsync, isLoading } = useCreateHistory();
  const {data, isLoading: vLoading} = useLabelProducts()

  const convertedLabel = data?.map ((item)=> ({
    value: item.value.toString(),
    label: item.label
  }))
  const form = useForm({
    initialValues: {
      title: '',
      start_date: '',
      end_date: '',
      description: '',
      file: undefined,
      product_id: 0,
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
            message: 'Portofolio Kegiatan berhasil dibuat',
          });
          modals.closeAll()
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Portofolio gagal dibuat',
          });
        },
      }
    );
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-5">
        <TextInput
          label="Judul Portofolio"
          placeholder="Ex. Pemasangan Videotron Event ..."
          required
          {...form.getInputProps("title")}
        />
        <Select
          searchable
          label="Produk"
          placeholder="Pilih Product"
          required
          disabled={vLoading}
          data={convertedLabel}
          {...form.getInputProps("product_id")}
        />
        <TextInput
        type="date"
          label="Tanggal Pelaksanaan"
          required
          {...form.getInputProps("start_date")}
        />
        <TextInput
        type="date"
          label="Tanggal Selesai"
          required
          {...form.getInputProps("end_date")}
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
        <Textarea
          label="Deskripsi"
          placeholder="Ex. Pemasangan Videotron di ..."
          {...form.getInputProps("description")}
        />
     
      <div className="flex justify-end gap-2">
        <Button mt="md" type="submit" leftSection={<IconChecklist/>} loading={isLoading}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
