import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Sparkles, Lightbulb, TrendingUp } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Automatización de Procesos Empresariales (RPA + IA)",
    description: "Bots inteligentes que optimizan tareas repetitivas y reducen errores.",
  },
  {
    icon: Bot,
    title: "Asistentes Virtuales y Chatbots Inteligentes",
    description: "Chatbots generativos para atención al cliente 24/7.",
  },
  {
    icon: Sparkles,
    title: "IA Generativa y Automatización Creativa",
    description: "Contenido y marketing automatizado con IA.",
  },
  {
    icon: Lightbulb,
    title: "Consultoría y Estrategia de Transformación Digital",
    description: "Auditoría y formación personalizada para tu empresa.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Servicios Principales</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Soluciones de automatización inteligente diseñadas para impulsar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 rounded-3xl overflow-hidden"
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
