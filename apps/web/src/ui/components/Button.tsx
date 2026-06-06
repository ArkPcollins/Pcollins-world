import clsx from "clsx";

// 1. Extend your custom properties with native button attributes
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  loading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  loading,
  className,    // Pull className out so you can pass extra classes if needed
  onClick,      // Included in native attributes, but handled explicitly if preferred
  type = "button", // Default to "button" so it doesn't accidentally trigger forms
  ...props      // 👇 Gather all remaining native attributes (like type, disabled, id, etc.)
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || props.disabled} // Disables if loading OR explicitly set to disabled
      className={clsx(
        "px-4 py-2 rounded-lg",
        "font-medium",
        "transition",
        {
          "bg-primary text-white": variant === "primary",
          "bg-secondary text-white": variant === "secondary",
          "bg-red-500 text-white": variant === "danger",
          "border": variant === "ghost",
          "opacity-50 cursor-not-allowed": loading // Visual anchor for disabled state
        },
        className // Appends any extra utility classes passed from the outside
      )}
      {...props} // 👇 Spreads native props directly onto the element
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
