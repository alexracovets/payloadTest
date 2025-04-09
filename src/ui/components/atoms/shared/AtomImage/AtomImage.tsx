"use client";

import Image from "next/image";
import { cn } from "@utils";

interface AtomImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
}

export const AtomImage = ({ src, alt, className, fill }: AtomImageProps) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={cn(fill && "object-cover")}
      />
    </div>
  );
};
