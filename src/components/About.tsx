import { IcCheck } from "./icons";

export default function About() {
  return (
    <section className="section" id="nosotros">
      <div className="wrap about2">
        <div className="about2-media rv">
          {/* TODO: reemplazar por foto real, ej. /img/taller.jpg */}
          <img src="/Vistacalle.png" alt="Rectificación de motor en Reconstructora Rivera" />
          <div className="about2-stat">
            <b>25+</b>
            <span>Años rectificando motores en Guatemala</span>
          </div>
          <div className="about2-badge"><IcCheck /> Calidad respaldada</div>
        </div>
        <div className="about2-content rv">
          <div className="sec-title" style={{ marginBottom: 0 }}>
            <span className="tag plain">¿Quiénes somos?</span>
            <h2>Una reconstructora que hace lo que otros <span className="hl">no se atreven</span></h2>
          </div>
          <p style={{ marginTop: 18 }}>Reconstructora Rivera es una empresa guatemalteca especializada en la rectificación y reconstrucción de motores. En más de 25 años le hemos devuelto la vida a motores de carros, camiones y maquinaria industrial, trabajando cada pieza con maquinaria de precisión y a medida exacta.</p>
          <div className="about2-features">
            <div className="af-item">
              <div className="af-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.2" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg></div>
              <div><h5>Precisión sin atajos</h5><p>Medidas exactas a tolerancia de fábrica.</p></div>
            </div>
            <div className="af-item">
              <div className="af-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}><path d="M12 2l2.4 5.5L20 8l-4 4 1 6-5-2.8L7 18l1-6-4-4 5.6-.5z" /></svg></div>
              <div><h5>Experiencia real</h5><p>Miles de motores reconstruidos.</p></div>
            </div>
            <div className="af-item">
              <div className="af-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.4-5.4l-2.1 2.1-1.6-.4-.4-1.6 2.1-2.1z" /></svg></div>
              <div><h5>Maquinaria industrial</h5><p>Equipos de precisión por proceso.</p></div>
            </div>
            <div className="af-item">
              <div className="af-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}><path d="M12 2l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg></div>
              <div><h5>Respaldo por escrito</h5><p>Respondemos por cada pieza que entregamos.</p></div>
            </div>
          </div>
          <div className="about2-actions">
            <a className="btn-gold" href="#contacto">Solicita tu cotización</a>
            <a className="btn-outline" href="#servicios">Ver servicios</a>
          </div>
        </div>
      </div>
    </section>
  );
}
