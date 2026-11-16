"use client";

import { useState, type FormEvent } from "react";

const contactNeeds = [
  "Tengo una idea",
  "Ya tengo algo y quiero actualizarlo",
  "Necesito una herramienta puntual",
];

export default function ContactForm() {
  const [contactMethod, setContactMethod] = useState<
    "whatsapp" | "email" | null
  >(null);
  const [selectedNeeds, setSelectedNeeds] = useState<number[]>([]);
  const [contactError, setContactError] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  function toggleNeed(index: number) {
    setSelectedNeeds((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index],
    );
    setContactError("");
  }

  function submitContactForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (selectedNeeds.length === 0) {
      setContactError("Seleccioná al menos una opción para continuar.");
      return;
    }

    if (!contactMethod) {
      setContactError("Seleccioná un medio de respuesta.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const replyMethod = contactMethod === "whatsapp" ? "WhatsApp" : "Mail";
    const needs = selectedNeeds.map((index) => contactNeeds[index]).join(", ");
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

  if (contactSubmitted) {
    return (
      <div className="contact-success" aria-live="polite">
        <h3>¡Gracias por escribirnos!</h3>
        <p>
          Se abrirá tu cliente de correo con el mensaje listo. Revisá y confirmá
          el envío allí.
        </p>
      </div>
    );
  }

  return (
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
      <fieldset
        className="contact-fieldset"
        aria-describedby={contactError ? "contact-error" : undefined}
      >
        <legend>¿En qué podemos ayudarte? Elegí una o varias opciones *</legend>
        <div className="contact-options">
          {contactNeeds.map((need, index) => (
            <label className="contact-option" key={need}>
              <input
                checked={selectedNeeds.includes(index)}
                name="needs"
                type="checkbox"
                value={need}
                onChange={() => toggleNeed(index)}
              />
              <span>{need}</span>
            </label>
          ))}
        </div>
        {contactError && (
          <p className="contact-error" id="contact-error" role="alert">
            {contactError}
          </p>
        )}
      </fieldset>
      <label className="form-field">
        Contanos un poco más
        <textarea maxLength={1500} name="details" rows={4} />
      </label>
      <fieldset className="contact-fieldset">
        <legend>¿Por qué medio preferís que te respondamos? *</legend>
        <div className="contact-options contact-methods">
          <label className="contact-option">
            <input
              checked={contactMethod === "whatsapp"}
              name="contact-method"
              required
              type="radio"
              value="whatsapp"
              onChange={() => setContactMethod("whatsapp")}
            />
            <span>WhatsApp</span>
          </label>
          <label className="contact-option">
            <input
              checked={contactMethod === "email"}
              name="contact-method"
              required
              type="radio"
              value="email"
              onChange={() => setContactMethod("email")}
            />
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
        <button className="button button-primary" type="submit">
          Preparar mensaje
        </button>
      </div>
      <p className="contact-form-note">
        El botón abrirá tu aplicación de correo para confirmar el envío.
      </p>
    </form>
  );
}
