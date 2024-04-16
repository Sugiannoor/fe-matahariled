import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./heroProduct.module.css";

export function HeroProductPage() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Matahari{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "blue", to: "green" }}
                className={classes.title}
              >
                LED
              </Text>{" "}
              Menggunakan Produk Berkualitas
            </Title>

            <Text className={classes.description} mt={30}>
              PT. Matahari Teknologi Jaya Merupakan Perusahaan Perdagangan besar
              elektronik serta importir berbagai Produk Display & IT Solution
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
