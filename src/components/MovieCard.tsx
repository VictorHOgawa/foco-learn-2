"use client";

import Image from "next/image";
import { useState } from "react";
import { VideoModal } from "./VideoModal";

export function MovieCard({ thumbs }: { thumbs: string }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div
        className="relative h-24 min-w-48 cursor-pointer hover:outline-white sm:h-32 sm:min-w-60 md:h-36 md:min-w-72"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openModal();
        }}
      >
        <Image
          src={thumbs}
          className="h-full w-full object-cover"
          width={600}
          height={200}
          alt={""}
        />
        <div className="border"></div>
      </div>

      {showModal && <VideoModal isOpen={showModal} closeModal={closeModal} />}
    </>
  );
}
