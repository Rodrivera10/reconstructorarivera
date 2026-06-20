const POINTS: [icon: React.ReactNode, title: string, desc: string][] = [
  [<svg key="w0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>, "Medición certificada", "Cada pieza se mide antes y después con instrumentos de precisión calibrados."],
  [<svg key="w1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M12 2l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6z" /></svg>, "Garantía por escrito", "Te entregamos un documento de garantía sobre el trabajo realizado y las piezas instaladas."],
  [<svg key="w2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M3 17l6-6 4 4 8-8M21 7v5M21 7h-5" /></svg>, "Trabajo propio, sin terceros", "No subcontratamos: el equipo que mide es el que maquina y el que entrega."],
  [<svg key="w3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>, "Seguimiento postventa", "Si tienes dudas después de instalar la pieza, te asesoramos por WhatsApp."],
];

export default function Warranty() {
  return (
    <section className="section alt" id="garantia">
      <div className="wrap warranty">
        <div className="warranty-visual rv">
          <div className="warranty-seal"><b>25+</b><span>Años</span></div>
          <h3>Garantía real, respaldada por experiencia</h3>
          <p>Cada pieza que rectificamos sale con garantía escrita, porque la medimos, la maquinamos y la inspeccionamos nosotros mismos.</p>
        </div>
        <div className="warranty-points rv">
          <div className="sec-title" style={{ marginBottom: 8 }}>
            <span className="tag">Garantía Rivera</span>
            <h2>Tu motor, respaldado en cada etapa</h2>
          </div>
          {POINTS.map(([icon, t, d]) => (
            <div className="wpoint" key={t}>
              <div className="ic">{icon}</div>
              <div><h5>{t}</h5><p>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
