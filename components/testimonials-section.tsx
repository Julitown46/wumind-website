import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    company: "TechStart Solutions",
    role: "CEO",
    content:
      "Wumind transformó completamente nuestros procesos. La automatización nos ha permitido reducir costes en un 40% y mejorar la satisfacción del cliente.",
    rating: 5,
  },
  {
    name: "Carlos Ruiz",
    company: "Innovate Digital",
    role: "Director de Operaciones",
    content:
      "El chatbot inteligente que implementaron ha revolucionado nuestra atención al cliente. Respuestas instantáneas 24/7 con una calidad excepcional.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    company: "Retail Plus",
    role: "Gerente General",
    content:
      "La consultoría de Wumind nos ayudó a identificar oportunidades de automatización que ni siquiera habíamos considerado. Resultados impresionantes.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Casos de éxito que demuestran el poder de la automatización inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 rounded-3xl border-2"
            >
              <CardContent className="pt-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-pretty">"{testimonial.content}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} en {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
