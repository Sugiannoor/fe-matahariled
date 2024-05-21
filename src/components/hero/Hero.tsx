import { Title, Text, Button, Center, Loader, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useHeroProducts } from "@/features/contract/api/getProductsHero";
import classes from "./hero.module.css";
import { Link, useNavigate } from "react-router-dom";


export function HeroImageRight() {
  const navigate = useNavigate ();
  const { data, isLoading, isError } = useHeroProducts();
  if (isLoading || isError) {
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
      {data.map(item => (
        <Carousel.Slide key={item.product_id}>
          <img className="h-[500px] object-cover w-full cursor-pointer" src={import.meta.env.VITE_API_URL +`${item.path}`}
            onClick={()=> navigate(`/product/detail/${item.product_id}`)}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=1080&q=80";
            }}
            />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
