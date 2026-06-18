const projects = [
  {
    title: 'Brand Identity',
    description: 'Criação completa de identidade visual para startup de tecnologia, incluindo logo, paleta de cores e guia de marca.',
    tags: ['Branding', 'Figma', 'Ilustração'],
    emoji: '🎯',
    color: '#7c3aed',
  },
  {
    title: 'App Dashboard',
    description: 'Design e desenvolvimento de dashboard analytics com visualização de dados em tempo real e UX intuitiva.',
    tags: ['UI/UX', 'React', 'Charts'],
    emoji: '📊',
    color: '#0ea5e9',
  },
  {
    title: 'E-commerce Experience',
    description: 'Redesign completo de plataforma e-commerce com foco em conversão, mobile-first e jornada do usuário.',
    tags: ['UX Design', 'Prototipação', 'CSS'],
    emoji: '🛍️',
    color: '#10b981',
  },
  {
    title: 'Motion & Animation',
    description: 'Projeto de motion design para campanha digital com animações que aumentaram o engajamento em 240%.',
    tags: ['Motion', 'After Effects', 'Creative'],
    emoji: '🎬',
    color: '#f59e0b',
  },
  {
    title: 'Web App Criativo',
    description: 'Desenvolvimento de aplicação web com design único, microinterações e experiência de usuário premium.',
    tags: ['React', 'CSS', 'Design'],
    emoji: '🌐',
    color: '#ec4899',
  },
  {
    title: 'Social Media Kit',
    description: 'Kit completo de templates para redes sociais com identidade coesa e adaptável para múltiplas plataformas.',
    tags: ['Design', 'Templates', 'Social'],
    emoji: '📱',
    color: '#8b5cf6',
  },
]

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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {projects.map(p => (
            <div key={p.title} style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              cursor: 'pointer',
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
              {/* Image placeholder */}
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, ${p.color}33 0%, ${p.color}11 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                borderBottom: '1px solid var(--border)',
              }}>
                {p.emoji}
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: 'var(--text-primary)',
                }}>{p.title}</h3>
                <p style={{
                  fontSize: '0.9rem',
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
    </section>
  )
}
