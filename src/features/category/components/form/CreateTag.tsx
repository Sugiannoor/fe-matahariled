import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCreateTag } from "../../api/createTag";
import { notifications } from "@mantine/notifications";
import { IconChecklist } from "@tabler/icons-react";
import { modals } from "@mantine/modals";

export const CreateTag = () => {
  const { mutateAsync, isLoading } = useCreateTag();

  const form = useForm({
    initialValues: {
      tag: "",
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
            color: "green",
            message: "Tag berhasil dibuat",
          });
          modals.closeAll();
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: "red",
            message: "Tag gagal dibuat",
          });
        },
      }
    );
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Nama Tag"
          placeholder="Ex. Video Tron Indoor"
          required
          {...form.getInputProps("tag")}
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
