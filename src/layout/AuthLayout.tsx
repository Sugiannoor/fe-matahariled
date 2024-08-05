import { useCreds } from "@/features/auth/api/creds";
import { Center, Loader } from "@mantine/core";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoadingScreen = () => (
  <Center className="w-full h-screen bg-body">
    <Loader />
  </Center>
);

export const AuthLayout: React.FC = () => {
  const { data } = useCreds();

  if (data?.role === "Admin" || data?.role === "Superadmin")
    return <Navigate to="/admin/dashboard" replace />;
  if (data?.role === "Customer") return <Navigate to="/" replace />;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
};
