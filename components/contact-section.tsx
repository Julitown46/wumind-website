"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Hablemos de tu proyecto</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Estamos aquí para ayudarte a transformar tu negocio con IA
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="rounded-3xl border-2 shadow-xl">
            <CardContent className="pt-6 space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Málaga, España</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <a href="tel:+34684349897" className="text-muted-foreground hover:text-primary transition-colors">
                      684 349 897
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Atención 24/7 con chatbot</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:wumindagency@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      wumindagency@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground mb-4">Síguenos</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/wumindagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/wumindagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
