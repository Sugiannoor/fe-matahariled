import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { useCreds } from "@/features/auth/api/creds";
import { Navigate, Outlet } from "react-router-dom";

export const LandingLayout = () => {
  const {data} = useCreds ()
  if (data?.role === "Admin" || data?.role === "Superadmin")
    return <Navigate to="/admin/dashboard" replace />;

  return (
    <div>
      <NavbarComponent />
      <main className="mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
