import { Table } from "@/components/table/Table";
import { ActionIcon } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconEdit, IconInfoCircle, IconTrash, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import dayjs from "dayjs";
import { ProductQuery } from "../../types/product";
import { useProducts } from "../../api/getProducts";
import { useDeleteProduct } from "../../api/deleteProduct";

type props = {
  toolbar?: React.ReactNode;
}&ProductQuery
export const TableProduct:React.FC<props> = ({toolbar, ...props}) => {
  const [params, setParams] = useState<ProductQuery>({
    page: 1,
    limit: 10,
    search: '',
  });
  const { data, isLoading } = useProducts({ params: { ...params, ...props } });
  const deleteProduct = useDeleteProduct();
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
      onConfirm: async () => {
        await deleteProduct.mutateAsync({ id },
          {
            onSuccess: () => {
              notifications.show({
                message: 'Product berhasil dihapus',
                color: 'green',
                icon: <IconCheck />,
              });
              modals.closeAll();
            },
            onError: () => {
              notifications.show({
                message: 'Product tidak bisa dihapus',
                color: 'red',
                icon: <IconX />,
              });
              modals.closeAll();
            },
          }
        );
      },
      
    })
  }
  return (
    <div>
      <Table
        title="Table Product"
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
          <tr key={items.product_id}>
            <td>{(params.limit ?? 5) * ((params.page ?? 0) - 1) + i + 1}</td>
            <td>{items.name}</td>
            <td>{items.category}</td>
            <td>{dayjs(items.created_at).format('D MMMM YYYY H:mm')}</td>
            <td>{dayjs(items.updated_at).format('D MMMM YYYY H:mm')}</td>
            <td>
            <div className="flex items-center space-x-2">
                <ActionIcon
                  variant="subtle"
                  title="Update Product"
                  color="blue"
                  radius="lg"
                >
                  <IconEdit size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Hapus Product"
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
          "#",
          "Nama Product",
          "Jenis Produk",
          "Created at",
          "Updated at",
          "Aksi",
        ]}
      />
    </div>
  );
};
