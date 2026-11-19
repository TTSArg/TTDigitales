import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/proyectos",
  "Proyectos | TTDigitales",
  "Experiencia de TTDigitales en proyectos de tecnología, datos y análisis territorial.",
);

type Project = {
  name: string;
  location: string;
  category: string;
  description: string;
  previewAddress: string;
  previewBrand: string;
  previewKicker: string;
  previewHeading: string;
  image?: string;
  variant:
    | "landscape"
    | "map"
    | "dashboard"
    | "office"
    | "mobility"
    | "city"
    | "industrial"
    | "creative";
  href?: string;
  status?: string;
};

const projects: Project[] = [
  {
    name: "CasaRío Lab",
    location: "Gran La Plata, Argentina",
    category: "Territorio / Desarrollo digital",
    description:
      "Diagnóstico del Anillo Biocultural: 81 mil hectáreas entre comunidades, científicos, técnicos y gobiernos.",
    previewAddress: "caso territorial · Gran La Plata",
    previewBrand: "CasaRío Lab",
    previewKicker: "Anillo biocultural",
    previewHeading: "Un territorio para conectar",
    image: "/casario-home.png",
    variant: "landscape",
    href: "https://linktr.ee/casariolab",
  },
  {
    name: "WeWac",
    location: "Páramo de Santurbán, Colombia",
    category: "Territorio / Desarrollo digital",
    description: "Un mapa vivo y colectivo para proteger el territorio.",
    previewAddress: "wewac.co",
    previewBrand: "WeWac",
    previewKicker: "Páramo de Santurbán",
    previewHeading: "Un mapa vivo para proteger",
    image: "/wewac-home.jpg",
    variant: "map",
    href: "https://wewac.co/",
  },
  {
    name: "Gobierno de la Ciudad de Buenos Aires",
    location: "Buenos Aires, Argentina",
    category: "Gobierno / Análisis territorial",
    description:
      "Indicadores, tableros y análisis georreferenciados de espacio público.",
    previewAddress: "caso de gestión · Buenos Aires",
    previewBrand: "Ciudad BA",
    previewKicker: "Espacio público",
    previewHeading: "Datos para una ciudad mejor",
    variant: "dashboard",
  },
  {
    name: "Cushman & Wakefield para Mercado Libre",
    location: "Latinoamérica",
    category: "Empresas / Desarrollo digital",
    description:
      "Herramientas de predimensionamiento y KPIs estandarizados para oficinas de la región.",
    previewAddress: "caso corporativo · Latinoamérica",
    previewBrand: "Workplace",
    previewKicker: "Oficinas en la región",
    previewHeading: "Decisiones con datos",
    variant: "office",
  },
  {
    name: "Steer Davies Gleave",
    location: "Colombia y México",
    category: "Movilidad / Análisis territorial",
    description:
      "Evaluación de impacto de proyectos de transporte y movilidad.",
    previewAddress: "caso de movilidad · LATAM",
    previewBrand: "Steer",
    previewKicker: "Movilidad y transporte",
    previewHeading: "Conectar mejor las ciudades",
    variant: "mobility",
  },
  {
    name: "Municipio de Mercedes",
    location: "Corrientes, Argentina",
    category: "Gobierno / Planificación urbana",
    description: "Modelo de desarrollo urbano con proyección a 2060.",
    previewAddress: "caso urbano · Mercedes",
    previewBrand: "Mercedes 2060",
    previewKicker: "Planificación urbana",
    previewHeading: "Una visión para el futuro",
    variant: "city",
  },
];

const inProgressProjects: Project[] = [
  {
    name: "Packlin",
    location: "Argentina",
    category: "Empresas / Desarrollo digital",
    description: "Sitio web institucional para una PyME industrial.",
    previewAddress: "packlinsa.com.ar",
    previewBrand: "PACKLIN",
    previewKicker: "Soluciones industriales",
    previewHeading: "Diseñadas para producir",
    image: "/packlin-home.png",
    variant: "industrial",
    href: "https://packlinsa.com.ar/",
    status: "En desarrollo",
  },
  {
    name: "DanzaLab",
    location: "Argentina",
    category: "Profesionales / Desarrollo digital",
    description:
      "Aplicación a medida, con funcionalidades diseñadas junto al equipo del proyecto.",
    previewAddress: "danzalab.com.ar",
    previewBrand: "DanzaLab",
    previewKicker: "Movimiento y tecnología",
    previewHeading: "Un espacio para crear",
    image: "/danzalab-home.png",
    variant: "creative",
    href: "https://www.danzalab.com.ar",
    status: "En desarrollo",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="portfolio-card">
      <div
        className={`portfolio-preview portfolio-preview--${project.variant}${project.image && project.status === "En desarrollo" ? " portfolio-preview--image-in-progress" : ""}`}
        aria-hidden={project.image ? undefined : true}
      >
        <div className="portfolio-browser-bar">
          <span className="portfolio-browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="portfolio-browser-address">
            {project.previewAddress}
          </span>
        </div>
        <div className="portfolio-screen">
          {project.image ? (
            <Image
              className="portfolio-home-image"
              src={project.image}
              alt={`Página de inicio de ${project.name}`}
              fill
              unoptimized={project.status === "En desarrollo"}
              sizes="(max-width: 600px) 100vw, (max-width: 860px) 50vw, 25vw"
            />
          ) : (
            <>
              <div className="portfolio-screen-nav">
                <strong>{project.previewBrand}</strong>
                <span>INICIO&nbsp;&nbsp; PROYECTO&nbsp;&nbsp; CONTACTO</span>
              </div>
              <div className="portfolio-screen-hero">
                <div className="portfolio-screen-copy">
                  <span>{project.previewKicker}</span>
                  <strong>{project.previewHeading}</strong>
                  <i />
                </div>
                <div className="portfolio-screen-art" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="portfolio-card-info">
        <p className="portfolio-category">
          {project.category}
          {project.status && (
            <span className="portfolio-status">{project.status}</span>
          )}
        </p>
        <div className="portfolio-card-heading">
          <h2>{project.name}</h2>
          {project.href && (
            <a
              className="portfolio-open-link"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${project.name}`}
            >
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        <p className="portfolio-location">{project.location}</p>
        <p className="portfolio-description">{project.description}</p>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-intro">
        <div className="portfolio-container">
          <p className="portfolio-eyebrow">Proyectos seleccionados</p>
          <h1>Ideas digitales que conectan con el mundo real.</h1>
          <p>
            Tecnología, datos y diseño para organizaciones, empresas y
            territorios.
          </p>
        </div>
      </section>

      <section className="portfolio-section" aria-label="Proyectos realizados">
        <div className="portfolio-container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="portfolio-section portfolio-section--in-progress"
        aria-labelledby="in-progress-title"
      >
        <div className="portfolio-container">
          <div className="portfolio-section-heading">
            <div>
              <p className="portfolio-eyebrow">En desarrollo</p>
              <h2 id="in-progress-title">Lo que estamos construyendo hoy</h2>
            </div>
            <p>
              Nuevas experiencias digitales diseñadas en conjunto con cada
              equipo.
            </p>
          </div>
          <div className="portfolio-grid portfolio-grid--in-progress">
            {inProgressProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-container">
          <p>¿Tenés un proyecto con desafíos similares?</p>
          <Link className="button button-primary" href="/contacto">
            Hablemos
          </Link>
        </div>
      </section>
    </main>
  );
}
