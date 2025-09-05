import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Cpu, Zap, Star } from "lucide-react"

const projects = [
  {
    title: "Real-Time Object Detection System",
    description:
      "Developed an AI-powered object detection system using OpenCV and TensorFlow, capable of detecting objects in real-time video streams and images. Leveraged transfer learning techniques to fine-tune pre-trained models and improve accuracy.",
    technologies: ["OpenCV", "TensorFlow", "YOLOv5", "Python", "Transfer Learning"],
    highlights: [
      "Real-time object detection in video streams",
      "Transfer learning for improved accuracy",
      "Multi-object tracking for retail products",
      "CCTV surveillance integration",
    ],
  },
  {
    title: "AI Model Training and Deployment Pipeline",
    description:
      "Built an end-to-end AI model training and deployment pipeline using TensorFlow and cloud infrastructure (AWS/GCP) for seamless model updates and scalability. Implemented automated data preprocessing pipeline.",
    technologies: ["TensorFlow", "AWS", "GCP", "Docker", "MLFlow", "Python"],
    highlights: [
      "End-to-end ML pipeline automation",
      "Cloud infrastructure deployment",
      "Automated feature extraction",
      "Model evaluation and monitoring",
      "Scalable architecture design",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 group cursor-pointer transition-all duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 bg-clip-text text-transparent group-hover:from-gray-100 group-hover:via-white group-hover:to-gray-200 transition-all duration-300 relative">
            Featured Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"></span>
          </span>
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-[1.02] animate-slide-in-up group hover:border-gray-500/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-700"></div>

              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-700/30 rounded-lg group-hover:bg-gray-600/40 transition-all duration-300 group-hover:scale-110">
                    <Cpu className="w-6 h-6 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-gray-200 group-hover:text-gray-100 font-bold text-balance flex-1 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 group-hover:text-gray-200 text-pretty transition-colors duration-300">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                    <h4 className="font-semibold text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Key Highlights:
                    </h4>
                  </div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <Zap className="w-3 h-3 text-gray-400 group-hover:text-gray-200 mt-1 flex-shrink-0 transition-colors duration-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-gray-700/30 text-gray-300 border-gray-600/50 group-hover:bg-gray-600/40 group-hover:text-gray-200 group-hover:border-gray-500/50 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2 bg-gray-800/30 text-gray-300 border-gray-600/50 hover:bg-gray-700/40 hover:text-gray-200 hover:border-gray-500/50 backdrop-blur-sm transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2 bg-gray-800/30 text-gray-300 border-gray-600/50 hover:bg-gray-700/40 hover:text-gray-200 hover:border-gray-500/50 backdrop-blur-sm transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
