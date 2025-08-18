import { Button } from "@/components/buttons";
import { CardUsers } from "@/components/cardUsers";
import { ContainerGRID } from "@/components/containerGRID";
import { SectionApp } from "@/components/sectionComponents/home/sectionApp";
import { SectionHero } from "@/components/sectionComponents/home/sectionHero/sectionHero";

export default function Home() {
  return (
     <>
     <SectionHero/>
     <SectionApp/>
     </>
  );
}
