type BadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "default";

interface Props {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

export function Badge({
  children,
  variant = "default"
}: Props) {
  return (
    <span
      className={`
        px-2 py-1 rounded-full text-xs

        ${
          variant === "success"
            ? "bg-green-100 text-green-700"
            : ""
        }

        ${
          variant === "warning"
            ? "bg-yellow-100 text-yellow-700"
            : ""
        }

        ${
          variant === "danger"
            ? "bg-red-100 text-red-700"
            : ""
        }

        ${
          variant === "default"
            ? "bg-slate-100 text-slate-700"
            : ""
        }
      `}
    >
      {children}
    </span>
  );
}