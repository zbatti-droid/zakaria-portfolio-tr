import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsPills from "@/components/skills/skills-pills";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <SkillsPills skills={skills} />
    </PageContainer>
  );
}
