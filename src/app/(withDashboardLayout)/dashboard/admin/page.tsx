"use client";

import { useGetAdminMetaQuery } from "@/redux/api/meta.api";
import AdminDashboardHOC from "./Components/AdminDashboardHOC";

export default function AdminDashboardPage() {
  const query = useGetAdminMetaQuery(undefined);

  return <AdminDashboardHOC query={query} />;
}
