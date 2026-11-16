import type { Metadata } from "next";
import ServiceDetail from "../_components/service-detail";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/software-a-medida",
  "Software a medida | TTDigitales",
  "Sistemas de gestión, herramientas a medida y automatización de procesos para organizaciones.",
);

export default function CustomSoftwarePage() {
  return (
    <ServiceDetail
      title="Software a medida"
      description="Diseñamos herramientas digitales según las necesidades de gestión y los procesos de cada organización."
      offerings={[
        "Sistemas de gestión y herramientas a medida",
        "Digitalización y automatización de procesos",
        "Integración de datos y tableros de indicadores",
        "Análisis de requerimientos y consultoría tecnológica",
      ]}
      context="Empezamos por entender cómo trabajás, qué información necesitás y qué debe resolver la herramienta."
    />
  );
}
