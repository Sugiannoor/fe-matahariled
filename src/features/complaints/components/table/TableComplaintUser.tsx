import { Table } from "@/components/table/Table";
import { ActionIcon } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import {  IconInfoCircle, IconTrash } from "@tabler/icons-react";
import React from "react";
import { Complaint } from "../../types/complaint";

type props = {
  toolbar?: React.ReactNode;
}
var items:Complaint[] = [
    {
        no: 1,
        contract_code: 'TRON-441',
        contract_id: 1,
        title: 'Video Tron di Dutamall',
        desription: "Pemasangan Video Tron di Dutamall Banjarmasin Sampai 2024",
        status: "Baru"
    }
]
export const TableComplaintUser:React.FC<props> = ({toolbar}) => {
  const handleDelete = (id: number) => {
    modals.openConfirmModal ({
      title: 'Hapus Keluhan',
      size: "md",
      radius: "md",
      children: <div className="text-md">Apakah anda yakin untuk menghapus Keluhan ini?</div>,
      confirmProps: { color: 'red' },
      centered: true,
      onConfirm() {
        notifications.show({
          title: 'Success',
          message: 'Keluhan berhasil dihapus',
          color: 'green',
        });
      },
      onCancel() {
        notifications.show({
          title: 'Gagal',
          message: 'Keluhan gagal dihapus',
          color: 'red',
        });
      },
      
    })
  }
  return (
    <div>
      <Table
        title="Table Keluhan Anda"
        items={items}
        toolbar={toolbar}
        renderItem={(items) => (
          <tr key={items.contract_id}>
            <td>{items.no}</td>
            <td>{items.contract_code}</td>
            <td>{items.title}</td>
            <td>{items.desription}</td>
            <td>{items.status}</td>
            <td>
            <div className="flex items-center space-x-2">
                <ActionIcon
                  variant="subtle"
                  title="Hapus Kontrak"
                  color="red"
                  radius="lg"
                  onClick={()=>handleDelete(items.contract_id)}
                >
                  <IconTrash size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Detail Kontrak"
                  radius="lg"
                >
                  <IconInfoCircle size={18} />
                </ActionIcon>
              </div>
            </td>
          </tr>
        )}
        header={[
          "No",
          "Kode Kontrak",
          "Judul",
          "Deskripsi",
          "Status",
          "Aksi",
        ]}
      />
    </div>
  );
};
