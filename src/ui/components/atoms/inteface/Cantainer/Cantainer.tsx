"use client";

import { Scrollbars } from "react-custom-scrollbars-2";
import { useState, useEffect } from "react";

import { ChildrenType } from "@types";
import { cn } from "@utils";

interface ContainerProps {
  children: ChildrenType["children"];
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Scrollbars
      className="flex flex-grow h-full transition-all ease-in-out duration-1000"
      autoHide
      renderThumbVertical={thumb}
      renderTrackVertical={track}
      hideTracksWhenNotNeeded
    >
      <div className={cn("w-full h-full py-[16px] pr-[16px]", className)}>
        {children}
      </div>
    </Scrollbars >
  )
};


const thumb = () => {
  return (
    <div
      className="transition-opacity ease-in-out duration-1000"
      style={{
        backgroundColor: "#E6981C",
        borderRadius: "2px",
        width: "2px",
      }}
    />
  );
}
const track = () => {
  return (
    <div
      className="transition-opacity ease-in-out duration-1000"
      style={{
        backgroundColor: "#1C1C1C",
        borderRadius: "2px",
        width: "2px",
        right: "0",
        top: "5%",
        position: "absolute",
        height: "90%",
      }}
    />
  );
}