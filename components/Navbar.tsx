'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#about',    label: 'About' },
  { href: '#journey',  label: 'Journey' },
  { href: '#certs',    label: 'Certs' },
  { href: '#projects', label: 'Projects' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(6, 11, 24, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.08)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--cyan)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          {'<mo />'}
        </a>

        {/* Desktop Links */}
        <div
          className="nav-links"
          style={{ display: 'flex', gap: 32, alignItems: 'center' }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
            style={{ padding: '6px 18px', fontSize: '0.8rem' }}
          >
            GitHub
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
          }}
          className="burger-btn"
        >
          <div style={{ width: 22, height: 2, background: 'var(--cyan)', marginBottom: 5, borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: 'var(--cyan)', marginBottom: 5, borderRadius: 2, transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
          <div style={{ width: 22, height: 2, background: 'var(--cyan)', borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: 'rgba(6,11,24,0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(0,212,255,0.1)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: '1rem', padding: '8px 0' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
