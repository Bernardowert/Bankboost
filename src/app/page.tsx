import { SectionApp } from "@/components/sectionComponents/home/sectionApp";
import { SectionHero } from "@/components/sectionComponents/home/sectionHero/sectionHero";
import { SectionUsers } from "@/components/sectionComponents/home/sectionUsers";

export default function Home() {
  return (
     <>
     <SectionHero/>
     <SectionApp/>
     <SectionUsers/>
     </>
  );
}
