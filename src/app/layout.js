import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: 'Viana Advocacia — Direito da Saúde',
  description:
    'Plano de saúde ou SUS negou seu tratamento? Lutamos pelos seus direitos para garantir o tratamento que você precisa e merece.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
