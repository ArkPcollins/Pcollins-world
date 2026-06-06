import {
    Dialog,
    DialogPanel,
    DialogTitle
  } from "@headlessui/react";
  
  interface ModalProps {
    open: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
  }
  
  export function Modal({
    open,
    title,
    children,
    onClose
  }: ModalProps) {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        className="relative z-50"
      >
        <div
          className="
            fixed
            inset-0
            bg-black/50
          "
        />
  
        <div
          className="
            fixed
            inset-0
            flex
            items-center
            justify-center
            p-4
          "
        >
          <DialogPanel
            className="
              w-full
              max-w-lg
              rounded-xl
              bg-white
              p-6
            "
          >
            <DialogTitle
              className="
                text-xl
                font-semibold
              "
            >
              {title}
            </DialogTitle>
  
            <div className="mt-4">
              {children}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    );
  }