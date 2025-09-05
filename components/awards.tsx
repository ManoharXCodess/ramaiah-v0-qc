import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

const awards = [
  {
    title: "Gem Award",
    organization: "Centific Global Technologies",
    description:
      "Recognized for exceptional performance and contribution to data annotation quality and process improvement.",
  },
  {
    title: "Team Excellence Award",
    organization: "Centific Global Technologies",
    description: "Awarded for outstanding collaboration and leadership in cross-functional AI/ML projects.",
  },
]

export function Awards() {
  return (
    <section id="awards" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 group cursor-pointer transition-all duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 bg-clip-text text-transparent group-hover:from-gray-100 group-hover:via-white group-hover:to-gray-200 transition-all duration-300 relative">
            Awards & Recognition
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"></span>
          </span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-105 animate-slide-in-up group hover:border-gray-500/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 via-white to-gray-400 group-hover:w-full transition-all duration-700"></div>

              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-700/30 rounded-lg group-hover:bg-gray-600/40 transition-all duration-300 group-hover:scale-110">
                    <Award className="w-6 h-6 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-200 group-hover:text-gray-100 font-bold text-balance transition-colors duration-300">
                      {award.title}
                    </CardTitle>
                    <p className="text-gray-300 group-hover:text-gray-200 font-semibold transition-colors duration-300">
                      {award.organization}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 text-pretty transition-colors duration-300">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
