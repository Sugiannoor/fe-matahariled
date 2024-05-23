import { Header } from "@/components/navbar/HeaderAdmin";
import { useCreds } from "@/features/auth/api/creds";
import { Button } from "@mantine/core";
import { IconArrowLeft, IconHome } from "@tabler/icons-react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const AdminLayout = () => {
  const navigate = useNavigate();
  const { data } = useCreds();
  if (data?.role === "Customer") return <Navigate to="/" replace />;
  if (!data) return <Navigate to="/" replace />;
  return (
    <div className="mx-auto max-w-[90%]">
      <div className="mb-8">
        <Header />
      </div>
      <section className="flex justify-end gap-4">
        <Button
          color="red"
          leftSection={<IconArrowLeft />}
          onClick={() => navigate(-1)}
        >
          Kembali
        </Button>
        <Button
          color="blue"
          leftSection={<IconHome />}
          onClick={() => navigate("/admin/dashboard")}
        >
          Dashboard
        </Button>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
