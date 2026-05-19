'use client'

const PROJECTS = [
  {
    name: 'mkplateforme',
    desc: 'Full-stack SaaS portfolio platform on GCP. NestJS backend with Prisma/PostgreSQL, Next.js frontend, all containerized on Cloud Run with Terraform-managed infrastructure.',
    stack: ['Next.js', 'NestJS', 'Terraform', 'GCP', 'Cloud Run', 'PostgreSQL'],
    icon: '🚀',
    color: 'var(--cyan)',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(139,92,246,0.08))',
    github: 'https://github.com',
    demo: '#',
    stars: 48,
  },
  {
    name: 'k8s-gitops-starter',
    desc: 'Production-ready GitOps template for Kubernetes. ArgoCD app-of-apps pattern, Helm charts, SOPS-encrypted secrets, and automated rollout strategies.',
    stack: ['Kubernetes', 'ArgoCD', 'Helm', 'SOPS', 'GitHub Actions'],
    icon: '⎈',
    color: '#326CE5',
    gradient: 'linear-gradient(135deg, rgba(50,108,229,0.08), rgba(0,212,255,0.08))',
    github: 'https://github.com',
    demo: undefined,
    stars: 127,
  },
  {
    name: 'terraform-gcp-modules',
    desc: 'Reusable Terraform module library for GCP: Cloud Run, VPC, Secret Manager, Artifact Registry, Cloud SQL, and IAM. Used in production across 3 environments.',
    stack: ['Terraform', 'GCP', 'HCL', 'Cloud Run', 'VPC'],
    icon: '🔷',
    color: '#7B42BC',
    gradient: 'linear-gradient(135deg, rgba(123,66,188,0.08), rgba(139,92,246,0.08))',
    github: 'https://github.com',
    demo: undefined,
    stars: 84,
  },
  {
    name: 'obs-stack',
    desc: 'One-click observability stack with Prometheus, Grafana, Loki, and Tempo. Pre-built dashboards for GKE, Node, PostgreSQL, and NestJS applications.',
    stack: ['Prometheus', 'Grafana', 'Loki', 'Helm', 'Kubernetes'],
    icon: '📊',
    color: '#F46800',
    gradient: 'linear-gradient(135deg, rgba(244,104,0,0.08), rgba(245,158,11,0.08))',
    github: 'https://github.com',
    demo: '#',
    stars: 62,
  },
  {
    name: 'ci-benchmark',
    desc: 'Benchmark tool comparing CI/CD pipeline speeds across GitHub Actions, GitLab CI, and CircleCI. Generates detailed reports with bottleneck analysis.',
    stack: ['Python', 'GitHub Actions', 'GitLab CI', 'Plotly', 'Docker'],
    icon: '⚡',
    color: 'var(--green)',
    gradient: 'linear-gradient(135deg, rgba(16,217,121,0.08), rgba(0,212,255,0.06))',
    github: 'https://github.com',
    demo: undefined,
    stars: 31,
  },
  {
    name: 'cost-sentinel',
    desc: 'GCP cost monitoring bot that alerts on anomalies, generates weekly reports, and suggests rightsizing recommendations using BigQuery and Cloud Functions.',
    stack: ['Python', 'GCP', 'BigQuery', 'Cloud Functions', 'Pub/Sub'],
    icon: '💰',
    color: '#FCC624',
    gradient: 'linear-gradient(135deg, rgba(252,198,36,0.08), rgba(245,158,11,0.06))',
    github: 'https://github.com',
    demo: undefined,
    stars: 19,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Work
          </div>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            Open-source tools and platforms I&apos;ve built and shipped
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="glass project-card"
              style={{ padding: '24px', background: 'var(--bg-card)' }}
            >
              {/* Gradient bg on hover handled by .project-card::before */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 16,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: p.gradient,
                        border: `1px solid ${p.color}33`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.3rem',
                      }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>
                        {p.name}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                        ⭐ {p.stars} stars
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: 8 }}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo for ${p.name}`}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        border: '1px solid var(--border)',
                        background: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.color = p.color
                        el.style.borderColor = `${p.color}66`
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.color = 'var(--text-muted)'
                        el.style.borderColor = 'var(--border)'
                      }}
                    >
                      ↗
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${p.name}`}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          border: `1px solid ${p.color}66`,
                          background: `${p.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: p.color,
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        ▶
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.82rem',
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {p.desc}
                </p>

                {/* Stack badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: '3px 10px',
                        borderRadius: 999,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        border: `1px solid ${p.color}33`,
                        color: p.color,
                        background: `${p.color}10`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
