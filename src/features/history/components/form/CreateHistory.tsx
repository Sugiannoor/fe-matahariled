import { Button, FileInput, Select, Text, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist, IconPhoto } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useCreateHistory } from "../../api/createHistory";
import { useLabelProducts } from "@/features/contract/api/getProductsLabel";
import { modals } from "@mantine/modals";
import { useLabelUser } from "@/features/contract/api/getUsersLabel";

export const CreateHistory = () => {
  const {mutateAsync, isLoading } = useCreateHistory();
  const {data, isLoading: vLoading} = useLabelProducts()
  const {data:dataUser, isLoading: uLoading} = useLabelUser()

  const convertedLabel = data?.map ((item)=> ({
    value: item.value.toString(),
    label: item.label
  }))
  const convertedLabelUser = dataUser?.map ((item)=> ({
    value: item.value.toString(),
    label: item.label
  }))
  const form = useForm({
    initialValues: {
      title: '',
      start_date: '',
      end_date: '',
      description: '',
      video_title: '',
      embed: '',
      file: undefined,
      product_id: 0,
      user_id: 0,
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
          placeholder="Ex. Pem  asangan Videotron Event ..."
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
        <Select
          mt="md"
          searchable
          label="Pengguna"
          placeholder="Pilih Pengguna"
          required
          disabled={uLoading}
          data={convertedLabelUser}
          {...form.getInputProps("user_id")}
        />
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
        <Text size="sm" c="dimmed" my="md" className="underline text-center"> Optional Features</Text>
          <TextInput
            label="Judul Video"
            mb="md"
            placeholder="Ex. Cara Pemasangan ..."
            {...form.getInputProps("video_title")}
          />
        <Textarea
          label="Embed"
          placeholder="<iframe>...</iframe>"
          {...form.getInputProps("embed")}
        />
     
      <div className="flex justify-end gap-2">
        <Button mt="md" type="submit" leftSection={<IconChecklist/>} loading={isLoading}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
