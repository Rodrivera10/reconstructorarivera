"use client";

import { useState } from "react";
import { SOCIAL, waLink } from "@/lib/site";
import { IcWhatsApp, IcFacebook, IcInstagram, IcTikTok } from "./icons";

const LINKS: [string, string][] = [
  ["#nosotros", "¿Quiénes somos?"],
  ["#publico", "Para ti"],
  ["#servicios", "Servicios"],
  ["#proceso", "Proceso"],
  ["#contacto", "Contáctanos"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-inner">
        <a className="brand" href="#" onClick={() => setMenuOpen(false)}>
          <span className="brand-logo"><img src="/logo.png" alt="Reconstructora Rivera" /></span>
          <div className="brand-text"><b>Reconstructora Rivera</b><span>Rectificación de Motores</span></div>
        </a>
        <div className="nav-links">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <a href="#contacto" className="btn-gold sm nav-cta">Cotiza aquí</a>
        <button className={`nav-toggle${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Menú" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a href="#contacto" className="btn-gold" onClick={() => setMenuOpen(false)}>Cotiza aquí</a>
        <div className="mobile-social">
          <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><IcWhatsApp s={18} /></a>
          <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook"><IcFacebook s={18} /></a>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram"><IcInstagram s={18} /></a>
          <a href={SOCIAL.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><IcTikTok s={18} /></a>
        </div>
      </div>
    </nav>
  );
}
