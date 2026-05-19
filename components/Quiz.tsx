'use client'

import { useState } from 'react'

const QUESTIONS = [
  {
    q: 'What is my preferred IaC tool?',
    options: ['Pulumi', 'Ansible', 'Terraform', 'CloudFormation'],
    correct: 2,
    fact: 'I use Terraform for all infrastructure provisioning, with modular design across environments.',
  },
  {
    q: 'Which container orchestrator do I work with daily?',
    options: ['Docker Swarm', 'Kubernetes', 'Nomad', 'Mesos'],
    correct: 1,
    fact: 'Kubernetes is my daily driver — I manage multi-cluster setups on GKE.',
  },
  {
    q: 'What is my go-to GitOps tool?',
    options: ['Flux', 'Jenkins X', 'ArgoCD', 'Spinnaker'],
    correct: 2,
    fact: 'ArgoCD enables declarative, Git-driven continuous delivery for all my Kubernetes workloads.',
  },
  {
    q: 'Which monitoring stack do I prefer?',
    options: ['ELK Stack', 'Datadog only', 'Prometheus + Grafana', 'Splunk'],
    correct: 2,
    fact: 'Prometheus for metrics + Grafana for visualization = perfect open-source observability stack.',
  },
  {
    q: 'What is my primary cloud provider?',
    options: ['AWS', 'Azure', 'GCP', 'DigitalOcean'],
    correct: 2,
    fact: 'Google Cloud Platform — especially Cloud Run, GKE, and BigQuery.',
  },
]

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null))

  const q = QUESTIONS[current]

  const handleAnswer = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    const newAnswers = [...answers]
    newAnswers[current] = idx
    setAnswers(newAnswers)
    if (idx === q.correct) setScore((s) => s + 1)
  }

  const next = () => {
    if (current + 1 >= QUESTIONS.length) {
      setDone(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
    }
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setDone(false)
    setAnswers(Array(QUESTIONS.length).fill(null))
  }

  return (
    <section id="quiz" className="section">
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Interactive
          </div>
          <h2 className="section-title gradient-text">Do You Know Me?</h2>
          <p className="section-subtitle">
            5 questions about my tech preferences — how well do you know a DevOps engineer?
          </p>
        </div>

        {!done ? (
          <div className="glass" style={{ padding: '32px' }}>
            {/* Progress */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                Question {current + 1} / {QUESTIONS.length}
              </span>
              <div style={{ display: 'flex', gap: 6 }}>
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 4,
                      borderRadius: 2,
                      background:
                        i < current
                          ? (answers[i] === QUESTIONS[i].correct ? 'var(--green)' : 'var(--red)')
                          : i === current
                          ? 'var(--cyan)'
                          : 'var(--border)',
                      transition: 'background 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Question */}
            <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              {q.q}
            </h3>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: '1.5rem' }}>
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  id={`quiz-option-${current}-${i}`}
                  className={
                    'quiz-option' +
                    (selected !== null
                      ? i === q.correct
                        ? ' correct'
                        : selected === i && i !== q.correct
                        ? ' wrong'
                        : ''
                      : '')
                  }
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      border: '1px solid var(--border)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      marginRight: 12,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              ))}
            </div>

            {/* Fact reveal */}
            {selected !== null && (
              <div
                style={{
                  background: selected === q.correct ? 'rgba(16,217,121,0.08)' : 'rgba(244,63,94,0.08)',
                  border: `1px solid ${selected === q.correct ? 'rgba(16,217,121,0.3)' : 'rgba(244,63,94,0.3)'}`,
                  borderRadius: 10,
                  padding: '14px 18px',
                  fontSize: '0.85rem',
                  color: 'var(--text-dim)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  animation: 'fade-in 0.3s ease',
                }}
              >
                <span style={{ marginRight: 8 }}>
                  {selected === q.correct ? '✅' : '❌'}
                </span>
                {q.fact}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                id="quiz-next-btn"
                onClick={next}
                disabled={selected === null}
                className="btn-glow"
                style={{ opacity: selected === null ? 0.4 : 1 }}
              >
                {current + 1 >= QUESTIONS.length ? 'See Results →' : 'Next →'}
              </button>
            </div>
          </div>
        ) : (
          /* Results */
          <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {score >= 4 ? '🏆' : score >= 2 ? '🎉' : '📚'}
            </div>
            <h3 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              {score} / {QUESTIONS.length}
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              {score >= 4
                ? 'Impressive! You know me very well.'
                : score >= 2
                ? "Not bad! We'd get along."
                : 'Maybe check out my projects and learn more 😄'}
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button id="quiz-restart-btn" onClick={restart} className="btn-glow">
                Try Again
              </button>
              <a
                href="#projects"
                style={{
                  padding: '10px 24px',
                  borderRadius: 8,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  background: 'var(--purple-dim)',
                  color: 'var(--purple)',
                  border: '1px solid rgba(139,92,246,0.4)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                View Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
