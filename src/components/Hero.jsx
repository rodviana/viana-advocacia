import { ShieldCheck, Zap, Lock, Scale, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL, OAB } from '@/lib/config'

const features = [
  { icon: ShieldCheck, title: 'Atendimento online', sub: 'em todo o Brasil' },
  { icon: Zap, title: 'Agilidade na solução', sub: 'do seu caso' },
  { icon: Lock, title: 'Sigilo e segurança', sub: 'em todas as etapas' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <span className="hero-tag">Direito da Saúde</span>
          <h1>
            Plano de saúde ou SUS <span className="gold">negou</span> seu tratamento?
          </h1>
          <p className="hero-sub">
            Lutamos pelos seus direitos para garantir o tratamento que você precisa e merece.
          </p>

          <div className="hero-features">
            {features.map(({ icon: Icon, title, sub }) => (
              <div className="hero-feature" key={title}>
                <Icon size={26} strokeWidth={1.5} />
                <div>
                  <strong>{title}</strong>
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-cta">
            <a
              className="btn btn-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-main">
                <MessageCircle size={20} />
                Falar com um advogado no WhatsApp
              </span>
              <span className="btn-sub">Atendimento rápido e humanizado</span>
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img src="/foto-hero.jpg" alt="Advogado Viana" />
          </div>

          <div className="oab-badge">
            <Scale size={34} strokeWidth={1.5} />
            <div>
              <strong>Advogado</strong>
              <span>{OAB}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
