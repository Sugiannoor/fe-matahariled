import { Container, Title, Text} from "@mantine/core";
import classes from "./heroPortofolio.module.css";

export function HeroPortofolioPage() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Portofolio{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "orange" }}
                className={classes.title}
              >
                Nasional
              </Text>{" "}
              Dengan Berbagai Cerita Success
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
