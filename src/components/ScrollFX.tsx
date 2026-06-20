"use client";

// Efectos globales: barra de progreso, animaciones al hacer scroll (.rv),
// contadores (data-count) y botones flotantes (WhatsApp / subir).

import { useEffect } from "react";
import { waLink } from "@/lib/site";
import { IcWhatsApp } from "./icons";

export default function ScrollFX() {
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      const bar = document.getElementById("progress");
      if (bar) bar.style.width = pct + "%";
      const tf = document.getElementById("topFloat");
      if (tf) tf.classList.toggle("show", h.scrollTop > 500);
      const navEl = document.querySelector("nav");
      if (navEl) navEl.classList.toggle("scrolled", h.scrollTop > 20);
    };
    window.addEventListener("scroll", onScroll);

    const countUp = (el: Element) => {
      const node = el as HTMLElement;
      const target = +(node.dataset.count || "0");
      const suf = node.dataset.suffix || "";
      let c = 0;
      const inc = Math.max(1, Math.round(target / 40));
      const tick = () => {
        c = Math.min(target, c + inc);
        node.textContent = c + suf;
        if (c < target) requestAnimationFrame(tick);
      };
      tick();
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            e.target.querySelectorAll("[data-count]").forEach(countUp);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="progress-bar" id="progress" />
      <a className="wa-float" href={waLink("Hola, quiero cotizar un servicio de rectificación")} target="_blank" rel="noopener" aria-label="WhatsApp">
        <IcWhatsApp s={28} />
      </a>
      <div className="top-float" id="topFloat" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Subir">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </div>
    </>
  );
}
