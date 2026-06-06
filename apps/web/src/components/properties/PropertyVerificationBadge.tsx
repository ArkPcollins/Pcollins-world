import { CheckCircle, AlertTriangle } from "lucide-react";

interface Props {
  verified: boolean;
}

export function PropertyVerificationBadge({ verified }: Props) {
  return verified ? (
    <div
      className="
       inline-flex
       items-center
       gap-1
       rounded-full
       bg-green-100
       px-2
       py-1
       text-sm
       text-green-700
      "
    >
      <CheckCircle size={16} />
      Verified
    </div>
  ) : (
    <div
      className="
       inline-flex
       items-center
       gap-1
       rounded-full
       bg-yellow-100
       px-2
       py-1
       text-sm
       text-yellow-700
      "
    >
      <AlertTriangle size={16} />
      Pending Verification
    </div>
  );
}
