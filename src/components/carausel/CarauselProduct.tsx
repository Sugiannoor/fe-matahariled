import { Carousel } from "@mantine/carousel";
import classes from "./Carausel.module.css";
import { Center, Loader } from "@mantine/core";
import { useHistoryUser } from "@/features/history/api/getHistoryUser";
import { HistoryUser } from "@/features/history/types/history";
import { useNavigate } from "react-router-dom";

export function CarauselProduct() {
  const { data, isLoading, isError } = useHistoryUser();
  const navigate = useNavigate();

  if (isLoading || isError) {
    return (
      <Carousel
        withIndicators
        height="50vh"
        controlSize={40}
        className="bg-gray-50"
        loop
      >
        {/* Membuat Carousel.Slide untuk setiap elemen dalam data */}
        <Carousel.Slide className="flex flex-col">
          <Center className="justify-center my-auto flex-col">
            <Loader />
          </Center>
        </Carousel.Slide>
      </Carousel>
    );
  }
  if (data?.length === 0) {
    return (
      <Carousel
        withIndicators
        height="50vh"
        controlSize={40}
        className="bg-gray-50"
        loop
      >
        {/* Membuat Carousel.Slide untuk setiap elemen dalam data */}
        <Carousel.Slide className="flex flex-col">
          <Center className="justify-center my-auto flex-col">
            Portofolio Tidak Tersedia
          </Center>
        </Carousel.Slide>
      </Carousel>
    );
  }

  return (
    <Carousel
      withIndicators
      height="50vh"
      controlSize={40}
      className="bg-gray-50"
      classNames={classes}
      loop
    >
      {/* Membuat Carousel.Slide untuk setiap elemen dalam data */}
      {data.map((history: HistoryUser) => (
        <Carousel.Slide key={history.history_id} className="flex flex-col">
          <Center className="justify-center my-auto flex-col">
            {/* Menampilkan gambar logo */}
            <div
              onClick={() => navigate(`/portofolio/${history.history_id}`)}
              className="cursor-pointer"
            >
              <img
                src={
                  history.user.photo
                    ? import.meta.env.VITE_API_URL + `${history.user.photo}`
                    : "/user_default.png"
                }
                alt="User logo"
                className="mb-4 h-36 object-cover rounded-lg"
              />
            </div>
            <p className="text-2xl lg:text-3xl font-bold text-orange-500">
              {history.title}
            </p>
            <p className="text-lg text-gray-400">{history.user.full_name}</p>
            {/* Menampilkan tombol */}
            {/* <Button className="text-white font-bold py-2 px-4 rounded mt-4" onClick={()=> navigate(`/portofolio/${history.history_id}`)}>
              Portofolio
            </Button> */}
          </Center>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
