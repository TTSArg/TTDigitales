import type { Metadata } from "next";
import Link from "next/link";
import ProcessExplorer from "../_components/process-explorer";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/servicios",
  "Servicios | TTDigitales",
  "Desarrollo web, software a medida, marketing digital, GIS, soluciones logísticas y producción de imagen.",
);

const serviceGroups = [
  {
    title: "Desarrollo y software",
    color: "blue",
    links: [
      ["/desarrollo-web", "Desarrollo web"],
      ["/software-a-medida", "Software a medida"],
      ["/soluciones-logisticas", "Soluciones logísticas"],
    ],
  },
  {
    title: "Marketing y comunicación",
    color: "teal",
    links: [
      ["/marketing-digital", "Marketing digital"],
      ["/fotografia-e-imagen", "Fotografía e imagen"],
    ],
  },
  {
    title: "Territorio y datos",
    color: "green",
    links: [["/gis-y-analisis-territorial", "GIS y análisis territorial"]],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">TTDigitales</p>
          <h1>Servicios para ordenar ideas y convertirlas en soluciones.</h1>
          <p className="lead">
            Combinamos tecnología, comunicación y análisis territorial para
            empresas, organizaciones y gobiernos.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Qué hacemos</h2>
          <div className="service-grid">
            {serviceGroups.map((group) => (
              <article
                className={`service-card ${group.color}`}
                key={group.title}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map(([href, label]) => (
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="strategy-note">
            Consolidamos la imagen, el posicionamiento y la identidad de cada
            organización a través de su sitio web, campañas puntuales y
            materiales visuales. Es una mirada estratégica y de largo plazo,
            complementaria a la gestión cotidiana de redes sociales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Una mirada integrada</h2>
          <div className="combination-list">
            <div className="combination-heading">
              <span>Si necesitás</span>
              <span>Combinamos</span>
              <span>Lográs</span>
            </div>
            <div className="combination-row">
              <strong>Saber dónde están tus clientes</strong>
              <span>Análisis territorial y campañas digitales</span>
              <span>Publicidad dirigida a zonas con potencial</span>
            </div>
            <div className="combination-row">
              <strong>Decidir con datos</strong>
              <span>Indicadores, análisis y tableros web</span>
              <span>Información clara y accesible</span>
            </div>
            <div className="combination-row">
              <strong>Tener mapas y datos en tu web</strong>
              <span>Cartografía interactiva y desarrollo web</span>
              <span>Sitios con mapas y datos integrados</span>
            </div>
            <div className="combination-row">
              <strong>Comunicar con credibilidad</strong>
              <span>Informes técnicos, identidad visual y fotografía</span>
              <span>Materiales profesionales y sólidos</span>
            </div>
          </div>
        </div>
      </section>

      <ProcessExplorer />
    </main>
  );
}
