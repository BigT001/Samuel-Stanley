import { BentoGrid } from "@/components/bento-grid"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  title: string
  skills: string[]
  className?: string
}

function SkillCard({ title, skills, className }: SkillCardProps) {
  return (
    <div className={`rounded-lg border bg-card p-6 shadow-sm ${className}`}>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="px-2 py-0.5 text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL", "MySQL", "Prisma", "GraphQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Scikit-learn"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Cypress"],
    },
  ]

  return (
    <BentoGrid>
      {skillCategories.map((category, index) => (
        <SkillCard
          key={category.title}
          title={category.title}
          skills={category.skills}
          className={index === 0 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  )
}
