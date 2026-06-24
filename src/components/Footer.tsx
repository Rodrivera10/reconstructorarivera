import { SOCIAL, waLink } from "@/lib/site";
import { IcWhatsApp, IcFacebook, IcInstagram, IcTikTok } from "./icons";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <div className="footer-brand">
            <span className="footer-logo"><img src="/logo.png" alt="Reconstructora Rivera" /></span>
            <b>Reconstructora Rivera</b>
          </div>
          <p>Más de 25 años reconstruyendo y rectificando motores automotrices e industriales en Guatemala. Precisión, experiencia y confianza en cada pieza.</p>
          <div className="footer-social">
            <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><IcWhatsApp s={15} /></a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook"><IcFacebook s={14} /></a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram"><IcInstagram s={14} /></a>
            <a href={SOCIAL.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><IcTikTok s={14} /></a>
          </div>
        </div>
        <div>
          <h5>Enlaces</h5>
          <ul>
            <li><a href="#nosotros">¿Quiénes somos?</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proceso">Cómo trabajamos</a></li>
            <li><a href="#contacto">Contáctanos</a></li>
          </ul>
        </div>
        <div>
          <h5>Horario</h5>
          <p>Lunes a viernes<br /><strong style={{ color: "#fff" }}>7:00 – 16:00</strong></p>
          <p style={{ marginTop: 10 }}>Sábados<br /><strong style={{ color: "#fff" }}>7:00 – 12:00</strong></p>
          <p style={{ marginTop: 10 }}>Domingos<br /><strong style={{ color: "#ff8a8a" }}>Cerrado</strong></p>
        </div>
        <div>
          <h5>Contacto</h5>
          <p>2a Ave 2-66, Guajitos<br />Zona 21, Guatemala</p>
          <p style={{ marginTop: 10 }}>+502 5311-5249<br />+502 2479-2900</p>
          <p style={{ marginTop: 10 }}>riverareconstructora@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Reconstructora Rivera. Todos los derechos reservados. · <a href="#" style={{ color: "#aab2d0" }}>Panel de administración</a></div>
    </footer>
  );
}
