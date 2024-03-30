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

export function LoginForm() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Paper radius={0} className="flex flex-col justify-center p-16 xl:p-36">
      <Title order={1} ta="center" mt="md">
        Selamat Datang Customer
      </Title>
      <Text mt="sm" mb={50} className="text-gray-500 text-center">
        Silahkan Login dengan akun anda
      </Text>
      <form onSubmit={form.onSubmit((values)=>console.log(values))}>
        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          required
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          required
          {...form.getInputProps('password')}
        />
        <Button fullWidth mt="xl" size="md" type="submit">
          Login
        </Button>
      </form>

      <Text ta="center" mt="md">
        Don&apos;t have an account?{" "}
        <Anchor<"a">
          href="#"
          fw={700}
          onClick={(event) => event.preventDefault()}
        >
          Register
        </Anchor>
      </Text>
    </Paper>
  );
}
