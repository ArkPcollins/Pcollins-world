import { Modal } from "./Modal";
import { Button } from "../components/Button";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description: string;
  loading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmModal({
  open,
  title,
  description,
  loading,
  onConfirm,
  onClose
}: ConfirmModalProps) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
    >
      <p>{description}</p>

      <div
        className="
          mt-6
          flex
          justify-end
          gap-2
        "
      >
        <Button
          variant="ghost"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          loading={loading}
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
}