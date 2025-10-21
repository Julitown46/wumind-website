"use client"

import Image from "next/image"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/logo-wumind-simplified.png"
              alt="Wumind Logo"
              width={140}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-secondary-foreground/80 leading-relaxed">
              Agencia de automatización con IA que impulsa la transformación digital de tu negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre-nosotros")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Málaga, España</li>
              <li>
                <a href="tel:+34684349897" className="hover:text-secondary-foreground transition-colors">
                  684 349 897
                </a>
              </li>
              <li>
                <a
                  href="mailto:wumindagency@gmail.com"
                  className="hover:text-secondary-foreground transition-colors break-all"
                >
                  wumindagency@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/60">
          <p>© 2025 Wumind. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
