import { LogOut, User, Settings } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export function UserDropdown() {
  const { user, logout } = useAuth();

  return (
    <div className="relative">
      <button className=" flex items-center gap-2">
        <img
          src={user?.avatar || "/avatar.png"}
          className="h-10 w-10 rounded-full"
        />
      </button>

      <div className=" absolute right-0 mt-2 w-56 rounded-lg border bg-white shadow">
        <div className="p-4">
          <p>{user?.firstName}</p>
          <p className="text-sm text-slate-500">
            {user?.email}
          </p>
        </div>

        <button
          className="flex w-full gap-2 px-4 py-3">
          <User size={18} />
          Profile
        </button>

        <button className="flex w-full gap-2 px-4 py-3">
          <Settings size={18} />
          Settings
        </button>

        <button onClick={logout} className="flex w-full gap-2 px-4 py-3 text-red-500">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
