// Cambia el texto y la referencia por la frase o versículo que prefieras.
const VERSE = "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.";
const REF = "Colosenses 3:23";

export default function Verse() {
  return (
    <section className="section alt verse">
      <div className="wrap">
        <div className="verse-inner rv">
          <span className="verse-mark" aria-hidden="true">&ldquo;</span>
          <p className="verse-text">{VERSE}</p>
          <span className="verse-ref">{REF}</span>
        </div>
      </div>
    </section>
  );
}
