import type { Metadata } from "next";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/nosotros",
  "Nosotros | TTDigitales",
  "Conocé el equipo de TTDigitales y su experiencia en tecnología, análisis territorial e investigación social.",
);

const team = [
  {
    name: "Lucas Marques de Paiva",
    role: "Desarrollo de software, marketing digital y diseño",
    bio: "Técnico Superior en Desarrollo de Software y profesor de programación. Construye soluciones digitales a medida y las vuelve claras y atractivas.",
    href: "https://www.linkedin.com/in/lucas-marques-de-paiva-3b57681b/",
  },
  {
    name: "Augusto Tovar",
    role: "Evaluación de impacto, análisis territorial y datos",
    bio: "Arquitecto y Magíster en Economía Urbana. Ocho años en gestión pública y cuatro en consultoría privada: convierte datos en decisiones. Dirige Attoestudio.",
    href: "https://www.linkedin.com/in/attoestudio/",
  },
  {
    name: "Carolina Otharan",
    role: "Investigación social y trabajo de campo",
    bio: "Licenciada y Profesora en Sociología (UBA). Aporta campo, sistematización de datos y coordinación de equipos en actividades específicas.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Quiénes somos</p>
          <h1>Tecnología y territorio, con mirada interdisciplinaria.</h1>
          <p className="lead">
            Más de una década de trayectoria en el sector público y privado, con
            proyectos en Argentina, Colombia y México.
          </p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <h2>Quiénes lo hacen</h2>
          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name}>
                <h3>
                  {member.href ? (
                    <a
                      href={member.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className="team-role">{member.role}</p>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
