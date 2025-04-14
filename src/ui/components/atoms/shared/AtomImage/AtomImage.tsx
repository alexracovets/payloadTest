"use client";

import Image from "next/image";
import { cn } from "@utils";

interface AtomImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export const AtomImage = ({
  src,
  alt,
  className,
  fill,
  sizes,
  priority,
}: AtomImageProps) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={cn(fill && "object-cover")}
      />
    </div>
  );
};
