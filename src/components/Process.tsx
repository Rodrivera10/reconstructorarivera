const STEPS: { n: string; title: string; desc: string }[] = [
  { n: "01", title: "Diagnóstico", desc: "Recibimos tu motor o pieza y la medimos con instrumentos de precisión para evaluar su estado real." },
  { n: "02", title: "Cotización", desc: "Te enviamos por WhatsApp el detalle de los trabajos necesarios y el costo, sin sorpresas después." },
  { n: "03", title: "Maquinado", desc: "Rectificamos cada pieza con maquinaria industrial respetando las tolerancias de fábrica." },
  { n: "04", title: "Entrega y respaldo", desc: "Inspeccionamos las medidas finales y entregamos tu pieza lista, con el respaldo de nuestro trabajo." },
];

export default function Process() {
  return (
    <section className="section" id="proceso">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">¿Cómo trabajamos?</span>
          <h2>De la pieza desarmada a la entrega con respaldo</h2>
        </div>
        <ol className="tl2 rv rv-stagger">
          {STEPS.map((s, i) => (
            <li className="tl2-step" key={s.n}>
              <div className="tl2-head">
                <span className="tl2-dot">{s.n}</span>
                {i < STEPS.length - 1 && <span className="tl2-conn" aria-hidden="true" />}
              </div>
              <span className="tl2-phase">Fase {s.n}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
