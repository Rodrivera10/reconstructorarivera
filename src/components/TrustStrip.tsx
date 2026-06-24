export default function TrustStrip() {
  return (
    <section className="trust">
      <div className="wrap">
        <div className="item rv">
          <span className="t-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="9" r="6" /><path d="M9 14l-1.5 7L12 19l4.5 2L15 14" /></svg></span>
          <b data-count="25" data-suffix="+">0</b><small>Años de experiencia</small>
        </div>
        <div className="item rv">
          <span className="t-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
          <b data-count="100" data-suffix="%">0</b><small>Empresa guatemalteca</small>
        </div>
        <div className="item rv">
          <span className="t-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.4-5.4l-2.1 2.1-1.6-.4-.4-1.6 2.1-2.1z" /></svg></span>
          <b data-count="24" data-suffix="">0</b><small>Servicios especializados</small>
        </div>
        <div className="item rv">
          <span className="t-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M12 2l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg></span>
          <b>★★★★★</b><small>Calidad respaldada</small>
        </div>
      </div>
    </section>
  );
}
