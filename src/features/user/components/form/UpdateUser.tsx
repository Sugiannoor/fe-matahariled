import { Button, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconChecklist } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { UserTableType } from "../../types/user";
import React from "react";
import { useUpdateUser } from "../../api/updateUser";
import { Authorization } from "@/features/auth/components/Authorization";

type props = {
    user: UserTableType
}
export const UpdateUser:React.FC<props> = ({user}) => {
  const { mutateAsync, isLoading } = useUpdateUser();
  const form = useForm({
    initialValues: {
      user_id: user.user_id,
      full_name: user.full_name,
      username: user.username,
      email: user.email,
      phone_number: user.phone_number,
      role: user.role,
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
            message: "Pengguna Berhasil diupdate",
          });
          modals.closeAll();
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: "red",
            message: "Pengguna Gagal diupdate",
          });
        },
      }
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-5">
        <TextInput
          label="Nama Lengkap"
          placeholder="Ex. Budi Kyle"
          required
          {...form.getInputProps("full_name")}
        />
        <TextInput
          label="Username"
          placeholder="Ex. Budi123"
          required
          {...form.getInputProps("username")}
        />
      </div>
      <TextInput
        label="Email"
        type="email"
        mt="md"
        placeholder="Ex. Budi@gmail.com"
        required
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Nomor Telphone"
        mt="md"
        placeholder="Ex. +62813 ... / 0813 ..."
        required
        {...form.getInputProps("phone_number")}
      />
      <Authorization role={["SuperAdmin"]}>
      <Select
        searchable
        label="Role"
        mt="md"
        placeholder="Pilih Role"
        required
        data={["Customer", "Admin", "Superadmin"]}
        {...form.getInputProps("role")}
        />
        </Authorization>

      <div className="flex justify-end gap-2">
        <Button mt="md" type="submit" loading={isLoading} leftSection={<IconChecklist />}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
