import { Outlet } from "react-router-dom";

import { Sidebar } from "../navigation/Sidebar";
import { Header } from "../navigation/Header";

export function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar items={[]} />

      <div className="flex-1">
        <Header
          userName="User"
        />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}