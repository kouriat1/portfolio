'use client'

const HOBBIES = [
  {
    front: {
      icon: '🏔️',
      title: 'Hiking & Outdoors',
      subtitle: 'Weekend explorer',
    },
    back: {
      desc: 'When I\'m not debugging pipelines, I\'m climbing trails. Nature resets my brain better than any reboot ever could.',
      fun: '"The best debugging is a walk outside."',
    },
    color: 'var(--green)',
    glow: 'rgba(16,217,121,0.2)',
  },
  {
    front: {
      icon: '📷',
      title: 'Photography',
      subtitle: 'Visual storytelling',
    },
    back: {
      desc: 'Street and landscape photography. I see infrastructure the same way — composition, balance, purpose.',
      fun: '"A good shot needs both planning and improvisation — just like a deployment."',
    },
    color: 'var(--cyan)',
    glow: 'var(--cyan-glow)',
  },
  {
    front: {
      icon: '🎸',
      title: 'Music',
      subtitle: 'Guitar player',
    },
    back: {
      desc: 'Self-taught guitarist. Rock, blues, fingerpicking. Music is the only thing that\'s harder to automate than legacy systems.',
      fun: '"git commit -m \'fix: added soulful solo\'"',
    },
    color: 'var(--purple)',
    glow: 'var(--purple-glow)',
  },
  {
    front: {
      icon: '📚',
      title: 'Technical Writing',
      subtitle: 'Docs & blogs',
    },
    back: {
      desc: 'I write about DevOps, cloud infrastructure, and automation. Good documentation is an act of kindness.',
      fun: '"Undocumented code is a gift with no label."',
    },
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
  },
  {
    front: {
      icon: '🧩',
      title: 'Open Source',
      subtitle: 'Contributor & maintainer',
    },
    back: {
      desc: 'I contribute to CNCF projects and maintain several Terraform modules on GitHub. Community > competition.',
      fun: '"Open source is DevOps for ideas."',
    },
    color: 'var(--cyan)',
    glow: 'var(--cyan-glow)',
  },
  {
    front: {
      icon: '🍳',
      title: 'Cooking',
      subtitle: 'Kitchen hacker',
    },
    back: {
      desc: 'Cooking is just another form of automation. Get the recipe right, iterate, scale the batch size.',
      fun: '"chmod +x recipe.sh && ./cook dinner"',
    },
    color: 'var(--green)',
    glow: 'rgba(16,217,121,0.2)',
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Human Mode
          </div>
          <h2 className="section-title gradient-text">Beyond the Terminal</h2>
          <p className="section-subtitle">
            Hover the cards to see what I do when the servers are running fine
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {HOBBIES.map((h, i) => (
            <div
              key={i}
              className="flip-card"
              style={{ height: 200 }}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div
                  className="flip-card-front glass"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    padding: 24,
                    textAlign: 'center',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <span style={{ fontSize: '2.5rem' }}>{h.front.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
                      {h.front.title}
                    </div>
                    <div style={{ color: h.color, fontSize: '0.75rem', marginTop: 4 }}>
                      {h.front.subtitle}
                    </div>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.08em' }}>
                    Hover to discover ↗
                  </div>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back glass"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 20,
                    background: 'var(--bg-card)',
                    borderColor: h.glow,
                    boxShadow: `0 0 30px ${h.glow}`,
                  }}
                >
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: 12 }}>
                    {h.back.desc}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: h.color,
                      fontStyle: 'italic',
                    }}
                  >
                    {h.back.fun}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
