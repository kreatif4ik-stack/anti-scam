import rawScenarios from '../../data/scenarios.json'
import ScenarioCard from '@/components/ScenarioCard'
import EmergencyButton from '@/components/EmergencyButton'
import type { Scenario } from '@/types'

const scenarios = rawScenarios as Scenario[]

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      <div className="mb-14">
        <EmergencyButton
          text="🔴 МЕНЯ ТОЛЬКО ЧТО ОБМАНУЛИ"
          subtitle="Срочная помощь и план действий"
          href="/emergency"
        />
      </div>

      <div className="text-center mb-14 text-white/30 text-sm">
        ─── или ───
      </div>

      <section>
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Проверьте свою бдительность
          </h1>
          <p className="text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            Пройдите интерактивные сценарии и узнайте, на каком шаге вы бы попались
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((s) => (
            <ScenarioCard key={s.id} scenario={s} />
          ))}
        </div>
      </section>
    </main>
  )
}
