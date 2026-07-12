import { Scale, CheckCircle2, Gavel, MessagesSquare } from 'lucide-react'

const highlights = [
  {
    icon: Scale,
    title: 'Experiência',
    text: 'Atuação exclusiva em Direito da Saúde',
  },
  {
    icon: CheckCircle2,
    title: 'Resultados',
    text: 'Mais de 1000 pessoas atendidas em todo o Brasil',
  },
  {
    icon: Gavel,
    title: 'Atuação Estratégica',
    text: 'Ações judiciais com agilidade e segurança',
  },
  {
    icon: MessagesSquare,
    title: 'Atendimento Humanizado',
    text: 'Você não é apenas um número. Seu caso é único.',
  },
]

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="container highlights-grid">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div className="highlight" key={title}>
            <Icon size={28} strokeWidth={1.5} />
            <div>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
