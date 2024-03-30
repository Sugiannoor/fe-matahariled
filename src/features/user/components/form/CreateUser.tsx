import { Button, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconChecklist } from "@tabler/icons-react";
import { useCreateUser } from "../../api/createUser";
import { modals } from "@mantine/modals";

export const CreateUser = () => {
  const { mutateAsync, isLoading } = useCreateUser();
  const form = useForm({
    initialValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
      phone_number: "",
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
            message: "Komplain berhasil dibuat",
          });
          modals.closeAll();
        },
        onError: ({ response }) => {
          form.setErrors((response?.data as any).errors);
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
        required
        data={["Customer", "Admin", "Superadmin"]}
        {...form.getInputProps("role")}
      />

      <div className="flex justify-end gap-2">
        <Button mt="md" type="submit" leftSection={<IconChecklist />}>
          Simpan
        </Button>
      </div>
    </form>
  );
};
