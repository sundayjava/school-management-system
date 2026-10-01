import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { Features } from "@/components/sections/features";
import { Announcements } from "@/components/sections/announcements";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Welcome />
      <Features />
      <Announcements />
    </main>
  );
}
