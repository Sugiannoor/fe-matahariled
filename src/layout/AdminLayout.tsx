import { Header } from "@/components/navbar/HeaderAdmin";
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Outlet, useNavigate } from "react-router-dom";

export const AdminLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-[90%]">
      <div className="mb-8">
        <Header />
      </div>
      <section className="flex justify-end">
        <Button color="red" leftSection={<IconArrowLeft />} onClick={() => navigate(-1)}>
          Kembali
        </Button>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
