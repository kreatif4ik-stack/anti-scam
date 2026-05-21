import Link from 'next/link'
import type { Metadata } from 'next'
import EmergencyButton from '@/components/EmergencyButton'

export const metadata: Metadata = {
  title: 'Экстренная помощь — Распознай мошенника',
  description: 'Срочные действия, если вас обманули мошенники',
}

const steps = [
  {
    emoji: '📞',
    title: 'Позвоните в банк',
    text: 'Заблокируйте карту и оспорьте операцию.',
    button: { label: 'Позвонить в банк', href: 'tel:900' },
  },
  {
    emoji: '👮',
    title: 'Заявите в полицию о мошенничестве',
    text: 'Ближайшее отделение или 102. Чем быстрее — тем выше шанс вернуть деньги.',
    button: { label: 'Позвонить в 102', href: 'tel:102' },
  },
  {
    emoji: '🔑',
    title: 'Если назвали код от Госуслуг',
    text: 'Срочно восстановите доступ через МФЦ или банк-партнёр.',
    button: { label: 'Восстановить доступ к Госуслугам', href: 'https://www.gosuslugi.ru/help/faq/login/1' },
  },
  {
    emoji: '📋',
    title: 'Проверьте кредитную историю',
    text: 'Мошенники могли оформить займы на ваше имя.',
    button: { label: 'Проверить кредиты на Госуслугах', href: 'https://www.gosuslugi.ru/10602' },
  },
]

export default function EmergencyPage() {
  return (
    <main className="min-h-screen px-4 py-12 max-w-2xl mx-auto">
      <div className="mb-10">
        <EmergencyButton
          text="МЕНЯ ТОЛЬКО ЧТО ОБМАНУЛИ"
          subtitle="Срочная помощь и план действий"
        />
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">🚨 Что делать прямо сейчас</h1>
      </div>

      <div className="space-y-4 mb-12">
        {steps.map((s, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 border border-white/5">
            <div className="flex items-start gap-4">
              <span className="text-2xl shrink-0 mt-0.5">{s.emoji}</span>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-lg mb-1">{s.title}</h2>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">{s.text}</p>
                <a
                  href={s.button.href}
                  target={s.button.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block py-2.5 px-5 rounded-2xl bg-white/10 text-foreground font-medium text-sm hover:bg-white/15 active:bg-white/20 transition-colors"
                >
                  {s.button.label}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <span className="text-white/30 text-sm">─── когда успокоитесь ───</span>
      </div>

      <div className="bg-card rounded-2xl p-6 border border-white/5 text-center">
        <p className="text-white/70 mb-4 leading-relaxed">
          Когда успокоитесь — пройдите сценарий, чтобы понять, как это произошло
        </p>
        <Link
          href="/picker"
          className="inline-block py-3 px-6 rounded-2xl bg-white/10 text-foreground font-medium hover:bg-white/15 active:bg-white/20 transition-colors"
        >
          🔍 Понять, по какой схеме меня обманули
        </Link>
      </div>
    </main>
  )
}
