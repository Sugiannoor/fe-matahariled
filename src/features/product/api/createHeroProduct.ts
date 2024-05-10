import { GeneralResponse } from "@/types/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";

type ProductReuest = {
  data: {
    product_id: number;
    file: File | undefined
  };
};

export async function createHeroProduct({ data }: ProductReuest) {
  const formData = new FormData();


  formData.append("product_id", data.product_id.toString());
  // Menambahkan field file (jika ada)
  if (data.file) {
    formData.append("file", data.file, data.file.name);
  }

  // Kirim permintaan POST dengan FormData
  const res = await axios.post("/product/hero", formData);

  return res.data;
}
type UseCreateHeroOptions = {
  config?: MutationConfig<typeof createHeroProduct>;
};

export function useCreateHeroProduct({ config }: UseCreateHeroOptions = {}) {
  const queryClient = useQueryClient();
  return useMutation(createHeroProduct, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["hero"]);
      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
