import { useState, useEffect, useCallback } from 'react'

const categories = [
  {
    id: 'todos',
    label: 'Todos',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    id: 'social-media',
    label: 'Social Media',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z"/>
        <circle cx="12" cy="12" r="3"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'design',
    label: 'Design',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    id: 'landing-pages',
    label: 'Landing Pages',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    id: 'videos',
    label: 'Vídeos & Reels',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
  },
]

const projects = [
  {
    id: 'sara-arraiacopa',
    title: 'Arraiá + Copa — Sara Jandira',
    client: 'Sara Jandira SP',
    description: 'Campanha completa para evento temático unindo Festa Junina e Copa do Mundo. Cards estilo Panini, convocação oficial, cronograma e peças para redes sociais.',
    tags: ['Social Media', 'Design', 'Campanha', 'Canva'],
    color: '#22c55e',
    category: 'social-media',
    images: [
      '/projects/sara-arraiacopa/5_01.jpg',
      '/projects/sara-arraiacopa/5_04.jpg',
      '/projects/sara-arraiacopa/5_02.jpg',
      '/projects/sara-arraiacopa/5_05.jpg',
      '/projects/sara-arraiacopa/5_03.jpg',
    ],
  },
  {
    id: 'arena-flow',
    title: 'Arena Flow — Social Media',
    client: 'Sara Jandira SP',
    description: 'Criação de conteúdo para o Arena Flow, culto mensal de evangelismo com identidade visual forte e editorial. Peças que capturam a atmosfera única do evento e geram engajamento orgânico.',
    tags: ['Social Media', 'Fotografia', 'Design', 'Identidade Visual'],
    color: '#38bdf8',
    category: 'social-media',
    images: [
      '/projects/arena-flow/CARROSEL_01.gif',
      '/projects/arena-flow/CARROSEL_02.gif',
      '/projects/arena-flow/CARROSEL_03.gif',
      '/projects/arena-flow/CARROSEL_04.gif',
      '/projects/arena-flow/CARROSEL_05.gif',
    ],
  },
  {
    id: 'bicho-papao',
    title: 'Bicho Papão — Social Media',
    client: 'Petshop Bicho Papão',
    description: 'Criação de carrossel para Instagram do petshop com foco em divulgar canal de vendas pelo WhatsApp. Design na identidade da marca com copywriting estratégico orientado à conversão.',
    tags: ['Social Media', 'Design', 'Copywriting', 'Instagram'],
    color: '#f97316',
    category: 'social-media',
    images: [
      '/projects/bicho-papao/Carrosel---WPP-Bicho-papão_01.gif',
      '/projects/bicho-papao/Carrosel---WPP-Bicho-papão_03.gif',
      '/projects/bicho-papao/Carrosel---WPP-Bicho-papão_05.gif',
      '/projects/bicho-papao/Carrosel---WPP-Bicho-papão_07.gif',
    ],
  },
  {
    id: 'conteudo-ia',
    title: 'IA no Marketing — Conteúdo Próprio',
    client: '@matheusneryoficial',
    description: 'Carrossel criado para o Instagram pessoal sobre IA e o futuro do marketing. Storytelling visual com edições feitas com Inteligência Artificial — gerando debate e engajamento orgânico.',
    tags: ['Conteúdo', 'IA', 'Copywriting', 'Design', 'Instagram'],
    color: '#f59e0b',
    category: 'social-media',
    images: [
      '/projects/conteudo-ia/CARROSSEL---IA_02.jpg',
      '/projects/conteudo-ia/CARROSSEL---IA_03.jpg',
      '/projects/conteudo-ia/CARROSSEL---IA_04.jpg',
      '/projects/conteudo-ia/CARROSSEL---IA_05.jpg',
      '/projects/conteudo-ia/CARROSSEL---IA_06.jpg',
    ],
  },
  {
    id: 'arena-flow-antecipacao',
    title: 'Arena Flow — Antecipação',
    client: 'Sara Jandira SP',
    description: 'Série de peças de antecipação para o Arena Flow: contagem regressiva, anúncio de pregador convidado e telões para uso no evento. Identidade visual consistente gerando expectativa no público.',
    tags: ['Social Media', 'Design', 'Contagem Regressiva', 'Telão'],
    color: '#06b6d4',
    category: 'social-media',
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
  },
  {
    id: 'festa-tabernaculos',
    title: 'Festa dos Tabernáculos',
    client: 'Sara Jandira SP',
    description: 'Identidade visual completa para o maior evento anual da Sara Jandira — 3 dias de celebração. Peças em feed, stories e thumbnail com tipografia editorial e atmosfera cinematográfica.',
    tags: ['Social Media', 'Design', 'Evento', 'Identidade Visual'],
    color: '#818cf8',
    category: 'social-media',
    images: [
      '/projects/festa-tabernaculos/FEED tabernaculos.png',
      '/projects/festa-tabernaculos/Storys tabernaculos.png',
      '/projects/festa-tabernaculos/Telão tabernaculo telao.png',
    ],
  },
  {
    id: 'copa-brasil-cfc-cap',
    title: 'Copa do Brasil — Arte de Jogo',
    client: 'Conteúdo Esportivo',
    description: 'Arte de confronto para Corinthians x Athletico Paranaense pela Copa do Brasil 2025. Composição com identidade dos dois clubes, troféu e atmosfera de grande jogo.',
    tags: ['Design', 'Esporte', 'Futebol'],
    color: '#dc2626',
    category: 'design',
    images: [
      '/projects/copa-brasil-cfc-cap/corxpr.png',
    ],
  },
  {
    id: 'copa-dna',
    title: 'Copa DNA — Identidade Visual',
    client: 'Evento Esportivo',
    description: 'Criação do MIV (Manual de Identidade Visual) para evento de futebol voltado ao público jovem. Logo, paleta de cores e elementos gráficos com pegada urbana e street art.',
    tags: ['Branding', 'MIV', 'Design', 'Identidade Visual'],
    color: '#eab308',
    category: 'design',
    images: [
      '/projects/copa-dna/MIV.png',
    ],
  },
  {
    id: 'landing-pages',
    title: 'Torres Cabral B2B',
    client: 'Torres Cabral Materiais',
    description: 'LP B2B para captação de empresas, construtoras e microempreendedores. Estrutura completa: hero com CTA, segmentos atendidos, processo de compra em 5 etapas, benefícios, provas sociais com marcas parceiras, formulário e FAQ.',
    tags: ['Landing Page', 'B2B', 'Copy', 'Conversão'],
    color: '#7c3aed',
    category: 'landing-pages',
    pdf: '/projects/landing-pages/FireShot Capture 003 - Torres Cabral B2B - Soluções para Empresas e Construtoras_ - [empresas.torrescabral.com.br].pdf',
    cover: '/projects/landing-pages/image-1781815762655.webp',
    images: [],
    isLP: true,
  },
  {
    id: 'lp-torres-live',
    title: 'Festival da Construção — Live',
    client: 'Torres Cabral Materiais',
    description: 'LP para campanha de live de ofertas da Torres Cabral. Página focada em conversão direta com ofertas em destaque e urgência para o público durante a transmissão ao vivo.',
    tags: ['Landing Page', 'Ofertas', 'Live', 'Conversão'],
    color: '#f97316',
    category: 'landing-pages',
    pdf: '/projects/landing-pages/FireShot Capture 004 - 🔴 LIVE TORRES CABRAL - [ofertastorrescabral.com].pdf',
    cover: '/projects/landing-pages/image-1781815809749.webp',
    images: [],
    isLP: true,
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
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: '16px', right: '16px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', width: '44px', height: '44px',
          cursor: 'pointer', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1001, backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '900px' }}>
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

        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
          <iframe
            src={project.pdf}
            style={{ width: '100%', height: '85vh', border: 'none', display: 'block' }}
            title={project.title}
          />
        </div>

        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textAlign: 'center', marginTop: '20px' }}>
          Pressione ESC ou clique fora para fechar
        </p>
      </div>
    </div>
  )
}

