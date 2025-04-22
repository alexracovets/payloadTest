import { Text } from "@components/atoms";

interface TitlePageProps {
  title: string;
  subtitle: string;
}

export const TitlePage = ({ title, subtitle }: TitlePageProps) => {
  return (
    <div className="flex w-full flex-col gap-y-[2px]">
      <Text variant="pageTitle" asChild="h1">
        {title}
      </Text>
      <Text variant="pageSubTitle" asChild="h2">
        {subtitle}
      </Text>
    </div>
  );
};
