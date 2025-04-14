"use client";
import { usePayloadData } from "@hooks";
import { useEffect } from "react";
import { useNavigationStore } from "@store";

interface SectionType {
  id: string;
  name: string;
  link: string;
}

export const Loader = () => {
  const sections = usePayloadData<SectionType>("/api/sections");
  const { setSections } = useNavigationStore();

  useEffect(() => {
    setSections(sections);
  }, [sections, setSections]);

  return null;
};
