import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О проекте — Распознай мошенника',
  description: 'О проекте, источниках и принципах работы тренажёра',
}

const links = [
  { label: 'Сервис АнтиМошенник (САМ)', href: 'https://sam.mos.ru/istorii' },
  { label: 'Газпромбанк — схемы мошенников', href: 'https://www.gazprombank.ru/personal/page/schemes/' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-6 max-w-[672px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">О проекте</h1>

      <p className="text-[#f0f0f0] leading-relaxed mb-8">
        Анти-скам тренажёр помогает распознать мошеннические схемы и учит не попадаться на уловки злоумышленников.
      </p>

      <h2 className="text-xl font-semibold mb-3">Источники</h2>
      <ul className="mb-8 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors"
              style={{ color: '#4ea4f5' }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-3">Как это работает</h2>
      <p className="text-[#f0f0f0] leading-relaxed mb-8">
        Вы оказываетесь на месте человека, которому прямо сейчас звонят мошенники. Шаг за шагом вы увидите, как они давят, чем пугают и как не дать себя обмануть.
      </p>

      <h2 className="text-xl font-semibold mb-3">Контакты</h2>
      <p className="text-[#f0f0f0] leading-relaxed mb-4">
        Хотите предложить новую схему или нашли ошибку? Напишите на почту <a href="mailto:kreatif4ik@gmail.com" className="underline underline-offset-2 transition-colors" style={{ color: '#4ea4f5' }}>kreatif4ik@gmail.com</a> или создайте issue на <a href="https://github.com/kreatif4ik-stack/anti-scam" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors" style={{ color: '#4ea4f5' }}>GitHub</a>.
      </p>
    </main>
  )
}
