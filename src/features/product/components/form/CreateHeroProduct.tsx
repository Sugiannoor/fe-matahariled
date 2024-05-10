import { Button, FileInput,} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconChecklist, IconPhoto } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import React from "react";
import { modals } from "@mantine/modals";
import { useCreateHeroProduct } from "../../api/createHeroProduct";

type props = {
  productId: number;
};
export const CreateHero: React.FC<props> = ({ productId }) => {
  const { mutateAsync, isLoading } = useCreateHeroProduct();
  const form = useForm({
    initialValues: {
      product_id: productId,
      file: undefined,
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
            message: "Hero Image Berhasil Ditautkan",
          });
          modals.closeAll();
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: "red",
            message: "Hero Image Gagal di Tautkan",
          });
        },
      }
    );
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-5">
      <FileInput
        label="Thumbnail"
        placeholder="Pilih Hero Image"
        my="md"
        required
        accept="image/png, image/jpeg, image/webp"
        leftSection={<IconPhoto />}
        {...form.getInputProps("file")}
      />
      </div>
      <div className="flex justify-end gap-2">
        <Button
          mt="md"
          type="submit"
          leftSection={<IconChecklist />}
          loading={isLoading}
        >
          Simpan
        </Button>
      </div>
    </form>
  );
};
