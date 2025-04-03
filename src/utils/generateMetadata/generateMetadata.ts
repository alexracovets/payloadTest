import type { Metadata } from "next";

type MetaParams = {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
};

export const generateMetadata = ({
    title,
    description,
    keywords = ["stalker", "game", "database"],
}: MetaParams): Metadata => {
    return {
        title: `${title} | Stalker 2`,
        description,
        keywords,
        icons: {
            icon: '/favicon.ico',
        },
        openGraph: {
            title: `${title} | Stalker 2`,
            description,
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Stalker 2`,
            description,
        },
    };
};