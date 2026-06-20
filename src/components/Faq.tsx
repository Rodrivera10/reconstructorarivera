"use client";

import { useState } from "react";
import { FAQS } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-title rv">
          <span className="tag">Preguntas frecuentes</span>
          <h2>Lo que más nos preguntan</h2>
        </div>
        <div className="faq-list rv">
          {FAQS.map((f, i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
              <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}<span className="plus">+</span>
              </div>
              <div className="faq-a" style={{ maxHeight: open === i ? 400 : 0 }}>
                <div>{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
