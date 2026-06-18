export default function About() {
  const stats = [
    { value: '3+', label: 'Anos de experiência' },
    { value: '20+', label: 'Projetos entregues' },
    { value: '100%', label: 'Dedicação criativa' },
  ]

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="about-grid">
          {/* Left: image placeholder */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              aspectRatio: '1',
              maxWidth: '400px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, var(--accent) 0%, #c026d3 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8rem',
              boxShadow: '0 32px 80px var(--accent-glow)',
              animation: 'float 5s ease-in-out infinite',
            }}>
              🎨
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              borderRadius: '16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
            }}>
              <span style={{ fontSize: '2rem' }}>⚡</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Rápido</span>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="section-label">Sobre mim</p>
            <h2 className="section-title">
              Criatividade encontra <span style={{ color: 'var(--accent-light)' }}>tecnologia</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.8 }}>
              Sou um profissional criativo apaixonado por transformar conceitos em experiências visuais e digitais únicas. Combino design thinking com habilidades técnicas para criar soluções que não apenas funcionam, mas encantam.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '48px', lineHeight: 1.8 }}>
              Cada projeto é uma oportunidade de contar uma história diferente. Minha abordagem une estética, usabilidade e inovação para resultados que superam expectativas.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  padding: '20px',
                  background: 'var(--bg-card)',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '4px',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
