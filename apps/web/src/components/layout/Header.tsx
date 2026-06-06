import { Search } from "lucide-react";
import { NotificationDropdown } from "./NotificationDropdown";

import { UserDropdown } from "./UserDropdown";

export function Header() {
  return (
    <header
      className="flex items-center justify-between border-b bg-white px-6 py-4">
      <div
        className="flex items-center gap-3">
        <Search size={18} />
        <input
          placeholder="Search..."
          className="outline-none"/>
      </div>

      <div
        className="flex items-center gap-6">
        <NotificationDropdown />

        <UserDropdown />
      </div>
    </header>
  );
}
