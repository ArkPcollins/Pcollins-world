import { Bell } from "lucide-react";
import { notificationStore } from "../../store/notification.store";

export function NotificationDropdown() {
  const { unreadCount} = notificationStore();

  return (
    <div
      className="relative">
      <button
        className="relative">
        <Bell />

        {unreadCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
}
