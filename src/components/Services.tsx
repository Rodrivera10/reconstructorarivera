import { SERVICE_CATS } from "@/lib/site";
import { IcCheck } from "./icons";

// Un icono por categoría (en el mismo orden que SERVICE_CATS)
const CAT_ICONS = [
  // Motor y Block
  <svg key="i0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><path d="M5 9h2l1-2h4l1 2h3l3 3v4h-2M5 9v7h12M5 9H3v4h2" /><circle cx="8.5" cy="16.5" r="1.7" /><circle cx="15" cy="16.5" r="1.7" /></svg>,
  // Bancada, Levas y Bielas
  <svg key="i1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><circle cx="6" cy="12" r="3" /><circle cx="18" cy="12" r="3" /><path d="M9 12h6M6 9V5M18 9V5" /></svg>,
  // Culatas y Válvulas
  <svg key="i2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><rect x="4" y="9" width="16" height="6" rx="1" /><path d="M8 9V4M12 9V4M16 9V4M8 15v5M16 15v5" /></svg>,
  // Sistema de Inyección
  <svg key="i3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><path d="M12 2v6M9 8h6l-1 4H10zM11 12v6a1 1 0 0 0 2 0v-6" /><path d="M12 20v2" /></svg>,
  // Pistones y Cigüeñal
  <svg key="i4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><rect x="8" y="3" width="8" height="7" rx="1" /><path d="M12 10v5" /><circle cx="12" cy="18" r="3" /></svg>,
  // Soldadura Especializada
  <svg key="i5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}><path d="M3 21l9-9M12 12l3-3 3 3-3 3zM15 9l3-3 2 2-3 3" /><circle cx="5" cy="19" r="1.5" /></svg>,
];

export default function Services() {
  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">Nuestros servicios</span>
          <h2>Toda la línea de reconstrucción de motores</h2>
          <p>Del block a la culata, cada proceso con maquinaria de precisión.</p>
        </div>
        <div className="svc-cats rv rv-stagger">
          {SERVICE_CATS.map((c, i) => (
            <article className="svc-cat" key={c.cat}>
              <div className="svc-cat-head">
                <span className="svc-cat-ic">{CAT_ICONS[i]}</span>
                <div>
                  <h4>{c.cat}</h4>
                  <span className="cat-count">{c.items.length} servicios</span>
                </div>
              </div>
              <ul className="svc-list">
                {c.items.map((it) => (
                  <li key={it}><IcCheck s={16} /> {it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
