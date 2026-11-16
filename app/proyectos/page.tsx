import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/proyectos",
  "Proyectos | TTDigitales",
  "Experiencia de TTDigitales en proyectos de tecnología, datos y análisis territorial.",
);

const projects = [
  {
    name: "CasaRío Lab",
    location: "Gran La Plata, Argentina",
    description:
      "Diagnóstico del Anillo Biocultural: 81 mil hectáreas entre comunidades, científicos, técnicos y gobiernos.",
    href: "https://linktr.ee/casariolab",
  },
  {
    name: "WeWac",
    location: "Páramo de Santurbán, Colombia",
    description: "Un mapa vivo y colectivo para proteger el territorio.",
    href: "https://wewac.co/",
  },
  {
    name: "Gobierno de la Ciudad de Buenos Aires",
    location: "Buenos Aires, Argentina",
    description:
      "Indicadores, tableros y análisis georreferenciados de espacio público.",
  },
  {
    name: "Cushman & Wakefield para Mercado Libre",
    location: "Latinoamérica",
    description:
      "Herramientas de predimensionamiento y KPIs estandarizados para oficinas de la región.",
  },
  {
    name: "Steer Davies Gleave",
    location: "Colombia y México",
    description:
      "Evaluación de impacto de proyectos de transporte y movilidad.",
  },
  {
    name: "Municipio de Mercedes",
    location: "Corrientes, Argentina",
    description: "Modelo de desarrollo urbano con proyección a 2060.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Experiencia</p>
          <h1>Proyectos en territorio y en empresa.</h1>
          <p className="lead">
            Una trayectoria que combina tecnología, datos y trabajo territorial
            en Argentina, Colombia y México.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.name}>
                <div>
                  <strong>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </strong>
                  <small>{project.location}</small>
                </div>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <aside className="new-work">
            <span className="tag">En desarrollo</span>
            <h2>Lo que estamos construyendo hoy</h2>
            <p>
              Packlin y DanzaLab son proyectos nuevos donde aplicamos nuestra
              experiencia en soluciones digitales.
            </p>
            <div className="new-work-grid">
              <a
                href="https://packlinsa.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Packlin</strong>
                <span>Sitio web institucional para una PyME industrial.</span>
              </a>
              <a
                href="https://www.danzalab.com.ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>DanzaLab</strong>
                <span>
                  Aplicación a medida, con funcionalidades diseñadas junto al
                  equipo del proyecto.
                </span>
              </a>
            </div>
          </aside>
          <div className="page-cta">
            <p>¿Tenés un proyecto con desafíos similares?</p>
            <Link className="button button-primary" href="/contacto">
              Hablemos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
