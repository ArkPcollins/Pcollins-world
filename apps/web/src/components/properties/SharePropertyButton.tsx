import { Share2 } from "lucide-react";
import toast from "react-hot-toast";

interface Props {
  propertyId: string;
}

export function SharePropertyButton({ propertyId }: Props) {
  const share = async () => {
    const url = `${window.location.origin}/properties/${propertyId}`;

    await navigator.clipboard.writeText(url);

    toast.success("Property link copied");
  };

  return (
    <button
      onClick={share}
      className="
    flex
    items-center
    gap-2
   "
    >
      <Share2 size={18} />
      Share
    </button>
  );
}