function ImageGallery({ images, title, onImageClick }) {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div style={{
        height: '280px',
        background: 'linear-gradient(135deg, #7c3aed22, #7c3aed08)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '12px',
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>Em breve</p>
      </div>
    )
  }

  return (
    <div
      style={{ position: 'relative', height: '280px', background: '#0a0a0f', overflow: 'hidden', cursor: 'zoom-in' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={images[current]}
        alt={`${title} - ${current + 1}`}
        onClick={() => onImageClick && onImageClick(images[current], current)}
        style={{
          width: '100%', height: '100%', objectFit: 'contain', display: 'block',
          transition: 'transform 0.3s ease',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
        }}
        onError={e => { e.target.style.display = 'none' }}
      />

      {hovered && (
        <div style={{
          position: 'absolute', top: '10px', right: '10px',
          background: 'rgba(0,0,0,0.7)', borderRadius: '8px',
          padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '5px',
          backdropFilter: 'blur(4px)', pointerEvents: 'none',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
          <span style={{ color: '#fff', fontSize: '0.68rem', fontWeight: 600 }}>Ampliar</span>
        </div>
      )}

      {images.length > 1 && (
        <>
          <button onClick={e => { e.stopPropagation(); setCurrent((current - 1 + images.length) % images.length) }}
            style={{
              position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%',
              width: '32px', height: '32px', cursor: 'pointer', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={e => { e.stopPropagation(); setCurrent((current + 1) % images.length) }}
            style={{
              position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%',
              width: '32px', height: '32px', cursor: 'pointer', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <div style={{
            position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '5px',
          }}>
            {images.map((_, i) => (
              <button key={i} onClick={e => { e.stopPropagation(); setCurrent(i) }}
                style={{
                  width: i === current ? '18px' : '5px', height: '5px',
                  borderRadius: '3px', border: 'none', cursor: 'pointer',
                  background: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
                  transition: 'all 0.3s', padding: 0,
                }} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ImageLightbox({ images, startIndex, title, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const [dragStartX, setDragStartX] = useState(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [animDir, setAnimDir] = useState(null)

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= images.length) return
    setAnimDir(idx > current ? 'left' : 'right')
    setCurrent(idx)
    setTimeout(() => setAnimDir(null), 280)
  }, [current, images.length])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goTo(current + 1)
      if (e.key === 'ArrowLeft') goTo(current - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, goTo, current])

  const onDragStart = (clientX) => { setDragStartX(clientX); setIsDragging(true); setDragOffset(0) }
  const onDragMove = (clientX) => { if (!isDragging) return; setDragOffset(clientX - dragStartX) }
  const onDragEnd = () => {
    if (Math.abs(dragOffset) > 60) dragOffset < 0 ? goTo(current + 1) : goTo(current - 1)
    setDragStartX(null); setDragOffset(0); setIsDragging(false)
  }

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(0,0,0,0.97)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'fadeIn 0.2s ease', userSelect: 'none',
    }}>
      <button onClick={onClose} style={{
        position: 'fixed', top: '16px', right: '16px',
        background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '50%', width: '44px', height: '44px',
        cursor: 'pointer', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2001, backdropFilter: 'blur(8px)',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div style={{
        position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)',
        background: 'rgba(255,255,255,0.1)', borderRadius: '100px',
        padding: '5px 14px', color: '#fff', fontSize: '0.8rem', fontWeight: 600,
        backdropFilter: 'blur(8px)', zIndex: 2001,
      }}>
        {current + 1} / {images.length}
      </div>

      {current > 0 && (
        <button onClick={e => { e.stopPropagation(); goTo(current - 1) }} style={{
          position: 'fixed', left: '16px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', width: '48px', height: '48px',
          cursor: 'pointer', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2001, backdropFilter: 'blur(8px)', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      )}

      {current < images.length - 1 && (
        <button onClick={e => { e.stopPropagation(); goTo(current + 1) }} style={{
          position: 'fixed', right: '16px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', width: '48px', height: '48px',
          cursor: 'pointer', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2001, backdropFilter: 'blur(8px)', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      )}

      <div
        onClick={e => e.stopPropagation()}
        onMouseDown={e => onDragStart(e.clientX)}
        onMouseMove={e => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={e => onDragStart(e.touches[0].clientX)}
        onTouchMove={e => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '70px 80px 60px', width: '100%', height: '100%',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        <img
          src={images[current]}
          alt={`${title} - ${current + 1}`}
          draggable={false}
          style={{
            maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',
            borderRadius: '12px', boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? 'none' : 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
            animation: animDir ? `slide-${animDir} 0.28s cubic-bezier(0.4,0,0.2,1)` : 'fadeInUp 0.25s ease',
            pointerEvents: 'none',
          }}
        />
      </div>

      {images.length > 1 && (
        <div style={{
          position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '8px', zIndex: 2001,
        }}>
          {images.map((_, i) => (
            <button key={i} onClick={e => { e.stopPropagation(); goTo(i) }} style={{
              width: i === current ? '24px' : '8px', height: '8px',
              borderRadius: '4px', border: 'none', cursor: 'pointer',
              background: i === current ? '#fff' : 'rgba(255,255,255,0.35)',
              transition: 'all 0.3s', padding: 0,
            }} />
          ))}
        </div>
      )}

      <style>{`
        @keyframes slide-left { from { opacity:0.5; transform:translateX(60px) } to { opacity:1; transform:translateX(0) } }
        @keyframes slide-right { from { opacity:0.5; transform:translateX(-60px) } to { opacity:1; transform:translateX(0) } }
      `}</style>
    </div>
  )
}

function ProjectCard({ p, onOpenLP, onOpenLightbox }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: '20px',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      display: 'flex', flexDirection: 'column',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = p.color
      e.currentTarget.style.boxShadow = `0 20px 60px ${p.color}33`
      e.currentTarget.style.transform = 'translateY(-4px)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.transform = 'translateY(0)'
    }}>
      {/* Media area */}
      {p.isLP ? (
        <div
          onClick={() => onOpenLP(p)}
          style={{ position: 'relative', height: '220px', overflow: 'hidden', cursor: 'pointer', flexShrink: 0 }}
          onMouseEnter={e => {
            e.currentTarget.querySelector('.lp-cover-inner').style.transform = 'scale(1.05)'
            e.currentTarget.querySelector('.lp-cta').style.boxShadow = `0 16px 40px ${p.color}77`
            e.currentTarget.querySelector('.lp-cta').style.transform = 'translateX(-50%) translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.querySelector('.lp-cover-inner').style.transform = 'scale(1)'
            e.currentTarget.querySelector('.lp-cta').style.boxShadow = `0 6px 24px ${p.color}55`
            e.currentTarget.querySelector('.lp-cta').style.transform = 'translateX(-50%) translateY(0)'
          }}
        >
          <div className="lp-cover-inner" style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${p.color}22 0%, #0a0a0f 100%)`,
            transition: 'transform 0.5s ease',
          }}>
            {p.cover && (
              <img src={p.cover} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            )}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
            }} />
            <div style={{ position: 'absolute', bottom: '36px', left: '16px', right: '16px' }}>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>{p.client}</p>
              <p style={{ color: '#fff', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 800, lineHeight: 1.2, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{p.title}</p>
            </div>
            <div style={{ position: 'absolute', bottom: '10px', left: '16px', display: 'flex', gap: '5px' }}>
              {p.tags.slice(0, 2).map(t => (
                <span key={t} style={{ padding: '2px 7px', borderRadius: '100px', fontSize: '0.6rem', fontWeight: 700, background: `${p.color}cc`, color: '#fff' }}>{t}</span>
              ))}
            </div>
          </div>
          <div className="lp-cta" style={{
            position: 'absolute', top: '14px', left: '50%', transform: 'translateX(-50%)',
            background: p.color, borderRadius: '100px', padding: '6px 14px',
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#fff', fontWeight: 700, fontSize: '0.75rem', whiteSpace: 'nowrap',
            boxShadow: `0 6px 24px ${p.color}55`, transition: 'all 0.3s ease', zIndex: 3,
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
            Clique para ver a LP
          </div>
        </div>
      ) : (
        <ImageGallery images={p.images} title={p.title} onImageClick={(_, idx) => onOpenLightbox(p.images, idx, p.title)} />
      )}

      {/* Info */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.client}</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{p.title}</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>{p.description}</p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '4px' }}>
          {p.tags.map(t => (
            <span key={t} style={{
              padding: '4px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600,
              background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}44`,
            }}>{t}</span>
          ))}
        </div>
        {p.isLP && (
          <button onClick={() => onOpenLP(p)} style={{
            marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', borderRadius: '8px', background: p.color, color: '#fff',
            border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700,
            transition: 'all 0.2s', width: 'fit-content',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${p.color}66` }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
            Ver Landing Page
          </button>
        )}
      </div>
    </div>
  )
}

const reels = [
  {
    code: 'DZbIsFNJYwA',
    title: 'Estamos matando a nossa criatividade',
    client: '@matheusneryoficial',
    tags: ['Reels', 'Criatividade', 'Marketing'],
    color: '#e1306c',
  },
  {
    code: 'DZs5Piap6bi',
    title: '24 anos sem ganhar uma copa',
    client: '@matheusneryoficial',
    tags: ['Reels', 'Futebol', 'Conteúdo'],
    color: '#833ab4',
  },
  {
    code: 'DYCvT-HgXr-',
    title: 'Público-alvo',
    client: '@matheusneryoficial',
    tags: ['Reels', 'Marketing', 'Estratégia'],
    color: '#f97316',
  },
  {
    code: 'DYSh1mtp3aZ',
    title: 'Proibido a venda — YPê',
    client: '@matheusneryoficial',
    tags: ['Reels', 'Branding', 'Cases'],
    color: '#38bdf8',
  },
  {
    code: 'DWwDpvOBodW',
    title: 'A decisão vem antes',
    client: '@matheusneryoficial',
    tags: ['Reels', 'Mindset', 'Motivação'],
    color: '#22c55e',
  },
]

function ReelCard({ reel }) {
  const [hovered, setHovered] = useState(false)

  // Unique abstract pattern per reel using SVG paths
  const patterns = [
    <><circle cx="30" cy="80" r="60" fill="none" stroke="white" strokeWidth="1" opacity="0.12"/><circle cx="30" cy="80" r="100" fill="none" stroke="white" strokeWidth="1" opacity="0.07"/><circle cx="30" cy="80" r="140" fill="none" stroke="white" strokeWidth="1" opacity="0.04"/></>,
    <><line x1="0" y1="40" x2="200" y2="200" stroke="white" strokeWidth="1" opacity="0.1"/><line x1="0" y1="80" x2="200" y2="240" stroke="white" strokeWidth="1" opacity="0.07"/><line x1="0" y1="120" x2="200" y2="280" stroke="white" strokeWidth="1" opacity="0.05"/><line x1="40" y1="0" x2="200" y2="160" stroke="white" strokeWidth="1" opacity="0.08"/></>,
    <><rect x="-20" y="20" width="80" height="80" rx="8" fill="none" stroke="white" strokeWidth="1" opacity="0.1" transform="rotate(20)"/><rect x="60" y="80" width="60" height="60" rx="8" fill="none" stroke="white" strokeWidth="1" opacity="0.07" transform="rotate(35)"/><rect x="120" y="10" width="100" height="100" rx="8" fill="none" stroke="white" strokeWidth="1" opacity="0.05" transform="rotate(-10)"/></>,
    <><path d="M0 100 Q50 50 100 100 Q150 150 200 100" fill="none" stroke="white" strokeWidth="1.5" opacity="0.12"/><path d="M0 140 Q50 90 100 140 Q150 190 200 140" fill="none" stroke="white" strokeWidth="1.5" opacity="0.07"/><path d="M0 60 Q50 10 100 60 Q150 110 200 60" fill="none" stroke="white" strokeWidth="1.5" opacity="0.05"/></>,
    <><polygon points="100,10 180,80 150,170 50,170 20,80" fill="none" stroke="white" strokeWidth="1" opacity="0.1"/><polygon points="100,30 160,85 138,155 62,155 40,85" fill="none" stroke="white" strokeWidth="1" opacity="0.06"/></>,
  ]

  const patternIndex = reels.indexOf(reel) % patterns.length

  return (
    <a
      href={`https://www.instagram.com/reel/${reel.code}/`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          border: `1px solid ${hovered ? reel.color : 'var(--border)'}`,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          boxShadow: hovered ? `0 20px 60px ${reel.color}44` : 'none',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        }}
      >
        {/* Visual area — 9:16 ratio */}
        <div style={{
          position: 'relative',
          paddingTop: '177%',
          background: `linear-gradient(160deg, ${reel.color}ee 0%, ${reel.color}88 100%)`,
          overflow: 'hidden',
        }}>
          {/* Abstract SVG pattern */}
          <svg
            viewBox="0 0 200 355"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            preserveAspectRatio="xMidYMid slice"
          >
            {patterns[patternIndex]}
          </svg>

          {/* Noise texture overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)',
          }} />

          {/* Play button */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%',
              background: hovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s ease',
              transform: hovered ? 'scale(1.12)' : 'scale(1)',
              boxShadow: hovered ? `0 8px 32px rgba(0,0,0,0.3)` : 'none',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill={reel.color}>
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>

          {/* Instagram badge top-right */}
          <div style={{
            position: 'absolute', top: '12px', right: '12px',
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
              <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
            </svg>
          </div>

          {/* Reel label bottom-left */}
          <div style={{
            position: 'absolute', bottom: '12px', left: '12px',
            display: 'flex', alignItems: 'center', gap: '5px',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            borderRadius: '100px', padding: '4px 10px',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
            </svg>
            <span style={{ color: '#fff', fontSize: '0.65rem', fontWeight: 700 }}>Reel</span>
          </div>
        </div>

        {/* Info footer */}
        <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '0.88rem',
            color: 'var(--text-primary)', lineHeight: 1.3,
          }}>{reel.title}</p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              {reel.tags.slice(0, 2).map(t => (
                <span key={t} style={{
                  padding: '2px 8px', borderRadius: '100px',
                  fontSize: '0.65rem', fontWeight: 700,
                  background: `${reel.color}20`, color: reel.color,
                  border: `1px solid ${reel.color}40`,
                }}>{t}</span>
              ))}
            </div>
            <span style={{
              fontSize: '0.7rem', color: hovered ? reel.color : 'var(--text-muted)',
              fontWeight: 600, transition: 'color 0.2s',
              display: 'flex', alignItems: 'center', gap: '3px',
            }}>
              Assistir
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

function ReelsSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

      {/* Profile header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        padding: '20px 24px',
        background: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid var(--border)',
      }}>
        {/* Avatar placeholder com gradiente Instagram */}
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2px',
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: '50%',
            background: 'var(--bg-card)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', fontWeight: 800,
            color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif",
          }}>MN</div>
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem' }}>
            @matheusneryoficial
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '2px' }}>
            {reels.length} reels publicados · Social Media & Marketing
          </p>
        </div>

        <a
          href="https://www.instagram.com/matheusneryoficial/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            padding: '10px 20px', borderRadius: '100px',
            background: 'linear-gradient(135deg, #833ab4, #fd1d1d)',
            color: '#fff', fontSize: '0.82rem', fontWeight: 700,
            textDecoration: 'none', whiteSpace: 'nowrap',
            transition: 'opacity 0.2s', flexShrink: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="white" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
          </svg>
          Ver perfil
        </a>
      </div>

      {/* Reels grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '16px',
        alignItems: 'start',
      }} className="reels-grid">
        {reels.map(r => <ReelCard key={r.code} reel={r} />)}
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [modalProject, setModalProject] = useState(null)
  const [lightbox, setLightbox] = useState(null)
  const [visible, setVisible] = useState(true)

  const filtered = activeCategory === 'todos' ? projects : projects.filter(p => p.category === activeCategory)

  const handleCategoryChange = (id) => {
    setVisible(false)
    setTimeout(() => {
      setActiveCategory(id)
      setVisible(true)
    }, 180)
  }

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      {modalProject && <LPModal project={modalProject} onClose={() => setModalProject(null)} />}
      {lightbox && <ImageLightbox images={lightbox.images} startIndex={lightbox.index} title={lightbox.title} onClose={() => setLightbox(null)} />}

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Portfólio</p>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Projetos em <span style={{ color: 'var(--accent-light)' }}>Destaque</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Uma seleção dos trabalhos que mais me orgulho
          </p>
        </div>

        {/* Category tabs */}
        <div style={{
          display: 'flex', gap: '8px', flexWrap: 'wrap',
          justifyContent: 'center', marginBottom: '48px',
        }}>
          {categories.map(cat => {
            const isActive = activeCategory === cat.id
            const count = cat.id === 'todos'
              ? projects.length + reels.length
              : cat.id === 'videos'
              ? reels.length
              : projects.filter(p => p.category === cat.id).length
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  padding: '9px 18px', borderRadius: '100px',
                  border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
                  background: isActive ? 'var(--accent-glow)' : 'var(--bg-card)',
                  color: isActive ? 'var(--accent-light)' : 'var(--text-secondary)',
                  cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
                  transition: 'all 0.25s ease',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text-primary)' } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' } }}
              >
                {cat.icon}
                {cat.label}
                <span style={{
                  background: isActive ? 'var(--accent)' : 'var(--bg-secondary)',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  borderRadius: '100px', padding: '1px 7px',
                  fontSize: '0.72rem', fontWeight: 700,
                }}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Vídeos layout */}
        {activeCategory === 'videos' && (
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}>
            <ReelsSection />
          </div>
        )}

        {/* Projetos grid */}
        {activeCategory !== 'videos' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
            }}
          >
            {filtered.map(p => (
              <ProjectCard
                key={p.id}
                p={p}
                onOpenLP={setModalProject}
                onOpenLightbox={(imgs, idx, title) => setLightbox({ images: imgs, index: idx, title })}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .reels-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .reels-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 460px) {
          .reels-grid { grid-template-columns: 1fr !important; }
          .proj-tabs button { font-size: 0.78rem !important; padding: 7px 14px !important; }
        }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </section>
  )
}
