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
import { useLogin } from "../api/login";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

export function LoginForm() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLogin();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await loginMutation.mutateAsync(form.values, {
      onError: ({ response }) => {
        if (response?.data.errors) {
          form.setErrors(response.data.errors);
        } else {
          notifications.show({
            message: "Periksa Kembali Email dan Password Anda",
            color: "red",
            icon: <IconX />,
          });
        }
      },
      onSuccess: () => {
        window.location.reload();
      },
    });
  }
  return (
    <Paper radius={0} className="flex flex-col justify-center p-16 xl:p-36">
      <Title order={1} ta="center" mt="md">
        Selamat Datang Customer
      </Title>
      <Text mt="sm" mb={50} className="text-gray-500 text-center">
        Silahkan Login dengan akun anda
      </Text>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          type="email"
          placeholder="Masukan Email"
          size="md"
          required
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          required
          {...form.getInputProps("password")}
        />
        <Button
          fullWidth
          mt="xl"
          size="md"
          type="submit"
          loading={loginMutation.isLoading}
        >
          Login
        </Button>
      </form>

      <Text ta="center" mt="md">
        Don&apos;t have an account?{" "}
        <Anchor<"a"> href="/register" fw={700}>
          Register
        </Anchor>
      </Text>
    </Paper>
  );
}
