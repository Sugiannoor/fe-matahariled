import { UnderDevelopment } from "@/components/underdevelopment/UnderDevelopment";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { DataContract } from "@/features/contract/pages/Contract";
import { Dashboard } from "@/features/dashboard/pages/Dashboard";
import { DataHistory } from "@/features/history/pages/DataHistory";
import DetailHistory from "@/features/history/pages/DetailHistory";
import { CreateProduct } from "@/features/product/components/form/CreateProduct";
import { DataProduct } from "@/features/product/pages/DataProduct";
import DetailProduct from "@/features/product/pages/DetailProduct";
import { Profile } from "@/features/profile/pages/Profile";
import { DataUser } from "@/features/user/pages/DataUser";
import { AdminLayout } from "@/layout/AdminLayout";
import { AuthLayout } from "@/layout/AuthLayout";
import { LandingLayout } from "@/layout/LandingLayout";
import { ProfileLayout } from "@/layout/ProfileLayout";
import { Home } from "@/pages/Home";
import { Portofolio } from "@/pages/Portofolio";
import { Product } from "@/pages/Product";
import { ProductByCategory } from "@/pages/ProductByCategory";
import { Video } from "@/pages/Video";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/detail/:id" element={<DetailProduct />} />
        <Route path="/product/category/:id" element={<ProductByCategory />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/portofolio/detail/:id" element={<DetailHistory />} />
        <Route path="/videolist" element={<Video />} />
      </Route>
      <Route element={<ProfileLayout />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<DataProduct />} />
        <Route path="/admin/product/create" element={<CreateProduct />} />
        <Route path="/admin/user" element={<DataUser />} />
        <Route path="/admin/contract" element={<DataContract />} />
        <Route path="/admin/portofolio" element={<DataHistory />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<UnderDevelopment />} />
    </Routes>
  );
};
