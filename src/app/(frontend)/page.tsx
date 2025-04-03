import { HomeMenu } from "@components/organisms";
import { HomeVideo } from "@components/atoms";
import { generateMetadata } from "@utils";

export const metadata = generateMetadata({
  title: "Головна",
  description: "Ласкаво просимо в базу даних Stalker 2",
});

export default function Home() {
  return (
    <main className="flex justify-between w-full h-full">
      <HomeMenu />
      <HomeVideo />
    </main>
  );
};