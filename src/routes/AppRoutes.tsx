import { AdminLayout } from "@/layout/AdminLayout";
import { AuthLayout } from "@/layout/AuthLayout";
import { LandingLayout } from "@/layout/LandingLayout";
import { lazyImport } from "@/utils/lazyimport";
import { Loader } from "@mantine/core";
import { Suspense } from "react";
const { UnderDevelopment } = lazyImport(
  () => import("@/components/underdevelopment/UnderDevelopment"),
  "UnderDevelopment"
);
const { LoginPage } = lazyImport(
  () => import("@/features/auth/pages/LoginPage"),
  "LoginPage"
);
const { RegisterPage } = lazyImport(
  () => import("@/features/auth/pages/RegisterPage"),
  "RegisterPage"
);
const { DataContract } = lazyImport(
  () => import("@/features/contract/pages/Contract"),
  "DataContract"
);
const { Dashboard } = lazyImport(
  () => import("@/features/dashboard/pages/Dashboard"),
  "Dashboard"
);
const { DataHistory } = lazyImport(
  () => import("@/features/history/pages/DataHistory"),
  "DataHistory"
);
const { DetailHistory } = lazyImport(
  () => import("@/features/history/pages/DetailHistory"),
  "DetailHistory"
);
const { CreateProduct } = lazyImport(
  () => import("@/features/product/components/form/CreateProduct"),
  "CreateProduct"
);
const { DataProduct } = lazyImport(
  () => import("@/features/product/pages/DataProduct"),
  "DataProduct"
);
const { DetailProduct } = lazyImport(
  () => import("@/features/product/pages/DetailProduct"),
  "DetailProduct"
);
const { Profile } = lazyImport(
  () => import("@/features/profile/pages/Profile"),
  "Profile"
);
const { DataUser } = lazyImport(
  () => import("@/features/user/pages/DataUser"),
  "DataUser"
);

const { ProfileLayout } = lazyImport(
  () => import("@/layout/ProfileLayout"),
  "ProfileLayout"
);
const { Home } = lazyImport(() => import("@/pages/Home"), "Home");
const { Portofolio } = lazyImport(
  () => import("@/pages/Portofolio"),
  "Portofolio"
);
const { Product } = lazyImport(() => import("@/pages/Product"), "Product");
const { ProductByCategory } = lazyImport(
  () => import("@/pages/ProductByCategory"),
  "ProductByCategory"
);
const { Video } = lazyImport(() => import("@/pages/Video"), "Video");

import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader type="dots" />}>
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
    </Suspense>
  );
};
