import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Services } from '@/components/sections/Services';
import { Values } from '@/components/sections/Values';
import { HiringProcess } from '@/components/sections/HiringProcess';
import { Work } from '@/components/sections/Work';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Services />
      <Values />
      <HiringProcess />
      <Work />
      <ClosingCTA />
      <Contact />
    </>
  );
}
