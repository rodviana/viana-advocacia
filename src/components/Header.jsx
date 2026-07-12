import { Scale, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/config'

const links = [
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#como-ajudar', label: 'Como Posso Ajudar' },
  { href: '#faq', label: 'Perguntas Frequentes' },
  { href: '#sobre', label: 'Sobre Mim' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <Scale size={30} className="brand-icon" strokeWidth={1.5} />
          <span className="brand-name">
            VIANA
            <span className="brand-sub">ADVOCACIA · DIREITO DA SAÚDE</span>
          </span>
        </a>

        <nav className="nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-gold" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={16} />
          Falar no WhatsApp
        </a>
      </div>
    </header>
  )
}
