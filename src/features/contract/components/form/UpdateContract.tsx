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
  import { notifications } from "@mantine/notifications";
  import { modals } from "@mantine/modals";
import { useUpdateContract } from "../../api/updateContract";
import { Contract} from "../../types/contract";
import React from "react";

type props = {
    contract: Contract
}
  
  export const UpdateContract: React.FC<props> = ({contract}) => {
    const form = useForm({
      initialValues: {
        contract_id: contract.contract_id,
        product_ids: contract.product.map((product) => String(product.id)),
        user_id: String(contract.user_id),
        title: contract.title,
        description: contract.description,
        start_date: contract.start_date,
        end_date: contract.end_date,
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
    const {mutateAsync, isLoading} = useUpdateContract()
    const handleSubmit = form.onSubmit(async (values) => {
      const user_id = parseInt(values.user_id);
      const product_ids = values.product_ids.map((id: string) => parseInt(id));
      await mutateAsync(

        {
          data: {
            ...values, 
            user_id,
            product_ids,
        }},
        {
          onSuccess: () => {
            notifications.show({
              color: "green",
              message: "Kontrak berhasil diperbaharui",
            });
            modals.closeAll()
          },
          onError: ({ response }) => {
            form.setErrors((response?.data as any).errors);
            notifications.show({
              color: "red",
              message: "Kontrak berhasil diperbaharui",
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
  