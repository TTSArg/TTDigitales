import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ttdigitales.com.ar"),
  title: "TTDigitales | Tecnología y Territorios Digitales",
  description:
    "Desarrollo web, marketing digital y análisis territorial para empresas, organizaciones y gobiernos.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "TTDigitales",
    title: "TTDigitales | Tecnología y Territorios Digitales",
    description:
      "Desarrollo web, marketing digital y análisis territorial para empresas, organizaciones y gobiernos.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="site-header">
          <div className="container nav">
            <Link className="brand" href="/">
              TTDigitales
            </Link>
            <nav aria-label="Navegación principal">
              <Link href="/">Inicio</Link>
              <Link href="/servicios">Servicios</Link>
              <Link href="/proyectos">Proyectos</Link>
              <Link href="/nosotros">Nosotros</Link>
            </nav>
            <Link className="button button-primary button-small" href="/contacto">
              Contacto
            </Link>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container">
            <p>© 2026 TTDigitales. Tecnología y Territorios Digitales.</p>
            <nav aria-label="Navegación del pie de página">
              <Link href="/servicios">Servicios</Link>
              <Link href="/proyectos">Proyectos</Link>
              <Link href="/nosotros">Nosotros</Link>
              <Link href="/contacto">Contacto</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
