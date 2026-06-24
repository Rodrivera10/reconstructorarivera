import { IcQuote } from "./icons";

// NOTA: reemplaza por reseñas reales (o con permiso) antes de publicar.
const TESTS: [av: string, who: string, role: string, text: string][] = [
  ["RO", "Rolando Orellana", "Cliente particular · Antigua Guatemala", "Rectificaron el block y la culata de mi pickup. Quedó funcionando mejor que antes y la atención fue clara desde la cotización hasta la entrega."],
  ["TN", "Transportes Norma", "Flotilla de camionetas", "Para nuestra flotilla necesitábamos un rectificador serio de cigüeñales. Rivera cumple con la medida exacta y el respaldo que pedimos."],
  ["BC", "Byron Chacón", "Taller mecánico · Ciudad Vieja", "Llevo varios motores con Rivera y siempre entregan en el tiempo que prometen. Para mi taller es el rectificador de confianza."],
  ["TO", "Transportes Orellana", "Flotilla de transporte", "Mantienen nuestras unidades trabajando. Rectificación de precisión y tiempos cumplidos, que es lo que más nos importa."],
  ["ES", "Estuardo Sicán", "Cliente particular · Jocotenango", "Encamisaron el block de mi motor diésel y quedó como nuevo. Me explicaron cada trabajo sin tecnicismos, eso se agradece."],
  ["LA", "Transportes La Antigüeña", "Microbuses turísticos", "Trabajamos rutas todos los días y no podemos parar. Rivera entrega a tiempo y con calidad, por eso seguimos con ellos."],
  ["MX", "Mynor Xitumul", "Taller automotriz · San Lucas Sacatepéquez", "Buen trabajo en bielas y cigüeñal. Respetan las tolerancias de fábrica y el acabado es de primera."],
  ["WC", "Walter Chacón", "Cliente particular · Santa Lucía Milpas Altas", "Cumplieron con la medida exacta y el precio que me cotizaron. Mi motor volvió a rendir como antes, recomendados."],
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">Lo que dicen de nosotros</span>
          <h2>La confianza de mecánicos y clientes durante 25 años</h2>
        </div>
        <div className="test-marquee">
          <div className="test-track">
            {[...TESTS, ...TESTS].map(([av, who, role, text], i) => (
              <div className="test-card" key={i} aria-hidden={i >= TESTS.length}>
                <IcQuote />
                <div className="stars">★★★★★</div>
                <p>&quot;{text}&quot;</p>
                <div className="who"><div className="av">{av}</div><div><b>{who}</b><small>{role}</small></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
