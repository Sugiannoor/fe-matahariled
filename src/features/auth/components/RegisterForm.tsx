import { useCreateUser } from "@/features/user/api/createUser";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      username: "",
      phone_number: "",
      role: "Customer",
    },
  });
  const { mutateAsync, isLoading } = useCreateUser();

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
            message: "Register Berhasil",
          });
          navigate("/login");
        },
        onError: ({ response }) => {
          if (response?.data.errors) {
            form.setErrors(response.data.errors);
          } else {
            notifications.show({
              message: response?.data.message || "Gagal Membuat Akun",
              color: "red",
              icon: <IconX />,
            });
          }
        },
      }
    );
  });

  return (
    <Paper
      radius={0}
      className="flex flex-col justify-center p-5 lg:p-16 max-h-[100vh] xl:p-36"
    >
      <Title order={1} ta="center" mt="md">
        Selamat Datang Customer
      </Title>
      <Text mt="sm" mb={50} className="text-gray-500 text-center">
        Silahkan Login dengan akun anda
      </Text>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Nama Lengkap"
          placeholder="Ex. Budi Goals"
          size="md"
          mt="md"
          {...form.getInputProps("full_name")}
        />
        <TextInput
          label="Username"
          placeholder="Ex. Budi12"
          size="md"
          mt="md"
          {...form.getInputProps("username")}
        />
        <TextInput
          label="Email address"
          placeholder="Ex. hello@gmail.com"
          size="md"
          mt="md"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Nomor Telephone"
          placeholder="Ex. +62813 / 0813"
          size="md"
          mt="md"
          {...form.getInputProps("phone_number")}
        />
        <PasswordInput
          label="Password"
          placeholder="Password Anda"
          mt="md"
          size="md"
          {...form.getInputProps("password")}
        />
        <div className="flex gap-2 mt-10">
          <Button fullWidth size="md" type="submit" disabled={isLoading}>
            Register
          </Button>
          <Button
            fullWidth
            size="md"
            color="red"
            type="button"
            onClick={() => navigate("/login")}
          >
            Batal
          </Button>
        </div>
      </form>

      <Text ta="center" mt="md">
        have an account?{" "}
        <Anchor<"a"> href="/login" fw={700}>
          Login
        </Anchor>
      </Text>
    </Paper>
  );
}
