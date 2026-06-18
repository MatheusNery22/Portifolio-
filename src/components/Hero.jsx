import { useState, useEffect } from 'react'

const roles = ['Social Media', 'Mídia Paga', 'Designer', 'Criador de LP\'s']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 100)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'var(--gradient-hero)',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'var(--accent-glow)',
        filter: 'blur(80px)',
        animation: 'float 6s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgba(124, 58, 237, 0.1)',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px' }}>
          <p style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent-light)',
            marginBottom: '24px',
            animation: 'fadeInUp 0.6s ease forwards',
          }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 10px #22c55e',
              animation: 'pulse-glow 2s ease infinite',
            }} />
            Disponível para projetos
          </p>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: '16px',
            animation: 'fadeInUp 0.8s ease 0.1s both',
          }}>
            Matheus
            <br />
            <span style={{ color: 'var(--accent-light)' }}>Nery</span>
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px',
            animation: 'fadeInUp 0.8s ease 0.2s both',
          }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
            }}>
              {displayed}
              <span style={{
                borderRight: '3px solid var(--accent)',
                marginLeft: '2px',
                animation: 'blink 1s ease infinite',
                display: 'inline-block',
              }}>&nbsp;</span>
            </span>
          </div>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            marginBottom: '48px',
            lineHeight: 1.8,
            animation: 'fadeInUp 0.8s ease 0.3s both',
          }}>
            Estratégia, criatividade e dados unidos para gerar resultados reais. Atuo com conteúdo, mídia paga, design e landing pages que convertem.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease 0.4s both',
          }}>
            <a href="#projects" className="btn btn-primary">
              Ver Projetos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Fale Comigo
            </a>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'fadeIn 1s ease 1s both',
      }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>SCROLL</span>
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(to bottom, var(--text-muted), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
