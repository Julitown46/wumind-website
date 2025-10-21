"use client"

import { FileText, MessageCircle, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServiceExamplesSection() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Ejemplos de Automatización
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones de IA pueden transformar tu negocio
          </p>
        </div>

        <div className="space-y-8">
          {/* Invoice Automation */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent border border-purple-500/20 p-8 md:p-10 hover:border-purple-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-all duration-500" />
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Automatización de Facturas para PYMEs</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Olvídate de la gestión manual de facturas. Sube un PDF o una foto de tu factura a una carpeta de Drive
                  o a un chat de Telegram, y nuestro sistema se encarga del resto. Las facturas se organizan
                  automáticamente por año y trimestre, y toda la información relevante se almacena en un Excel
                  totalmente personalizado según tus necesidades. Ahorra horas de trabajo administrativo cada mes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-medium">
                    Drive Integration
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-medium">
                    Telegram Bot
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-medium">
                    Excel Automation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Chatbot */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent border border-blue-500/20 p-8 md:p-10 hover:border-blue-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-500" />
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Chatbot de WhatsApp 24/7 Personalizable</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Atención al cliente que nunca duerme. Nuestro chatbot inteligente para WhatsApp está disponible las 24
                  horas, totalmente personalizado para tu negocio. Perfecto para restaurantes que quieren automatizar
                  reservas de mesas, o distribuidoras que necesitan recibir y almacenar pedidos en una base de datos.
                  Incluye la opción de recibir llamadas telefónicas automáticas. Automatiza completamente tu atención al
                  cliente y nunca pierdas una oportunidad de negocio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    WhatsApp Business
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    Reservas Automáticas
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    Gestión de Pedidos
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    Llamadas Automáticas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Manager */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/10 via-indigo-600/5 to-transparent border border-indigo-500/20 p-8 md:p-10 hover:border-indigo-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 group-hover:bg-indigo-500/20 transition-all duration-500" />
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Gestor Inteligente de Correo Electrónico</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tu asistente personal de email impulsado por IA. Filtra automáticamente los correos importantes,
                  responde cuando es necesario y se adapta completamente a tu estilo de comunicación. Genera alertas
                  inteligentes cuando necesita tu intervención o cuando recibe correos de contactos prioritarios.
                  Personalizable al 100% para que se ajuste a las necesidades específicas de tu empresa. Recupera horas
                  de tu día y enfócate en lo que realmente importa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                    Filtrado Inteligente
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                    Respuestas Automáticas
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                    Alertas Personalizadas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-purple-600 to-blue-600 p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Las Posibilidades son Infinitas</h3>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Si tienes una empresa y quieres empezar a ahorrar tiempo y dinero en tareas repetitivas, automatiza lo que
              no necesita tu atención y enfócate en hacer crecer tu negocio. Descubre cómo la IA puede transformar tu
              forma de trabajar.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Solicita tu Consultoría Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
