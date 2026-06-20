import { waLink } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="section alt" style={{ paddingTop: 0 }}>
      <div className="wrap rv">
        <div className="cta-band">
          <div>
            <h3>¿Listo para darle vida nueva a tu motor?</h3>
            <p>Escríbenos por WhatsApp y te cotizamos en minutos.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn-gold" href="#contacto">Cotiza aquí</a>
            <a className="btn-outline" style={{ color: "#fff", borderColor: "#fff" }} href={waLink()} target="_blank" rel="noopener">WhatsApp directo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
