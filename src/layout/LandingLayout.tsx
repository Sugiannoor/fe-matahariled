import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { useAuth } from "@/hooks/authHook";
import { Navigate, Outlet } from "react-router-dom";

export const LandingLayout = () => {
  const { creds } = useAuth();
  if (creds?.role === "Admin" || creds?.role === "Superadmin")
    return <Navigate to="/dashboard" replace />;

  return (
    <div>
      <NavbarComponent />
      <main className="mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
