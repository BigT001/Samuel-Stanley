import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
	{
		title: "Frontend",
		description: "Technologies and frameworks for building user interfaces",
		skills: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"HTML",
			"CSS",
			"Tailwind CSS",
			"Framer Motion",
			"Redux",
		],
	},
	{
		title: "Backend",
		description: "Server-side technologies and databases",
		skills: [
			"Node.js",
			"Express",
			"NestJS",
			"MongoDB",
			"PostgreSQL",
			"MySQL",
			"Prisma",
			"GraphQL",
			"REST API",
		],
	},
	{
		title: "AI & Machine Learning",
		description: "Tools and libraries for AI development",
		skills: [
			"Python",
			"TensorFlow",
			"PyTorch",
			"OpenAI API",
			"Hugging Face",
			"Scikit-learn",
			"Pandas",
			"NumPy",
		],
	},
	{
		title: "DevOps & Tools",
		description: "Development tools and deployment platforms",
		skills: [
			"Git",
			"GitHub",
			"Docker",
			"AWS",
			"Vercel",
			"CI/CD",
			"Jest",
			"Cypress",
			"Webpack",
		],
	},
]

export function SkillsSection() {
	return (
		<section id="skills" className="border-b border-zinc-200 dark:border-zinc-800">
			<div className="container py-12 md:py-24">
				<h2 className="text-3xl font-bold tracking-tighter mb-8 text-black dark:text-white transition-colors">Skills</h2>
				<div className="grid md:grid-cols-2 gap-6">
					{skillCategories.map((category, index) => (
						<Card key={index} className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 transition-colors hover:shadow-lg">
							<CardHeader>
								<CardTitle className="text-black dark:text-white transition-colors">{category.title}</CardTitle>
								<CardDescription className="text-zinc-600 dark:text-zinc-400 transition-colors">{category.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill, skillIndex) => (
										<Badge 
											key={skillIndex} 
											variant="secondary"
											className="bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border border-zinc-200 dark:border-zinc-700 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700"
										>
											{skill}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
