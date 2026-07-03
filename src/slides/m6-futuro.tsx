/* =========================== M6 · VDC + IA ============================== */
import { st, Head, SectionSlide, SourceNote } from '../deck/primitives'
import FlashSlide from '../deck/Flash'
import { FLASH } from './flashes'
import { Stats, Ladder } from './visuals'
import type { Entry } from './types'

function TresCapas() {
  return (
    <>
      <Head eyebrow="Estado del arte 2024–2026" title="La IA entra a VDC por tres capas — a velocidades distintas"
        lead="Separemos evidencia dura de marketing de vendors. Esto es lo que ya es operativo y medible:" />
      <div className="nx-grid nx-g3 up" style={st(1)}>
        <article className="nx-card nx-v" style={st(1)}>
          <span className="nx-ic">🧮</span>
          <h3>1 · Coordinación</h3>
          <p>La frontera ya no es detectar clashes: es <b>filtrar los irrelevantes</b>. Modelos ML con &gt;80% de precisión priorizando clashes reales de las 5 disciplinas (ASCE JCEM, 2026).</p>
          <span className="nx-foot">Operativo y peer-reviewed</span>
        </article>
        <article className="nx-card nx-b" style={st(2)}>
          <span className="nx-ic">📡</span>
          <h3>2 · Captura de realidad</h3>
          <p>Cámaras 360°, SLAM y visión computacional comparando obra vs modelo. Aquí votó el capital: <b>77% de la inversión contech 2025 fue a IA</b> (~US$5.000M).</p>
          <span className="nx-foot">OpenSpace · Buildots · Doxel</span>
        </article>
        <article className="nx-card nx-g" style={st(3)}>
          <span className="nx-ic">📅</span>
          <h3>3 · Producción (LPS/takt)</h3>
          <p>La capa menos madura: hay <b>scheduling generativo</b> (ALICE + McKinsey: hasta 20% de aceleración en 35+ clientes), pero nadie ha resuelto IA dentro del compromiso social del Last Planner.</p>
          <span className="nx-foot">La frontera abierta</span>
        </article>
      </div>
      <SourceNote>Koo et al., ASCE JCEM 152(7) 2026 · Cemex Ventures, informe contech feb-2026 · McKinsey + ALICE Technologies (2025).</SourceNote>
    </>
  )
}

function SinIa() {
  return (
    <>
      <Head eyebrow="Primero el sistema" title="VDC ya gana — sin necesitar IA todavía"
        lead="El caso cuantitativo más fuerte del último congreso IGLC es VDC clásico en un hospital:" />
      <Stats items={[
        { v: '−22%', t: 'en el tiempo de desmontaje de la grúa torre', src: 'IGLC 33 (2025) · Gutiérrez Alvarez et al.', ac: 'v' },
        { v: '−24%', t: 'en el tiempo de construcción del casco estructural', src: 'IGLC 33 (2025) · caso hospital', ac: 'b' },
        { v: '25.000', t: 'horas-hombre ahorradas en encofrado, acero y concreto — con cero accidentes', src: 'IGLC 33 (2025) · caso hospital', ac: 'g' },
      ]} />
      <p className="nx-quote up" style={st(4)}>La secuencia estratégica correcta: <b>primero instala el sistema de gestión (VDC), después amplifícalo con IA</b>. La IA multiplica al que ya mide; al que no mide, solo lo confunde más rápido.</p>
    </>
  )
}

function Brecha() {
  return (
    <>
      <Head eyebrow="Adopción vs madurez" title="«Disponible» no significa «adoptado»"
        lead="Los números de adopción real piden humildad — y ahí está la ventaja de quien sí ejecuta." />
      <Stats items={[
        { v: '88%', t: 'de las organizaciones usa IA en al menos una función…', src: 'McKinsey · State of AI 2025', ac: 'b' },
        { v: '~33%', t: '…pero solo un tercio la ha escalado más allá de pilotos', src: 'McKinsey · State of AI 2025', ac: 'w' },
        { v: '~10%', t: 'de las constructoras despliega IA activamente (encuestas sectoriales)', src: 'Encuestas 2023–2025 · tratar como señal, no dato duro', ac: 'r' },
      ]} />
      <p className="nx-quote up" style={st(4)}>Los horizontes que circulan en la industria (augmentation 2026-2030, generación por disciplina 2028-2035, BIM agéntico 2035+) son <b>visión de analistas, no datos</b> — cítenlos siempre etiquetados. La doble competencia ganadora hoy: <b>sistema VDC + criterio de IA</b>.</p>
    </>
  )
}

