import { useAuth } from '@/hooks/authHook';
import { Center, Loader } from '@mantine/core';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const LoadingScreen = () => (
  <Center className="w-full h-screen bg-body">
    <Loader />
  </Center>
);

export const AuthLayout: React.FC = () => {
  const { creds } = useAuth();

  if (creds?.role === "Admin" || creds?.role === "SuperAdmin") return <Navigate to="/dashboard" replace />;
  if (creds && creds?.role === "Customer") return <Navigate to="/" replace />;

  return (
    <Suspense fallback={<LoadingScreen />}>
        <Outlet />
    </Suspense>
  );
};
