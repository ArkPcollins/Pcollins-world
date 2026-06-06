import { USER_MENU } from "@/config/sidebar.config";
import { authStore } from "@/store/auth.store";
import { Header, Sidebar } from "@/ui";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  const user = authStore((state) => state.user);

  const displayName = user ? `${user.firstName} ${user.lastName}` : "User";

  return (
    <div className="flex min-h-screen">
      <Sidebar items={USER_MENU} />

      <div className="flex-1 bg-slate-50">
        <Header userName={displayName} avatar={user?.avatar} />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
