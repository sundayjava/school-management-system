import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Announcements } from "@/components/sections/announcements";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Announcements />
    </main>
  );
}
