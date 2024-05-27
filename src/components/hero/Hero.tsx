import { Title, Text, Button, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useHeroProducts } from "@/features/contract/api/getProductsHero";
import classes from "./hero.module.css";
import { useNavigate } from "react-router-dom";

export function HeroImageRight() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useHeroProducts();
  if (isLoading || isError || data === null) {
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
  return (
    <Carousel withIndicators>
      {data.map((item) => (
        <Carousel.Slide key={item.product_id}>
          <img
            className="h-[500px] object-cover w-full cursor-pointer"
            src={import.meta.env.VITE_API_URL + `${item.path}`}
            onClick={() => navigate(`/product/detail/${item.product_id}`)}
            onError={(e) => {
              e.currentTarget.src = "/logo.png";
            }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
