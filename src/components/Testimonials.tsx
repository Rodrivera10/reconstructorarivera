import { IcQuote } from "./icons";

const TESTS: [av: string, who: string, role: string, text: string][] = [
  ["JM", "Taller mecánico", "Cliente recurrente", "Llevamos varios motores con Rivera y siempre entregan en el tiempo que prometen, con la medida exacta. Para nuestro taller es el rectificador de confianza."],
  ["RC", "Cliente particular", "Zona 21, Guatemala", "Rectificaron el block y la culata de mi pickup. Quedó funcionando mejor que antes, y la atención fue clara desde la cotización hasta la entrega."],
  ["FT", "Flotilla de transporte", "Cliente industrial", "Para nuestra flotilla necesitamos un proveedor serio en rectificación de cigüeñales. Rivera cumple con la calidad y la garantía que pedimos."],
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">Lo que dicen de nosotros</span>
          <h2>La confianza de mecánicos y clientes durante 25 años</h2>
        </div>
        <div className="test-grid rv rv-stagger">
          {TESTS.map(([av, who, role, text]) => (
            <div className="test-card" key={av}>
              <IcQuote />
              <div className="stars">★★★★★</div>
              <p>&quot;{text}&quot;</p>
              <div className="who"><div className="av">{av}</div><div><b>{who}</b><small>{role}</small></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
