import type { Metadata } from "next";
import ServiceDetail from "../_components/service-detail";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/gis-y-analisis-territorial",
  "GIS y análisis territorial | TTDigitales",
  "Análisis territorial, sistemas de información geográfica, cartografía web e indicadores.",
);

export default function GisPage() {
  return (
    <ServiceDetail
      title="GIS y análisis territorial"
      description="Transformamos datos espaciales y territoriales en análisis, mapas e indicadores para apoyar decisiones."
      offerings={[
        "Diagnóstico territorial y análisis urbano",
        "Sistemas de información geográfica y cartografía web",
        "Tableros de indicadores y análisis de datos",
        "Evaluación de impacto de proyectos",
      ]}
      context="Definimos las preguntas que necesitás responder, las fuentes disponibles y la forma más clara de presentar los resultados."
    />
  );
}
