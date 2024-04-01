import {
  Button,
  MultiSelect,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist } from "@tabler/icons-react";
import { useLabelUser } from "../../api/getUsersLabel";
import { useLabelProducts } from "../../api/getProductsLabel";
import { useCreateContract } from "../../api/createContract";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";

export const CreateContract = () => {
  const form = useForm({
    initialValues: {
      product_ids: [],
      user_id: "",
      title: "",
      description: "",
      start_date: "",
      end_date: "",
    },
  });
  const { data: products, isLoading: productsLoading } = useLabelProducts();
  const { data: users, isLoading: usersLoading } = useLabelUser();
  const convertedUser = users?.map((item) => ({
    value: item.value.toString(), //
    label: item.label || "",
  }));
  const convertedProduct = products?.map((item) => ({
    value: item.value.toString(), //
    label: item.label || "",
  }));
  const {mutateAsync, isLoading} = useCreateContract()
  const handleSubmit = form.onSubmit(async (values) => {
    const userId = parseInt(values.user_id);
    const productIds = values.product_ids.map((id: string) => parseInt(id));
  

    await mutateAsync(
      {
        data: {
          ...values,
          user_id: userId, // Menggunakan user_id yang telah diubah menjadi angka
          product_ids: productIds, // Menggunakan product_ids yang telah diubah menjadi angka,
      }},
      {
        onSuccess: () => {
          notifications.show({
            color: "green",
            message: "Kontrak berhasil dibuat",
          });
          modals.closeAll()
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: "red",
            message: "Kontrak gagal dibuat",
          });
        },
      }
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Judul Kontral"
        placeholder="Ex. Kontrak Videotron"
        required
        {...form.getInputProps("title")}
      />
      <Select
        searchable
        label="Pilih Customer"
        mt="md"
        placeholder="Pilih Customer"
        required
        data={convertedUser}
        {...form.getInputProps("user_id")}
        disabled={usersLoading}
      />
      <MultiSelect
        searchable
        label="Pilih Product"
        mt="md"
        placeholder="Pilih Product"
        required
        data={convertedProduct}
        disabled={productsLoading}
        {...form.getInputProps("product_ids")}
      />
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
        <Button disabled={isLoading} mt="md" type="submit" leftSection={<IconChecklist />}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
