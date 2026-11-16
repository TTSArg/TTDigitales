"use client";

import { useState } from "react";

const phases = [
  ["Concepto", "Entender y planificar"],
  ["Contenidos", "Crear el material"],
  ["Lanzamiento", "Probar y publicar"],
  ["Seguimiento", "Medir y mejorar"],
];

const stages = [
  {
    title: "Entrada y diagnóstico",
    description:
      "Partimos de tu punto de arranque (una idea, algo existente o una herramienta puntual) y relevamos necesidades, contexto y alternativas.",
    tools: [
      "Formulario de primer acercamiento",
      "Análisis de competidores y mercado",
      "Diagnóstico territorial y GIS",
      "Análisis de datos",
    ],
    outcome: "Decisiones fundamentadas antes de invertir.",
  },
  {
    title: "Estrategia de difusión",
    description:
      "Definimos mensajes, medios y canales institucionales para llegar a quien necesitás llegar.",
    tools: [
      "Arquitectura de mensajes",
      "Plan de contenidos",
      "SEO y Google Ads",
      "Mapa de canales",
    ],
    outcome: "Un plan claro de a quién llegar y por dónde.",
  },
  {
    title: "Contenido audiovisual",
    description:
      "Registramos el material o te damos una guía de guion con especificaciones de formato para que armes tu contenido.",
    tools: [
      "Guía de guion",
      "Especificaciones de formato",
      "Fotografía y video",
      "Registro en territorio",
    ],
    outcome: "Material consistente y en el formato correcto.",
  },
  {
    title: "Producción y edición",
    description:
      "Procesamos y editamos el material y lo integramos a las herramientas de difusión.",
    tools: [
      "Edición de imagen y video",
      "Identidad visual",
      "Piezas gráficas",
      "Sitio web y dashboards",
    ],
    outcome: "Piezas listas para publicar, con una imagen unificada.",
  },
  {
    title: "Prueba y aprobación",
    description:
      "Probamos la herramienta y entregamos avances parciales. Nada sale sin tu conformidad.",
    tools: ["Versiones de prueba", "Entregas parciales", "Rondas de feedback"],
    outcome: "Sin sorpresas: validás antes de que algo salga.",
  },
  {
    title: "Puesta en marcha",
    description: "Implementamos la herramienta y la dejamos operativa.",
    tools: [
      "Sitio web o landing",
      "Campañas",
      "Cartografía web",
      "Tableros de indicadores",
    ],
    outcome: "Una solución operativa y documentada.",
  },
  {
    title: "Seguimiento y medición",
    description:
      "Medimos la interacción de los usuarios y el efecto de las campañas, y recogemos el feedback de usuarios y clientes.",
    tools: [
      "Analítica web",
      "Métricas de campañas",
      "Tableros de indicadores",
      "Encuestas de feedback",
    ],
    outcome: "Evidencia sobre lo que funciona.",
  },
  {
    title: "Ajustes y entrega",
    description:
      "Realizamos los ajustes necesarios, entregamos y quedamos disponibles para la mejora continua.",
    tools: ["Ajustes finales", "Entrega con documentación", "Soporte continuo"],
    outcome: "Mejora continua sin empezar de cero.",
  },
];

const startingPoints = [
  {
    title: "Tengo una idea",
    caption: "Todavía es un borrador",
    stages: [0, 1],
    questions: [
      "¿Tiene sentido esta idea?",
      "¿Qué alternativas tengo y cuál me conviene?",
      "¿Cuánto tiempo, esfuerzo e inversión requiere?",
      "¿Por dónde empiezo?",
    ],
    response: "Empezamos evaluando alternativas con datos, antes de que inviertas.",
  },
  {
    title: "Ya tengo algo y quiero actualizarlo",
    caption: "Funciona, pero se quedó atrás",
    stages: [0, 1, 3],
    questions: [
      "¿Mi imagen sigue representando lo que somos hoy?",
      "¿Cómo comunico mejor lo que hacemos?",
      "¿Qué conservo y qué cambio?",
      "¿Cómo actualizo sin perder lo que ya construí?",
    ],
    response:
      "Partimos de lo que ya funciona: ordenamos el mensaje y actualizamos marca, producto o metodología sin empezar de cero.",
  },
  {
    title: "Necesito una herramienta puntual",
    caption: "Falta una pieza",
    stages: [4, 5, 6],
    questions: [
      "¿Cómo aprovecho mejor los datos que ya tengo?",
      "¿Puedo contar con una campaña, un mapa o un tablero para un momento concreto?",
      "¿Se integra con lo que ya funciona?",
      "¿Cómo mido si dio resultado?",
    ],
    response:
      "Construimos la pieza que falta, la conectamos con lo que ya tenés y la medimos desde el primer día.",
  },
];

const stageColors = ["#6FA8FF", "#38C7D2", "#52D68F", "#B6EBCB"];

