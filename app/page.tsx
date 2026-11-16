import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "./_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/",
  "TTDigitales | Tecnología y Territorios Digitales",
  "Desarrollo web, marketing digital y análisis territorial para empresas, organizaciones y gobiernos.",
);

function TopographicArt() {
  const center = { x: 880, y: 320 };
  const paths = Array.from({ length: 17 }, (_, index) => {
    const radius = 22 + index * 36;
    const points = Array.from({ length: 97 }, (_, pointIndex) => {
      const angle = (pointIndex / 96) * Math.PI * 2;
      const adjustedRadius =
        radius *
        (1 +
          0.1 * Math.sin(3 * angle + index * 0.7) +
          0.06 * Math.sin(5 * angle + index * 1.3));
      return `${pointIndex ? "L" : "M"}${(
        center.x + adjustedRadius * Math.cos(angle)
      ).toFixed(1)} ${(center.y + adjustedRadius * Math.sin(angle) * 0.8).toFixed(1)}`;
    }).join(" ");
    return {
      d: `${points}Z`,
      color: index % 3 === 2 ? "var(--green)" : "var(--teal)",
      opacity: 0.62 - index * 0.025,
    };
  });
  const ordinaryPoints = [
    [610, 110],
    [700, 250],
    [560, 340],
    [760, 500],
    [960, 160],
    [1040, 330],
    [1110, 110],
    [940, 530],
    [1130, 520],
    [820, 50],
    [470, 540],
    [330, 400],
    [640, 590],
    [1010, 610],
    [250, 200],
  ];
  const highlightedPoints = [
    [880, 320],
    [690, 150],
    [1070, 230],
    [800, 410],
    [1130, 400],
    [540, 470],
  ];
  const points = [...ordinaryPoints, ...highlightedPoints];
  const edges = new Set<string>();

  points.forEach((point, index) => {
    points
      .map((otherPoint, otherIndex) => ({
        otherIndex,
        distance: Math.hypot(
          point[0] - otherPoint[0],
          point[1] - otherPoint[1],
        ),
      }))
      .filter(({ otherIndex }) => otherIndex !== index)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 2)
      .forEach(({ otherIndex }) => {
        const [from, to] = [index, otherIndex].sort((a, b) => a - b);
        edges.add(`${from}-${to}`);
      });
  });

  return (
    <svg
      className="topographic-art"
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Curvas de nivel de un territorio con una red de puntos conectados"
    >
      {paths.map((path, index) => (
        <path
          key={`contour-${index}`}
          d={path.d}
          pathLength="1"
          stroke={path.color}
          strokeOpacity={path.opacity}
          style={{ "--draw-delay": `${index * 0.12}s` } as React.CSSProperties}
        />
      ))}
      <g className="network-lines">
        {[...edges].map((edge) => {
          const [from, to] = edge.split("-").map(Number);
          return (
            <line
              key={edge}
              x1={points[from][0]}
              y1={points[from][1]}
              x2={points[to][0]}
              y2={points[to][1]}
            />
          );
        })}
      </g>
      {ordinaryPoints.map(([cx, cy], index) => (
        <circle
          key={`point-${index}`}
          cx={cx}
          cy={cy}
          r="5"
          className="map-point"
        />
      ))}
      {highlightedPoints.map(([cx, cy], index) => (
        <g key={`highlight-${index}`}>
          <circle cx={cx} cy={cy} r="8" className="map-pulse" />
          <circle cx={cx} cy={cy} r="7" className="map-pulse-core" />
        </g>
      ))}
    </svg>
  );
}

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

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <TopographicArt />
        <div className="container hero-content">
          <h1>Ordenamos tu idea, medimos lo que importa y la hacemos visible.</h1>
          <p className="lead">
            <strong>T</strong>ecnología y <strong>T</strong>erritorios{" "}
            <strong>Digitales</strong> combina desarrollo web, marketing digital
            y análisis territorial para empresas, organizaciones y gobiernos
            que buscan claridad y resultados concretos.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/servicios">
              Conocé nuestros servicios
            </Link>
            <Link className="button" href="/contacto">
              Contanos tu proyecto
            </Link>
          </div>
          <p className="track-record">
            Más de una década de trayectoria en el sector público y privado,
            con proyectos en Argentina, Colombia y México.
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
          <p className="section-link">
            <Link href="/servicios">Explorar todos los servicios</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Lo que logramos al combinar Tecnología y Territorio</h2>
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
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Nuestra experiencia</h2>
          <div className="project-list">
            <article className="project-row">
              <div>
                <strong>
                  <a
                    href="https://linktr.ee/casariolab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CasaRío Lab
                  </a>
                </strong>
                <small>Gran La Plata, Argentina</small>
              </div>
              <p>
                Diagnóstico del Anillo Biocultural: 81 mil hectáreas entre
                comunidades, científicos, técnicos y gobiernos.
              </p>
            </article>
            <article className="project-row">
              <div>
                <strong>
                  <a
                    href="https://wewac.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WeWac
                  </a>
                </strong>
                <small>Páramo de Santurbán, Colombia</small>
              </div>
              <p>Un mapa vivo y colectivo para proteger el territorio.</p>
            </article>
          </div>
          <p className="section-link">
            <Link href="/proyectos">Ver proyectos y experiencia</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container home-about">
          <div>
            <p className="eyebrow">Nuestro equipo</p>
            <h2>Un equipo interdisciplinario para desafíos complejos.</h2>
          </div>
          <div>
            <p>
              Reunimos experiencia en desarrollo de software, comunicación,
              análisis territorial e investigación social.
            </p>
            <Link className="text-link" href="/nosotros">
              Conocé al equipo
            </Link>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container home-process">
          <div>
            <h2>Tu proyecto, etapa por etapa.</h2>
            <p className="section-intro">
              Diagnosticamos, planificamos, producimos y medimos de acuerdo con
              lo que necesitás.
            </p>
          </div>
          <Link className="button button-primary" href="/servicios#proceso">
            Conocé cómo trabajamos
          </Link>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <h2>En qué podemos ayudarte</h2>
          <p className="section-intro">
            Contanos sobre tu proyecto y cómo preferís que nos comuniquemos.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/contacto">
              Escribinos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
