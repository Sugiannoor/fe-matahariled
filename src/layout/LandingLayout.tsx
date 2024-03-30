import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Outlet } from "react-router-dom";

export const LandingLayout = () => {
  return (
    <div>
      <NavbarComponent />
      <main className="mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
