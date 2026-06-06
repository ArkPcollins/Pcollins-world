interface Props {
  remaining: number;
}

export function LowStockAlert({ remaining }: Props) {
  return (
    <div
      className="
    bg-orange-100
    text-orange-700
    p-3
    rounded-lg
    "
    >
      Only {remaining}
      left in stock
    </div>
  );
}
