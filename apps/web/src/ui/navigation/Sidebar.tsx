import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Ensure this interface matches what your config files export!
export interface SidebarItem {
  label: string;
  path: string;
  icon?: LucideIcon; // 🟢 Hardlocked to LucideIcon component reference only
}

interface SidebarProps {
  items: SidebarItem[];
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <aside
      className="
        h-screen
        w-64
        border-r
        bg-slate-900
        text-white
      "
    >
      <div className="p-6 text-xl font-bold">P Collins</div>

      <nav className="space-y-2 px-4">
        {items.map((item) => {
          // 1. FIX: You must define 'Icon' locally inside the loop block on each pass
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-3
                py-2
                hover:bg-slate-800
              "
            >
              {/* 2. FIX: Safely mounts the extracted component definition */}
              {Icon && <Icon size={20} />}

              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
