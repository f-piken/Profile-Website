import Navbar from "@/components/Navbar";
import SkillShowcase from "@/components/SkillShowcase";
import { PageTransition } from "@/components/PageTransition";

export const metadata = {
  title: "Skills | Fiky Prayoga",
  description: "Skills and technologies used by Fiky Prayoga.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <PageTransition><SkillShowcase /></PageTransition>
    </>
  );
}
