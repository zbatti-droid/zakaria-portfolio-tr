import { skillsInterface } from "@/config/skills";

interface SkillsPillsProps {
  skills: skillsInterface[];
}

export default function SkillsPills({ skills }: SkillsPillsProps) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-wrap justify-center gap-2">
      {skills.map((skill) => (
        <span
          key={skill.name}
          title={skill.description}
          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-3 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
        >
          <skill.icon
            size={17}
            aria-hidden="true"
            className="h-[17px] w-[17px] shrink-0 text-primary"
          />
          <span>{skill.name}</span>
        </span>
      ))}
    </div>
  );
}
