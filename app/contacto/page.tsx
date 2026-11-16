import type { Metadata } from "next";
import ContactForm from "../_components/contact-form";
import { createPageMetadata } from "../_lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/contacto",
  "Contacto | TTDigitales",
  "Contactá a TTDigitales para conversar sobre desarrollo web, marketing digital, datos y territorio.",
);

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contacto</p>
          <h1>Contanos qué querés lograr.</h1>
          <p className="lead">
            Con una primera conversación vemos por dónde empezar y qué
            alternativas pueden servir para tu proyecto.
          </p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container">
          <h2>Escribinos</h2>
          <p className="section-intro">
            Completá estos datos y prepararemos un mensaje para el equipo.
          </p>
          <ContactForm />
          <div className="contact-grid">
            <article>
              <h3>Augusto Tovar</h3>
              <a href="mailto:c.augustovar@gmail.com?subject=Consulta%20TTDigitales">
                c.augustovar@gmail.com
              </a>
            </article>
            <article>
              <h3>Lucas Marques de Paiva</h3>
              <a href="mailto:lucasmarques6@hotmail.com?subject=Consulta%20TTDigitales">
                lucasmarques6@hotmail.com
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
