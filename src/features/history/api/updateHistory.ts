
import { GeneralResponse } from "@/types/api";
import { MutationConfig} from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { HistoryDTO } from "../types/history";

type HistoryReuest = {
  data: HistoryDTO;
};

export async function updateHistory({ data }: HistoryReuest) {
    const formData = new FormData();

// Menambahkan field title
formData.append("title", data.title);
formData.append("start_date", data.start_date);
formData.append("end_date", data.end_date);

// Menambahkan field description
formData.append("description", data.description);

// Menambahkan field file (jika ada)
if (data.file) {
  formData.append("file", data.file, data.file.name);
}

// Menambahkan field category_id
formData.append("product_id", data.product_id.toString());

// Kirim permintaan POST dengan FormData
const res = await axios.put<GeneralResponse<History>>(`/history/${data.history_id}`, formData);

return res.data;
}
type UseCreateUserOptions = {
    config?: MutationConfig<typeof updateHistory>;
  };
  
  export function useUpdateHistory({ config }: UseCreateUserOptions = {}) {
    const queryClient = useQueryClient ()
    return useMutation(updateHistory, {
      ...config,
      onSuccess: (...args) => {
        queryClient.invalidateQueries(['histories'])
        if (config?.onSuccess) {
          config.onSuccess(...args);
        }
      },
    });
  }