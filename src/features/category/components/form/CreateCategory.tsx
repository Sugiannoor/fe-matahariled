import { Button, MultiSelect, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useLabelTag } from "../../api/getLabelTags";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";
import { useCreateCategory } from "../../api/createCategory";
import { IconChecklist } from "@tabler/icons-react";

export const CreateCategory = () => {
  const { data, isLoading } = useLabelTag();
  const { mutateAsync } = useCreateCategory();

  const form = useForm({
    initialValues: {
      category: "",
      tag_ids: [],
    },
  });

  const convertedLabel = data?.map((item) => ({
    value: item.value.toString(),
    label: item.label,
  }));

  const handleSubmit = form.onSubmit(async (values) => {
    const tag_ids = values.tag_ids.map((id: string) => parseInt(id));

    await mutateAsync(
      {
        data: {
          ...values,
          tag_ids
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            color: "green",
            message: "Category berhasil dibuat",
          });
          modals.closeAll();
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: "red",
            message: "Category gagal dibuat",
          });
        },
      }
    );
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Nama Product"
          placeholder="Ex. Videotron"
          required
          {...form.getInputProps("category")}
        />
        <MultiSelect
          searchable
          label="Pilih Tag"
          mt="md"
          placeholder="Pilih Product"
          data={convertedLabel}
          disabled={isLoading}
          {...form.getInputProps("tag_ids")}
        />

        <div className="flex justify-end gap-2">
          <Button
            mt="md"
            type="submit"
            loading={isLoading}
            leftSection={<IconChecklist />}
          >
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
};
