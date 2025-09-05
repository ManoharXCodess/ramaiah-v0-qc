import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Briefcase, Target, CheckCircle } from "lucide-react"

const experiences = [
  {
    title: "Data Annotation Specialist",
    company: "Dexian India Technologies",
    location: "Chennai, Tamil Nadu",
    period: "June 2024 – Present",
    responsibilities: [
      "Managed end-to-end image annotation lifecycle, including quality audits, tool setup (CVAT, Labelbox), and SOP development",
      "Developed and fine-tuned computer vision models (YOLOv5, TensorFlow) for plant disease detection, CCTV surveillance, and retail classification",
      "Collaborated with data scientists to structure high-quality datasets for model training and evaluation",
      "Validated sensor/image alignment across multiple agricultural cycles and domains",
      "Performed QA on annotations and conducted peer reviews to maintain labeling accuracy",
    ],
  },
  {
    title: "Quality Analyst – Data Annotation",
    company: "Centific Global Technologies Pvt Ltd",
    location: "Hyderabad",
    period: "Feb 2023 – May 2024",
    responsibilities: [
      "Developed data visualizations and reports to communicate key findings to stakeholders, enabling data-driven decision-making for AI model improvements",
      "Annotated thousands of images using CVAT, Labelbox, and Roboflow for classification and segmentation tasks",
      "Implemented internal QA checklists, reducing labeling errors and rework",
      "Annotated 2D/3D image and video data using tools like CVAT and Roboflow for computer vision projects",
      "Worked closely with AI engineers to refine datasets for deep learning pipelines",
      "Performed multi-annotator reviews and developed annotation SOPs",
      "Maintained dataset integrity across multiple projects with 95%+ QA accuracy",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 group cursor-pointer">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 bg-clip-text text-transparent transition-all duration-500 group-hover:from-white group-hover:via-gray-100 group-hover:to-gray-200 group-hover:scale-105 inline-block">
            Professional Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <Card className="relative glass-effect border border-gray-600/30 shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 hover:scale-[1.02] animate-slide-in-up overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <CardHeader className="relative">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-gray-600/30 to-gray-700/30 rounded-xl group-hover:from-gray-500/40 group-hover:to-gray-600/40 transition-all duration-300">
                      <Briefcase className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-200 font-bold group-hover:text-white transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-3">
                        <span className="font-semibold text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                          {exp.company}
                        </span>
                        <div className="flex items-center gap-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 bg-gray-600/20 rounded-lg group-hover:bg-gray-500/30 transition-all duration-300">
                      <Target className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Key Responsibilities:
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className="p-1 bg-gray-600/20 rounded-full mt-1 group-hover:bg-gray-500/30 transition-all duration-300">
                          <CheckCircle className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                        </div>
                        <span className="text-pretty text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
