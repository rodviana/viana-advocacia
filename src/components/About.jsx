import { CheckCircle2 } from 'lucide-react'

const points = [
  'Especialista em Direito da Saúde',
  'Atendimento online em todo o Brasil',
  'Compromisso, ética e transparência',
  'Foco em resultados e na defesa dos seus direitos',
]

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container about-inner">
        <div className="about-photo">
          <div className="photo-frame">
            <img src="/foto-sobre.jpg" alt="Advogado Viana" />
          </div>
        </div>

        <div>
          <span className="about-tag">Sobre mim</span>
          <h2>Advocacia com propósito</h2>
          <p>
            Sou advogado, servidor público municipal e atleta de Jiu-Jitsu. Acredito na disciplina,
            na estratégia e na luta diária pelos direitos de quem mais precisa.
          </p>

          <ul className="about-list">
            {points.map((point) => (
              <li key={point}>
                <CheckCircle2 size={20} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
