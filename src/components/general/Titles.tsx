import React from "react";

interface TitleProps {
  title: string;
  as?: "h1" | "h2";
}

export default function Titles({ title, as: Tag = "h1" }: TitleProps) {
  const sizeClass = {
    h1: "text-3xl md:text-4xl",
    h2: "text-2xl md:text-3xl",
  };

  return (
    <div className="py-14 md:py-20 flex justify-center">
      <Tag
        className={`font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r
           from-indigo-500 to-gray-300 ${sizeClass[Tag]}`}
      >
        {title}
      </Tag>
    </div>
  );
}
