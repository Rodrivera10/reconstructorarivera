const STEPS: [n: string, title: string, desc: string][] = [
  ["01", "Diagnóstico", "Recibimos tu motor o pieza y la medimos con instrumentos de precisión para evaluar su estado real."],
  ["02", "Cotización", "Te enviamos por WhatsApp el detalle de los trabajos necesarios y el costo, sin sorpresas después."],
  ["03", "Maquinado", "Rectificamos cada pieza con maquinaria industrial respetando las tolerancias de fábrica."],
  ["04", "Entrega y garantía", "Inspeccionamos las medidas finales y entregamos tu pieza lista, respaldada con garantía."],
];

export default function Process() {
  return (
    <section className="section" id="proceso">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">¿Cómo trabajamos?</span>
          <h2>De la pieza desarmada a la entrega con garantía</h2>
        </div>
        <div className="process-wrap rv rv-stagger">
          <div className="process-grid">
            {STEPS.map(([n, t, d]) => (
              <div className="process-card" key={n}>
                <div className="pn">{n}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
