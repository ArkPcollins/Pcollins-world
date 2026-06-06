import { Heart } from "lucide-react";

interface Props {
  favorite: boolean;
  onClick: () => void;
}

export function FavoriteButton({
  favorite,

  onClick,
}: Props) {
  return (
    <button onClick={onClick}>
      <Heart fill={favorite ? "red" : "transparent"} />
    </button>
  );
}
