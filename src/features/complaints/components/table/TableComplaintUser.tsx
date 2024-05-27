import { Table } from "@/components/table/Table";
import { ActionIcon } from "@mantine/core";
import { IconInfoCircle, IconTrash } from "@tabler/icons-react";
import React from "react";
import { Complaint } from "../../types/complaint";

type props = {
  toolbar?: React.ReactNode;
};
var items: Complaint[] = [
  {
    no: 1,
    contract_code: "TRON-441",
    contract_id: 1,
    title: "Video Tron di Dutamall",
    desription: "Pemasangan Video Tron di Dutamall Banjarmasin Sampai 2024",
    status: "Baru",
  },
];
export const TableComplaintUser: React.FC<props> = ({ toolbar }) => {
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
                >
                  <IconTrash size={18} />
                </ActionIcon>
                <ActionIcon variant="subtle" title="Detail Kontrak" radius="lg">
                  <IconInfoCircle size={18} />
                </ActionIcon>
              </div>
            </td>
          </tr>
        )}
        header={["No", "Kode Kontrak", "Judul", "Deskripsi", "Status", "Aksi"]}
      />
    </div>
  );
};
