import { Button, FileInput, Select, Text, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist, IconPhoto } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useLabelProducts } from "@/features/contract/api/getProductsLabel";
import { modals } from "@mantine/modals";
import { HistoryDatatableType } from "../../types/history";
import React from "react";
import { Link } from "react-router-dom";
import { useUpdateHistory } from "../../api/updateHistory";
import { useLabelUser } from "@/features/contract/api/getUsersLabel";

type props = {
    history: HistoryDatatableType
}
export const UpdateHistory: React.FC<props> = ({history}) => {
  const {mutateAsync, isLoading } = useUpdateHistory();
  const {data, isLoading: vLoading} = useLabelProducts();
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
      title: history.title,
      description: history.description,
      start_date: history.start_date,
      end_date: history.end_date,
      file: undefined,
      product_id: String(history.product_id),
      history_id: history.history_id,
      user_id: String(history.user_id),
      video_title: history.video_title,
      embed: history.embed

    },
  });
  const handleSubmit = form.onSubmit(async (values) => {
    const product_id = Number(values.product_id)
    const user_id = Number(values.user_id)
    await mutateAsync(
      {
        data: {
          ...values,
          product_id,
          user_id
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            color: 'green',
            message: 'Portofolio Kegiatan berhasil diperbaharui',
          });
          modals.closeAll()
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: 'red',
            message: 'Portofolio gagal diperbaharui',
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
          label="Tanggal Kegiatan"
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
        searchable
        label="Pengguna"
        placeholder="Pilih Pengguna"
        required
        disabled={uLoading}
        data={convertedLabelUser}
        {...form.getInputProps("user_id")}
      />
      {history.path_file && (
        <Link to={`http://127.0.0.1:8000${history.path_file}`} target="_blank">
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
        my="xs"
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
