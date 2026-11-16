import type { Metadata } from "next";
import ServiceDetail from "../_components/service-detail";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/marketing-digital",
  "Marketing digital | TTDigitales",
  "Estrategia de contenidos, campañas digitales y posicionamiento para empresas y organizaciones.",
);

export default function DigitalMarketingPage() {
  return (
    <ServiceDetail
      title="Marketing digital"
      description="Definimos mensajes, contenidos y canales para comunicar lo que hacés y llegar a las personas indicadas."
      offerings={[
        "Campañas en Google Ads y SEO",
        "Estrategia de contenidos digitales",
        "Planificación de canales y mensajes",
        "Métricas y seguimiento de campañas",
      ]}
      context="Partimos de tus objetivos y del público al que querés llegar para proponer una estrategia medible."
    />
  );
}
