import rawScenarios from '../../../../data/scenarios.json'
import ScenarioQuiz from '@/components/ScenarioQuiz'
import type { Scenario } from '@/types'
import { notFound } from 'next/navigation'

const scenarios = rawScenarios as Scenario[]

export function generateStaticParams() {
  return scenarios.map((s) => ({ id: s.id }))
}

export default function ScenarioPage({ params }: { params: { id: string } }) {
  const scenario = scenarios.find((s) => s.id === params.id)

  if (!scenario) {
    notFound()
  }

  return <ScenarioQuiz scenario={scenario} />
}
