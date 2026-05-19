'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const ROLES = [
  'DevOps Engineer',
  'Cloud Architect',
  'Kubernetes Specialist',
  'Terraform Expert',
  'CI/CD Craftsman',
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/kouriat1/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-kouriat/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:medkouriat99@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = ROLES[roleIdx]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'var(--cyan)' : 'var(--purple)',
            opacity: 0.4,
            top: `${10 + (i * 7) % 80}%`,
            left: `${5 + (i * 11) % 90}%`,
            animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <div
        style={{
          maxWidth: 1100,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 80,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* Text Content */}
        <div
          style={{ flex: '1 1 360px', minWidth: 0 }}
          className="animate-fade-up"
        >
          <div
            className="section-label"
            style={{ marginBottom: '1.5rem' }}
          >
            Available for opportunities
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
            }}
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Mohamed</span>
          </h1>

          <div
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-dim)',
              marginBottom: '1.5rem',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ color: 'var(--cyan)' }}>$</span>
            <span>{displayed}</span>
            <span className="terminal-cursor" style={{ height: '1.2em', width: 6 }} />
          </div>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: 520,
              marginBottom: '2.5rem',
            }}
          >
            I build scalable, resilient cloud infrastructure and automate
            everything that can be automated. Passionate about Kubernetes,
            Terraform, and shipping software that just works.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href="#projects" className="btn-glow">
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                padding: '10px 24px',
                borderRadius: 8,
                fontSize: '0.875rem',
                fontWeight: 600,
                background: 'var(--cyan)',
                color: '#060b18',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                ; (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  '0 0 30px var(--cyan-glow)'
              }}
              onMouseLeave={(e) => {
                ; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: 12 }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--cyan)'
                  el.style.borderColor = 'rgba(0,212,255,0.4)'
                  el.style.boxShadow = '0 0 16px var(--cyan-glow)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--text-muted)'
                  el.style.borderColor = 'var(--border)'
                  el.style.boxShadow = 'none'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div
          className="animate-fade-up delay-300"
          style={{ position: 'relative', flexShrink: 0 }}
        >
          {/* Outer spinning ring */}
          <div
            className="avatar-ring"
            style={{
              position: 'absolute',
              inset: -24,
              borderRadius: '50%',
              border: '1px solid transparent',
              borderTopColor: 'var(--cyan)',
              borderRightColor: 'rgba(0,212,255,0.3)',
            }}
          />
          {/* Inner spinning ring reverse */}
          <div
            className="avatar-ring-rev"
            style={{
              position: 'absolute',
              inset: -12,
              borderRadius: '50%',
              border: '1px dashed rgba(139,92,246,0.5)',
            }}
          />

          {/* Avatar image */}
          <div
            className="avatar-pulse"
            style={{
              width: 220,
              height: 220,
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'var(--bg-surface)',
              border: '3px solid var(--cyan)',
            }}
          >
            <Image
              src="/me.png"
              alt="Mohamed — DevOps Engineer"
              width={220}
              height={220}
              priority
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          {/* Floating badge */}
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              bottom: -12,
              right: -20,
              background: 'var(--bg-card)',
              border: '1px solid rgba(16,217,121,0.4)',
              borderRadius: 10,
              padding: '8px 14px',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            <span style={{ color: 'var(--green)', fontSize: 10 }}>●</span>
            <span style={{ color: 'var(--green)' }}>Open to work</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
        }}
      >
        <span style={{ letterSpacing: '0.1em' }}>SCROLL</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, var(--text-muted), transparent)',
            animation: 'fade-in 2s ease infinite alternate',
          }}
        />
      </div>
    </section>
  )
}
