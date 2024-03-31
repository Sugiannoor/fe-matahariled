
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { Product } from "../types/product";

type ProductRequest = {
  id: number
};

export async function deleteProduct({ id }: ProductRequest) {
  const res = await axios.delete<GeneralResponse<Product>>(`/product?id=${id}`);

  return res.data;
}
type UseDeleteProductOptions = {
    config?: MutationConfig<typeof deleteProduct>;
  };
  
  export function useDeleteProduct({ config }: UseDeleteProductOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(deleteProduct, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['products'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }