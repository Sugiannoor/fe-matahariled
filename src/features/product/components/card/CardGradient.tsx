import { Paper, Text, ThemeIcon, rem } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons-react";
import classes from "./CardGradient.module.css";

type params = {
  description?: string;
};
export function CardGradient({ description }: params) {
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "pink", to: "orange" }}
      >
        <IconColorSwatch
          style={{ width: rem(28), height: rem(28) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text size="xl" fw={500} mt="md">
        Spesifikasi
      </Text>
      <div
        dangerouslySetInnerHTML={{
          __html: description
            ? description
            : "<p>Spesifikasi Tidak Tersedia</p>",
        }}
      />
    </Paper>
  );
}
