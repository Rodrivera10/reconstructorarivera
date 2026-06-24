// Antes / Después. Cada imagen AyD ya es una composición antes+después (con etiquetas).
const RESULTS: { img: string; title: string; desc: string }[] = [
  { img: "/AyD1.png", title: "Culata rectificada", desc: "Superficie y asientos a medida exacta, lista para sellar perfecto." },
  { img: "/AyD2.png", title: "Válvula rectificada", desc: "Vástago y cabeza restaurados para un cierre hermético." },
  { img: "/AyD3.png", title: "Cigüeñal rectificado", desc: "Muñones a medida exacta con acabado espejo." },
];

export default function Results() {
  return (
    <section className="section alt">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">Resultados</span>
          <h2>El antes y después de cada trabajo</h2>
          <p>Resultados reales: el estado en que llega y cómo lo entregamos.</p>
        </div>
        <div className="ba-grid rv rv-stagger">
          {RESULTS.map((r) => (
            <figure className="ba-card" key={r.title}>
              <div className="ba-media">
                <img src={r.img} alt={`Antes y después · ${r.title}`} loading="lazy" />
              </div>
              <figcaption className="ba-text">
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
