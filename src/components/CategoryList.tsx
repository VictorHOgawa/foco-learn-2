"use client";

import { MovieCard } from "./MovieCard";

interface Props {
  title: string;
  thumbs: string[];
}

const CategoryList = ({ title, thumbs }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden">
      <h1 className="font-bold text-white">{title}</h1>

      <div className="no-scrollbar flex w-full gap-2 overflow-x-scroll overflow-y-hidden">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
          <MovieCard
            key={"move" + index}
            thumbs={thumbs[Math.floor(Math.random() * 4)]}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
