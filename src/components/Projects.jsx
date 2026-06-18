import { useState, useEffect } from 'react'

const projects = [
  {
    id: 'sara-arraiacopa',
    title: 'Arraiá + Copa — Sara Jandira',
    client: 'Sara Jandira SP',
    description: 'Campanha completa para evento temático unindo Festa Junina e Copa do Mundo. Cards estilo Panini, convocação oficial, cronograma e peças para redes sociais.',
    tags: ['Social Media', 'Design', 'Campanha', 'Canva'],
    color: '#22c55e',
    images: [
      '/projects/sara-arraiacopa/5_01.jpg',
      '/projects/sara-arraiacopa/5_04.jpg',
      '/projects/sara-arraiacopa/5_02.jpg',
      '/projects/sara-arraiacopa/5_05.jpg',
      '/projects/sara-arraiacopa/5_03.jpg',
    ],
    featured: true,
  },
  {
    id: 'arena-flow',
    title: 'Arena Flow — Social Media',
    client: 'Sara Jandira SP',
    description: 'Criação de conteúdo para o Arena Flow, culto mensal de evangelismo com identidade visual forte e editorial. Peças que capturam a atmosfera única do evento e geram engajamento orgânico.',
    tags: ['Social Media', 'Fotografia', 'Design', 'Identidade Visual'],
    color: '#38bdf8',
    images: [
      '/projects/arena-flow/CARROSEL_01.gif',
      '/projects/arena-flow/CARROSEL_02.gif',
      '/projects/arena-flow/CARROSEL_03.gif',
      '/projects/arena-flow/CARROSEL_04.gif',
      '/projects/arena-flow/CARROSEL_05.gif',
    ],
    featured: true,
  },
  {
    id: 'copa-brasil-cfc-cap',
    title: 'Copa do Brasil — Arte de Jogo',
    client: 'Conteúdo Esportivo',
    description: 'Arte de confronto para Corinthians x Athletico Paranaense pela Copa do Brasil 2025. Composição com identidade dos dois clubes, troféu e atmosfera de grande jogo.',
    tags: ['Design', 'Esporte', 'Social Media', 'Futebol'],
    color: '#dc2626',
    images: [
      '/projects/copa-brasil-cfc-cap/corxpr.png',
    ],
    featured: true,
  },
  {
    id: 'bicho-papao',
    title: 'Bicho Papão — Social Media',
    client: 'Petshop Bicho Papão',
    description: 'Criação de carrossel para Instagram do petshop com foco em divulgar canal de vendas pelo WhatsApp. Design na identidade da marca (laranja e verde) com copywriting estratégico orientado à conversão.',
    tags: ['Social Media', 'Design', 'Copywriting', 'Instagram'],
    color: '#f97316',
    images: [
      '/projects/bicho-papao/Carrosel---WPP-Bicho-papão_01.gif',
      '/projects/bicho-papao/Carrosel---WPP-Bicho-papão_03.gif',
      '/projects/bicho-papao/Carrosel---WPP-Bicho-papão_05.gif',
      '/projects/bicho-papao/Carrosel---WPP-Bicho-papão_07.gif',
    ],
    featured: true,
  },
  {
    id: 'copa-dna',
    title: 'Copa DNA — Identidade Visual',
    client: 'Evento Esportivo',
    description: 'Criação do MIV (Manual de Identidade Visual) para evento de futebol voltado ao público jovem. Logo, paleta de cores (amarelo, azul, preto e branco) e elementos gráficos com pegada urbana e street art.',
    tags: ['Branding', 'MIV', 'Design', 'Identidade Visual'],
    color: '#eab308',
    images: [
      '/projects/copa-dna/MIV.png',
    ],
    featured: true,
  },
  {
    id: 'conteudo-ia',
    title: 'IA no Marketing — Conteúdo Próprio',
    client: '@matheusneryoficial',
    description: 'Carrossel criado para o Instagram pessoal sobre IA e o futuro do marketing. Storytelling visual com edições feitas com Inteligência Artificial — gerando debate e engajamento orgânico.',
    tags: ['Conteúdo', 'IA', 'Copywriting', 'Design', 'Instagram'],
    color: '#f59e0b',
    images: [
      '/projects/conteudo-ia/CARROSSEL---IA_02.jpg',
      '/projects/conteudo-ia/CARROSSEL---IA_03.jpg',
      '/projects/conteudo-ia/CARROSSEL---IA_04.jpg',
      '/projects/conteudo-ia/CARROSSEL---IA_05.jpg',
      '/projects/conteudo-ia/CARROSSEL---IA_06.jpg',
    ],
    featured: true,
  },
  {
    id: 'arena-flow-antecipacao',
    title: 'Arena Flow — Antecipação',
    client: 'Sara Jandira SP',
    description: 'Série de peças de antecipação para o Arena Flow: contagem regressiva, anúncio de pregador convidado e telões para uso no evento. Identidade visual consistente gerando expectativa no público.',
    tags: ['Social Media', 'Design', 'Contagem Regressiva', 'Telão'],
    color: '#06b6d4',
    images: [
      '/projects/arena-flow-antecipacao/FEED - DIVULGAÇÃO.png',
      '/projects/arena-flow-antecipacao/FEED - DIVULGAÇÃO FALTAM 3 DIAS.png',
      '/projects/arena-flow-antecipacao/FEED - DIVULGAÇÃO FALTAM 2 DIAS_.png',
      '/projects/arena-flow-antecipacao/FEED - DIVULGAÇÃO É AMANHÃ.png',
      '/projects/arena-flow-antecipacao/FEED - DIVULGAÇÃO É HOJE.png',
      '/projects/arena-flow-antecipacao/FEED - DIVULGAÇÃO - GABRIEL DUARTE.png',
      '/projects/arena-flow-antecipacao/TELÃO - DÍZIMOS E OFERTAS.png',
      '/projects/arena-flow-antecipacao/TELÃO - ESPAÇO ABERTO PARA VERSÍCULOS.png',
    ],
    featured: true,
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages — Torres Cabral B2B',
    client: 'Torres Cabral Materiais',
    description: 'LP B2B para captação de empresas, construtoras e microempreendedores. Estrutura completa: hero com CTA, segmentos atendidos, processo de compra em 5 etapas, benefícios, provas sociais com marcas parceiras, formulário e FAQ.',
    tags: ['Landing Page', 'B2B', 'Copy', 'Conversão'],
    color: '#7c3aed',
    pdf: '/projects/landing-pages/FireShot Capture 003 - Torres Cabral B2B - Soluções para Empresas e Construtoras_ - [empresas.torrescabral.com.br].pdf',
    images: [],
    featured: true,
    isLP: true,
  },
  {
    id: 'lp-torres-live',
    title: 'Landing Page — Torres Cabral Live',
    client: 'Torres Cabral Materiais',
    description: 'LP para campanha de live de ofertas da Torres Cabral. Página focada em conversão direta com ofertas em destaque e urgência para o público durante a transmissão ao vivo.',
    tags: ['Landing Page', 'Ofertas', 'Live', 'Conversão'],
    color: '#f97316',
    pdf: '/projects/landing-pages/FireShot Capture 004 - 🔴 LIVE TORRES CABRAL - [ofertastorrescabral.com].pdf',
    images: [],
    featured: true,
    isLP: true,
  },
  {
    id: 'festa-tabernaculos',
    title: 'Festa dos Tabernáculos',
    client: 'Sara Jandira SP',
    description: 'Identidade visual completa para o maior evento anual da Sara Jandira — 3 dias de celebração. Peças em feed, stories e thumbnail com tipografia editorial e atmosfera cinematográfica.',
    tags: ['Social Media', 'Design', 'Evento', 'Identidade Visual'],
    color: '#818cf8',
    images: [
      '/projects/festa-tabernaculos/FEED tabernaculos.png',
      '/projects/festa-tabernaculos/Storys tabernaculos.png',
      '/projects/festa-tabernaculos/Telão tabernaculo telao.png',
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

function LPModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        overflowY: 'auto',
        animation: 'fadeIn 0.2s ease',
        padding: '60px 16px 40px',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: '16px', right: '16px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', width: '44px', height: '44px',
          cursor: 'pointer', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1001, transition: 'all 0.2s',
          backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Header */}
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: '900px' }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '24px', flexWrap: 'wrap', gap: '12px',
        }}>
          <div>
            <p style={{ color: project.color, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
              {project.client}
            </p>
            <h3 style={{ color: '#fff', fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>
              {project.title}
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.tags.map(t => (
              <span key={t} style={{
                padding: '5px 12px', borderRadius: '100px', fontSize: '0.75rem',
                fontWeight: 600, background: `${project.color}22`, color: project.color,
                border: `1px solid ${project.color}44`,
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* PDF embed ou imagens empilhadas */}
        {project.pdf ? (
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <iframe
              src={project.pdf}
              style={{ width: '100%', height: '85vh', border: 'none', display: 'block' }}
              title={project.title}
            />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} - ${i + 1}`}
                style={{
                  width: '100%', display: 'block', borderRadius: i === 0 ? '16px 16px 4px 4px' : i === project.images.length - 1 ? '4px 4px 16px 16px' : '4px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                }}
              />
            ))}
          </div>
        )}

        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textAlign: 'center', marginTop: '20px' }}>
          Pressione ESC ou clique fora para fechar
        </p>
      </div>
    </div>
  )
}

function ImageGallery({ images, title, comingSoon }) {
  const [current, setCurrent] = useState(0)

  if (comingSoon || images.length === 0) {
    return (
      <div style={{
        height: '320px',
        background: 'linear-gradient(135deg, #7c3aed22, #7c3aed08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        borderRight: '1px solid var(--border)',
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>Em breve</p>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', height: '320px', background: '#0a0a0f', overflow: 'hidden' }}>
      <img
        src={images[current]}
        alt={`${title} - ${current + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
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
  const [modalProject, setModalProject] = useState(null)

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      {modalProject && <LPModal project={modalProject} onClose={() => setModalProject(null)} />}

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
              cursor: p.isLP ? 'default' : 'default',
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
                {p.isLP ? (
                  <div
                    onClick={() => setModalProject(p)}
                    style={{
                      position: 'relative', height: '320px', background: '#0a0a0f',
                      overflow: 'hidden', cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.currentTarget.querySelector('.lp-overlay').style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.querySelector('.lp-overlay').style.opacity = '0'}
                  >
                    {p.images[0] && (
                      <img src={p.images[0]} alt={p.title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                        onError={e => e.target.style.display = 'none'}
                      />
                    )}
                    <div className="lp-overlay" style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(0,0,0,0.6)',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      gap: '12px', opacity: 0, transition: 'opacity 0.3s',
                    }}>
                      <div style={{
                        width: '56px', height: '56px', borderRadius: '50%',
                        background: p.color, display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        boxShadow: `0 0 30px ${p.color}66`,
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </div>
                      <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>Ver Landing Page</p>
                    </div>
                  </div>
                ) : (
                  <ImageGallery images={p.images} title={p.title} comingSoon={p.comingSoon} />
                )}

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

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: p.isLP ? '20px' : '0' }}>
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

                  {p.isLP && (
                    <button
                      onClick={() => setModalProject(p)}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '12px 24px', borderRadius: '8px',
                        background: p.color, color: '#fff',
                        border: 'none', cursor: 'pointer',
                        fontSize: '0.9rem', fontWeight: 700,
                        transition: 'all 0.2s',
                        width: 'fit-content',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${p.color}66` }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      Ver Landing Page
                    </button>
                  )}
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
