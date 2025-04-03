import { notFound } from "next/navigation";

interface NavigationItem {
  link: string;
  title: string;
}

interface PageProps {
  params: Promise<{ sections: string }>;
}

export default async function Sections({ params }: PageProps) {
  const { sections: section } = await params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/navigationHome`
    );
    const data = await response.json();
    const foundSection = data.docs.find(
      (item: NavigationItem) => item.link === `/${section}`
    );

    return <h1>{foundSection.title}</h1>;
  } catch {
    notFound();
  }
}
