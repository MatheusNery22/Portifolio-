import { useState } from 'react'

const projects = [
  {
    id: 'sara-arraiacopa',
    title: 'Arraiá + Copa — Sara Jandira',
    client: 'Sara Jandira SP',
    description: 'Campanha completa para evento temático unindo Festa Junina e Copa do Mundo. Cards estilo Panini, convocação oficial, cronograma e peças para redes sociais.',
    tags: ['Social Media', 'Design', 'Campanha', 'Canva'],
    color: '#22c55e',
    images: [
      '/projects/sara-arraiacopa/1.jpg',
      '/projects/sara-arraiacopa/2.jpg',
      '/projects/sara-arraiacopa/3.jpg',
      '/projects/sara-arraiacopa/4.jpg',
      '/projects/sara-arraiacopa/5.jpg',
    ],
    featured: true,
  },
]

const placeholders = [
  {
    title: 'Campanha Meta Ads',
    description: 'Gestão e criação de campanhas pagas no Meta com segmentação avançada e otimização contínua de resultados.',
    tags: ['Meta Ads', 'Mídia Paga', 'Copy'],
    color: '#1877f2',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    title: 'Google Ads',
    description: 'Criação e otimização de campanhas no Google Search, Display e YouTube para geração de leads e conversões.',
    tags: ['Google Ads', 'Search', 'Display'],
    color: '#ea4335',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    title: 'Landing Pages',
    description: 'Criação de LPs focadas em conversão com copywriting estratégico, design responsivo e integração com ferramentas.',
    tags: ['Landing Page', 'Copy', 'Design'],
    color: '#7c3aed',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
]

function ImageGallery({ images, title }) {
  const [current, setCurrent] = useState(0)

  return (
    <div style={{ position: 'relative', height: '280px', background: '#000', overflow: 'hidden' }}>
      <img
        src={images[current]}
        alt={`${title} - ${current + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'opacity 0.3s',
        }}
        onError={e => { e.target.style.display = 'none' }}
      />

      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); setCurrent((current - 1 + images.length) % images.length) }}
            style={{
              position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%',
              width: '36px', height: '36px', cursor: 'pointer', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); setCurrent((current + 1) % images.length) }}
            style={{
              position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%',
              width: '36px', height: '36px', cursor: 'pointer', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div style={{
            position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '6px',
          }}>
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                style={{
                  width: i === current ? '20px' : '6px', height: '6px',
                  borderRadius: '3px', border: 'none', cursor: 'pointer',
                  background: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
                  transition: 'all 0.3s',
                  padding: 0,
                }} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Portfólio</p>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Projetos em <span style={{ color: 'var(--accent-light)' }}>Destaque</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Uma seleção dos trabalhos que mais me orgulho
          </p>
        </div>

        {/* Featured projects with gallery */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '24px' }}>
          {projects.map(p => (
            <div key={p.id} style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = p.color
              e.currentTarget.style.boxShadow = `0 20px 60px ${p.color}33`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
              }} className="featured-grid">
                <ImageGallery images={p.images} title={p.title} />

                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    background: `${p.color}22`,
                    border: `1px solid ${p.color}44`,
                    borderRadius: '100px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: p.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '16px',
                    width: 'fit-content',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill={p.color}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    Destaque
                  </div>

                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {p.client}
                  </p>

                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '14px',
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                  }}>{p.title}</h3>

                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    marginBottom: '20px',
                  }}>{p.description}</p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        padding: '5px 12px',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: `${p.color}22`,
                        color: p.color,
                        border: `1px solid ${p.color}44`,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {placeholders.map(p => (
            <div key={p.title} style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = `0 20px 60px ${p.color}33`
              e.currentTarget.style.borderColor = p.color
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}>
              <div style={{
                height: '160px',
                background: `linear-gradient(135deg, ${p.color}22 0%, ${p.color}08 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: p.color,
                borderBottom: '1px solid var(--border)',
              }}>
                {p.icon}
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: 'var(--text-primary)',
                }}>{p.title}</h3>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}>{p.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      padding: '4px 12px',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: `${p.color}22`,
                      color: p.color,
                      border: `1px solid ${p.color}44`,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
