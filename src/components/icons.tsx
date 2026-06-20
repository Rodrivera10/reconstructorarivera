// Iconos SVG reutilizables (sin estado, sirven en server y client components)

export const IcWhatsApp = ({ s = 14 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4 0 .1 0 .6-.2 1.1z" /></svg>
);
export const IcFacebook = ({ s = 13 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.4c-1.4 0-1.8.8-1.8 1.7V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12z" /></svg>
);
export const IcInstagram = ({ s = 13 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
);
export const IcTikTok = ({ s = 13 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.5c-1.3.1-2.5-.2-3.6-.9v5.9c0 3.6-2.6 5.9-5.7 5.6-2.7-.2-4.7-2.5-4.6-5.3.1-2.7 2.4-4.8 5.1-4.6.3 0 .5.1.8.1v2.6c-.3-.1-.6-.2-.9-.2-1.2-.1-2.3.8-2.4 2-.1 1.2.8 2.3 2 2.4 1.3.1 2.4-.9 2.4-2.2V3h3.9z" /></svg>
);
export const IcCheck = ({ s = 20 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M5 13l4 4L19 7" /></svg>
);
export const IcQuote = () => (
  <svg className="quote-ic" width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h4v6H8c0 2.2-1.8 4-4 4v-2c1.1 0 2-.9 2-2V7zm9 0h4v6h-3c0 2.2-1.8 4-4 4v-2c1.1 0 2-.9 2-2V7z" /></svg>
);
