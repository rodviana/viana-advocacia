'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const questions = [
  {
    q: 'O que fazer quando o plano de saúde nega o tratamento?',
    a: 'Guarde a negativa por escrito (protocolo, e-mail ou carta) e procure um advogado especialista. Em muitos casos é possível obter uma liminar para garantir o tratamento em poucos dias.',
  },
  {
    q: 'Tenho direito a medicamentos de alto custo?',
    a: 'Sim. Tanto o plano de saúde quanto o SUS podem ser obrigados a fornecer medicamentos de alto custo quando há prescrição médica que comprove a necessidade do tratamento.',
  },
  {
    q: 'Quanto tempo leva para conseguir uma decisão?',
    a: 'Em casos urgentes, é possível obter uma liminar em poucos dias, dependendo do caso e da comarca. Cada situação é analisada individualmente.',
  },
  {
    q: 'Atendem todo o Brasil?',
    a: 'Sim. O atendimento é 100% online, com sigilo e segurança, para clientes em qualquer estado do país.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Perguntas frequentes</h2>

        <div className="faq-grid">
          {questions.map((item, index) => {
            const isOpen = open === index
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <ChevronDown size={20} />
                </button>
                {isOpen && <div className="faq-answer">{item.a}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
