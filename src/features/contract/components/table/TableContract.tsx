import { Table } from "@/components/table/Table";
import { ActionIcon } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconEdit, IconInfoCircle, IconTrash, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { useContracts } from "../../api/getContracts";
import { Contract, ContractQuery } from "../../types/contract";
import { DetailContract } from "../DetailContract";
import { useDeleteContract } from "../../api/deleteContract";
import { UpdateContract } from "../form/UpdateContract";

type props = {
  toolbar?: React.ReactNode;
} & ContractQuery;
export const TableContract: React.FC<props> = ({ toolbar, ...props }) => {
  const [params, setParams] = useState<ContractQuery>({
    page: 1,
    limit: 10,
    search: "",
    user_id: undefined,
    product_id: undefined,
  });
  const { data, isLoading } = useContracts({ params: { ...params, ...props } });
  function handleDetail(contract: Contract) {
    modals.open({
      title: "Detail Kontrak",
      size: 'xl',
      children: <DetailContract contract={contract} />,
    });
  }
  function handleUpdate(contract: Contract) {
    modals.open({
      title: "Edit Kontrak",
      size: 'xl',
      children: <UpdateContract contract={contract}/>,
    });
  }
  const deleteContract = useDeleteContract();
  const handleDelete = (id: number) => {
    modals.openConfirmModal({
      title: "Hapus Kontrak",
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
        await deleteContract.mutateAsync({ id },
          {
            onSuccess: () => {
              notifications.show({
                message: 'Kontrak berhasil dihapus',
                color: 'green',
                icon: <IconCheck />,
              });
              modals.closeAll();
            },
            onError: () => {
              notifications.show({
                message: 'Kontrak tidak bisa dihapus',
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
        title="Table Contract"
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
          <tr key={items.contract_id}>
            <td>{(params.limit ?? 5) * ((params.page ?? 0) - 1) + i + 1}</td>
            <td>{items.title}</td>
            <td>{items.username}</td>
            <td>
              {" "}
              {items.product.length > 1
                ? "Produk lebih dari 1 (Detail Only)"
                : items.product.map((product, index) => index === 0 && product.name)}
            </td>
            <td>{items.start_date}</td>
            <td>{items.end_date}</td>
            <td>
              <div className="flex items-center space-x-2">
                <ActionIcon
                  variant="subtle"
                  title="Update Kontrak"
                  color="blue"
                  radius="lg"
                  onClick={()=> handleUpdate(items)}
                >
                  <IconEdit size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Hapus Kontrak"
                  color="red"
                  radius="lg"
                  onClick={() => handleDelete(items.contract_id)}
                >
                  <IconTrash size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  title="Detail Kontrak"
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
