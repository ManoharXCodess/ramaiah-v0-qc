import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Eye, Settings, Database, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL"],
    icon: Code,
  },
  {
    title: "ML/AI Frameworks",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "FastAPI"],
    icon: Brain,
  },
  {
    title: "Computer Vision",
    skills: ["Object Detection", "Image Classification", "Segmentation", "YOLO", "SSD"],
    icon: Eye,
  },
  {
    title: "Annotation Tools",
    skills: ["CVAT", "Labelbox", "Roboflow", "Label Studio", "SuperAnnotate", "Amazon SageMaker Ground Truth"],
    icon: Settings,
  },
  {
    title: "Data Science",
    skills: ["Pandas", "Data Augmentation", "Model Evaluation", "Transfer Learning", "CNNs"],
    icon: Database,
  },
  {
    title: "Development Tools",
    skills: ["Git", "Linux", "Docker", "MLFlow", "Postman", "Excel"],
    icon: Wrench,
  },
  {
    title: "Professional Skills",
    skills: ["NLP & LLM Annotation", "Data Quality & Accuracy", "Collaboration", "Communication", "QA Processes"],
    icon: Users,
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 group cursor-pointer transition-all duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 bg-clip-text text-transparent group-hover:from-gray-100 group-hover:via-white group-hover:to-gray-200 transition-all duration-300 relative">
            Technical Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"></span>
          </span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-105 animate-slide-in-up group hover:border-gray-500/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-700"></div>

                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-700/30 rounded-lg group-hover:bg-gray-600/40 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-lg text-gray-200 group-hover:text-gray-100 font-bold text-balance flex-1 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs bg-gray-700/30 text-gray-300 border-gray-600/50 group-hover:bg-gray-600/40 group-hover:text-gray-200 group-hover:border-gray-500/50 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
