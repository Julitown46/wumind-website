import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/modern-ai-technology-office-workspace-with-compute.jpg" alt="Equipo Wumind" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Sobre <span className="text-gradient">Nosotros</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Fundada en 2025 en Málaga, <span className="font-semibold text-foreground">Wumind</span> nace para
                ayudar a empresas a evolucionar con inteligencia artificial.
              </p>

              <p className="text-pretty">
                Dirigida por <span className="font-semibold text-foreground">Julián Moreno Cuenca</span>, nuestro equipo
                combina tecnología y visión humana para transformar procesos y potenciar resultados.
              </p>

              <p className="text-pretty">
                Creemos que la automatización inteligente no solo mejora la eficiencia, sino que libera el potencial
                humano para enfocarse en lo que realmente importa: la innovación y el crecimiento estratégico.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">2025</div>
                <div className="text-sm text-muted-foreground">Fundación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte IA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
