import Link from "next/link";

type ServiceDetailProps = {
  title: string;
  description: string;
  offerings: string[];
  context: string;
};

export default function ServiceDetail({
  title,
  description,
  offerings,
  context,
}: ServiceDetailProps) {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Servicios</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <div className="button-row">
            <Link className="button button-primary" href="/contacto">
              Hablemos de tu proyecto
            </Link>
            <Link className="button" href="/servicios">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-layout">
          <div>
            <h2>En qué podemos ayudarte</h2>
            <ul className="service-detail-list">
              {offerings.map((offering) => (
                <li key={offering}>{offering}</li>
              ))}
            </ul>
          </div>
          <aside className="service-context">
            <h3>Cómo empezamos</h3>
            <p>{context}</p>
            <Link href="/contacto">Contanos qué necesitás</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
