import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./hero.module.css";

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              LED{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "blue", to: "green" }}
                className={classes.title}
              >
                Videotron
              </Text>{" "}
              Indoor dan Outdoor
            </Title>

            <Text className={classes.description} mt={30}>
              PT. Matahari Teknologi Jaya Merupakan Perusahaan Perdagangan besar
              elektronik serta importir berbagai Produk Display & IT Solution
            </Text>

            <Button size="lg" mt={40}>
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}