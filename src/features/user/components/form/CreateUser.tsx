import {
  Button,
  FileInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconChecklist, IconPhoto } from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { useCreateUserForm } from "../../api/createUserForm";

export const CreateUser = () => {
  const { mutateAsync, isLoading } = useCreateUserForm();
  const form = useForm({
    initialValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
      phone_number: "",
      file: undefined,
      role: "",
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
            message: "Pengguna Berhasil dibuat",
          });
          modals.closeAll();
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
          notifications.show({
            color: "red",
            message: "Pengguna Gagal dibuat",
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
      <PasswordInput
        label="Password"
        type="password"
        placeholder="Password User"
        mt="md"
        required
        {...form.getInputProps("password")}
      />
      <TextInput
        label="Nomor Telphone"
        mt="md"
        placeholder="Ex. +62813 ... / 0813 ..."
        required
        {...form.getInputProps("phone_number")}
      />
      <Select
        searchable
        label="Role"
        mt="md"
        placeholder="Pilih Role"
        data={["Customer", "Admin", "Superadmin"]}
        {...form.getInputProps("role")}
      />
      <FileInput
        label="Foto Pengguna / Instansi terkait"
        placeholder="Pilih Thumbnail"
        my="md"
        required
        accept="image/png, image/jpeg, image/webp"
        leftSection={<IconPhoto />}
        {...form.getInputProps("file")}
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
  );
};
