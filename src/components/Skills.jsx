const skillGroups = [
  {
    title: 'Design',
    icon: '🎨',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX Design', 'Prototipação'],
  },
  {
    title: 'Frontend',
    icon: '💻',
    skills: ['HTML & CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Animações CSS', 'Design Responsivo'],
  },
  {
    title: 'Criatividade',
    icon: '✨',
    skills: ['Branding', 'Motion Design', 'Identidade Visual', 'Storytelling', 'Copywriting', 'Estratégia Digital'],
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
            Um conjunto de ferramentas e habilidades que uso para criar experiências memoráveis
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                fontSize: '2.5rem',
                marginBottom: '16px',
              }}>{group.icon}</div>
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
