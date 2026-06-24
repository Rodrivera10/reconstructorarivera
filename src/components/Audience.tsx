"use client";

import { useState } from "react";
import { IcCheck } from "./icons";

const IcWrench = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.4-5.4l-2.1 2.1-1.6-.4-.4-1.6 2.1-2.1z" /></svg>
);
const IcCar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4H5zM5 13v3M19 13v3" /><circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" /></svg>
);

const AUDIENCES = {
  taller: {
    icon: <IcWrench />,
    sub: "Para talleres y mecánicos",
    title: "Tu rectificador de confianza, sin filas",
    desc: "Trabajamos como tu aliado técnico: medidas exactas, plazos cumplidos y precios de taller para que tú entregues a tiempo.",
    list: [
      "Tolerancias de fábrica respetadas",
      "Plazos claros desde la cotización",
      "Volumen y trabajo recurrente",
      "Soporte técnico directo por WhatsApp",
    ],
    cta: "Cotizar como taller",
  },
  dueno: {
    icon: <IcCar />,
    sub: "Para dueños de vehículo",
    title: "Te explicamos qué le pasa a tu motor",
    desc: "Sin tecnicismos confusos: diagnosticamos, te decimos qué necesita y te lo dejamos como nuevo, con respaldo por escrito.",
    list: [
      "Diagnóstico honesto y claro",
      "Cotización sin compromiso",
      "Respaldo por escrito en cada pieza",
      "Te avisamos cuando esté listo",
    ],
    cta: "Cotizar mi motor",
  },
} as const;

type Key = keyof typeof AUDIENCES;

export default function Audience() {
  const [active, setActive] = useState<Key>("taller");
  const data = AUDIENCES[active];

  return (
    <section className="section tech-bg" id="publico">
      <div className="wrap">
        <div className="sec-title rv" style={{ maxWidth: 760, marginInline: "auto", textAlign: "center" }}>
          <span className="tag" style={{ justifyContent: "center" }}>¿Para quién trabajamos?</span>
          <h2>Una sola precisión, dos formas de trabajar contigo</h2>
          <p>El mismo trabajo de precisión, seas taller o dueño del vehículo.</p>
        </div>

        <div className="aud2-toggle rv" role="tablist" aria-label="Tipo de cliente">
          <span className="aud2-thumb" data-active={active} aria-hidden="true" />
          <button
            type="button"
            role="tab"
            aria-selected={active === "taller"}
            className={active === "taller" ? "on" : ""}
            onClick={() => setActive("taller")}
          >
            <IcWrench /> Soy taller
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={active === "dueno"}
            className={active === "dueno" ? "on" : ""}
            onClick={() => setActive("dueno")}
          >
            <IcCar /> Soy dueño
          </button>
        </div>

        <div className="aud2-panel rv">
          <span className="aud2-glow" aria-hidden="true" />
          <div className="aud2-inner" key={active}>
            <div className="aud2-left">
              <div className="aud2-ic">{data.icon}</div>
              <span className="aud2-sub">{data.sub}</span>
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
              <a className="btn-gold" href="#contacto">{data.cta}</a>
            </div>
            <ul className="aud2-list">
              {data.list.map((item) => (
                <li key={item}>
                  <span className="aud2-check"><IcCheck /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
