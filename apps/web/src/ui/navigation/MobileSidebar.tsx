import { X } from "lucide-react";

interface Props {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export function MobileSidebar({
  open,
  children,
  onClose
}: Props) {
  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      bg-black/50
    "
    >
      <div
        className="
        h-full
        w-72
        bg-white
        p-4
      "
      >
        <button
          onClick={onClose}
          className="mb-4"
        >
          <X />
        </button>

        {children}
      </div>
    </div>
  );
}