import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { Features } from "@/components/sections/features";
import { WhyLearn } from "@/components/sections/why-learn";
import { QuickLinks } from "@/components/sections/quick-links";
import { RibbonStrip } from "@/components/sections/ribbon-strip";
import { Journey } from "@/components/sections/journey";
import { AcademicCalendar } from "@/components/sections/academic-calendar";
import { Testimonials } from "@/components/sections/testimonials";
import { Announcements } from "@/components/sections/announcements";
import { SecureFuture } from "@/components/sections/secure-future";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Welcome />
      <Features />
      <WhyLearn />
      <QuickLinks />
      <RibbonStrip />
      <Journey />
      <AcademicCalendar />
      <Testimonials />
      <Announcements />
      <SecureFuture />
    </main>
  );
}
