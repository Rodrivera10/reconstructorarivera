"use client";

import { useEffect, useRef, useState } from "react";

export type Media = { type: "video" | "image"; src: string; poster?: string };

export default function ServiceMedia({ items, label }: { items: Media[]; label: string }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Solo carga/reproduce el video cuando el widget entra en pantalla (mejor en móvil).
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Reproduce únicamente el media activo y visible; pausa los demás.
  useEffect(() => {
    items.forEach((m, i) => {
      const v = videoRefs.current[i];
      if (m.type !== "video" || !v) return;
      if (i === active && visible) v.play().catch(() => {});
      else v.pause();
    });
  }, [active, visible, items]);

  return (
    <div className="svc-media" ref={wrapRef}>
      <div className="svc-media-stage">
        {items.map((m, i) =>
          m.type === "video" ? (
            <video
              key={i}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className={i === active ? "on" : ""}
              src={visible || i === active ? m.src : undefined}
              poster={m.poster}
              muted
              loop
              playsInline
              preload="none"
            />
          ) : (
            <img
              key={i}
              className={i === active ? "on" : ""}
              src={m.src}
              alt={`${label} ${i + 1}`}
              loading="lazy"
            />
          )
        )}
        {items.length > 1 && (
          <div className="svc-media-dots">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === active ? "on" : ""}
                aria-label={`Ver ${label} · vista ${i + 1}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
