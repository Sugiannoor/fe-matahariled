
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { Product, ProductDTO } from "../types/product";

type ProductReuest = {
  data: ProductDTO;
};

export async function createProduct({ data }: ProductReuest) {
    const formData = new FormData();

// Menambahkan field title
formData.append("name", data.name);

// Menambahkan field description
formData.append("description", data.description);

// Menambahkan field file (jika ada)
if (data.file) {
  formData.append("file", data.file, data.file.name);
}

// Menambahkan field category_id
formData.append("category_id", data.category_id.toString());

// Kirim permintaan POST dengan FormData
const res = await axios.post<GeneralResponse<Product>>("/product", formData);

return res.data;
}
type UseCreateUserOptions = {
    config?: MutationConfig<typeof createProduct>;
  };
  
  export function useCreateProduct({ config }: UseCreateUserOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(createProduct, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['products'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }