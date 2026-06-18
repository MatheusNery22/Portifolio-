import { useState } from 'react'

const InstagramCard = ({ handle, label, gradient, delay }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 20
    setTilt({ x, y })
  }

  return (
    <a
      href={`https://instagram.com/${handle.replace('@', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      style={{
        display: 'block',
        textDecoration: 'none',
        perspective: '1000px',
        animation: `fadeInUp 0.8s ease ${delay}s both`,
      }}
    >
      <div style={{
        width: '180px',
        borderRadius: '20px',
        background: gradient,
        padding: '28px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) ${hovered ? 'scale(1.05)' : 'scale(1)'}`,
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s ease',
        boxShadow: hovered
          ? '0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(124,58,237,0.3)'
          : '0 10px 30px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
      }}>
        {/* Instagram icon */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateZ(20px)',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
          </svg>
        </div>

        <div style={{ textAlign: 'center', transform: 'translateZ(15px)' }}>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}>{label}</p>
          <p style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.9rem',
            fontFamily: "'Space Grotesk', sans-serif",
          }}>{handle}</p>
        </div>

        <div style={{
          display: 'flex',
          gap: '6px',
          transform: 'translateZ(10px)',
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(4px)',
            }} />
          ))}
        </div>

        <div style={{
          width: '100%',
          height: '1px',
          background: 'rgba(255,255,255,0.2)',
          transform: 'translateZ(5px)',
        }} />

        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '0.75rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          transform: 'translateZ(10px)',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          Ver perfil
        </p>
      </div>
    </a>
  )
}

export default function About() {
  const stats = [
    { value: '4+', label: 'Anos de experiência' },
    { value: '50+', label: 'Campanhas gerenciadas' },
    { value: '2021', label: 'Início na área' },
  ]

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        {/* Bio */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          marginBottom: '80px',
        }} className="about-grid">

          {/* Left: visual */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{
              padding: '32px',
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'var(--accent-glow)',
                filter: 'blur(40px)',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--accent), #c026d3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>Minha jornada</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>desde 2020</p>
                  </div>
                </div>

                {[
                  { year: '2020', text: 'Iniciou com dropshipping & descobriu o marketing' },
                  { year: '2021', text: 'Cursos, bootcamps e faculdade de Marketing & Tecnologia' },
                  { year: '2022', text: 'Primeiro estágio na área de marketing' },
                  { year: 'Hoje', text: 'Designer na @sarajandirasp & construindo sua agência' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    marginBottom: i < 3 ? '16px' : '0',
                  }}>
                    <div style={{
                      minWidth: '44px',
                      padding: '3px 8px',
                      background: 'var(--accent-glow)',
                      border: '1px solid var(--accent)',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--accent-light)',
                      textAlign: 'center',
                    }}>{item.year}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, paddingTop: '2px' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
            }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  padding: '16px',
                  background: 'var(--bg-card)',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '4px',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="section-label">Sobre mim</p>
            <h2 className="section-title">
              De zero a <span style={{ color: 'var(--accent-light)' }}>especialista</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.9, fontSize: '1.05rem' }}>
              Sou o Matheus Nery, profissional criativo de 25 anos que atua na área de marketing desde o final de 2020. Tudo começou quando iniciei uma empresa de dropshipping sem entender nada de marketing — e esse desafio me fez buscar cursos, vídeos, bootcamps e tudo que estava ao meu alcance para aprender.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.9, fontSize: '1.05rem' }}>
              Iniciei a faculdade de Marketing & Tecnologia e, logo depois, meu primeiro estágio na área. Hoje atuo como designer na <span style={{ color: 'var(--accent-light)', fontWeight: 600 }}>@sarajandirasp</span>, criando conteúdo, gerenciando mídia paga e desenvolvendo landing pages que convertem.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
              Tenho um sonho claro: <strong style={{ color: 'var(--text-primary)' }}>construir minha própria agência de marketing.</strong> E cada projeto me aproxima mais disso.
            </p>
          </div>
        </div>

        {/* Instagram cards */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Presença Digital</p>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.8rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}>Me siga no <span style={{ color: 'var(--accent-light)' }}>Instagram</span></h3>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          <InstagramCard
            handle="@sarajandirasp"
            label="Igreja"
            gradient="linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)"
            delay={0.1}
          />
          <InstagramCard
            handle="@matheusneryoficial"
            label="Pessoal"
            gradient="linear-gradient(135deg, #405de6, #5851db, #833ab4)"
            delay={0.3}
          />
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
