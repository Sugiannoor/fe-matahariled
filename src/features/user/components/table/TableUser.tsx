import { Table } from "@/components/table/Table";
import { ActionIcon } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconEdit, IconInfoCircle, IconTrash, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import dayjs from "dayjs";
import { UserQuery, UserTableType } from "../../types/user";
import { useUsers } from "../../api/getUsers";
import { useDeleteUser } from "../../api/deleteUser";
import { UpdateUser } from "../form/UpdateUser";

type props = {
  toolbar?: React.ReactNode;
}&UserQuery

export const TableUser:React.FC<props> = ({toolbar, ...props}) => {
  const [params, setParams] = useState<UserQuery>({
    page: 1,
    limit: 10,
    search: '',
  });
  const { data, isLoading } = useUsers({ params: { ...params, ...props } });
  const deleteMutation = useDeleteUser ()

  function handleUpdate (user: UserTableType) {
    modals.open({
      title: 'Update Pengguna',
      size: "lg",
      children: (
        <UpdateUser user={user} />
      ),
    });
}

  const handleDelete = (id: number, username: string) => {
    modals.openConfirmModal ({
      title: 'Hapus User',
      size: "md",
      radius: "md",
      children: <div className="text-md">Apakah anda yakin untuk menghapus <b>{username?? ""}</b></div>,
      confirmProps: { color: 'red' },
      centered: true,
      onConfirm: async () => {
        await deleteMutation.mutateAsync({ id },
          {
            onSuccess: () => {
              notifications.show({
                message: 'Pengguna berhasil dihapus',
                color: 'green',
                icon: <IconCheck />,
              });
              modals.closeAll();
            },
            onError: () => {
              notifications.show({
                message: 'Pengguna tidak bisa dihapus',
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
        title="Table User"
        loading={isLoading}
        items={data?.data}
        toolbar={toolbar}
        metadata={{
          count: data?.data.length || 10,
          limit: params.limit || 10,
          page: params.page || 10,
          total: data?.total || 10,
        }}
        onPageChange={(page) => {
          setParams({ ...params, page });
        }}
        renderItem={(items, i) => (
          <tr key={items.user_id}>
            <td>{(params.limit ?? 5) * ((params.page ?? 0) - 1) + i + 1}</td>
            <td>{items.full_name}</td>
            <td>{items.username}</td>
            <td>{items.email}</td>
            <td>{items.phone_number}</td>
            <td>{items.role}</td>
            <td>{dayjs(items.created_at).format('D MMMM YYYY H:mm')}</td>
            <td>
            <div className="flex items-center space-x-2">
                <ActionIcon
                  variant="subtle"
                  title="Update User"
                  color="blue"
                  radius="lg"
                  onClick={()=> handleUpdate (items)}
                >
                  <IconEdit size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Hapus User"
                  color="red"
                  radius="lg"
                  onClick={()=>handleDelete(items.user_id, items.username)}
                >
                  <IconTrash size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Detail User"
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
          "Nama",
          "Username",
          "email",
          "Nomor Telphone",
          "Role",
          "Created at",
          "Aksi",
        ]}
      />
    </div>
  );
};
