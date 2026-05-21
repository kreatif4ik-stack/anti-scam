import Link from 'next/link'
import type { Scenario } from '@/types'

export default function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <div className="bg-card rounded-2xl p-6 flex flex-col border border-white/5 hover:border-white/10 transition-colors">
      <span className="text-4xl mb-4">{scenario.emoji}</span>
      <h3 className="text-xl font-semibold text-foreground mb-2">{scenario.shortTitle || scenario.title}</h3>
      <p className="text-sm text-white/60 mb-6 leading-relaxed flex-1">{scenario.description}</p>
      <Link
        href={`/scenario/${scenario.id}`}
        className="inline-block w-full py-3 px-6 rounded-2xl bg-white/10 text-foreground font-medium text-center hover:bg-white/15 active:bg-white/20 transition-colors"
      >
        Пройти
      </Link>
    </div>
  )
}
