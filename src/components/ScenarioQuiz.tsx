'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import type { Scenario, Answer } from '@/types'

export default function ScenarioQuiz({ scenario }: { scenario: Scenario }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [chosenColor, setChosenColor] = useState<'red' | 'green' | null>(null)

  const totalSteps = scenario.steps.length
  const showResult = currentStep >= totalSteps

  const handleAnswer = useCallback((color: 'red' | 'green', text: string) => {
    const s = scenario.steps[currentStep]
    if (!s) return
    setChosenColor(color)
    setAnswers((prev) => [...prev, { stepId: s.id, chosenColor: color, chosenText: text }])
  }, [currentStep, scenario.steps])

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => prev + 1)
    setChosenColor(null)
  }, [])

  const handleRestart = useCallback(() => {
    setCurrentStep(0)
    setAnswers([])
    setChosenColor(null)
  }, [])

  const handleShare = useCallback(async () => {
    const url = window.location.href
    if (navigator.share) {
      try { await navigator.share({ title: scenario.title, url }) } catch { }
    } else {
      try {
        await navigator.clipboard.writeText(url)
      } catch { }
    }
  }, [scenario.title])

  if (showResult) {
    const redCount = answers.filter((a) => a.chosenColor === 'red').length
    const verdict = scenario.verdicts.find(
      (v) => redCount >= v.minRed && redCount <= v.maxRed
    )

    return (
      <main className="min-h-screen px-4 py-12 max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl p-8 border border-white/5">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">{scenario.emoji}</span>
            <h1 className="text-2xl font-bold mb-1">{scenario.title}</h1>
            <p className="text-white/50 text-sm">{scenario.subtitle}</p>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-2xl px-4 py-2 mb-4">
              <span className="text-2xl">{redCount <= 1 ? '🛡️' : redCount <= 3 ? '⚠️' : '🚨'}</span>
              <span className="text-3xl font-bold">{redCount}</span>
              <span className="text-white/60">/ {totalSteps} красных флагов</span>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">{verdict?.title}</h2>
            <p className="text-white/60 leading-relaxed">{verdict?.text}</p>
          </div>

          <div className="space-y-2 mb-8">
            {scenario.steps.map((s, i) => {
              const answer = answers.find((a) => a.stepId === s.id)
              const isRed = answer?.chosenColor === 'red'
              return (
                <div
                  key={s.id}
                  className={`flex items-center gap-3 p-3 rounded-xl text-sm ${
                    isRed ? 'bg-red-500/10' : 'bg-green-500/10'
                  }`}
                >
                  <span className="text-lg">{isRed ? '🔴' : '🟢'}</span>
                  <span className="text-white/80">{s.question}</span>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRestart}
              className="flex-1 py-3 px-6 rounded-2xl bg-white/10 text-foreground font-medium hover:bg-white/15 active:bg-white/20 transition-colors"
            >
              Пройти ещё раз
            </button>
            <button
              onClick={handleShare}
              className="flex-1 py-3 px-6 rounded-2xl bg-white/10 text-foreground font-medium hover:bg-white/15 active:bg-white/20 transition-colors"
            >
              Поделиться
            </button>
            <Link
              href="/"
              className="flex-1 py-3 px-6 rounded-2xl bg-white/10 text-foreground font-medium text-center hover:bg-white/15 active:bg-white/20 transition-colors"
            >
              Другие схемы
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const step = scenario.steps[currentStep]
  const isLastStep = currentStep === totalSteps - 1
  const progress = (currentStep / totalSteps) * 100

  return (
    <main className="min-h-screen px-4 py-12 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-white/40">{scenario.emoji} {scenario.title}</span>
          <span className="text-sm text-white/40">
            Шаг {currentStep + 1} из {totalSteps}
          </span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/30 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-card rounded-2xl p-8 border border-white/5">
        <h2 className="text-xl sm:text-2xl font-semibold leading-relaxed mb-8">
          {step.question}
        </h2>

        {chosenColor === null ? (
          <div className="flex flex-col sm:flex-row gap-4">
            {step.options.map((opt) => (
              <button
                key={opt.color}
                onClick={() => handleAnswer(opt.color as 'red' | 'green', opt.text)}
                className="flex-1 py-4 px-6 rounded-2xl font-medium text-lg transition-all active:scale-[0.98] bg-white/10 hover:bg-white/15 text-white"
              >
                {opt.text}
              </button>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in">
            <div
              className={`rounded-2xl p-5 mb-6 ${
                chosenColor === 'red'
                  ? 'bg-red-500/10 border border-red-500/20'
                  : 'bg-green-500/10 border border-green-500/20'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{chosenColor === 'red' ? '🔴' : '🟢'}</span>
                <span className="font-medium">
                  {chosenColor === 'red' ? 'Опасный выбор' : 'Безопасный выбор'}
                </span>
              </div>
              <p className="text-white/70 leading-relaxed">{step.explain[chosenColor]}</p>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 px-6 rounded-2xl bg-white/10 text-foreground font-medium text-lg hover:bg-white/15 active:bg-white/20 transition-colors"
            >
              {isLastStep ? 'Узнать результат' : 'Далее'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
