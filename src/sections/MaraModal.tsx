import { useEffect, useMemo, useRef, useState } from "react";

type MaraModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;

    const apply = () => setReduced(Boolean(mq.matches));
    apply();

    // Safari fallback
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mqAny: any = mq;
    if (mqAny.addEventListener) mqAny.addEventListener("change", apply);
    else mqAny.addListener(apply);

    return () => {
      if (mqAny.removeEventListener) mqAny.removeEventListener("change", apply);
      else mqAny.removeListener(apply);
    };
  }, []);

  return reduced;
}

function MaraSpeak({
  text,
  tone = "neutral",
}: {
  text: string;
  tone?: "neutral" | "hint";
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState("");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(text);
      return;
    }

    setVisible("");
    const full = text;
    let i = 0;

    const tick = () => {
      // slightly faster at start, then steady
      i += 1;
      setVisible(full.slice(0, i));
      if (i < full.length) {
        rafRef.current = window.setTimeout(tick, 10);
      }
    };

    rafRef.current = window.setTimeout(tick, 120);

    return () => {
      if (rafRef.current) window.clearTimeout(rafRef.current);
    };
  }, [text, prefersReducedMotion]);

  return (
    <div
      className={
        tone === "hint"
          ? "rounded-xl border border-gray-200 bg-gray-50 p-5"
          : "rounded-xl border border-gray-200 bg-white p-5"
      }
      style={{
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 rounded-full"
          style={{
            width: 34,
            height: 34,
            background: "var(--accent-soft)",
            border: "1px solid var(--border-soft)",
          }}
          aria-hidden="true"
        />
        <div className="min-w-0">
          <div className="text-sm font-medium" style={{ color: "var(--text-main)" }}>
            Mara
          </div>
          <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {visible}
            {!prefersReducedMotion && visible.length < text.length && (
              <span className="ml-0.5 inline-block animate-pulse" aria-hidden="true">
                ▍
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MaraModal({ isOpen, onClose }: MaraModalProps) {
  const [step, setStep] = useState(0);

  const [problems, setProblems] = useState<string[]>(["", "", ""]);
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  const [questions, setQuestions] = useState<string[]>(["", "", ""]);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const [ideas, setIdeas] = useState<string[]>(["", "", ""]);
  const [selectedIdea, setSelectedIdea] = useState<number | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const steps = useMemo(
    () => [
      { label: "Intro" },
      { label: "Probleme" },
      { label: "Auswahl" },
      { label: "Fragen" },
      { label: "Ideen" },
      { label: "Entscheidung" },
      { label: "Ergebnis" },
    ],
    []
  );

  const totalSteps = steps.length - 1;
  const progress = totalSteps > 0 ? Math.min(1, Math.max(0, step / totalSteps)) : 0;

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Focus modal when opened
  useEffect(() => {
    if (!isOpen) return;
    window.setTimeout(() => modalRef.current?.focus(), 0);
  }, [isOpen]);

  if (!isOpen) return null;

  const next = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  const allFilled = (arr: string[]) => arr.every((v) => v.trim().length > 0);

  const canContinue = (() => {
    if (step === 0) return true;
    if (step === 1) return allFilled(problems);
    if (step === 2) return selectedProblem !== null;
    if (step === 3) return allFilled(questions) && selectedQuestion !== null;
    if (step === 4) return allFilled(ideas);
    if (step === 5) return selectedIdea !== null;
    if (step === 6) return true;
    return false;
  })();

  const primaryLabel = (() => {
    if (step === 0) return "Starten";
    if (step === 5) return "Abschluss";
    if (step === 6) return "Schließen";
    return "Weiter";
  })();

  const onPrimary = () => {
    if (step === 6) onClose();
    else next();
  };

  const title = steps[step]?.label ?? "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ background: "rgba(0,0,0,0.42)" }}
      onMouseDown={(e) => {
        // Click outside closes
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="w-full max-w-3xl rounded-2xl outline-none"
        style={{
          background: "var(--bg-main)",
          border: "1px solid var(--border-soft)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.22)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-8 pt-7 pb-5"
          style={{
            borderBottom: "1px solid var(--border-soft)",
          }}
        >
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
              Mara · Ideation Lite
            </div>
            <div className="mt-1 text-lg font-semibold" style={{ color: "var(--text-main)" }}>
              Schritt {step} / {totalSteps}: {title}
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            schließen
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-8 pt-4">
          <div
            className="h-2 w-full rounded-full"
            style={{ background: "var(--accent-soft)" }}
            aria-hidden="true"
          >
            <div
              className="h-2 rounded-full"
              style={{
                width: `${Math.round(progress * 100)}%`,
                background: "var(--accent)",
                transition: "width 260ms ease",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div
          className="px-8 pb-8 pt-6 space-y-6 overflow-y-auto"
          style={{ maxHeight: "70vh" }}
        >
          {/* STEP 0 – INTRO */}
          {step === 0 && (
            <>
              <MaraSpeak
                text={
                  "Hallo. Ich begleite dich durch einen strukturierten Ideation‑Prozess. Wir starten im Problemraum: keine Lösungen, kein Pitch – nur Klarheit. Wenn du dir 5–7 Minuten Zeit nimmst, hast du am Ende eine erste, tragfähige Richtung.\n\nSo arbeiten wir: Du gibst Inhalte ein. Ich halte die Struktur und stelle Hinweise bereit – entscheiden musst immer du."
                }
              />
            </>
          )}

          {/* STEP 1 – PROBLEME */}
          {step === 1 && (
            <>
              <MaraSpeak
                text={
                  "Schritt 1: Sammle drei konkrete Probleme. Wichtig: Ein Problem gehört immer zu einer echten Person oder Gruppe – nicht zu ‚der Welt‘. Schreib kurz und präzise." 
                }
              />

              <div className="space-y-4">
                {problems.map((problem, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Problem ${i + 1} (wer hat es – in welchem Kontext?)`}
                    value={problem}
                    onChange={(e) => {
                      const copy = [...problems];
                      copy[i] = e.target.value;
                      setProblems(copy);
                    }}
                    className="w-full rounded-xl p-4 text-[15px]"
                    style={{
                      background: "#fff",
                      border: "1px solid var(--border-soft)",
                      color: "var(--text-main)",
                    }}
                  />
                ))}
              </div>

              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Tipp: „Es ist heiß im Sommer“ ist eine Beobachtung. Besser: „Kleine Cafés in Bochum verlieren im Sommer Umsatz, weil der Innenraum zu warm wird.“
              </div>
            </>
          )}

          {/* STEP 2 – PROBLEM WÄHLEN */}
          {step === 2 && (
            <>
              <MaraSpeak
                text={
                  "Schritt 2: Wähle ein Problem aus. Ich entscheide nicht für dich – aber du kannst nach Dringlichkeit, Resonanz oder Nähe zur Zielgruppe wählen." 
                }
              />

              <div className="space-y-3">
                {problems.map((problem, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedProblem(i)}
                    className="w-full text-left rounded-xl p-4 transition"
                    style={{
                      background: selectedProblem === i ? "var(--accent-soft)" : "#fff",
                      border: selectedProblem === i ? `1px solid var(--accent)` : "1px solid var(--border-soft)",
                      color: "var(--text-main)",
                    }}
                  >
                    <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Problem {i + 1}
                    </div>
                    <div className="mt-1 text-[15px]">
                      {problem || "(leer)"}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 3 – HOW MIGHT WE */}
          {step === 3 && (
            <>
              <MaraSpeak
                text={
                  "Schritt 3: Formuliere drei ‚How might we‘‑Fragen. Diese Fragen öffnen unterschiedliche Lösungsräume. Achte darauf, dass keine Lösung schon im Satz steckt." 
                }
              />

              <div
                className="rounded-xl p-5"
                style={{ background: "#fff", border: "1px solid var(--border-soft)" }}
              >
                <div className="text-sm font-medium" style={{ color: "var(--text-main)" }}>
                  Ausgangsproblem
                </div>
                <div className="mt-2 text-[15px]" style={{ color: "var(--text-muted)" }}>
                  {selectedProblem !== null ? problems[selectedProblem] : "(bitte vorher ein Problem wählen)"}
                </div>
              </div>

              <div className="space-y-4">
                {questions.map((q, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <input
                      type="radio"
                      name="selectedQuestion"
                      checked={selectedQuestion === i}
                      onChange={() => setSelectedQuestion(i)}
                      className="mt-2"
                    />

                    <input
                      type="text"
                      placeholder={`How might we … (Frage ${i + 1})`}
                      value={q}
                      onChange={(e) => {
                        const copy = [...questions];
                        copy[i] = e.target.value;
                        setQuestions(copy);
                      }}
                      className="w-full rounded-xl p-4 text-[15px]"
                      style={{
                        background: "#fff",
                        border: selectedQuestion === i
                          ? "1px solid var(--accent)"
                          : "1px solid var(--border-soft)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* STEP 4 – IDEEN */}
          {step === 4 && (
            <>
              <MaraSpeak
                text={
                  "Schritt 4: Jetzt öffnen wir den Lösungsraum. Sammle drei unterschiedliche Ansätze – ohne Bewertung. Lieber grob als perfekt." 
                }
              />

              <div
                className="rounded-xl p-5"
                style={{ background: "#fff", border: "1px solid var(--border-soft)" }}
              >
                <div className="text-sm font-medium" style={{ color: "var(--text-main)" }}>
                  Fokusfrage
                </div>
                <div className="mt-2 text-[15px]" style={{ color: "var(--text-muted)" }}>
                  {selectedQuestion !== null ? questions[selectedQuestion] : "(bitte vorher eine Frage wählen)"}
                </div>
              </div>

              <div className="space-y-4">
                {ideas.map((idea, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Idee ${i + 1} (kurz als Ansatz/Mechanik)`}
                    value={idea}
                    onChange={(e) => {
                      const copy = [...ideas];
                      copy[i] = e.target.value;
                      setIdeas(copy);
                    }}
                    className="w-full rounded-xl p-4 text-[15px]"
                    style={{
                      background: "#fff",
                      border: "1px solid var(--border-soft)",
                      color: "var(--text-main)",
                    }}
                  />
                ))}
              </div>

              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Mini-Regel: Keine Perfektion. Ideen dürfen roh sein. Wir schärfen später.
              </div>
            </>
          )}

          {/* STEP 5 – IDEE AUSWÄHLEN */}
          {step === 5 && (
            <>
              <MaraSpeak
                text={
                  "Schritt 5: Wähle eine Idee aus. Du kannst nach Neuartigkeit, Umsetzbarkeit oder Bauchgefühl entscheiden. Ich halte nur den Rahmen." 
                }
              />

              <div className="space-y-3">
                {ideas.map((idea, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIdea(i)}
                    className="w-full text-left rounded-xl p-4"
                    style={{
                      background: selectedIdea === i ? "var(--accent-soft)" : "#fff",
                      border: selectedIdea === i ? `1px solid var(--accent)` : "1px solid var(--border-soft)",
                      color: "var(--text-main)",
                    }}
                  >
                    <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Idee {i + 1}
                    </div>
                    <div className="mt-1 text-[15px]">{idea || "(leer)"}</div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 6 – ABSCHLUSS */}
          {step === 6 && (
            <>
              <MaraSpeak
                text={
                  "Geschafft. Das ist deine erste, strukturierte Ideenskizze. Wenn du möchtest, können wir daraus als nächsten Schritt ein tragfähiges Geschäftsmodell ableiten." 
                }
              />

              <div
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid var(--border-soft)" }}
              >
                <div className="text-sm font-medium" style={{ color: "var(--text-main)" }}>
                  Deine ausgewählte Idee
                </div>
                <div className="mt-3 text-[15px]" style={{ color: "var(--text-muted)" }}>
                  {ideas[selectedIdea ?? 0]}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <a
                  href="/gruendung"
                  className="btn-primary"
                  style={{ width: "fit-content" }}
                >
                  Idee vertiefen
                </a>
                <button
                  onClick={onClose}
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  Schließen
                </button>
              </div>
            </>
          )}

          {/* Footer actions */}
          <div
            className="pt-4 flex items-center justify-between"
            style={{ borderTop: "1px solid var(--border-soft)" }}
          >
            <button
              onClick={back}
              disabled={step === 0}
              className="text-sm disabled:opacity-40"
              style={{ color: "var(--text-muted)" }}
            >
              Zurück
            </button>

            <div className="flex items-center gap-3">
              {step !== 6 && (
                <button
                  onClick={onClose}
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  Abbrechen
                </button>
              )}

              <button
                onClick={onPrimary}
                disabled={!canContinue}
                className="btn-primary disabled:opacity-40"
              >
                {primaryLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}