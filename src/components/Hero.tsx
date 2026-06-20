"use client";

import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/site";

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [slide]);

  return (
    <header className="hero" id="hero">
      {HERO_SLIDES.map((img, i) => (
        <div
          key={i}
          className="hero-bg"
          style={{
            backgroundImage: `linear-gradient(100deg,rgba(8,21,48,.85),rgba(8,21,48,.35)),url('${img}')`,
            opacity: slide === i ? 1 : 0,
          }}
        />
      ))}
      <div className="wrap hero-content">
       
        <div className="hero-eyebrow">Más de 25 años de experiencia</div>
        <h1>Rectificación profesional de motores</h1>
        <p>Reconstrucción de blocks, cigüeñales, culatas y bielas con maquinaria de precisión y la garantía de un taller guatemalteco que respalda cada pieza que entrega.</p>
        <div className="hero-actions">
          <a className="btn-gold" href="#contacto">Cotiza aquí</a>
          <a className="btn-outline" style={{ color: "#fff", borderColor: "#fff" }} href="#servicios">Conoce más</a>
        </div>
      </div>
      <button className="hero-nav prev" onClick={() => setSlide((s) => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} aria-label="Anterior">‹</button>
      <button className="hero-nav next" onClick={() => setSlide((s) => (s + 1) % HERO_SLIDES.length)} aria-label="Siguiente">›</button>
      <div className="hero-dots">
        {HERO_SLIDES.map((_, i) => (
          <i key={i} className={slide === i ? "active" : ""} onClick={() => setSlide(i)} />
        ))}
      </div>
      <div className="scroll-cue">Desliza<div className="line" /></div>
    </header>
  );
}
