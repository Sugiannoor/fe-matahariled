import { Table } from "@/components/table/Table";
import { ActionIcon } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconEdit, IconInfoCircle, IconTrash } from "@tabler/icons-react";
import React from "react";
import dayjs from "dayjs";
import { Product } from "../../types/product";

type props = {
  toolbar?: React.ReactNode;
  items?: Product[];
}
export const TableProduct:React.FC<props> = ({toolbar, items}) => {
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
      title: 'Hapus Product',
      size: "md",
      radius: "md",
      children: <div className="text-md">Apakah anda yakin untuk menghapus Product ini?</div>,
      confirmProps: { color: 'red' },
      centered: true,
      onConfirm() {
        notifications.show({
          title: 'Success',
          message: 'Product berhasil dihapus',
          color: 'green',
        });
      },
      onCancel() {
        notifications.show({
          title: 'Gagal',
          message: 'Product gagal dihapus',
          color: 'red',
        });
      },
      
    })
  }
  return (
    <div>
      <Table
        title="Table Product"
        items={items}
        toolbar={toolbar}
        renderItem={(items) => (
          <tr key={items.product_id}>
            <td>{items.no}</td>
            <td>{items.name}</td>
            <td>{items.category}</td>
            <td>{dayjs(items.created_at).format('D MMMM YYYY H:mm')}</td>
            <td>
            <div className="flex items-center space-x-2">
                <ActionIcon
                  variant="subtle"
                  title="Update Promo"
                  color="blue"
                  radius="lg"
                >
                  <IconEdit size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Hapus Promo"
                  color="red"
                  radius="lg"
                  onClick={()=>handleDelete(items.product_id)}
                >
                  <IconTrash size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Detail Promo"
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
          "Nama Product",
          "Jenis Produk",
          "Created at",
          "Aksi",
        ]}
      />
    </div>
  );
};
