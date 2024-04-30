import { Grid, Loader } from "@mantine/core"
import { useGalleryByIdProduct } from "../../api/getGalleryByIdProduct"
import { useParams } from "react-router-dom";

export const GalleryProduct = () => {
    const { id } = useParams();
    const ProductId = Number(id);
    const {data, isLoading, isError} = useGalleryByIdProduct ({ProductId});

    if (isLoading || isError ) {
        return <Loader/>
    }
    if (data.length === 0 ) {
        return <div>Gallery Tidak ada</div>
    }
  return (
    <Grid>
    {data.map((galleryItem, index) => (
        <Grid.Col key={index} span={4}>
            <img src={import.meta.env.VITE_API_URL + galleryItem.path} alt={`Image ${index + 1}`} />
        </Grid.Col>
    ))}
</Grid>
  )
}
