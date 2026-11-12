"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const services = [
  {
    title: "Soluciones digitales para empresas",
    color: "blue",
    items: [
      "Sitios web y landing pages institucionales",
      "Sistemas de gestión y herramientas a medida",
      "Digitalización y automatización de procesos",
      "Consultoría tecnológica y análisis de requerimientos",
    ],
  },
  {
    title: "Marketing digital y presencia online",
    color: "teal",
    items: [
      "Campañas en Google Ads y SEO",
      "Estrategia de contenidos digitales",
      "Identidad visual y piezas publicitarias",
      "Fotografía y producción de contenido audiovisual",
    ],
  },
  {
    title: "Análisis territorial, datos y GIS",
    color: "green",
    items: [
      "Diagnóstico territorial y análisis urbano",
      "GIS, cartografía web y dashboards",
      "Ciencia de datos y construcción de indicadores",
      "Evaluación de impacto de proyectos",
    ],
  },
];

const combinations = [
  ["Saber dónde están tus clientes", "Análisis territorial y GIS con campañas de Google Ads y SEO", "Publicidad dirigida a las zonas con más potencial"],
  ["Decidir con datos", "Indicadores y análisis con tableros web de diseño UX/UI", "Información clara, actualizada y accesible"],
  ["Tener mapas y datos en tu web", "Cartografía interactiva con desarrollo web", "Sitios con mapas propios y datos integrados"],
  ["Comunicar con credibilidad", "Informes técnicos con identidad visual y fotografía", "Materiales profesionales y técnicamente sólidos"],
];

const projects = [
  { name: "CasaRío Lab", location: "Gran La Plata, Argentina", description: "Diagnóstico del Anillo Biocultural: 81 mil hectáreas entre comunidades, científicos, técnicos y gobiernos.", href: "https://linktr.ee/casariolab" },
  { name: "WeWac", location: "Páramo de Santurbán, Colombia", description: "Un mapa vivo y colectivo para proteger el territorio.", href: "https://wewac.co/" },
  { name: "Gobierno de la Ciudad de Buenos Aires", location: "Buenos Aires, Argentina", description: "Indicadores, tableros y análisis georreferenciados de espacio público." },
  { name: "Cushman & Wakefield para Mercado Libre", location: "Latinoamérica", description: "Herramientas de predimensionamiento y KPIs estandarizados para oficinas de la región." },
  { name: "Steer Davies Gleave", location: "Colombia y México", description: "Evaluación de impacto de proyectos de transporte y movilidad." },
  { name: "Municipio de Mercedes", location: "Corrientes, Argentina", description: "Modelo de desarrollo urbano con proyección a 2060." },
];

const team = [
  {
    name: "Lucas Marques de Paiva",
    role: "Desarrollo de software, marketing digital y diseño",
    bio: "Técnico Superior en Desarrollo de Software y profesor de programación. Construye soluciones digitales a medida y las vuelve claras y atractivas.",
  },
  {
    name: "Augusto Tovar",
    role: "Evaluación de impacto, análisis territorial y datos",
    bio: "Arquitecto y Magíster en Economía Urbana. Ocho años en gestión pública y cuatro en consultoría privada: convierte datos en decisiones. Dirige Attoestudio.",
  },
  {
    name: "Carolina Otharan",
    role: "Investigación social y trabajo de campo",
    bio: "Licenciada y Profesora en Sociología (UBA). Aporta campo, sistematización de datos y coordinación de equipos en actividades específicas.",
  },
];

const phases = [
  ["Concepto", "Entender y planificar"],
  ["Contenidos", "Crear el material"],
  ["Lanzamiento", "Probar y publicar"],
  ["Seguimiento", "Medir y mejorar"],
];

