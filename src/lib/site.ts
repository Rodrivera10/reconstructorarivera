// ============================================================
//  Datos centrales del sitio (edítalos aquí en un solo lugar)
// ============================================================

export const WA = "50253115249";
export const EMAIL = "riverareconstructora@gmail.com";
export const WEB = "reconstructorarivera.gt";
export const PHONES = ["+502 5311-5249", "+502 2479-2900"];
export const ADDRESS = "2a Ave 2-66, Guajitos, Zona 21, Guatemala";

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61584375672729",
  instagram: "https://www.instagram.com/reconstructorarivera.gt/",
  tiktok: "https://www.tiktok.com/@reconstructorarivera.gt",
};

export const waLink = (text?: string) =>
  `https://wa.me/${WA}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// ---- HERO (slider). Cada slide puede ser un video (.mp4) o una imagen (.jpg/url);
// el componente Hero detecta el tipo por la extensión. ----
export const HERO_SLIDES = [
  "/video/hero-1.mp4",
  "/video/hero-2.mp4",
  "/video/hero-3.mp4",
];

// ---- SECTORES que trabajamos ----
export type Sector = {
  tag: string;
  title: string;
  img: string; // TODO: reemplazar por imagen real en /img/...
  local: string; // ruta sugerida para la imagen real
  items: string[];
};

export const SECTORS: Sector[] = [
  {
    tag: "Sector automotriz",
    title: "Vehículos particulares",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    local: "/img/sector-particulares.jpg",
    items: ["Sedanes y hatchbacks", "Pick-ups y SUV", "Gasolina y diesel"],
  },
  {
    tag: "Transporte pesado",
    title: "Camiones y flotillas",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80",
    local: "/img/sector-transporte.jpg",
    items: ["Camiones de carga", "Buses y microbuses", "Flotillas completas"],
  },
  {
    tag: "Industrial",
    title: "Motores y maquinaria industrial",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80",
    local: "/img/sector-industrial.jpg",
    items: ["Plantas eléctricas", "Maquinaria pesada", "Motores estacionarios"],
  },
];

// ---- SERVICIOS reales (6 categorías) ----
export type ServiceCat = { cat: string; items: string[] };

export const SERVICE_CATS: ServiceCat[] = [
  {
    cat: "Motor y Block",
    items: ["Rectificar cigüeñal", "Pulir cigüeñal", "Rimar block", "Encamisar block", "Hornear block"],
  },
  {
    cat: "Bancada, Levas y Bielas",
    items: [
      "Cambio de bujes de levas",
      "Ajuste de bancada",
      "Rectificación de bancada",
      "Rectificar bushines de bielas",
      "Rectificar diámetro de bielas",
      "Alinear bielas",
      "Armar pistones a presión",
    ],
  },
  {
    cat: "Culatas y Válvulas",
    items: [
      "Rectificar válvulas",
      "Fresar asientos",
      "Asentar y armar",
      "Cambio de asientos",
      "Cambio de guías",
      "Cepillo de culatas",
      "Prueba de culata",
      "Calibrar culata",
    ],
  },
  {
    cat: "Sistema de Inyección",
    items: ["Prueba de camisas de inyección", "Cambio de camisas de inyección"],
  },
  {
    cat: "Pistones y Cigüeñal",
    items: ["Camisa mechero cigüeñal", "Tornear pistones"],
  },
  {
    cat: "Soldadura Especializada",
    items: ["Soldadura de hierro", "Soldadura de aluminio"],
  },
];

// ---- FAQ ----
export const FAQS = [
  {
    q: "¿Cuánto tiempo tarda una rectificación de block?",
    a: "Depende del estado del motor y del servicio requerido, pero la mayoría de trabajos de block y culata se entregan entre 5 y 10 días hábiles. Te damos un plazo claro desde la cotización.",
  },
  {
    q: "¿Trabajan motores diesel además de gasolina?",
    a: "Sí. Trabajamos motores de gasolina y diesel, de 4, 6 y 8 cilindros, tanto para vehículos particulares como para transporte e industria.",
  },
  {
    q: "¿Qué respaldo tienen los trabajos?",
    a: "Respondemos por el trabajo de maquinado que realizamos. Te explicamos las condiciones específicas según el servicio al momento de la cotización.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Puedes llenar el formulario de esta página, escribirnos directo por WhatsApp al +502 5311-5249, o llevar la pieza a nuestras instalaciones en 2a Ave 2-66, Guajitos, Zona 21.",
  },
  {
    q: "¿Atienden los sábados?",
    a: "Sí, atendemos de lunes a viernes de 7:00 a 16:00 y los sábados de 7:00 a 12:00. Los domingos permanecemos cerrados.",
  },
];

// ---- GALERÍA DE TRABAJOS ----
// Coloca tus fotos reales en: public/img/galeria/  (con estos nombres exactos).
// Si una imagen aún no existe, esa tarjeta saldrá en blanco hasta que la subas.
export const GALLERY_CATS = ["Todos", "Block", "Culatas", "Cigüeñal", "Soldadura"] as const;

export type GalleryItem = { img: string; cat: (typeof GALLERY_CATS)[number]; alt: string };

export const GALLERY: GalleryItem[] = [
  { img: "/img/galeria/block-1.jpg", cat: "Block", alt: "Block rectificado" },
  { img: "/img/galeria/block-2.jpg", cat: "Block", alt: "Cilindros a sobremedida" },
  { img: "/img/galeria/block-3.jpg", cat: "Block", alt: "Maquinado de precisión" },
  { img: "/img/galeria/culata-1.jpg", cat: "Culatas", alt: "Culata cepillada" },
  { img: "/img/galeria/culata-2.jpg", cat: "Culatas", alt: "Válvulas nuevas" },
  { img: "/img/galeria/ciguenal-1.jpg", cat: "Cigüeñal", alt: "Cigüeñal pulido" },
  { img: "/img/galeria/ciguenal-2.jpg", cat: "Cigüeñal", alt: "Muñones rectificados" },
  { img: "/img/galeria/soldadura-1.jpg", cat: "Soldadura", alt: "Soldadura de aluminio" },
  { img: "/img/galeria/soldadura-2.jpg", cat: "Soldadura", alt: "Reparación estructural" },
];
