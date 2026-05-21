import rawScenarios from '../../data/scenarios.json'
import ScenarioCard from '@/components/ScenarioCard'
import type { Scenario } from '@/types'

const scenarios = rawScenarios as Scenario[]

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      <section>
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Анти-скам тренажёр: не дай мошенникам себя обмануть
          </h1>
          <p className="text-base text-white/60 whitespace-nowrap">
            Пройдите реальные ситуации и узнайте, как действуют злоумышленники
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
