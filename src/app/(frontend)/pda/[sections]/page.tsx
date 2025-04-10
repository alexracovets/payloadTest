"use client";

import { use } from "react";

interface PageProps {
  params: Promise<{ sections: string }>;
}

export default function Sections({ params }: PageProps) {
  const resolvedParams = use(params);
  const { sections: section } = resolvedParams;

  return <h1 className="text-white">{section}</h1>;
}
