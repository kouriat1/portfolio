'use client'

import { useState, useRef, useEffect } from 'react'

type Step = {
  id: string
  label: string
  icon: string
  desc: string
  color: string
}

const CORRECT_ORDER: Step[] = [
  { id: 'code',    label: 'Code Commit',      icon: '💻', desc: 'Developer pushes code to main branch', color: '#00d4ff' },
  { id: 'lint',    label: 'Lint & Format',    icon: '🔍', desc: 'ESLint, Prettier, static analysis', color: '#8b5cf6' },
  { id: 'test',    label: 'Unit Tests',       icon: '🧪', desc: 'Jest, pytest — fast feedback loop', color: '#10d979' },
  { id: 'build',   label: 'Build & Package',  icon: '📦', desc: 'Docker image build + tag', color: '#f59e0b' },
  { id: 'scan',    label: 'Security Scan',    icon: '🛡️', desc: 'Trivy, Snyk vulnerability scanning', color: '#f43f5e' },
  { id: 'push',    label: 'Push to Registry', icon: '📤', desc: 'Artifact Registry / ECR push', color: '#00d4ff' },
  { id: 'deploy',  label: 'Deploy to Staging',icon: '🚀', desc: 'ArgoCD sync → staging environment', color: '#8b5cf6' },
  { id: 'e2e',     label: 'E2E Tests',        icon: '🌐', desc: 'Playwright smoke tests in staging', color: '#10d979' },
  { id: 'approve', label: 'Manual Approve',   icon: '✅', desc: 'Human gate before production', color: '#f59e0b' },
  { id: 'prod',    label: 'Deploy to Prod',   icon: '🏆', desc: 'Blue/Green deploy on GKE', color: '#f43f5e' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Pipeline() {
  const [items, setItems] = useState<Step[]>(CORRECT_ORDER)
  const [checked, setChecked] = useState(false)
  const [result, setResult] = useState<boolean[]>([])
  const [score, setScore] = useState<number | null>(null)
  const dragIdx = useRef<number | null>(null)

  // Shuffle only on client after hydration
  useEffect(() => {
    setItems(shuffle(CORRECT_ORDER))
  }, [])

  const handleDragStart = (i: number) => { dragIdx.current = i }

  const handleDragOver = (e: React.DragEvent, i: number) => {
    e.preventDefault()
    if (dragIdx.current === null || dragIdx.current === i) return
    const arr = [...items]
    const [moved] = arr.splice(dragIdx.current, 1)
    arr.splice(i, 0, moved)
    dragIdx.current = i
    setItems(arr)
  }

  const handleDragEnd = () => { dragIdx.current = null }

  const checkOrder = () => {
    const res = items.map((item, i) => item.id === CORRECT_ORDER[i].id)
    setResult(res)
    setChecked(true)
    setScore(res.filter(Boolean).length)
  }

  const reset = () => {
    setItems(shuffle(CORRECT_ORDER))
    setChecked(false)
    setResult([])
    setScore(null)
    dragIdx.current = null
  }

  return (
    <section id="pipeline" className="section">
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Interactive Game
          </div>
          <h2 className="section-title gradient-text">Build the Pipeline</h2>
          <p className="section-subtitle">
            Drag and drop the CI/CD stages into the correct order — can you ship like a pro?
          </p>
        </div>

        {/* Instructions */}
        <div
          className="glass"
          style={{
            padding: '12px 20px',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: '0.83rem',
            color: 'var(--text-muted)',
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>🖱️</span>
          Drag the steps below into the correct CI/CD pipeline order, then click{' '}
          <strong style={{ color: 'var(--cyan)' }}>Check Order</strong> to see your score.
        </div>

        {/* Pipeline steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {items.map((step, i) => (
            <div
              key={step.id}
              id={`pipeline-step-${step.id}`}
              className={
                'pipeline-step' +
                (checked
                  ? result[i]
                    ? ' correct'
                    : ' wrong'
                  : '')
              }
              draggable
              onDragStart={() => handleDragStart(i)}
              onDragOver={(e) => handleDragOver(e, i)}
              onDragEnd={handleDragEnd}
              style={{ display: 'flex', alignItems: 'center', gap: 16 }}
            >
              {/* Position number */}
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>

              <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{step.icon}</span>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>
                  {step.label}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  {step.desc}
                </div>
              </div>

              {checked && (
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>
                  {result[i] ? '✅' : '❌'}
                </span>
              )}

              {/* Drag handle */}
              <div
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  cursor: 'grab',
                  flexShrink: 0,
                  opacity: 0.5,
                }}
              >
                ⋮⋮
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          {!checked ? (
            <button id="pipeline-check-btn" onClick={checkOrder} className="btn-glow">
              ✔ Check Order
            </button>
          ) : (
            <button id="pipeline-reset-btn" onClick={reset} className="btn-glow">
              🔄 Try Again
            </button>
          )}
        </div>

        {/* Score */}
        {checked && score !== null && (
          <div
            className="glass"
            style={{
              padding: '20px 24px',
              textAlign: 'center',
              borderColor: score === 10 ? 'rgba(16,217,121,0.4)' : score >= 7 ? 'rgba(0,212,255,0.3)' : 'rgba(244,63,94,0.3)',
              animation: 'fade-up 0.4s ease',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: 8 }}>
              {score === 10 ? '🏆' : score >= 7 ? '🎯' : '📚'}
            </div>
            <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
              {score} / {CORRECT_ORDER.length} Correct
            </div>
            <div style={{ color: 'var(--text-muted)', marginTop: 6, fontSize: '0.9rem' }}>
              {score === 10
                ? 'Perfect pipeline! You\'re a DevOps pro.'
                : score >= 7
                ? 'Great work — a few steps out of place.'
                : 'Keep studying those pipeline stages!'}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
