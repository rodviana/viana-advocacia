import { Scale, Phone, Globe } from 'lucide-react'
import { WHATSAPP_URL, OAB, PHONE_DISPLAY } from '@/lib/config'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#" className="brand">
          <Scale size={26} className="brand-icon" strokeWidth={1.5} />
          <span className="brand-name">
            VIANA
            <span className="brand-sub">ADVOCACIA · DIREITO DA SAÚDE</span>
          </span>
        </a>

        <div className="footer-contact">
          <span>Atendimento online em todo o Brasil</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="footer-legal">
          <div>{OAB}</div>
          <div>© {new Date().getFullYear()} Viana Advocacia. Todos os direitos reservados.</div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Site">
              <Globe size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