const stages = [
  {
    title: "Entrada y diagnóstico",
    description: "Partimos de tu punto de arranque (una idea, algo existente o una herramienta puntual) y relevamos necesidades, contexto y alternativas.",
    tools: ["Formulario de primer acercamiento", "Análisis de competidores y mercado", "Diagnóstico territorial y GIS", "Análisis de datos"],
    outcome: "Decisiones fundamentadas antes de invertir.",
  },
  {
    title: "Estrategia de difusión",
    description: "Definimos mensajes, medios y canales institucionales para llegar a quien necesitás llegar.",
    tools: ["Arquitectura de mensajes", "Plan de contenidos", "SEO y Google Ads", "Mapa de canales"],
    outcome: "Un plan claro de a quién llegar y por dónde.",
  },
  {
    title: "Contenido audiovisual",
    description: "Registramos el material o te damos una guía de guion con especificaciones de formato para que armes tu contenido.",
    tools: ["Guía de guion", "Especificaciones de formato", "Fotografía y video", "Registro en territorio"],
    outcome: "Material consistente y en el formato correcto.",
  },
  {
    title: "Producción y edición",
    description: "Procesamos y editamos el material y lo integramos a las herramientas de difusión.",
    tools: ["Edición de imagen y video", "Identidad visual", "Piezas gráficas", "Sitio web y dashboards"],
    outcome: "Piezas listas para publicar, con una imagen unificada.",
  },
  {
    title: "Prueba y aprobación",
    description: "Probamos la herramienta y entregamos avances parciales. Nada sale sin tu conformidad.",
    tools: ["Versiones de prueba", "Entregas parciales", "Rondas de feedback"],
    outcome: "Sin sorpresas: validás antes de que algo salga.",
  },
  {
    title: "Puesta en marcha",
    description: "Implementamos la herramienta y la dejamos operativa.",
    tools: ["Sitio web o landing", "Campañas", "Cartografía web", "Tableros de indicadores"],
    outcome: "Una solución operativa y documentada.",
  },
  {
    title: "Seguimiento y medición",
    description: "Medimos la interacción de los usuarios y el efecto de las campañas, y recogemos el feedback de usuarios y clientes.",
    tools: ["Analítica web", "Métricas de campañas", "Tableros de indicadores", "Encuestas de feedback"],
    outcome: "Evidencia sobre lo que funciona.",
  },
  {
    title: "Ajustes y entrega",
    description: "Realizamos los ajustes necesarios, entregamos y quedamos disponibles para la mejora continua.",
    tools: ["Ajustes finales", "Entrega con documentación", "Soporte continuo"],
    outcome: "Mejora continua sin empezar de cero.",
  },
];

const startingPoints = [
  {
    title: "Tengo una idea",
    caption: "Todavía es un borrador",
    label: "Tengo una idea",
    stages: [0, 1],
    questions: ["¿Tiene sentido esta idea?", "¿Qué alternativas tengo y cuál me conviene?", "¿Cuánto tiempo, esfuerzo e inversión requiere?", "¿Por dónde empiezo?"],
    response: "Empezamos evaluando alternativas con datos, antes de que inviertas.",
  },
  {
    title: "Ya tengo algo y quiero actualizarlo",
    caption: "Funciona, pero se quedó atrás",
    label: "Quiero actualizar algo",
    stages: [0, 1, 3],
    questions: ["¿Mi imagen sigue representando lo que somos hoy?", "¿Cómo comunico mejor lo que hacemos?", "¿Qué conservo y qué cambio?", "¿Cómo actualizo sin perder lo que ya construí?"],
    response: "Partimos de lo que ya funciona: ordenamos el mensaje y actualizamos marca, producto o metodología sin empezar de cero.",
  },
  {
    title: "Necesito una herramienta puntual",
    caption: "Falta una pieza",
    label: "Necesito una herramienta",
    stages: [4, 5, 6],
    questions: ["¿Cómo aprovecho mejor los datos que ya tengo?", "¿Puedo contar con una campaña, un mapa o un tablero para un momento concreto?", "¿Se integra con lo que ya funciona?", "¿Cómo mido si dio resultado?"],
    response: "Construimos la pieza que falta, la conectamos con lo que ya tenés y la medimos desde el primer día.",
  },
];

const stageColors = ["#6FA8FF", "#38C7D2", "#52D68F", "#B6EBCB"];

