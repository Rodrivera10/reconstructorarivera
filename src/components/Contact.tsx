"use client";

import { useState } from "react";
import { waLink, EMAIL, SOCIAL } from "@/lib/site";
import { IcCheck, IcInstagram } from "./icons";

export default function Contact() {
  const [confirm, setConfirm] = useState(false);

  const sendWA = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const fecha = f.get("fecha") ? `\nFecha preferida: ${f.get("fecha")}` : "";
    const extra = f.get("msg") ? `\nDetalle: ${f.get("msg")}` : "";
    const msg =
      `Hola, soy ${f.get("nombre")}. Quiero solicitar una cotización:\n` +
      `• Servicio: ${f.get("svc")}\n` +
      `• Motor: ${f.get("motor")}\n` +
      `• Modalidad: ${f.get("modalidad")}` +
      fecha +
      extra +
      `\nTel: ${f.get("tel")}`;
    window.open(waLink(msg), "_blank");
    setConfirm(true);
    setTimeout(() => setConfirm(false), 5000);
  };

  return (
    <section className="section" id="contacto">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">Contáctanos</span>
          <h2>Estamos para asesorarte</h2>
          <p>Completa el formulario y te respondemos por WhatsApp.</p>
        </div>
        <div className="contact-grid rv" style={{ marginTop: 34 }}>
          <div className="contact-info">
            <div className="info-row">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
              <div><h5>Teléfono / WhatsApp</h5><span>+502 5311-5249 · +502 2479-2900</span></div>
            </div>
            <div className="info-row">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
              <div><h5>Dirección</h5><span>2a Ave 2-66, Guajitos, Zona 21, Guatemala</span></div>
            </div>
            <div className="info-row">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M22 6l-10 7L2 6" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg></div>
              <div><h5>Correo electrónico</h5><span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div>
            </div>
            <div className="info-row">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></div>
              <div><h5>Horario</h5><span>Lun–Vie 7:00–16:00 · Sáb 7:00–12:00 · Dom cerrado</span></div>
            </div>
            <div className="info-row">
              <div className="ic"><IcInstagram s={20} /></div>
              <div>
                <h5>Redes sociales</h5>
                <span className="info-social">
                  <a href={SOCIAL.facebook} target="_blank" rel="noopener">Facebook</a>
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener">Instagram</a>
                  <a href={SOCIAL.tiktok} target="_blank" rel="noopener">TikTok</a>
                </span>
              </div>
            </div>
            <div className="map-box">
              <iframe loading="lazy" title="Ubicación" src="https://www.google.com/maps?q=2a+Avenida+2-66,+Guajitos,+Zona+21,+Guatemala&output=embed" allowFullScreen />
            </div>
          </div>

          <div className="contact-form">
            <h3>Cotización y reserva en línea</h3>
            <div className="sub">Cuéntanos qué necesitas y, si quieres, deja tu fecha preferida. Te respondemos por WhatsApp con el detalle.</div>
            <form onSubmit={sendWA}>
              <div className="form-row">
                <div><label>Nombre y apellido*</label><input name="nombre" required placeholder="Tu nombre" /></div>
                <div><label>Teléfono*</label><input name="tel" required placeholder="+502 ..." /></div>
              </div>
              <div className="form-row">
                <label style={{ marginTop: 14 }}>Tipo de motor</label>
                <label style={{ marginTop: 14 }}>Servicio que necesitas</label>
              </div>
              <div className="form-row" style={{ marginTop: 0 }}>
                <select name="motor"><option>4 cilindros · gasolina</option><option>4 cilindros · diesel</option><option>6 cilindros</option><option>8 cilindros</option><option>Industrial</option></select>
                <select name="svc"><option>Rectificar cigüeñal</option><option>Rimar / encamisar block</option><option>Cepillo de culatas</option><option>Rectificar válvulas</option><option>Soldadura</option><option>No estoy seguro / diagnóstico</option></select>
              </div>
              <div className="form-row">
                <label style={{ marginTop: 14 }}>Modalidad</label>
                <label style={{ marginTop: 14 }}>Fecha preferida</label>
              </div>
              <div className="form-row" style={{ marginTop: 0 }}>
                <select name="modalidad"><option>Dejar la pieza en el taller</option><option>Necesito orientación primero</option><option>Soy taller / trabajo recurrente</option><option>Recoger a domicilio (consultar)</option></select>
                <input type="date" name="fecha" />
              </div>
              <label>Mensaje (opcional)</label>
              <textarea name="msg" rows={3} placeholder="Cuéntanos qué le pasa al motor..." />
              <button className="btn-gold" style={{ width: "100%", justifyContent: "center", marginTop: 20 }}>Enviar cotización</button>
              <div className={`confirm-msg${confirm ? " show" : ""}`}>
                <IcCheck s={18} />
                ¡Listo! Se abrió WhatsApp con tu solicitud.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
