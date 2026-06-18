export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 24px',
      textAlign: 'center',
      background: 'var(--bg-secondary)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '1.1rem',
          color: 'var(--text-primary)',
        }}>
          MN<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Matheus Nery. Feito com ❤️ e ☕
        </p>
        <a href="#hero" style={{
          fontSize: '0.85rem',
          color: 'var(--accent-light)',
          textDecoration: 'none',
          fontWeight: 500,
        }}>
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  )
}
