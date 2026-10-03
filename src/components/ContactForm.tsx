import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { profile } from "../data/profile";
import { services } from "../data/portfolio";

type Status = "idle" | "sending" | "success" | "error";
const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
const topics = [
  ...services.map((service) => service.subject),
  "Una oportunidad laboral",
  "Hablemos de una oportunidad",
];

export function ContactForm({
  topic,
  onTopicChange,
}: {
  topic: string;
  onTopicChange: (topic: string) => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const sending = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (String(fields.get("_honey") || "").trim()) return;
    const name = String(fields.get("name") || "").trim();
    const message = String(fields.get("message") || "").trim();
    if (name.length < 2 || message.length < 20) {
      setError("Escribe tu nombre y un mensaje de al menos 20 caracteres.");
      setStatus("error");
      return;
    }
    sending.current = true;
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(
        contactEndpoint || `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email: String(fields.get("email") || "").trim(),
            service: topic,
            message,
            _subject: `Portafolio | ${topic}`,
            _template: "table",
            _honey: "",
            _url: window.location.href,
          }),
          signal: AbortSignal.timeout(20000),
        },
      );
      const result = await response.json();
      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      ) {
        throw new Error("Submission rejected");
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "No se pudo enviar el mensaje. Tus datos siguen aquí: inténtalo de nuevo o escríbeme al correo que aparece abajo.",
      );
    } finally {
      sending.current = false;
    }
  }

  return (
    <form
      className="contact-form"
      id="contact-form"
      action={contactEndpoint || `https://formsubmit.co/${profile.email}`}
      method="POST"
      onSubmit={submit}
      aria-labelledby="form-title"
      aria-busy={status === "sending"}
    >
      <h3 id="form-title">Cuéntame qué tienes en mente</h3>
      <div className="form-row">
        <label htmlFor="contact-name">
          Tu nombre
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="¿Cómo te llamas?"
            minLength={2}
            maxLength={100}
            required
          />
        </label>
        <label htmlFor="contact-email">
          Tu correo
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@empresa.com"
            maxLength={254}
            required
          />
        </label>
      </div>
      <label htmlFor="contact-topic">
        ¿En qué puedo ayudarte?
        <select
          id="contact-topic"
          name="service"
          value={topic}
          onChange={(event) => onTopicChange(event.target.value)}
          required
        >
          {topics.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
          {!topics.includes(topic) && <option value={topic}>{topic}</option>}
        </select>
      </label>
      <label htmlFor="contact-message">
        Tu mensaje
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Cuéntame sobre tu proyecto, el proceso que quieres mejorar o la oportunidad en tu equipo…"
          minLength={20}
          maxLength={5000}
          required
        />
      </label>
      <input
        className="form-honeypot"
        name="_honey"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input type="hidden" name="_subject" value={`Portafolio | ${topic}`} />
      <input type="hidden" name="_template" value="table" />
      <button
        className="button button-lime form-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        <span aria-hidden="true">↗</span>
      </button>
      <div
        className={`form-status form-status-${status}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "success" &&
          "Solicitud enviada. Gracias por escribir; te responderé al correo que indicaste."}
        {status === "error" && error}
      </div>
      <p className="form-privacy">
        {contactEndpoint ? (
          "Tu nombre, correo y mensaje se usan para responder a tu consulta."
        ) : (
          <>El envío se procesa con <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noreferrer">FormSubmit</a> para hacerme llegar tu mensaje.</>
        )}
      </p>
    </form>
  );
}