function TopographicArt() {
  const center = { x: 880, y: 320 };
  const paths = Array.from({ length: 17 }, (_, index) => {
    const radius = 22 + index * 36;
    const points = Array.from({ length: 97 }, (_, pointIndex) => {
      const angle = (pointIndex / 96) * Math.PI * 2;
      const adjustedRadius = radius * (1 + 0.1 * Math.sin(3 * angle + index * 0.7) + 0.06 * Math.sin(5 * angle + index * 1.3));
      return `${pointIndex ? "L" : "M"}${(center.x + adjustedRadius * Math.cos(angle)).toFixed(1)} ${(center.y + adjustedRadius * Math.sin(angle) * 0.8).toFixed(1)}`;
    }).join(" ");
    return { d: `${points}Z`, color: index % 3 === 2 ? "var(--green)" : "var(--teal)", opacity: 0.62 - index * 0.025 };
  });
  const ordinaryPoints = [[610, 110], [700, 250], [560, 340], [760, 500], [960, 160], [1040, 330], [1110, 110], [940, 530], [1130, 520], [820, 50], [470, 540], [330, 400], [640, 590], [1010, 610], [250, 200]];
  const highlightedPoints = [[880, 320], [690, 150], [1070, 230], [800, 410], [1130, 400], [540, 470]];
  const points = [...ordinaryPoints, ...highlightedPoints];
  const edges = new Set<string>();

  points.forEach((point, index) => {
    points
      .map((_, otherIndex) => ({
        otherIndex,
        distance: Math.hypot(point[0] - points[otherIndex][0], point[1] - points[otherIndex][1]),
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
    <svg className="topographic-art" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Curvas de nivel de un territorio con una red de puntos conectados">
      {paths.map((path, index) => (
        <path key={`contour-${index}`} d={path.d} pathLength="1" stroke={path.color} strokeOpacity={path.opacity} style={{ "--draw-delay": `${index * 0.12}s` } as React.CSSProperties} />
      ))}
      <g className="network-lines">
        {[...edges].map((edge) => {
          const [from, to] = edge.split("-").map(Number);
          return <line key={edge} x1={points[from][0]} y1={points[from][1]} x2={points[to][0]} y2={points[to][1]} />;
        })}
      </g>
      {ordinaryPoints.map(([cx, cy], index) => <circle key={`point-${index}`} cx={cx} cy={cy} r="5" className="map-point" />)}
      {highlightedPoints.map(([cx, cy], index) => (
        <g key={`highlight-${index}`}>
          <circle cx={cx} cy={cy} r="8" className="map-pulse" />
          <circle cx={cx} cy={cy} r="7" className="map-pulse-core" />
        </g>
      ))}
    </svg>
  );
}

export default function Home() {
  const [selectedStart, setSelectedStart] = useState(0);
  const [selectedStage, setSelectedStage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number[]>>({});
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "email" | null>(null);
  const [selectedContactNeeds, setSelectedContactNeeds] = useState<number[]>([]);
  const [contactError, setContactError] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const contactDialogRef = useRef<HTMLDialogElement>(null);
  const currentStart = startingPoints[selectedStart];
  const selectedQuestions = answers[selectedStart] ?? [];
  const activeStage = stages[selectedStage];

  useEffect(() => {
    const dialog = contactDialogRef.current;
    if (isContactOpen && dialog && !dialog.open) {
      dialog.showModal();
    } else if (!isContactOpen && dialog?.open) {
      dialog.close();
    }
  }, [isContactOpen]);

  function chooseStart(index: number) {
    setSelectedStart(index);
    setSelectedStage(startingPoints[index].stages[0]);
  }

  function openContactForm() {
    setContactError("");
    setContactSubmitted(false);
    setIsContactOpen(true);
  }

  function toggleContactNeed(index: number) {
    setSelectedContactNeeds((previous) => previous.includes(index)
      ? previous.filter((item) => item !== index)
      : [...previous, index]);
    setContactError("");
  }

  function toggleQuestion(index: number) {
    setAnswers((previous) => {
      const current = previous[selectedStart] ?? [];
      return {
        ...previous,
        [selectedStart]: current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
      };
    });
  }

  function showStage(index: number) {
    setSelectedStage(index);
  }

  function submitContactForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (selectedContactNeeds.length === 0) {
      setContactError("Seleccioná al menos una opción para continuar.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const replyMethod = contactMethod === "whatsapp" ? "WhatsApp" : "Mail";
    const needs = selectedContactNeeds.map((index) => startingPoints[index].label).join(", ");
    const body = [
      `Nombre: ${formData.get("name")}`,
      `Empresa o tipo de emprendimiento: ${formData.get("organization") || "No indicado"}`,
      `Localización: ${formData.get("location") || "No indicada"}`,
      `Intereses: ${needs}`,
      `Medio de respuesta preferido: ${replyMethod}`,
      `Contacto: ${formData.get("contact")}`,
      "",
      "Más detalles:",
      String(formData.get("details") || "No indicó detalles adicionales."),
    ].join("\n");
    const mailto = `mailto:c.augustovar@gmail.com,lucasmarques6@hotmail.com?subject=${encodeURIComponent("Consulta TTDigitales")}&body=${encodeURIComponent(body)}`;

    setContactSubmitted(true);
    window.location.href = mailto;
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top">TTDigitales</a>
          <nav aria-label="Navegación principal">
            <a href="#servicios">Qué hacemos</a>
            <a href="#proceso">Tu proyecto</a>
            <a href="#equipo">Equipo</a>
          </nav>
          <a className="button button-primary button-small" href="#contacto">Hablemos</a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <TopographicArt />
          <div className="container hero-content">
            <h1>Ordenamos tu idea, medimos lo que importa y la hacemos visible.</h1>
            <p className="lead"><strong>T</strong>ecnología y <strong>T</strong>erritorios <strong>Digitales</strong> combina desarrollo web, marketing digital y análisis territorial para empresas, organizaciones y gobiernos que buscan claridad y resultados concretos.</p>
            <div className="button-row">
              <a className="button button-primary" href="#proceso">Explorar cómo trabajamos</a>
              <a className="button" href="#contacto">Contanos tu proyecto</a>
            </div>
            <p className="track-record">Más de una década de trayectoria en el sector público y privado, con proyectos en Argentina, Colombia y México.</p>
          </div>
        </section>

        <section className="section section-alt" id="servicios">
          <div className="container">
            <h2>Qué hacemos</h2>
            <div className="service-grid">
              {services.map((service) => (
                <article className={`service-card ${service.color}`} key={service.title}>
                  <h3>{service.title}</h3>
                  <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="strategy-note">Consolidamos la imagen, el posicionamiento y la identidad corporativa de cada organización a través de su sitio web, campañas puntuales y material audiovisual. Es una mirada estratégica y de largo plazo, un complemento a la gestión cotidiana de redes sociales.</p>
          </div>
        </section>

        <section className="section process-section" id="proceso">
          <div className="container">
            <h2>Tu proyecto, etapa por etapa</h2>
            <p className="section-intro">Sabemos qué hacer en cada etapa. Elegí tu punto de partida y las preguntas que hoy tenés para ver cómo te acompañamos durante todo el proceso.</p>
            <div className="starting-grid" role="group" aria-label="Punto de partida">
              {startingPoints.map((point, index) => (
                <button className={`starting-card${selectedStart === index ? " is-selected" : ""}`} key={point.title} type="button" aria-pressed={selectedStart === index} onClick={() => chooseStart(index)}>
                  <strong>{point.title}</strong>
                  <span>{point.caption}</span>
                </button>
              ))}
            </div>
            <p className="question-prompt">¿Qué te estás preguntando?</p>
            <div className="question-list" role="group" aria-label="Preguntas sobre tu proyecto">
              {currentStart.questions.map((question, index) => (
                <button className={`question-chip${selectedQuestions.includes(index) ? " is-selected" : ""}`} key={question} type="button" aria-pressed={selectedQuestions.includes(index)} onClick={() => toggleQuestion(index)}>
                  {question}
                </button>
              ))}
            </div>
            {selectedQuestions.length > 0 && (
              <div className="recommendation" aria-live="polite">
                <h3>{selectedQuestions.length > 1 ? "Estás en el lugar indicado" : "Podemos ayudarte con eso"}</h3>
                <p>{currentStart.response}</p>
                <div className="stage-shortcuts">
                  {currentStart.stages.map((stageIndex) => (
                    <button type="button" key={stageIndex} onClick={() => showStage(stageIndex)}>{stageIndex + 1}. {stages[stageIndex].title}</button>
                  ))}
                </div>
                <p className="hint">Elegí una etapa para ver cómo intervenimos.</p>
              </div>
            )}
            <p className="focus-note" aria-live="polite">Para vos, el foco está en las etapas <strong>{currentStart.stages.map((stage) => stage + 1).join(", ")}</strong>. Podés recorrerlas todas.</p>
            <div className="timeline-scroll">
              <div className="timeline" role="group" aria-label="Etapas del proyecto">
                <div className="timeline-track"><span style={{ width: `${(selectedStage / 7) * 100}%` }} /></div>
                {stages.map((stage, index) => (
                  <button type="button" className={`timeline-stage${index === selectedStage ? " is-current" : ""}${index < selectedStage ? " is-complete" : ""}${currentStart.stages.includes(index) ? " is-focus" : ""}`} style={{ "--stage-color": stageColors[Math.floor(index / 2)] } as React.CSSProperties} key={stage.title} aria-current={index === selectedStage ? "step" : undefined} onClick={() => showStage(index)}>
                    {index === currentStart.stages[0] && <span className="timeline-start">Empezamos acá</span>}
                    <span className="timeline-number">{index + 1}</span>
                    <span className="timeline-label">{stage.title}</span>
                  </button>
                ))}
              </div>
              <div className="phase-labels">
                {phases.map(([title, subtitle], index) => <div key={title} style={{ "--stage-color": stageColors[index] } as React.CSSProperties}>{title}<small>{subtitle}</small></div>)}
              </div>
            </div>
            <article className="stage-detail" aria-live="polite" key={selectedStage} style={{ "--stage-color": stageColors[Math.floor(selectedStage / 2)] } as React.CSSProperties}>
              <div className="stage-copy">
                <span className="phase-tag">{phases[Math.floor(selectedStage / 2)][0]}</span>
                <h3>{selectedStage + 1}. {activeStage.title}</h3>
                <h4>Cómo intervenimos</h4>
                <p>{activeStage.description}</p>
                <p className="stage-outcome"><strong>Lo que ganás:</strong> {activeStage.outcome}</p>
                <div className="stage-navigation">
                  <button className="button" type="button" disabled={selectedStage === 0} onClick={() => showStage(Math.max(0, selectedStage - 1))}>Anterior</button>
                  <button className="button button-primary" type="button" onClick={() => showStage(selectedStage < 7 ? selectedStage + 1 : 0)}>{selectedStage < 7 ? "Siguiente etapa" : "Volver al inicio"}</button>
                </div>
              </div>
              <div className="stage-tools">
                <h4>Herramientas que usamos</h4>
                <ul>{activeStage.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2>Lo que logramos al combinar Tecnología y Territorio</h2>
            <div className="combination-list">
              <div className="combination-heading"><span>Si necesitás</span><span>Combinamos</span><span>Lográs</span></div>
              {combinations.map(([need, combination, result]) => (
                <div className="combination-row" key={need}><strong>{need}</strong><span>{combination}</span><span>{result}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Nuestra experiencia</h2>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-row" key={project.name}>
                  <div>
                    <strong>{project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}</a> : project.name}</strong>
                    <small>{project.location}</small>
                  </div>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
            <aside className="new-work">
              <span className="tag">En desarrollo</span>
              <h3>Lo que estamos construyendo hoy</h3>
              <p>Packlin y DanzaLab son nuestros servicios nuevos: los productos digitales donde estamos emprendiendo y donde aplicamos toda la experiencia anterior.</p>
              <div className="new-work-grid">
                <a href="https://packlinsa.com.ar/" target="_blank" rel="noopener noreferrer"><strong>Packlin</strong><span>Sitio web institucional para una PyME industrial.</span></a>
                <a href="https://www.danzalab.com.ar" target="_blank" rel="noopener noreferrer"><strong>DanzaLab</strong><span>Aplicación a medida, con funcionalidades diseñadas junto al equipo del proyecto.</span></a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-alt" id="equipo">
          <div className="container">
            <h2>Nuestro Equipo</h2>
            <div className="team-grid">
              {team.map((member) => (
                <article key={member.name}>
                  <h3>
                    {member.name === "Lucas Marques de Paiva" ? (
                      <a href="https://www.linkedin.com/in/lucas-marques-de-paiva-3b57681b/" target="_blank" rel="noopener noreferrer">{member.name}</a>
                    ) : member.name === "Augusto Tovar" ? (
                      <a href="https://www.linkedin.com/in/attoestudio/" target="_blank" rel="noopener noreferrer">{member.name}</a>
                    ) : member.name}
                  </h3>
                  <p className="team-role">{member.role}</p>
                  <p>{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="container">
            <h2>En qué podemos ayudarte</h2>
            <p className="section-intro">Contanos sobre tu proyecto y cómo preferís que nos comuniquemos.</p>
            <div className="button-row">
              <button className="button button-primary" type="button" onClick={openContactForm}>Escribinos</button>
            </div>
          </div>
        </section>
      </main>

      <dialog
        className="contact-dialog"
        ref={contactDialogRef}
        aria-labelledby="contact-dialog-title"
        onClose={() => setIsContactOpen(false)}
        onCancel={() => setIsContactOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            contactDialogRef.current?.close();
          }
        }}
      >
        <div className="contact-dialog-content">
          <button className="contact-dialog-close" type="button" aria-label="Cerrar formulario" onClick={() => contactDialogRef.current?.close()}>×</button>
          {contactSubmitted ? (
            <div className="contact-success" aria-live="polite">
              <h2 id="contact-dialog-title">¡Gracias por escribirnos!</h2>
              <p>Se abrirá tu cliente de correo con el mensaje listo. Revisá y confirmá el envío allí.</p>
              <button className="button button-primary" type="button" onClick={() => contactDialogRef.current?.close()}>Cerrar</button>
            </div>
          ) : (
            <>
              <div className="contact-dialog-header">
                <h2 id="contact-dialog-title">Contanos sobre tu proyecto</h2>
                <p>Completá estos datos y te responderemos a la brevedad.</p>
              </div>
              <form className="contact-form" onSubmit={submitContactForm}>
                <label className="form-field">
                  Nombre *
                  <input autoComplete="name" name="name" required />
                </label>
                <label className="form-field">
                  Empresa o tipo de emprendimiento
                  <input autoComplete="organization" name="organization" />
                </label>
                <label className="form-field">
                  Localización: ciudad - barrio
                  <input autoComplete="address-level2" name="location" />
                </label>
                <fieldset className="contact-fieldset" aria-describedby={contactError ? "contact-error" : undefined}>
                  <legend>¿En qué podemos ayudarte? Elegí una o varias opciones *</legend>
                  <div className="contact-options">
                    {startingPoints.map((point, index) => (
                      <label className="contact-option" key={point.label}>
                        <input
                          checked={selectedContactNeeds.includes(index)}
                          name="needs"
                          type="checkbox"
                          value={point.label}
                          onChange={() => toggleContactNeed(index)}
                        />
                        <span>{point.label}</span>
                      </label>
                    ))}
                  </div>
                  {contactError && <p className="contact-error" id="contact-error" role="alert">{contactError}</p>}
                </fieldset>
                <label className="form-field">
                  Contanos un poco más
                  <textarea maxLength={1500} name="details" rows={4} />
                </label>
                <fieldset className="contact-fieldset">
                  <legend>Te responderemos a la brevedad. ¿Por qué medio preferís? *</legend>
                  <div className="contact-options contact-methods">
                    <label className="contact-option">
                      <input checked={contactMethod === "whatsapp"} name="contact-method" required type="radio" value="whatsapp" onChange={() => setContactMethod("whatsapp")} />
                      <span>WhatsApp</span>
                    </label>
                    <label className="contact-option">
                      <input checked={contactMethod === "email"} name="contact-method" required type="radio" value="email" onChange={() => setContactMethod("email")} />
                      <span>Mail</span>
                    </label>
                  </div>
                </fieldset>
                {contactMethod === "whatsapp" && (
                  <label className="form-field">
                    Dejanos tu número de WhatsApp *
                    <input autoComplete="tel" name="contact" required type="tel" />
                  </label>
                )}
                {contactMethod === "email" && (
                  <label className="form-field">
                    Dejanos tu correo *
                    <input autoComplete="email" name="contact" required type="email" />
                  </label>
                )}
                <div className="contact-form-actions">
                  <button className="button" type="button" onClick={() => contactDialogRef.current?.close()}>Cancelar</button>
                  <button className="button button-primary" type="submit">Enviar</button>
                </div>
              </form>
            </>
          )}
        </div>
      </dialog>

      <footer className="site-footer"><div className="container">© 2026 TTDigitales. Tecnología y Territorios Digitales.</div></footer>
    </>
  );
}
