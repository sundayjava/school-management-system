import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { Features } from "@/components/sections/features";
import { WhyLearn } from "@/components/sections/why-learn";
import { QuickLinks } from "@/components/sections/quick-links";
import { Announcements } from "@/components/sections/announcements";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Welcome />
      <Features />
      <WhyLearn />
      <QuickLinks />
      <Announcements />
    </main>
  );
}
