interface AvatarProps {
    src?: string;
    name?: string;
  }
  
  export function Avatar({
    src,
    name
  }: AvatarProps) {
    if (src) {
      return (
        <img
          src={src}
          alt={name}
          className="
            h-10
            w-10
            rounded-full
            object-cover
          "
        />
      );
    }
  
    const initials =
      name
        ?.split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2) || "?";
  
    return (
      <div
        className="
          h-10
          w-10
          rounded-full
          bg-slate-800
          text-white
          flex
          items-center
          justify-center
        "
      >
        {initials}
      </div>
    );
  }