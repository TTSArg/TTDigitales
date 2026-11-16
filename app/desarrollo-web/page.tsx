import type { Metadata } from "next";
import ServiceDetail from "../_components/service-detail";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/desarrollo-web",
  "Desarrollo web | TTDigitales",
  "Sitios web y landing pages institucionales, diseñados para comunicar con claridad.",
);

export default function WebDevelopmentPage() {
  return (
    <ServiceDetail
      title="Desarrollo web"
      description="Creamos sitios web y landing pages institucionales para presentar con claridad lo que hace tu organización."
      offerings={[
        "Sitios web institucionales",
        "Landing pages para proyectos y campañas",
        "Integración de mapas, datos y tableros web",
        "Consultoría tecnológica y análisis de requerimientos",
      ]}
      context="Relevamos tus objetivos, contenidos y necesidades para definir el alcance y las herramientas adecuadas."
    />
  );
}
