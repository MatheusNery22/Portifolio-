const skillGroups = [
  {
    title: 'Social Media',
    gradient: 'linear-gradient(135deg, #833ab4, #fd1d1d)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z"/>
        <circle cx="12" cy="12" r="3"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
    skills: ['Criação de Conteúdo', 'Estratégia de Conteúdo', 'Reels & Stories', 'Copywriting', 'Gestão de Perfis', 'Calendário Editorial'],
  },
  {
    title: 'Mídia Paga',
    gradient: 'linear-gradient(135deg, #1877f2, #0668E1)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    skills: ['Meta Ads', 'Google Ads', 'Segmentação de Público', 'Testes A/B', 'Otimização de Campanhas', 'Análise de Métricas'],
  },
  {
    title: 'Design',
    gradient: 'linear-gradient(135deg, #7c3aed, #c026d3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="2" x2="12" y2="5"/>
        <line x1="12" y1="19" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="5" y2="12"/>
        <line x1="19" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    skills: ['Figma', 'Canva Pro', 'Photoshop', 'Identidade Visual', 'Peças para Redes Sociais', 'Edição de Imagem'],
  },
  {
    title: 'Landing Pages',
    gradient: 'linear-gradient(135deg, #059669, #0ea5e9)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    skills: ['Criação de LP\'s', 'Copywriting para Vendas', 'Design Responsivo', 'Otimização de Conversão', 'HTML & CSS', 'Integração com Ferramentas'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Competências</p>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Minhas <span style={{ color: 'var(--accent-light)' }}>Skills</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Ferramentas e estratégias que uso para gerar resultados reais no digital
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {skillGroups.map(group => (
            <div key={group.title} style={{
              padding: '32px',
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.boxShadow = '0 8px 32px var(--accent-glow)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: group.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '20px',
              }}>
                {group.icon}
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '20px',
                color: 'var(--text-primary)',
              }}>{group.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    padding: '6px 14px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '100px',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                    fontWeight: 500,
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
