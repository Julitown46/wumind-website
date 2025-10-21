import { Lightbulb, Settings, Rocket } from "lucide-react"

const reasons = [
  {
    icon: Lightbulb,
    title: "Tecnología que entiende tu negocio",
    description: "Soluciones personalizadas que se adaptan a tus necesidades específicas.",
  },
  {
    icon: Settings,
    title: "Automatización sin complicaciones",
    description: "Implementación sencilla y soporte continuo para tu tranquilidad.",
  },
  {
    icon: Rocket,
    title: "Resultados medibles y crecimiento real",
    description: "Métricas claras que demuestran el impacto en tu negocio.",
  },
]

export function WhyWumindSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Por qué <span className="text-gradient">Wumind</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{reason.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
