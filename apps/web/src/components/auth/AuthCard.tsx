interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function AuthCard({
  title,

  subtitle,

  children,
}: Props) {
  return (
    <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold">{title} </h1>

      {subtitle && <p className="mt-2 text-slate-500">{subtitle}</p>}

      <div className="mt-6">{children}</div>
    </div>
  );
}
