'use client'

import { useState } from 'react'

const JOURNEY = [
  {
    year: 'September 2025 – December 2025',
    role: 'DevOps Engineer',
    company: 'CHEZ DARKOUM',
    desc: 'Leading the migration of a monolith to microservices on GKE. Implemented GitOps with ArgoCD, reducing deployment errors by 70%. Manages Terraform modules for 3 cloud regions.',
    stack: ['Kubernetes', 'ArgoCD', 'Terraform', 'GCP'],
    icon: '🚀',
  },
  {
    year: '2022 – 2024',
    role: 'Infrastructure Engineer',
    company: 'FinTech Startup',
    desc: 'Built from scratch a multi-environment CI/CD pipeline with GitHub Actions and Cloud Run. Automated cost monitoring with custom Prometheus exporters.',
    stack: ['GitHub Actions', 'Cloud Run', 'Prometheus', 'Grafana'],
    icon: '⚙️',
  },
  {
    year: '2021 – 2022',
    role: 'SRE / Platform Engineer',
    company: 'E-commerce Leader',
    desc: 'Reduced p99 latency by 45% through caching layer redesign. On-call rotations for a platform serving 2M+ daily active users.',
    stack: ['Redis', 'Nginx', 'PagerDuty', 'Datadog'],
    icon: '🛡️',
  },
  {
    year: 'September 2022 – September 2023',
    role: 'OUT',
    company: 'Full Stack Developer',
    desc: 'Managed 150+ physical and virtual servers. Wrote automation scripts reducing manual tasks by 60%. Introduced Ansible for configuration management.',
    stack: ['C#', 'MVC', 'Xamarin', 'API'],
    icon: '🖥️',
  },
]

const SKILLS = [
  { name: 'CI/CD Pipelines', pct: 95, color: 'var(--purple)' },
  { name: 'Kubernetes / Helm', pct: 92, color: 'var(--cyan)' },
  { name: 'Terraform / IaC', pct: 90, color: 'var(--purple)' },
  { name: 'GCP / Cloud', pct: 88, color: 'var(--cyan)' },
  { name: 'Docker / OCI', pct: 93, color: 'var(--cyan)' },
  { name: 'Observability', pct: 82, color: 'var(--purple)' },
]

export default function Journey() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="journey" className="section">
      <div style={{ maxWidth: 1100, margin: 'auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Experience
          </div>
          <h2 className="section-title gradient-text">My Tech Journey</h2>
          <p className="section-subtitle">
            From sysadmin to cloud-native — the road that shaped me
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'start',
          }}
          className="journey-grid"
        >
          {/* Timeline Accordion */}
          <div style={{ position: 'relative', paddingLeft: 48 }}>
            <div className="timeline-line " />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {JOURNEY.map((item, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <div
                    className="timeline-dot"
                    style={{ background: open === i ? 'var(--cyan)' : 'var(--bg)' }}
                  />
                  <button
                    id={`journey-item-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <div
                      className="glass "
                      style={{
                        padding: '16px 34px',
                        borderColor:
                          open === i ? 'rgba(0,212,255,0.3)' : 'var(--border)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 14,
                        }}
                      >
                        <div>
                          <span
                            style={{
                              fontSize: '0.7rem',
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--cyan)',
                              letterSpacing: '0.1em',
                            }}
                          >
                            {item.year}
                          </span>
                          <div
                            style={{
                              fontWeight: 700,
                              color: 'var(--text)',
                              fontSize: '0.95rem',
                              marginTop: 2,
                            }}
                          >
                            {item.icon} {item.role}
                          </div>
                          <div
                            style={{
                              color: 'var(--text-muted)',
                              fontSize: '0.8rem',
                            }}
                          >
                            @ {item.company}
                          </div>
                        </div>
                        <span
                          style={{
                            color: 'var(--cyan)',
                            transition: 'transform 0.3s ease',
                            transform: open === i ? 'rotate(90deg)' : 'none',
                            flexShrink: 0,
                          }}
                        >
                          ▶
                        </span>
                      </div>

                      {/* Accordion body */}
                      <div
                        style={{
                          maxHeight: open === i ? 300 : 0,
                          overflow: 'hidden',
                          transition: 'max-height 0.4s ease',
                        }}
                      >
                        <p
                          style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.85rem',
                            lineHeight: 1.7,
                            marginTop: 12,
                            marginBottom: 12,
                          }}
                        >
                          {item.desc}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {item.stack.map((s) => (
                            <span key={s} className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Bars */}
          <div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                color: 'var(--text)',
              }}
            >
              Core Competencies
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {SKILLS.map((skill, i) => (
                <div key={skill.name}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                      fontSize: '0.875rem',
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text)' }}>
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: skill.color,
                        fontSize: '0.8rem',
                      }}
                    >
                      {skill.pct}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.pct}%`,
                        animationDelay: `${i * 0.15}s`,
                        background: `linear-gradient(90deg, ${skill.color}, ${i % 2 === 0 ? 'var(--purple)' : 'var(--cyan)'})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
                marginTop: 40,
              }}
            >
              {[
                { val: '3+', label: 'Years Exp.' },
                { val: '10+', label: 'Projects' },
                { val: '99.9%', label: 'Uptime SLA' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass"
                  style={{ padding: '16px', textAlign: 'center' }}
                >
                  <div
                    className="gradient-text"
                    style={{ fontSize: '1.5rem', fontWeight: 800 }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: 4 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
