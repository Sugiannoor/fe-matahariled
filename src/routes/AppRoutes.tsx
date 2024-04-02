import { UnderDevelopment } from "@/components/underdevelopment/UnderDevelopment";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { DataContract } from "@/features/contract/pages/Contract";
import { DataHistory } from "@/features/history/pages/DataHistory";
import { CreateProduct } from "@/features/product/components/form/CreateProduct";
import { DataProduct } from "@/features/product/pages/DataProduct";
import { Profile } from "@/features/profile/pages/Profile";
import { DataUser } from "@/features/user/pages/DataUser";
import { AdminLayout } from "@/layout/AdminLayout";
import { LandingLayout } from "@/layout/LandingLayout";
import { ProfileLayout } from "@/layout/ProfileLayout";
import { Home } from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<ProfileLayout/>}>
        <Route path="/profile" element={<Profile/>}/>
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/product" element={<DataProduct />} />
        <Route path="/admin/product/create" element={<CreateProduct />} />
        <Route path="/admin/user" element={<DataUser/>} />
        <Route path="/admin/contract" element={<DataContract/>} />
        <Route path="/admin/portofolio" element={<DataHistory/>} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<UnderDevelopment />} />
    </Routes>
  );
};