function DobleCompetencia() {
  return (
    <>
      <Head eyebrow="Qué significa para tu carrera" title="El perfil que el mercado no encuentra"
        lead="El mandato 2026 crea demanda de implementadores; la ola de IA crea demanda de criterio. La intersección es escasa." />
      <Ladder steps={[
        { tag: 'Base', t: 'Domina el sistema', d: 'Cascada de objetivos, sesión ICE, clash management, CDE, Last Planner, métricas — lo de hoy.' },
        { tag: 'Capa 2', t: 'Automatiza lo repetitivo', d: 'Dynamo/Python sobre el modelo: metrados, sectorización, vistas, auditoría. Meta: ≥30% de tareas automatizadas.' },
        { tag: 'Capa 3', t: 'Integra la IA con criterio', d: 'Filtrado de clashes, captura de realidad, scheduling generativo — sabiendo qué es evidencia y qué es demo.' },
        { tag: 'Frontera', t: 'Resuelve lo no resuelto', d: 'IA dentro del compromiso del Last Planner: nadie lo ha publicado. Puede ser tu tesis o tu empresa.' },
      ]} />
    </>
  )
}

export const m6: Entry[] = [
  {
    id: 'm6-div', num: '', title: 'Módulo 06 · VDC + IA',
    node: <SectionSlide eyebrow="Módulo 06" title={<>Hacia dónde va VDC:<br />la capa de IA</>}
      lead="Evidencia por capas, con nivel de confianza explícito — porque en 2026 el criterio vale más que el hype."
      chips={['Clash + ML', 'Reality capture', 'Scheduling generativo', 'Con fuentes']} />,
    note: 'Encuadre: no vamos a vender humo — separamos lo peer-reviewed, lo que el capital está apostando y lo que es visión de analistas. Ese criterio de clasificación es en sí mismo una lección del diplomado.',
  },
  {
    id: 'tres-capas', num: '37', title: 'Tres capas, tres velocidades', node: <TresCapas />,
    note: 'Las tres capas: (1) coordinación — el ML ya filtra clashes irrelevantes con >80% de precisión (papers ASCE/Automation in Construction); (2) captura de realidad — donde votó el capital: 77% del contech 2025 fue a IA, OpenSpace valuada en $902M y Buildots en $300M; (3) producción — scheduling generativo real (ALICE), pero el Last Planner sigue siendo humano. Nota el patrón: la IA entra primero donde hay datos estructurados.',
  },
  {
    id: 'sin-ia', num: '38', title: 'VDC gana sin IA', node: <SinIa />,
    note: 'El caso IGLC 2025 del hospital: −22% grúa, −24% casco, −25.000 HH, cero accidentes — VDC clásico, sin IA. Mensaje estratégico: primero el sistema, después la amplificación. La IA multiplica al que ya mide.',
  },
  {
    id: 'brecha', num: '39', title: 'Disponible ≠ adoptado', node: <Brecha />,
    note: 'La dosis de realismo: 88% usa IA en algo, solo un tercio escaló, y en construcción la adopción activa ronda el 10%. Los horizontes futuristas se citan SIEMPRE etiquetados como visión de analista. Esto también modela el rigor que les pedimos en sus trabajos.',
  },
  {
    id: 'doble', num: '40', title: 'El perfil escaso', node: <DobleCompetencia />,
    note: 'Aterrizaje profesional: la escalera de la doble competencia — dominar el sistema VDC, automatizar con Dynamo/Python, integrar IA con criterio, y la frontera abierta (IA en el compromiso del Last Planner — nadie lo publicó aún; puede ser su tesis). Conecta con los otros módulos del diplomado.',
  },
  {
    id: 'flash-cierre', num: '⚡', title: 'Síntesis · La IA alimenta al VDC', node: <FlashSlide item={FLASH.cierre} />,
    note: 'Frase síntesis final del módulo: la IA no reemplaza al VDC — lo alimenta. Sin objetivos, modelos y métricas no hay nada que optimizar. Puente al taller final: y para que la IA alimente tus procesos, primero hay que MAPEARLOS — módulo 7.',
  },
]
