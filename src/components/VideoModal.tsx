"use client";

import { PlusCircle } from "lucide-react";
import { Modal } from "./Modal";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export function VideoModal({ isOpen, closeModal }: Props) {
  return (
    <Modal isOpen={isOpen} close={closeModal}>
      <iframe
        src="https://www.youtube.com/embed/LXb3EKWsInQ?si=94T9a4WZW8itThy9"
        className="aspect-video h-max w-full"
        loading="lazy"
        allowFullScreen
      />

      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p className="font-bold">Nome:</p>
            <p className="w-5/6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Favoritar</p>
            <PlusCircle className="cursor-pointer text-[#690A15]" />
          </div>
        </div>

        <div className="flex gap-2">
          <p className="font-bold">Data:</p>
          <p className="text-base-light">
            {new Date().toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>

        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <div className="flex gap-2">
          <p className="font-bold">Categorias:</p>
          <p className="text-base-light">Categoria 1, Categoria 2</p>
        </div>
      </div>
    </Modal>
  );
}
