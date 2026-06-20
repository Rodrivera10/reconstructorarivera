import { SOCIAL, waLink } from "@/lib/site";
import { IcWhatsApp, IcFacebook, IcInstagram, IcTikTok } from "./icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="left">
          <span>2a Ave 2-66, Guajitos, Zona 21, Guatemala</span>
        </div>
        <div className="social">
          <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><IcWhatsApp /></a>
          <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook"><IcFacebook /></a>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram"><IcInstagram /></a>
          <a href={SOCIAL.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><IcTikTok /></a>
        </div>
      </div>
    </div>
  );
}
