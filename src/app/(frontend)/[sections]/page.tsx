

// import sectionsPages from "@data/pages/map/sections.json";

interface PageProps {
    params: Promise<{ sections: string }>;
};
export default async function Sections({ params }: PageProps) {
    const { sections: section } = await params;


    return (
      <div>
      {section}
      </div>
    );
}