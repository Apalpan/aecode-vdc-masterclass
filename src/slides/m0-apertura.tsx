/* ============================ M0 · APERTURA ============================ */
import AecodeLogo from '../deck/AecodeLogo'
import { st, Head } from '../deck/primitives'
import FlashSlide from '../deck/Flash'
import { FLASH } from './flashes'
import { Stats } from './visuals'
import type { Entry } from './types'

function Cover() {
  return (
    <div className="nx-cover">
      <div className="cover">
        <AecodeLogo className="cover-mark up" style={st(0)} />
        <p className="cover-eyebrow up" style={st(1)}>Diplomado BIM · Lean · BI · IA — AECODE Training</p>
        <h1 className="cover-title up" style={st(2)}>
          <span className="grad">VDC</span> — Virtual Design<br />and Construction
        </h1>
        <p className="cover-lead up" style={st(3)}>
          El marco de Stanford que convierte el «ojalá salga» en «lo estamos controlando»:
          ICE, BIM y PPM al servicio de objetivos medibles — aterrizado al Perú con un caso real en la Amazonía.
        </p>
        <div className="cover-sign up" style={st(4)}>
          <span className="cs-name">Alejandro Palpan</span>
          <span className="cs-dot" aria-hidden="true" />
          <span className="cs-role">Certificado & Mentor VDC (Stanford) · PM en GEN+ · AECODE</span>
        </div>
        <div className="cover-hud up" style={st(5)} aria-hidden="true">
          <span className="ch-item"><b>3</b> horas · masterclass</span>
          <span className="ch-sep" />
          <span className="ch-item"><b>1</b> caso vivo: Hospital de Megantoni</span>
          <span className="ch-sep" />
          <span className="ch-item live"><span className="ch-dot" /> con fuentes verificadas</span>
        </div>
      </div>
      <div className="nx-orb up" style={st(3)} aria-hidden="true">
        <span className="ring r1" /><span className="ring r2" /><span className="ring r3" />
        <span className="sat">ICE</span>
        <span className="sat">BIM</span>
        <span className="sat">PPM</span>
        <span className="sat">Métricas</span>
        <span className="core"><b>VDC</b><span>Stanford CIFE</span></span>
      </div>
    </div>
  )
}

function Instructor() {
  const creds: Array<[string, string, string]> = [
    ['nx-v', '🎓', 'Ingeniero civil (UNI) · Certificado y Mentor VDC por Stanford · PMP y Scrum Master (PMI) · especialización en Machine Learning (Stanford).'],
    ['nx-b', '🏗️', 'Project Manager en GEN+: túneles, puentes, hospitales y plantas con BIM, automatización y VDC — +6 años en infraestructura (I+D en TSC Innovation / Aceros Arequipa).'],
    ['nx-g', '🌐', 'Cofundador del ecosistema AECODE: comunidad, diplomados y el AI Construction Summit. Colaborador del Laboratorio BIM UNI.'],
  ]
  return (
    <>
      <Head eyebrow="Quién enseña" title="De la teoría de Stanford a la obra peruana"
        lead="Esta clase no sale de un libro: sale de planes VDC reales, sesiones ICE reales y dashboards que hoy controlan obras en el Perú." />
      <div className="nx-creds up" style={st(1)}>
        {creds.map((c, i) => (
          <div className={`nx-cred ${c[0]}`} key={i} style={st(i + 1)}>
            <span className="ci">{c[1]}</span><p>{c[2]}</p>
          </div>
        ))}
      </div>
      <p className="nx-quote up" style={st(4)}>Todo lo que veremos hoy tiene <b>fuente verificable</b> o viene de <b>documentos reales de proyecto</b> — y se distingue explícitamente cuál es cuál.</p>
    </>
  )
}

function Mapa() {
  const mods: Array<[string, string, string]> = [
    ['01', 'El problema', 'Por qué la gestión tradicional pierde — con números.'],
    ['02', 'El canon Stanford', 'Qué es VDC de verdad: definición, historia y framework.'],
    ['03', 'Los tres pilares', 'ICE · BIM · PPM: la maquinaria operativa, pieza por pieza.'],
    ['04', 'Caso Megantoni', 'Un plan VDC real de hospital, auditado en vivo.'],
    ['05', 'VDC en el Perú', 'Normativa, ecosistema y casos GEN+ en infraestructura.'],
    ['06', 'VDC + IA', 'Hacia dónde va esto — evidencia, no marketing.'],
    ['07', 'Mapear procesos', 'Taller exprés: dibuja cualquier proceso en simple, con IA.'],
  ]
  return (
    <>
      <Head eyebrow="El mapa de la clase" title="Siete módulos, un caso vivo y preguntas clave"
        lead="Cada módulo cierra con un flash: pregunta, dato o debate. Respondan rápido y sin miedo — el error en clase es gratis; en obra, no." />
      <div className="nx-grid nx-g3 up" style={st(1)}>
        {mods.map((m, i) => (
          <article className={`nx-card ${['nx-v', 'nx-b', 'nx-g'][i % 3]}`} key={m[0]} style={st(i + 1)}>
            <span className="nx-kbadge">Módulo {m[0]}</span>
            <h3>{m[1]}</h3>
            <p>{m[2]}</p>
          </article>
        ))}
      </div>
      <div className="nx-chips up" style={st(7)}>
        <span className="nx-chip"><i>⚡</i> 7 flashes interactivos</span>
        <span className="nx-chip"><i>🔍</i> 1 auditoría de BEP en vivo</span>
        <span className="nx-chip"><i>🃏</i> repaso con flip-cards</span>
        <span className="nx-chip"><i>🤖</i> 2 prompts IA copiables</span>
        <span className="nx-chip"><i>📋</i> entregable: tu Plan VDC</span>
      </div>
    </>
  )
}

