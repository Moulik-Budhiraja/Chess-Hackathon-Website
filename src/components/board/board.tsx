"use client";

import { cn } from "@/lib/utils";

type Props = {
  width: number;
  height: number;
  className?: string;
  children?: React.ReactNode;
};

export default function Board({ width, height, className, children }: Props) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-lg",
        className,
      )}
    >
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${width}, 1fr)`,
          gridTemplateRows: `repeat(${height}, 1fr)`,
        }}
      >
        {Array.from({ length: width * height }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "aspect-square w-full backdrop-blur-sm",
              ((index % width) + Math.floor(index / width)) % 2 === 0
                ? "bg-[#777]/40"
                : "bg-[#333]/40",
            )}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
