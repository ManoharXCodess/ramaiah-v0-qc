import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 group cursor-pointer transition-all duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 bg-clip-text text-transparent group-hover:from-gray-100 group-hover:via-white group-hover:to-gray-200 transition-all duration-300 relative">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"></span>
          </span>
        </h2>
        <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl hover:shadow-white/10 transition-all duration-500 animate-slide-in-up group hover:border-gray-500/50">
          <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-700"></div>

          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-700/30 rounded-lg group-hover:bg-gray-600/40 transition-all duration-300 group-hover:scale-110">
                <User className="w-8 h-8 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-lg text-gray-300 group-hover:text-gray-200 leading-relaxed text-pretty transition-colors duration-300">
                  I am a motivated and detail-oriented AI/ML Engineer with 2 years of hands-on experience in Python
                  programming, computer vision, and image annotation workflows. My expertise lies in building and
                  optimizing models for object detection, image classification, and segmentation. I have a proven track
                  record of developing AI-driven solutions for real-world problems and contributing to high-impact ML
                  projects.
                </p>
                <p className="text-lg text-gray-300 group-hover:text-gray-200 leading-relaxed text-pretty transition-colors duration-300">
                  Throughout my career, I have worked extensively with cutting-edge technologies including YOLOv5,
                  TensorFlow, PyTorch, and various annotation tools like CVAT and Labelbox. I am passionate about
                  leveraging artificial intelligence to solve complex challenges in industries ranging from agriculture
                  to retail surveillance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
