import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Wumind - Agencia de Automatización con IA",
  description:
    "Automatiza tu negocio con inteligencia artificial. Wumind impulsa empresas con automatización inteligente, asistentes virtuales y estrategias digitales personalizadas.",
  generator: "v0.app",
  icons: {
    icon: "/logo-wumind.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
