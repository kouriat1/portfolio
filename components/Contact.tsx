'use client'

import { useState, useRef, useEffect } from 'react'

type HistoryEntry = { prompt?: string; output: string; type?: 'success' | 'error' | 'info' }

const COMMANDS: Record<string, () => HistoryEntry[]> = {
  help: () => [
    { output: '━━━ Available commands ━━━', type: 'info' },
    { output: '  whoami      — About me' },
    { output: '  skills      — Technical skills' },
    { output: '  experience  — Work history' },
    { output: '  projects    — Open-source projects' },
    { output: '  contact     — How to reach me' },
    { output: '  certifications — My certs' },
    { output: '  clear       — Clear terminal' },
  ],
  whoami: () => [
    { output: '━━━ Mohamed ━━━', type: 'info' },
    { output: '  Role    : DevOps / Cloud Engineer' },
    { output: '  Location: Remote 🌍' },
    { output: '  Focus   : Cloud-native, GitOps, IaC' },
    { output: '  Status  : Open to new opportunities ✅', type: 'success' },
  ],
  skills: () => [
    { output: '━━━ Core Skills ━━━', type: 'info' },
    { output: '  🔷 IaC          : Terraform, Pulumi, Ansible' },
    { output: '  ⎈  Orchestration : Kubernetes, Helm, ArgoCD' },
    { output: '  ☁️  Cloud         : GCP, AWS, Azure' },
    { output: '  🔧 CI/CD         : GitHub Actions, GitLab CI, Jenkins' },
    { output: '  📊 Observability  : Prometheus, Grafana, Loki, Tempo' },
    { output: '  🐳 Containers     : Docker, Buildpacks, Distroless' },
    { output: '  💻 Languages      : Python, TypeScript, Bash, Go' },
  ],
  experience: () => [
    { output: '━━━ Work Experience ━━━', type: 'info' },
    { output: '  2025–now  DevOps Engineer @ Cloud-Native Corp' },
    { output: '  2022–2024 Infra Engineer @ FinTech Startup' },
    { output: '  2021–2022 SRE @ E-commerce Leader' },
    { output: '  2019–2021 Linux Admin @ Managed Services' },
  ],
  projects: () => [
    { output: '━━━ Featured Projects ━━━', type: 'info' },
    { output: '  → mkplateforme       Full-stack SaaS on GCP' },
    { output: '  → k8s-gitops-starter GitOps Kubernetes template' },
    { output: '  → terraform-gcp-modules Reusable GCP modules' },
    { output: '  → obs-stack          Prometheus+Grafana+Loki kit' },
    { output: '  → cost-sentinel      GCP cost anomaly bot' },
    { output: '' },
    { output: '  github.com/mohamed — all repos', type: 'info' },
  ],
  contact: () => [
    { output: '━━━ Contact ━━━', type: 'info' },
    { output: '  📧 Email    : medkouriat99@gmail.com' },
    { output: '  💼 LinkedIn : linkedin.com/in/mohamed-kouriat' },
    { output: '  🐙 GitHub   : github.com/kouriat1' },
    { output: '' },
    { output: '  I reply within 24h — let\'s build something!', type: 'success' },
  ],
  certifications: () => [
    { output: '━━━ Certifications ━━━', type: 'info' },
    { output: '  ✅ GCP Professional Cloud DevOps Engineer — 2024' },
    { output: '  ✅ CKA — Certified Kubernetes Administrator — 2023' },
    { output: '  ✅ CKAD — Certified Kubernetes App Dev — 2023' },
    { output: '  ✅ HashiCorp Terraform Associate — 2023' },
    { output: '  ✅ AWS Solutions Architect Associate — 2022' },
    { output: '  ✅ LFCS — Linux Foundation — 2021' },
  ],
}

const BOOT_LINES = [
  { text: 'Booting portfolio terminal v2.0.0...', delay: 0 },
  { text: 'Loading modules... ✅', delay: 300 },
  { text: 'Connecting to cloud... ✅', delay: 600 },
  { text: 'All systems operational.', delay: 900 },
  { text: '', delay: 1100 },
  { text: 'Type "help" to see available commands.', delay: 1200 },
]

export default function Contact() {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [input, setInput] = useState('')
  const [booted, setBooted] = useState(false)
  const [bootIdx, setBootIdx] = useState(0)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Boot sequence
  useEffect(() => {
    if (bootIdx < BOOT_LINES.length) {
      const t = setTimeout(() => {
        setHistory((h) => [...h, { output: BOOT_LINES[bootIdx].text, type: 'success' }])
        setBootIdx((i) => i + 1)
      }, BOOT_LINES[bootIdx].delay)
      return () => clearTimeout(t)
    } else {
      setBooted(true)
    }
  }, [bootIdx])

  // Auto-scroll
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [history])

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    if (trimmed === 'clear') {
      setHistory([])
      return
    }

    const entries: HistoryEntry[] = [{ prompt: `$ ${cmd}`, output: '' }]

    if (COMMANDS[trimmed]) {
      entries.push(...COMMANDS[trimmed]())
    } else {
      entries.push({
        output: `Command not found: "${trimmed}". Type "help" for available commands.`,
        type: 'error',
      })
    }

    setHistory((h) => [...h, ...entries])
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input)
      setInput('')
    }
  }

  return (
    <section id="contact" className="section">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Get In Touch
          </div>
          <h2 className="section-title gradient-text">Contact</h2>
          <p className="section-subtitle">
            Open the terminal and type a command to reach out
          </p>
        </div>

        {/* Terminal */}
        <div className="terminal">
          {/* Title bar */}
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: '#ff5f57' }} />
            <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
            <div className="terminal-dot" style={{ background: '#28ca41' }} />
            <span
              style={{
                marginLeft: 12,
                color: 'var(--text-muted)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              guest@portfolio:~
            </span>
          </div>

          {/* Body */}
          <div className="terminal-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
            {history.map((entry, i) => (
              <div key={i}>
                {entry.prompt && (
                  <div className="terminal-line">
                    <span className="terminal-prompt">{entry.prompt}</span>
                  </div>
                )}
                {entry.output && (
                  <div
                    className={`terminal-output${entry.type ? ' ' + entry.type : ''}`}
                  >
                    {entry.output}
                  </div>
                )}
              </div>
            ))}

            {/* Input line */}
            {booted && (
              <div className="terminal-line" style={{ marginTop: 8 }}>
                <span className="terminal-prompt">$</span>
                <input
                  ref={inputRef}
                  id="terminal-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  autoFocus
                  autoComplete="off"
                  spellCheck={false}
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    flex: 1,
                    width: '100%',
                    caretColor: 'var(--cyan)',
                  }}
                  placeholder="type a command..."
                  aria-label="Terminal input"
                />
              </div>
            )}
          </div>
        </div>

        {/* Quick links below terminal */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginTop: 32,
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: '📧 Email', href: 'mailto:medkouriat99@gmail.com ' },
            { label: '💼 LinkedIn', href: 'https://www.linkedin.com/in/mohamed-kouriat/' },
            { label: '🐙 GitHub', href: 'https://github.com/kouriat1/' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                padding: '10px 20px',
                borderRadius: 8,
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                color: 'var(--text-dim)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(0,212,255,0.4)'
                el.style.color = 'var(--cyan)'
                el.style.boxShadow = '0 0 16px var(--cyan-glow)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--text-dim)'
                el.style.boxShadow = 'none'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
