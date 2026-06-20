import { IcCheck } from "./icons";

export default function Audience() {
  return (
    <section className="section tech-bg" id="publico">
      <div className="wrap">
        <div className="sec-title rv" style={{ maxWidth: 760, marginInline: "auto", textAlign: "center" }}>
          <span className="tag" style={{ justifyContent: "center" }}>¿Para quién trabajamos?</span>
          <h2>Una sola precisión, dos formas de trabajar contigo</h2>
          <p>El mismo trabajo de precisión, seas taller o dueño del vehículo.</p>
        </div>
        <div className="audience-grid rv rv-stagger">
          <div className="aud-card dark">
            <div className="aud-glow" />
            <div className="aud-ic">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.4-5.4l-2.1 2.1-1.6-.4-.4-1.6 2.1-2.1z" /></svg>
            </div>
            <span className="aud-sub">Para talleres y mecánicos</span>
            <h3>Tu rectificador de confianza, sin filas</h3>
            <p>Trabajamos como tu aliado técnico: medidas exactas, plazos cumplidos y precios de taller para que tú entregues a tiempo.</p>
            <ul className="aud-list">
              <li><IcCheck /> Tolerancias de fábrica garantizadas</li>
              <li><IcCheck /> Plazos claros desde la cotización</li>
              <li><IcCheck /> Volumen y trabajo recurrente</li>
              <li><IcCheck /> Soporte técnico directo por WhatsApp</li>
            </ul>
            <div className="aud-actions">
              <a className="btn-gold" href="#contacto">Cotizar como taller</a>
            </div>
          </div>
          <div className="aud-card">
            <div className="aud-glow" />
            <div className="aud-ic">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4H5zM5 13v3M19 13v3" /><circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" /></svg>
            </div>
            <span className="aud-sub">Para dueños de vehículo</span>
            <h3>Te explicamos qué le pasa a tu motor</h3>
            <p>Sin tecnicismos confusos: diagnosticamos, te decimos qué necesita y te lo dejamos como nuevo, con garantía por escrito.</p>
            <ul className="aud-list">
              <li><IcCheck /> Diagnóstico honesto y claro</li>
              <li><IcCheck /> Cotización sin compromiso</li>
              <li><IcCheck /> Garantía por escrito en cada pieza</li>
              <li><IcCheck /> Te avisamos cuando esté listo</li>
            </ul>
            <div className="aud-actions">
              <a className="btn-outline" href="#contacto">Cotizar mi motor</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
