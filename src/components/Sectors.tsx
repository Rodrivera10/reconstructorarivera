import { SECTORS } from "@/lib/site";

export default function Sectors() {
  return (
    <section className="section alt" id="sectores">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">Sectores que trabajamos</span>
          <h2>Un servicio de rectificación para cada tipo de motor</h2>
          <p>El proceso y el equipo correctos para cada tipo de motor.</p>
        </div>
        <div className="rule" />

        <div className="sectors-grid rv rv-stagger">
          {SECTORS.map((s) => (
            <article className="sec-card2" key={s.title}>
              {/* TODO: reemplaza la imagen por tu foto real en {s.local} */}
              <img src={s.img} alt={s.title} loading="lazy" />
              <span className="sc-corner tl" />
              <span className="sc-corner br" />
              <span className="sc-scan" />
              <div className="sc-body">
                <span className="sc-tag">{s.tag}</span>
                <h4>{s.title}</h4>
                <ul className="sc-items">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a className="btn-gold sm" href="#contacto">Conoce más</a>
              </div>
            </article>
          ))}
        </div>

        <div className="rule" />
        <div className="brands-box rv rv-stagger">
          <h3>Trabajamos con todas las marcas y tipos de motor</h3>
          <div className="brand-grid">
            <div className="brand-tile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /></svg>4 cilindros</div>
            <div className="brand-tile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="6" /></svg>6 cilindros</div>
            <div className="brand-tile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="1.4" fill="currentColor" /><circle cx="15" cy="9" r="1.4" fill="currentColor" /><circle cx="9" cy="15" r="1.4" fill="currentColor" /><circle cx="15" cy="15" r="1.4" fill="currentColor" /></svg>8 cilindros</div>
            <div className="brand-tile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M5 14l1.5-5h7L15 14M5 14v4h10v-4M5 14H3M15 14h2" /><circle cx="8" cy="18" r="1.5" /><circle cx="13" cy="18" r="1.5" /></svg>Gasolina</div>
            <div className="brand-tile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 9h6M9 13h6M9 17h3" /></svg>Diesel</div>
            <div className="brand-tile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><rect x="3" y="11" width="13" height="6" rx="1" /><path d="M16 13h3l2 2v2h-5z" /><circle cx="7.5" cy="18" r="1.5" /><circle cx="17.5" cy="18" r="1.5" /></svg>Particular</div>
            <div className="brand-tile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><rect x="2" y="8" width="14" height="9" rx="1" /><path d="M16 11h3l3 3v3h-6z" /><circle cx="6.5" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" /></svg>Transporte</div>
            <div className="brand-tile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M12 2l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6z" /></svg>Industrial</div>
          </div>
        </div>
      </div>
    </section>
  );
}
