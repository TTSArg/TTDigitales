import type { Metadata } from "next";
import ServiceDetail from "../_components/service-detail";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/soluciones-logisticas",
  "Soluciones logísticas | TTDigitales",
  "Herramientas digitales y automatización de procesos para necesidades logísticas.",
);

export default function LogisticsSolutionsPage() {
  return (
    <ServiceDetail
      title="Soluciones logísticas"
      description="Analizamos necesidades de operación y gestión para definir herramientas digitales que acompañen los procesos logísticos."
      offerings={[
        "Relevamiento de procesos y necesidades de información",
        "Herramientas de gestión adaptadas al flujo de trabajo",
        "Digitalización y automatización de tareas",
        "Integración de indicadores para el seguimiento",
      ]}
      context="Cada operación es distinta. El alcance se define en conjunto a partir de los procesos y objetivos de tu organización."
    />
  );
}
