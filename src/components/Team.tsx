// Reemplaza las imágenes por fotos reales de tu equipo (/img/...).
const TEAM: [img: string, title: string, sub: string][] = [
  ["https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&q=80", "Equipo de maquinado", "Rectificación de precisión"],
  ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80", "Equipo de armado", "Bielas y pistones"],
  ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80", "Equipo de soldadura", "Hierro y aluminio"],
  ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80", "Control de calidad", "Inspección y garantía"],
];

export default function Team() {
  return (
    <section className="section alt">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">Nuestro equipo</span>
          <h2>Las manos detrás de cada motor</h2>
          <p>Técnicos especializados en motores de gasolina y diesel.</p>
        </div>
        <div className="team-grid rv rv-stagger">
          {TEAM.map(([img, t, s]) => (
            <div className="team-card" key={t}>
              {/* TODO: foto real del equipo */}
              <div className="team-photo"><img src={img} alt={t} loading="lazy" /></div>
              <h4>{t}</h4><span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
