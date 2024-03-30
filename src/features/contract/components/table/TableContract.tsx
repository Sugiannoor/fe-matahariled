import { Table } from "@/components/table/Table";
import { ActionIcon } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconEdit, IconInfoCircle, IconTrash } from "@tabler/icons-react";
import React from "react";
import { Contract } from "../../types/contract";

type props = {
  toolbar?: React.ReactNode;
}
var items:Contract[] = [
    {
        no: 1,
        contract_id: 1,
        contract_code: 'Video-112',
        product_name:"VideoTron terbaru",
        customer_name: "Sugi",
        title : 'Video Tron Type A',
        description: "Pemasangan Video Tron di Tempat A dengan Waktu target 1 bulan",
        start_date: "17/03/24",
        end_date: "17/03/24",
    }
]
export const TableContract:React.FC<props> = ({toolbar}) => {
//   function handleUpdate (promoOnline: PromoOnlineDTO) {
//     modals.open({
//       title: 'Update BBM',
//       children: (
//         <UpdatePromoOnline
//         promoOnline={promoOnline}
//         />
//       ),
//     });
// }
  const handleDelete = (id: number) => {
    modals.openConfirmModal ({
      title: 'Hapus Kontrak',
      size: "md",
      radius: "md",
      children: <div className="text-md">Apakah anda yakin untuk menghapus Kontrak ini?</div>,
      confirmProps: { color: 'red' },
      centered: true,
      onConfirm() {
        notifications.show({
          title: 'Success',
          message: 'Kontrak berhasil dihapus',
          color: 'green',
        });
      },
      onCancel() {
        notifications.show({
          title: 'Gagal',
          message: 'Kontrak gagal dihapus',
          color: 'red',
        });
      },
      
    })
  }
  return (
    <div>
      <Table
        title="Table User"
        items={items}
        toolbar={toolbar}
        renderItem={(items) => (
          <tr key={items.contract_id}>
            <td>{items.no}</td>
            <td>{items.contract_code}</td>
            <td>{items.title}</td>
            <td>{items.customer_name}</td>
            <td>{items.product_name}</td>
            <td>{items.start_date}</td>
            <td>{items.end_date}</td>
            <td>
            <div className="flex items-center space-x-2">
                <ActionIcon
                  variant="subtle"
                  title="Update Kontrak"
                  color="blue"
                  radius="lg"
                >
                  <IconEdit size={18} />
                </ActionIcon>
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
          "Nama Customer",
          "Nama Produk",
          "Tanggal Mulai",
          "Tanggal Selesai",
          "Aksi",
        ]}
      />
    </div>
  );
};
