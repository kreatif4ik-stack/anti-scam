import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Выбор схемы — Распознай мошенника',
}

const primary = [
  { icon: '👮', label: 'Представился силовиком (ФСБ, полиция, Следком)', href: '/scenario/fsb-major' },
  { icon: '🏦', label: 'Представился сотрудником банка или ЦБ', href: '/scenario/fsb-major' },
  { icon: '😢', label: 'Сказал, что близкий попал в беду', href: '/scenario/mom-accident' },
  { icon: '📱', label: 'Прислал ссылку или файл, просил установить приложение', href: '/scenario/gosuslugi-hack' },
  { icon: '🗳️', label: 'Мне прислали ссылку на голосование в Telegram', href: '/scenario/tg-voting' },
]

const secondary = [
  { icon: '💬', label: 'Мне написал начальник в Telegram', href: '/scenario/boss-telegram' },
  { icon: '💰', label: 'Я вложил деньги в инвестиции', href: '/scenario/gazprom-invest' },
  { icon: '🛒', label: 'Меня обманули на Авито / при продаже', href: '/scenario/avito-phishing' },
]

function Button({ icon, label, href, accent }: { icon: string; label: string; href: string; accent?: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 w-full p-5 rounded-2xl transition-colors ${
        accent
          ? 'bg-card border border-white/10 hover:border-white/20'
          : 'bg-card hover:bg-[#2a2a2a]'
      }`}
    >
      <span className="text-xl shrink-0">{icon}</span>
      <span className="text-foreground font-medium leading-snug">{label}</span>
    </Link>
  )
}

export default function PickerPage() {
  return (
    <main className="min-h-screen px-4 py-12 max-w-xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        Кто вам звонил или писал?
      </h1>

      <div className="space-y-3 mb-8">
        {primary.map((b) => (
          <Button key={b.label} {...b} accent />
        ))}
      </div>

      <div className="text-center mb-8 text-white/30 text-sm">
        ───
      </div>

      <div className="space-y-3 mb-10">
        {secondary.map((b) => (
          <Button key={b.label} {...b} />
        ))}
      </div>

      <div className="text-center">
        <Link href="/" className="text-white/40 hover:text-white/60 text-sm transition-colors">
          Не подходит? Посмотрите все схемы
        </Link>
      </div>
    </main>
  )
}
