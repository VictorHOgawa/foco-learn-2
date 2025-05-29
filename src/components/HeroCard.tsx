"use client";
import { Info, PlayCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { RandomHeroProps } from "./Hero";
import { VideoModal } from "./VideoModal";

interface HeroCardProps {
  randomHero: RandomHeroProps;
}

export function HeroCard({ randomHero }: HeroCardProps) {
  console.log("randomHero: ", randomHero);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="hero">
        <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
          <Image
            width={2000}
            height={1200}
            src="/assets/background.png"
            alt="trending-movie"
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-[#131116] to-50%"></div>
        </div>

        <div className="mt-20 flex flex-col gap-8 p-8">
          <h1 className="max-w-80 text-4xl font-bold text-white">
            {randomHero.title}
            {/* {trendingMovie?.title || trendingMovie?.name} */}
          </h1>

          <p className="max-w-[600px] text-base text-white xl:text-lg">
            {/* {trendingMovie?.overview} */}
            {randomHero.overview}
          </p>

          <div className="flex items-center gap-4">
            <button
              className="text-body-bold flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-3 transition duration-200 hover:bg-[#690A15] hover:text-white"
              onClick={openModal}
            >
              <PlayCircle /> Acessar
            </button>
            <button
              className="text-body-bold flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-3 transition duration-200 hover:bg-[#690A15] hover:text-white"
              onClick={openModal}
            >
              <Info /> Saiba Mais
            </button>
          </div>
        </div>
      </div>

      {showModal && <VideoModal isOpen={showModal} closeModal={closeModal} />}
    </>
  );
}
