import { NavLink } from "react-router-dom";

interface SidebarProps {
  items: any[];
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="hidden lg:flex h-screen w-72 flex-col border-r bg-slate-950 text-white">
      <div className="border-b p-6 text-xl font-bold">P Collins</div>
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3
             ${isActive ? "bg-slate-800" : "hover:bg-slate-900"}
            `
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
