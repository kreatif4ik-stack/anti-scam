export interface Scenario {
  id: string
  pickerLabel: string
  emoji: string
  title: string
  subtitle: string
  description: string
  source: string
  steps: Step[]
  verdicts: Verdict[]
}

export interface Step {
  id: number
  question: string
  options: Option[]
  explain: Record<string, string>
}

export interface Option {
  text: string
  color: 'red' | 'green'
}

export interface Verdict {
  minRed: number
  maxRed: number
  title: string
  text: string
}

export interface Answer {
  stepId: number
  chosenColor: 'red' | 'green'
  chosenText: string
}
