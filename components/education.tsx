import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Electrical and Electronics Engineering",
    institution: "St. Mary's Group of Institutions",
    period: "2016 – 2019",
    coursework: ["AI", "ML", "Computer Vision", "Data Structures", "Data Analytics"],
  },
  {
    degree: "Diploma (Polytechnic)",
    institution: "Bapatla Polytechnic College",
    period: "2012 – 2016",
    coursework: [],
  },
]

export function Education() {
  return (
    <section id="education" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 group cursor-pointer transition-all duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 bg-clip-text text-transparent group-hover:from-gray-100 group-hover:via-white group-hover:to-gray-200 transition-all duration-300 relative">
            Education
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"></span>
          </span>
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-[1.02] animate-slide-in-up group hover:border-gray-500/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-700"></div>

              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-700/30 rounded-lg group-hover:bg-gray-600/40 transition-all duration-300 group-hover:scale-110">
                    <GraduationCap className="w-6 h-6 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-200 group-hover:text-gray-100 font-bold text-balance transition-colors duration-300">
                      {edu.degree}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                      <span className="font-semibold text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {edu.institution}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              {edu.coursework.length > 0 && (
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-300 group-hover:text-gray-200 mb-2 transition-colors duration-300">
                      Relevant Coursework:
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {edu.coursework.join(", ")}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
