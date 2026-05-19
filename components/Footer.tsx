export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: 'var(--cyan)',
            }}
          >
            {'<mo />'}
          </span>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Built with{' '}
            <span style={{ color: 'var(--cyan)' }}>Next.js 16</span> &{' '}
            <span style={{ color: 'var(--purple)' }}>Tailwind CSS v4</span>
            {' '}— deployed on{' '}
            <span style={{ color: 'var(--green)' }}>Cloud Run</span>
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Mohamed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
