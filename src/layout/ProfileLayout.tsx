import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { useAuth } from "@/hooks/authHook";
import { Tabs } from "@mantine/core";
import { Navigate, Outlet } from "react-router-dom";

export const ProfileLayout = () => {
  const { creds } = useAuth();
  if (!creds) return <Navigate to="/login" replace />;
  return (
    <div>
      <NavbarComponent />
      <Tabs
        defaultValue="profile"
        orientation="vertical"
        className="mt-40 max-w-[95%] lg:max-w-[80%] mx-auto"
      >
        <Tabs.List>
          <Tabs.Tab value="profile">Info Profile</Tabs.Tab>
          <Tabs.Tab className="mt-5" value="contract">
            Kontrak Saya
          </Tabs.Tab>
          <Tabs.Tab className="mt-5" value="history">
            Riwayat Keluhan
          </Tabs.Tab>
          <Tabs.Tab className="mt-5" value="edit_profile">
            Edit Profile
          </Tabs.Tab>
        </Tabs.List>

        {/* Gunakan Tab Panel */}
        <Outlet />
      </Tabs>
    </div>
  );
};
