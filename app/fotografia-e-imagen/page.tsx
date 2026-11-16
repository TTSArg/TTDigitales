import type { Metadata } from "next";
import ServiceDetail from "../_components/service-detail";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/fotografia-e-imagen",
  "Fotografía e imagen | TTDigitales",
  "Fotografía, producción audiovisual e identidad visual para comunicar proyectos y organizaciones.",
);

export default function PhotographyPage() {
  return (
    <ServiceDetail
      title="Fotografía e imagen"
      description="Producimos contenidos audiovisuales y piezas de comunicación para presentar proyectos y organizaciones con coherencia."
      offerings={[
        "Fotografía y producción de contenido audiovisual",
        "Guía y registro de contenidos audiovisuales",
        "Identidad visual y piezas publicitarias",
        "Edición e integración de materiales en canales digitales",
      ]}
      context="Acordamos el mensaje, los formatos y los canales antes de producir el material."
    />
  );
}
