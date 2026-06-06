interface Props {
    children: React.ReactNode;
  }
  
  export function Card({
    children
  }: Props) {
    return (
      <div
        className="
          rounded-xl
          border
          bg-white
          p-4
          shadow-sm
        "
      >
        {children}
      </div>
    );
  }