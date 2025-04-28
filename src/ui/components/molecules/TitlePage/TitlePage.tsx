import { Text, LineDash } from "@components/atoms";
import { cn } from "@utils";

interface TitlePageProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const TitlePage = ({ title, subtitle, className }: TitlePageProps) => {
  return (
    <div className={cn("flex flex-col gap-y-[2px]", className)}>
      <Text variant="pageTitle" asChild="h1">
        {title}
      </Text>
      {subtitle && (
        <Text variant="pageSubTitle" asChild="h2" className="mb-[10px]">
          {subtitle}
        </Text>
      )}
      <LineDash />
    </div>
  );
};
