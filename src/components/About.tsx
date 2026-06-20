import { IcCheck } from "./icons";

export default function About() {
  return (
    <section className="section" id="nosotros">
      <div className="wrap about2">
        <div className="about2-media rv">
          {/* TODO: reemplazar por foto real, ej. /img/taller.jpg */}
          <img src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80" alt="Rectificación de motor en Reconstructora Rivera" />
          <div className="about2-stat">
            <b>25+</b>
            <span>Años rectificando motores en Guatemala</span>
          </div>
          <div className="about2-badge"><IcCheck /> Calidad garantizada</div>
        </div>
        <div className="about2-content rv">
          <div className="sec-title" style={{ marginBottom: 0 }}>
            <span className="tag">¿Quiénes somos?</span>
            <h2>Más de 25 años haciendo lo que otros talleres <span className="hl">no se atreven</span></h2>
          </div>
          <p style={{ marginTop: 18 }}>En Reconstructora Rivera no improvisamos. Dominamos la rectificación de motores automotrices e industriales con maquinaria de precisión y un equipo forjado durante más de dos décadas. Hacemos el trabajo difícil —y lo hacemos bien a la primera.</p>
          <p>Tolerancias de fábrica, plazos que cumplimos y un estándar que la competencia no alcanza. Por eso los mecánicos y talleres más exigentes de Guatemala nos confían sus motores, una y otra vez.</p>
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
              <div><h5>Garantía por escrito</h5><p>Respaldamos cada pieza que entregamos.</p></div>
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
