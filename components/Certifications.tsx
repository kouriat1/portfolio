'use client'

const CERTS = [
  {
    name: 'Google Cloud Professional\nCloud DevOps Engineer',
    shortName: 'GCP DevOps',
    issuer: 'Google Cloud',
    icon: '☁️',
    color: '#4285F4',
    glow: 'rgba(66,133,244,0.3)',
    border: 'rgba(66,133,244,0.3)',
    year: '2024',
    id: 'GCP-DEVOPS-2024',
    url: '#',
  },
  {
    name: 'Certified Kubernetes\nAdministrator (CKA)',
    shortName: 'CKA',
    issuer: 'CNCF / Linux Foundation',
    icon: '⎈',
    color: '#326CE5',
    glow: 'rgba(50,108,229,0.3)',
    border: 'rgba(50,108,229,0.3)',
    year: '2023',
    id: 'CKA-2023',
    url: '#',
  },
  {
    name: 'HashiCorp Certified:\nTerraform Associate',
    shortName: 'Terraform',
    issuer: 'HashiCorp',
    icon: '🔷',
    color: '#7B42BC',
    glow: 'rgba(123,66,188,0.3)',
    border: 'rgba(123,66,188,0.3)',
    year: '2023',
    id: 'TF-ASSOC-2023',
    url: '#',
  },
  {
    name: 'AWS Certified Solutions\nArchitect – Associate',
    shortName: 'AWS SAA',
    issuer: 'Amazon Web Services',
    icon: '🟠',
    color: '#FF9900',
    glow: 'rgba(255,153,0,0.3)',
    border: 'rgba(255,153,0,0.3)',
    year: '2022',
    id: 'AWS-SAA-2022',
    url: '#',
  },
  {
    name: 'Certified Kubernetes\nApp Developer (CKAD)',
    shortName: 'CKAD',
    issuer: 'CNCF / Linux Foundation',
    icon: '⎈',
    color: '#00D8FF',
    glow: 'rgba(0,216,255,0.3)',
    border: 'rgba(0,216,255,0.3)',
    year: '2023',
    id: 'CKAD-2023',
    url: '#',
  },
  {
    name: 'Linux Foundation\nCertified SysAdmin',
    shortName: 'LFCS',
    issuer: 'Linux Foundation',
    icon: '🐧',
    color: '#FCC624',
    glow: 'rgba(252,198,36,0.25)',
    border: 'rgba(252,198,36,0.3)',
    year: '2021',
    id: 'LFCS-2021',
    url: '#',
  },
]

export default function Certifications() {
  return (
    <section id="certs" className="section">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Credentials
          </div>
          <h2 className="section-title gradient-text">Certifications</h2>
          <p className="section-subtitle">
            Verified expertise across cloud, Kubernetes, and infrastructure
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {CERTS.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              aria-label={`View ${cert.shortName} certificate`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                className="glass"
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = cert.border
                  el.style.boxShadow = `0 0 30px ${cert.glow}, 0 8px 32px rgba(0,0,0,0.3)`
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--border)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'none'
                }}
              >
                {/* Accent line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
                    opacity: 0.6,
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: `rgba(${cert.color.slice(1).match(/.{2}/g)!.map(h => parseInt(h, 16)).join(',')}, 0.15)`,
                      border: `1px solid ${cert.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.4rem',
                      flexShrink: 0,
                    }}
                  >
                    {cert.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'var(--text)',
                        lineHeight: 1.4,
                        marginBottom: 4,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {cert.name}
                    </div>
                    <div
                      style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: 12 }}
                    >
                      {cert.issuer}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          color: cert.color,
                          border: `1px solid ${cert.border}`,
                          padding: '2px 8px',
                          borderRadius: 4,
                        }}
                      >
                        {cert.id}
                      </span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
