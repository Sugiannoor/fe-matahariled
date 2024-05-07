import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./hero.module.css";
import { Carousel } from "@mantine/carousel";

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Carousel withIndicators height={500}>
        <Carousel.Slide>
          <Container size="lg">
            <div className={classes.inner}>
              <div className={classes.content}>
                <Title className={classes.title}>
                  LED{" "}
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: "pink", to: "orange " }}
                    className={classes.title}
                  >
                    Videotron
                  </Text>{" "}
                  Indoor dan Outdoor
                </Title>

                <Text className={classes.description} mt={30}>
                  PT. Matahari Teknologi Jaya Merupakan Perusahaan Perdagangan
                  besar elektronik serta importir berbagai Produk Display & IT
                  Solution
                </Text>

                <Button size="lg" mt={40}>
                  Get started
                </Button>
              </div>
            </div>
          </Container>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
