import { useState, useEffect } from "react"

type MaraOverlayProps = {
  isOpen: boolean
  onClose: () => void
}

const TOTAL_STEPS = 7

export default function MaraOverlay({ isOpen, onClose }: MaraOverlayProps) {
  const [step, setStep] = useState(0)
  const [fade, setFade] = useState(true)
  const [input, setInput] = useState("")
  const [answers, setAnswers] = useState<string[]>([])

  useEffect(() => {
    if (!isOpen) {
      setStep(0)
      setAnswers([])
      setInput("")
    }
  }, [isOpen])

  if (!isOpen) return null

  const next = () => {
    if (!input.trim() && step !== 0) return

    setFade(false)

    setTimeout(() => {
      if (step !== 0) {
        setAnswers([...answers, input])
      }
      setInput("")
      setStep(step + 1)
      setFade(true)
    }, 250)
  }

  const content = [
    {
      text: `Hallo.

Ich begleite dich durch einen strukturierten Ideation-Prozess.

Wir starten im Problemraum.

Es geht noch nicht um Lösungen.
Sondern darum, ein echtes Problem zu verstehen.`,
      input: false,
    },
    {
      text: `Denke an mindestens drei Probleme
aus deinem Arbeitsumfeld oder Alltag.

Schreibe das erste Problem auf.`,
      input: true,
    },
    {
      text: `Gut.

Nun ein zweites Problem.`,
      input: true,
    },
    {
      text: `Und nun ein drittes Problem.`,
      input: true,
    },
    {
      text: `Welches dieser Probleme
möchtest du weiterdenken?`,
      input: true,
    },
    {
      text: `Formuliere drei "How might we"-Fragen
zu diesem Problem.`,
      input: true,
    },
    {
      text: `Denke dir nun drei mögliche Lösungen aus.
Keine Bewertung.`,
      input: true,
    },
  ]

  const current = content[step]

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center px-6">
      <div className="absolute top-6 right-6">
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>

      <div className="w-full max-w-2xl text-center transition-opacity duration-300"
           style={{ opacity: fade ? 1 : 0 }}>

        {/* Progress */}
        <div className="mb-12">
          <p className="text-sm text-gray-400 mb-4">
            Phase {step + 1} von {TOTAL_STEPS}
          </p>
          <div className="flex justify-center gap-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className="h-1 w-6 rounded-full"
                style={{
                  backgroundColor:
                    i <= step ? "#b87333" : "#e5e5e5",
                }}
              />
            ))}
          </div>
        </div>

        {/* Text */}
        <div
          className="mb-10 whitespace-pre-line text-lg leading-relaxed text-center"
          style={{ textAlign: "center" }}
        >
          {current?.text}
        </div>

        {/* Input */}
        {current?.input && (
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-xl p-4 mb-8 focus:outline-none focus:ring-2 focus:ring-copper/40"
          />
        )}

        {/* Button */}
        {step < TOTAL_STEPS - 1 && (
          <button
            onClick={next}
            disabled={current?.input && !input.trim()}
            className="inline-flex items-center justify-center rounded-full bg-copper px-8 py-3 text-white font-medium transition disabled:opacity-30"
          >
            Weiter
          </button>
        )}

        {step === TOTAL_STEPS - 1 && (
          <div className="mt-8 text-lg">
            <p className="mb-6">
              Du hast eine erste Idee entwickelt.
            </p>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-white font-medium"
            >
              Abschließen
            </button>
          </div>
        )}
      </div>
    </div>
  )
}