export default function ProcessExplorer() {
  const [selectedStart, setSelectedStart] = useState(0);
  const [selectedStage, setSelectedStage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number[]>>({});
  const currentStart = startingPoints[selectedStart];
  const selectedQuestions = answers[selectedStart] ?? [];
  const activeStage = stages[selectedStage];

  function toggleQuestion(index: number) {
    setAnswers((previous) => {
      const current = previous[selectedStart] ?? [];
      return {
        ...previous,
        [selectedStart]: current.includes(index)
          ? current.filter((item) => item !== index)
          : [...current, index],
      };
    });
  }

  function chooseStart(index: number) {
    setSelectedStart(index);
    setSelectedStage(startingPoints[index].stages[0]);
  }

  function showStage(index: number) {
    setSelectedStage(index);
  }

  return (
    <section className="section process-section" id="proceso">
      <div className="container">
        <h2>Tu proyecto, etapa por etapa</h2>
        <p className="section-intro">
          Sabemos dónde intervenir, cómo hacerlo y con qué herramientas, según
          lo que necesites. Elegí tu punto de partida y recorré la ruta.
        </p>
        <div className="starting-grid">
          {startingPoints.map((point, index) => (
            <button
              className={`starting-card${selectedStart === index ? " is-selected" : ""}`}
              key={point.title}
              type="button"
              aria-pressed={selectedStart === index}
              onClick={() => chooseStart(index)}
            >
              <strong>{point.title}</strong>
              <span>{point.caption}</span>
            </button>
          ))}
        </div>
        <p className="question-prompt">¿Qué te estás preguntando?</p>
        <div
          className="question-list"
          role="group"
          aria-label="Preguntas sobre tu proyecto"
        >
          {currentStart.questions.map((question, index) => (
            <button
              className={`question-chip${selectedQuestions.includes(index) ? " is-selected" : ""}`}
              key={question}
              type="button"
              aria-pressed={selectedQuestions.includes(index)}
              onClick={() => toggleQuestion(index)}
            >
              {question}
            </button>
          ))}
        </div>
        {selectedQuestions.length > 0 && (
          <div className="recommendation" aria-live="polite">
            <h3>
              {selectedQuestions.length > 1
                ? "Estás en el lugar indicado"
                : "Podemos ayudarte con eso"}
            </h3>
            <p>{currentStart.response}</p>
            <div className="stage-shortcuts">
              {currentStart.stages.map((stageIndex) => (
                <button
                  type="button"
                  key={stageIndex}
                  onClick={() => showStage(stageIndex)}
                >
                  {stageIndex + 1}. {stages[stageIndex].title}
                </button>
              ))}
            </div>
            <p className="hint">Elegí una etapa para ver cómo intervenimos.</p>
          </div>
        )}
        <p className="focus-note">
          Para vos, el foco está en las etapas{" "}
          <strong>{currentStart.stages.map((stage) => stage + 1).join(", ")}</strong>.
          Podés recorrerlas todas.
        </p>
        <div className="timeline-scroll">
          <div className="timeline" role="group" aria-label="Etapas del proyecto">
            <div className="timeline-track">
              <span style={{ width: `${(selectedStage / 7) * 100}%` }} />
            </div>
            {stages.map((stage, index) => (
              <button
                type="button"
                className={`timeline-stage${index === selectedStage ? " is-current" : ""}${index < selectedStage ? " is-complete" : ""}${currentStart.stages.includes(index) ? " is-focus" : ""}`}
                style={
                  {
                    "--stage-color": stageColors[Math.floor(index / 2)],
                  } as React.CSSProperties
                }
                key={stage.title}
                aria-current={index === selectedStage ? "step" : undefined}
                onClick={() => showStage(index)}
              >
                {index === currentStart.stages[0] && (
                  <span className="timeline-start">Empezamos acá</span>
                )}
                <span className="timeline-number">{index + 1}</span>
                <span className="timeline-label">{stage.title}</span>
              </button>
            ))}
          </div>
          <div className="phase-labels">
            {phases.map(([title, subtitle], index) => (
              <div
                key={title}
                style={{ "--stage-color": stageColors[index] } as React.CSSProperties}
              >
                {title}
                <small>{subtitle}</small>
              </div>
            ))}
          </div>
        </div>
        <article
          className="stage-detail"
          aria-live="polite"
          key={selectedStage}
          style={
            {
              "--stage-color": stageColors[Math.floor(selectedStage / 2)],
            } as React.CSSProperties
          }
        >
          <div className="stage-copy">
            <span className="phase-tag">
              {phases[Math.floor(selectedStage / 2)][0]}
            </span>
            <h3>
              {selectedStage + 1}. {activeStage.title}
            </h3>
            <h4>Cómo intervenimos</h4>
            <p>{activeStage.description}</p>
            <p className="stage-outcome">
              <strong>Lo que ganás:</strong> {activeStage.outcome}
            </p>
            <div className="stage-navigation">
              <button
                className="button"
                type="button"
                disabled={selectedStage === 0}
                onClick={() => showStage(Math.max(0, selectedStage - 1))}
              >
                Anterior
              </button>
              <button
                className="button button-primary"
                type="button"
                onClick={() => showStage(selectedStage < 7 ? selectedStage + 1 : 0)}
              >
                {selectedStage < 7 ? "Siguiente etapa" : "Volver al inicio"}
              </button>
            </div>
          </div>
          <div className="stage-tools">
            <h4>Herramientas que usamos</h4>
            <ul>
              {activeStage.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
