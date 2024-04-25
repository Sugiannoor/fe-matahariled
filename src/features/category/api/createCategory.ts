
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";

type categoryParams ={
    category: string
    tag_ids: number[]
}
type categoryRequest = {
  data: categoryParams;
};

export async function createCategory({ data }: categoryRequest) {
  const res = await axios.post<GeneralResponse<categoryParams>>("/category", data);

  return res.data;
}
type UseCreateCategoryOptions = {
    config?: MutationConfig<typeof createCategory>;
  };
  
  export function useCreateCategory({ config }: UseCreateCategoryOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(createCategory, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['categories'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }