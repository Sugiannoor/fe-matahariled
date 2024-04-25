
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";

type tagParams ={
    tag: string
}
type tagRequest = {
  data: tagParams;
};

export async function createTag({ data }: tagRequest) {
  const res = await axios.post<GeneralResponse<tagParams>>("/tag", data);

  return res.data;
}
type UseCreatetagOptions = {
    config?: MutationConfig<typeof createTag>;
  };
  
  export function useCreateTag({ config }: UseCreatetagOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(createTag, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['tags'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }