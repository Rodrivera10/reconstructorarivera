"use client";

import { useEffect, useState } from "react";
import { GALLERY, GALLERY_CATS } from "@/lib/site";

export default function Gallery() {
  const [cat, setCat] = useState<(typeof GALLERY_CATS)[number]>("Todos");
  const [open, setOpen] = useState<number | null>(null);

  const items = cat === "Todos" ? GALLERY : GALLERY.filter((g) => g.cat === cat);

  // Cerrar al cambiar de filtro
  useEffect(() => setOpen(null), [cat]);

  // Navegación del visor con teclado
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <section className="section" id="galeria">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">Galería de trabajos</span>
          <h2>Lo que sale de nuestra reconstructora</h2>
          <p>Trabajos reales de rectificación. Toca una foto para ampliarla.</p>
        </div>

        <div className="gal-filters rv">
          {GALLERY_CATS.map((c) => (
            <button key={c} className={`gal-chip${cat === c ? " active" : ""}`} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="gal-grid rv rv-stagger">
          {items.map((g, i) => (
            <button className="gph" key={g.img} onClick={() => setOpen(i)} aria-label={`Ampliar: ${g.alt}`}>
              <span className="gph-ph">Foto próximamente</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.img} alt={g.alt} loading="lazy" onError={(e) => (e.currentTarget.style.opacity = "0")} />
              <span className="gph-cat">{g.cat}</span>
              <span className="gph-label">{g.alt}</span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lb-close" onClick={() => setOpen(null)} aria-label="Cerrar">×</button>
          <button
            className="lb-nav prev"
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }}
            aria-label="Anterior"
          >‹</button>
          <figure className="lb-fig" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={items[open].img} alt={items[open].alt} />
            <figcaption>{items[open].alt} · <span>{items[open].cat}</span></figcaption>
          </figure>
          <button
            className="lb-nav next"
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }}
            aria-label="Siguiente"
          >›</button>
        </div>
      )}
    </section>
  );
}
