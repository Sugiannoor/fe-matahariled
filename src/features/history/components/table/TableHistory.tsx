import { Table } from "@/components/table/Table";
import { ActionIcon } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconEdit, IconInfoCircle, IconTrash, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { HistoryDatatableType, HistoryQuery } from "../../types/history";
import { useHistories } from "../../api/getHistories";
import { useDeleteHistory } from "../../api/deleteHistory";
import dayjs from "dayjs";
import { UpdateHistory } from "../form/UpdateHistory";
import { PortofolioDetail } from "../../pages/PortofolioDetail";


type props = {
  toolbar?: React.ReactNode;
} & HistoryQuery;
export const TableHistory: React.FC<props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState<HistoryQuery>({
    page: 1,
    limit: 10,
    search: "",
    product_id: undefined,
  });
  const { data, isLoading } = useHistories({ params: { ...params, ...props } });
  function handleDetail(history: HistoryDatatableType) {
    modals.open({
      title: "Detail Portofolio",
      size: 'xl',
      children: <PortofolioDetail history={history}/>
    });
  }
  function handleUpdate(history: HistoryDatatableType) {
    modals.open({
      title: "Edit Portofolio",
      size: 'xl',
      children: <UpdateHistory history={history}/>
    });
  }
  const deleteHistory = useDeleteHistory();
  const handleDelete = (id: number) => {
    modals.openConfirmModal({
      title: "Hapus Portofolio",
      size: "md",
      radius: "md",
      children: (
        <div className="text-md">
          Apakah anda yakin untuk menghapus Kontrak ini?
        </div>
      ),
      confirmProps: { color: "red" },
      centered: true,
      onConfirm: async () => {
        await deleteHistory.mutateAsync({ id },
          {
            onSuccess: () => {
              notifications.show({
                message: 'Portofolio Kegiatan berhasil dihapus',
                color: 'green',
                icon: <IconCheck />,
              });
              modals.closeAll();
            },
            onError: () => {
              notifications.show({
                message: 'Portofolio Kegiatan tidak bisa dihapus',
                color: 'red',
                icon: <IconX />,
              });
              modals.closeAll();
            },
          }
        );
      },
    });
  };
  return (
    <div>
      <Table
        title="Table History"
        items={data?.data}
        loading={isLoading}
        metadata={{
          count: data?.data.length || 10,
          limit: params.limit || 10,
          page: params.page || 10,
          total: data?.total || 10,
        }}
        onPageChange={(page) => {
          setParams({ ...params, page });
        }}
        toolbar={toolbar}
        renderItem={(items, i) => (
          <tr key={items.history_id}>
            <td>{(params.limit ?? 5) * ((params.page ?? 0) - 1) + i + 1}</td>
            <td>{items.title}</td>
            <td>{items.product_name}</td>
            <td>{items.category_name}</td>
            <td>{items.start_date}</td>
            <td>{items.end_date}</td>
            <td>{dayjs(items.created_at).format('D MMMM YYYY H:mm')}</td>
            <td>{dayjs(items.updated_at).format('D MMMM YYYY H:mm')}</td>
            <td>
              <div className="flex items-center space-x-2">
                <ActionIcon
                  variant="subtle"
                  title="Update Portofolio"
                  color="blue"
                  radius="lg"
                  onClick={()=> handleUpdate(items)}
                >
                  <IconEdit size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Hapus Portofolio"
                  color="red"
                  radius="lg"
                  onClick={() => handleDelete(items.history_id)}
                >
                  <IconTrash size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Detail Portofolio"
                  radius="lg"
                  onClick={() => handleDetail(items)}
                >
                  <IconInfoCircle size={18} />
                </ActionIcon>
              </div>
            </td>
          </tr>
        )}
        header={[
          "#",
          "Judul",
          "Nama Produk",
          "Kategori Produk",
          "Tanggal Kegiatan",
          "Tanggal Selesai",
          "Created at",
          "Updated at",
          "Aksi",
        ]}
      />
    </div>
  );
};
