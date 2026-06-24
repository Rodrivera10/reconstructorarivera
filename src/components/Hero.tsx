"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_SLIDES } from "@/lib/site";

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  // Reproduce solo el video del slide activo; pausa los demás.
  useEffect(() => {
    HERO_SLIDES.forEach((src, i) => {
      const v = videoRefs.current[i];
      if (!isVideo(src) || !v) return;
      if (i === slide) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [slide]);

  return (
    <header className="hero" id="hero">
      {HERO_SLIDES.map((src, i) =>
        isVideo(src) ? (
          <div key={i} className="hero-bg" style={{ opacity: slide === i ? 1 : 0 }}>
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="hero-video"
              src={src}
              poster={src.replace(/\.(mp4|webm|mov)$/i, ".jpg")}
              muted
              loop
              playsInline
              preload={i === 0 ? "auto" : "none"}
            />
          </div>
        ) : (
          <div
            key={i}
            className="hero-bg"
            style={{
              backgroundImage: `linear-gradient(100deg,rgba(8,21,48,.85),rgba(8,21,48,.35)),url('${src}')`,
              opacity: slide === i ? 1 : 0,
            }}
          />
        )
      )}
      <div className="wrap hero-content">

        <div className="hero-eyebrow">Más de 25 años de experiencia</div>
        <h1>Rectificación profesional de motores</h1>
        <p>Reconstrucción de blocks, cigüeñales, culatas y bielas con maquinaria de precisión, a medida exacta y entregada a tiempo.</p>
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
