import { Stethoscope, Pill, Home, Activity, ReceiptText, Cross } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Negativa de Cirurgia',
    text: 'Garantimos seu direito à cirurgia necessária.',
  },
  {
    icon: Pill,
    title: 'Negativa de Medicamentos',
    text: 'Medicamentos de alto custo ou fora do rol.',
  },
  {
    icon: Home,
    title: 'Home Care',
    text: 'Atendimento domiciliar e internação.',
  },
  {
    icon: Activity,
    title: 'Terapias e Tratamentos',
    text: 'Fisioterapia, psicologia, fonoaudiologia e mais.',
  },
  {
    icon: ReceiptText,
    title: 'Reembolso',
    text: 'Despesas médicas, consultas e exames.',
  },
  {
    icon: Cross,
    title: 'SUS',
    text: 'Ação para medicamentos, exames e tratamentos pelo SUS.',
  },
]

export default function Services() {
  return (
    <section className="services" id="como-ajudar">
      <div className="container">
        <h2 className="section-title">Como podemos te ajudar</h2>
        <p className="section-lead">
          Atuamos para garantir seus direitos e o acesso ao tratamento, medicamento ou cirurgia que
          foram negados ou atrasados.
        </p>

        <div className="services-grid" id="areas">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-icon">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
