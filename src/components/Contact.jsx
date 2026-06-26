import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'var(--bg-card)',
    border: '1.5px solid var(--border)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Inter, sans-serif',
  }

  const socials = [
    { label: 'GitHub', icon: '⚡', href: '#' },
    { label: 'LinkedIn', icon: '💼', href: '#' },
    { label: 'Instagram', icon: '📸', href: '#' },
    { label: 'Behance', icon: '🎨', href: '#' },
  ]

  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Contato</p>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Vamos <span style={{ color: 'var(--accent-light)' }}>Conversar?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tem um projeto em mente? Me conte mais sobre ele!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left */}
          <div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '16px',
            }}>Pronto para criar algo incrível?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '40px' }}>
              Estou sempre aberto a novos projetos, colaborações criativas e oportunidades interessantes. Seja um projeto de design, desenvolvimento web ou estratégia criativa — vamos conversar!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {[
                { icon: '📧', label: 'Email', value: 'matheusphelipe.bfc@gmail.com' },
                { icon: '📍', label: 'Localização', value: 'Brasil 🇧🇷' },
                { icon: '💬', label: 'WhatsApp', value: '+55 (11) 91604-2616', href: 'https://wa.me/5511916042616' },
              ].map(item => (
                <div key={item.label}
                  onClick={() => item.href && window.open(item.href, '_blank')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    background: 'var(--bg-card)',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    cursor: item.href ? 'pointer' : 'default',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => { if (item.href) e.currentTarget.style.borderColor = '#25d366' }}
                  onMouseLeave={e => { if (item.href) e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</div>
                    <div style={{ color: item.href ? '#25d366' : 'var(--text-primary)', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5511916042616"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 24px',
                background: '#25d366',
                color: '#fff',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                marginBottom: '24px',
                transition: 'all 0.2s',
                boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.3)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>

            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} title={s.label} style={{
                  width: '44px',
                  height: '44px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.background = 'var(--accent-glow)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>Mensagem</label>
              <textarea
                placeholder="Conte sobre seu projeto..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                rows={6}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
              {sent ? '✅ Enviado!' : 'Enviar Mensagem'}
              {!sent && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
