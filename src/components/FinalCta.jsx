import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/config'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Não aceite a negativa. Seus direitos existem para serem cumpridos.</h2>
        <p>Fale agora com um advogado especialista em Direito da Saúde.</p>

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
          <span className="btn-sub">Clique e inicie seu atendimento</span>
        </a>
      </div>
    </section>
  )
}