function Industria() {
  return (
    <>
      <Head eyebrow="El punto de partida" title="La industria que no despegó"
        lead="Antes de hablar de metodologías, veamos el tamaño real del problema — con las cifras más citables y defendibles que existen." />
      <Stats items={[
        { v: '1%', t: 'crece al año la productividad de la construcción — vs 2,8% de la economía y 3,6% de la manufactura', src: 'McKinsey Global Institute · Reinventing Construction, 2017', ac: 'r' },
        { v: '+80%', t: 'puede costar un proyecto grande sobre el presupuesto original (y 20% más de plazo)', src: 'McKinsey · Imagining Construction’s Digital Future, 2016', ac: 'r' },
        { v: '48%', t: 'del retrabajo nace de mala comunicación y datos deficientes del proyecto', src: 'PlanGrid + FMI · Construction Disconnected, 2018', ac: 'w' },
        { v: '1,6 billones', t: 'de dólares al año (US$1.6 trillion) es la oportunidad de productividad del sector a nivel global', src: 'McKinsey Global Institute, 2017', ac: 'g' },
      ]} />
      <p className="nx-quote up" style={st(5)}>La construcción no tiene un problema de esfuerzo. Tiene un problema de <b>información y decisiones</b> — y eso sí se puede diseñar.</p>
    </>
  )
}

export const m0: Entry[] = [
  {
    id: 'portada', num: '', title: 'VDC · Virtual Design and Construction', node: <Cover />,
    note: 'Bienvenida. Presenta el título completo: Virtual Design and Construction — no “diseño virtual” a secas. Anticipa la promesa: al final de la clase cada uno sabrá estructurar un plan VDC con objetivos y métricas reales, y habremos auditado un BEP real de hospital. Menciona que TODO lo citado hoy tiene fuente.',
  },
  {
    id: 'instructor', num: '1', title: 'Quién enseña', node: <Instructor />,
    note: 'Credenciales en 60 segundos, sin ego: certificación y mentoría VDC en Stanford, PM en GEN+ con túneles, puentes y hospitales. El mensaje clave: esta clase mezcla el canon académico con documentos reales de proyectos que gestiono. Pregunta rápida a la sala: ¿quiénes ya trabajan con BIM? ¿quiénes han estado en una sesión ICE?',
  },
  {
    id: 'mapa', num: '2', title: 'El mapa de la clase', node: <Mapa />,
    note: 'Explica las reglas del juego: siete módulos, flashes interactivos (quiz, dato o debate), una auditoría de BEP en vivo en el módulo 4, un taller exprés de mapeo de procesos con prompts IA en el módulo 7, y el entregable final: el plan VDC de su propio proyecto. Hay pausa de 10 minutos después del módulo 3. Anima a responder los flashes en voz alta.',
  },
  {
    id: 'flash-apertura', num: '⚡', title: 'Debate · ¿Por qué fallan los proyectos?', node: <FlashSlide item={FLASH.apertura} />,
    note: 'Debate de apertura, 3 minutos. Recoge 3-4 hipótesis de la sala y anótalas (pizarra o chat): típicamente saldrán “falta de planificación”, “el expediente”, “los cambios”. No corrijas todavía — di que al final de la clase revisitamos estas hipótesis con el framework completo. El dato ancla: hasta +80% de sobrecosto en proyectos grandes.',
  },
  {
    id: 'industria', num: '3', title: 'La industria en números', node: <Industria />,
    note: 'Cuatro cifras, todas con fuente primaria: productividad 1% anual (McKinsey 2017), +80% de sobrecosto (McKinsey 2016), 48% del retrabajo por comunicación y datos (PlanGrid/FMI 2018), y la oportunidad de 1,6 billones. Remata: el problema no es de esfuerzo sino de información y decisiones — la frase que estructura toda la clase.',
  },
]
