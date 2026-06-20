// Antes / Después. Reemplaza las imágenes por fotos reales del taller (/img/...).
const PAIRS: [before: string, after: string, title: string, desc: string][] = [
  ["https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=78", "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=78", "Block rectificado", "Cilindros llevados a sobremedida, superficie lista para nuevos pistones."],
  ["https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400&q=78", "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=400&q=78", "Culata cepillada", "Superficie plana y válvulas nuevas, lista para sellar perfecto."],
  ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=78", "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&q=78", "Cigüeñal pulido", "Muñones rectificados a medida exacta con acabado espejo."],
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
        <div className="compare-grid rv rv-stagger">
          {PAIRS.map(([b, a, t, d]) => (
            <div className="compare-card" key={t}>
              <div className="compare-imgs">
                {/* TODO: foto real "antes" */}
                <div className="img-before"><img src={b} alt={`${t} antes`} loading="lazy" /></div>
                {/* TODO: foto real "después" */}
                <div className="img-after"><img src={a} alt={`${t} después`} loading="lazy" /></div>
                <span className="lbl before">Antes</span><span className="lbl after">Después</span>
              </div>
              <div className="compare-text"><h4>{t}</h4><p>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
