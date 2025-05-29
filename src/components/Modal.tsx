import { cn } from "@/lib/utils";

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

export function Modal({ className, children, isOpen, close }: ModalProps) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center",
        !isOpen && "hidden",
      )}
    >
      <button
        onClick={close}
        className="fixed z-10 h-full w-full bg-black/30 backdrop-blur-sm"
      />
      <div
        className={cn(
          "z-20 h-max w-11/12 overflow-hidden rounded-xl bg-black/80 text-white xl:w-[800px]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
