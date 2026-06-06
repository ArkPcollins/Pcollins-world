import { Button } from "@/ui";

interface Props {
  userId: string;
}

export function UserActions({ userId }: Props) {
  return (
    <div
      className="
     flex
     gap-2
    "
    >
      <Button>Suspend</Button>

      <Button>Activate</Button>

      <Button>Promote Role</Button>

      <Button>Reset Account</Button>
    </div>
  );
}
