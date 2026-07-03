/* ========================= M2 · EL CANON STANFORD ======================= */
import { st, Head, SectionSlide, SourceNote } from '../deck/primitives'
import FlashSlide from '../deck/Flash'
import { FLASH } from './flashes'
import { Tline, Cascade, Pillars, Ladder, Stats } from './visuals'
import type { Entry } from './types'

function Historia() {
  return (
    <>
      <Head eyebrow="De dónde viene" title="Medio siglo de una misma idea"
        lead="VDC no es una moda: es la maduración de 50 años de investigación en Stanford sobre cómo se deciden y producen los proyectos." />
      <Tline items={[
        { y: '1976', t: 'Paulson (Stanford)', d: '«Designing to Reduce Construction Costs»: las decisiones tempranas mandan.' },
        { y: '1988', t: 'Nace CIFE', d: 'Center for Integrated Facility Engineering; Paul Teicholz, primer director.' },
        { y: '1995', t: 'Team X · NASA JPL', d: 'Ingeniería concurrente co-ubicada: misiones en semanas, no meses.' },
        { y: '1998', t: '4D CAD', d: 'CIFE + Mortenson pilotean 4D en el Walt Disney Concert Hall.' },
        { y: '~2001', t: 'Se acuña «VDC»', d: 'CIFE mueve el foco: de la herramienta (BIM) a la gestión del negocio.' },
        { y: '2012', t: 'CIFE WP097', d: 'Kunz & Fischer publican el working paper canónico de VDC.' },
        { y: '2020', t: 'Paper CM&E', d: 'Versión revisada en Construction Management and Economics — el framework vigente.' },
      ]} />
      <SourceNote>CIFE Stanford (cife.stanford.edu) · Kunz & Fischer, WP097 (2012) y CM&E 38(4) 2020 · NASA NTRS (Team X) · BD+C (2023).</SourceNote>
    </>
  )
}

function Definicion() {
  return (
    <>
      <Head eyebrow="La definición canónica" title="Qué es VDC — palabra por palabra" />
      <div className="nx-quote up bigdef" style={st(1)}>
        «El uso de <b>modelos de desempeño</b> integrados y multidisciplinarios de proyectos de diseño-construcción
        para apoyar <b>objetivos de negocio explícitos y públicos</b>.»
        <br /><small style={{ color: 'var(--muted)' }}>— Kunz & Fischer, CIFE Working Paper #097 (2012); ratificada en CM&E (2020)</small>
      </div>
      <div className="nx-grid nx-g3 up" style={st(2)}>
        <article className="nx-card nx-v" style={st(2)}>
          <span className="nx-ic">📐</span>
          <h3>Modelos de desempeño</h3>
          <p>No solo geometría: modelos que <b>predicen y rastrean</b> plazo, costo y calidad. El modelo POP: Producto, Organización y Proceso, lógicamente integrados.</p>
        </article>
        <article className="nx-card nx-b" style={st(3)}>
          <span className="nx-ic">🎯</span>
          <h3>Objetivos explícitos</h3>
          <p>Escritos, con indicador y meta numérica. Si el objetivo no está escrito y medido, para VDC <b>no existe</b>.</p>
        </article>
        <article className="nx-card nx-g" style={st(4)}>
          <span className="nx-ic">📢</span>
          <h3>… y públicos</h3>
          <p>Visibles para todo el equipo, todo el tiempo. La transparencia de métricas es lo que convierte el control en <b>colaboración</b>.</p>
        </article>
      </div>
    </>
  )
}

function Framework() {
  return (
    <>
      <Head eyebrow="El framework 2020" title="VDC ≠ BIM: cuatro componentes, un sistema"
        lead="BIM es un componente. VDC es el marco de gestión que lo pone al servicio de objetivos — junto con ICE, la producción Lean y las métricas." />
      <Pillars />
      <p className="nx-quote up" style={st(5)}>Kunz & Fischer (2020) definen el framework con <b>BIM + gestión por objetivos + producción Lean (PPM) + ICE</b>, sobre el modelo organizacional VDT de Ray Levitt. Puedes tener modelos espectaculares y cero VDC.</p>
    </>
  )
}

function CascadaCanon() {
  return (
    <>
      <Head eyebrow="El corazón del método" title="La cascada de objetivos"
        lead="Así baja el valor: del negocio del cliente hasta lo que el equipo controla cada semana. Este diagrama es el 80% de VDC." />
      <Cascade
        rows={[
          { code: 'CO', name: 'Objetivos del Cliente', desc: 'el valor del negocio · se miden en operación', ac: 'v', items: ['Operar el activo en una fecha', 'Cumplir estándares normativos', 'Reducir costos de operación'] },
          { code: 'PO', name: 'Objetivos del Proyecto', desc: 'plazo · costo · calidad · se miden al cierre', ac: 'b', items: ['Plazo con desviación acotada', 'Conformidad técnica', 'Coordinación completa antes de obra'] },
          { code: 'ProdO', name: 'Objetivos de Producción', desc: 'desempeño de ICE · BIM · PPM · semanales', ac: 'g', items: ['Latencia de decisión', '% clashes resueltos', 'PPC semanal'] },
          { code: 'FC', name: 'Factores Controlables', desc: 'lo que el equipo decide hacer · rituales', ac: 'w', items: ['Sesiones ICE con agenda', 'Federar el modelo cada semana', 'Reunión Last Planner'] },
        ]}
        back="El árbol se lee de vuelta: los FC elevan los ProdO → los ProdO aseguran los PO → los PO cumplen los CO."
      />
    </>
  )
}

function Ice() {
  return (
    <>
      <Head eyebrow="Pilar 1 · el origen" title="ICE: la sala que diseña misiones espaciales"
        lead="Integrated Concurrent Engineering nació en el Jet Propulsion Laboratory de la NASA — y CIFE lo trajo a la construcción." />
      <Stats items={[
        { v: '9 meses', t: 'tomaba diseñar una misión espacial con el proceso tradicional del JPL', src: 'NASA NTRS · The Evolution of Team-X (2021)', ac: 'r' },
        { v: '3 semanas', t: 'toma con Team X: sesiones intensivas de ~9 horas con todos los expertos co-ubicados', src: 'CIFE WP116 · Chachere, Kunz & Levitt', ac: 'g' },
        { v: '×10', t: 'la clave no es velocidad: es reducir la LATENCIA de respuesta entre disciplinas casi a cero', src: 'CIFE WP087 (2004): 10 factores de latencia', ac: 'v' },
      ]} />
      <p className="nx-quote up" style={st(4)}>Chachere, Kunz y Levitt estudiaron Team X desde 1996 y destilaron <b>10 factores que reducen la latencia</b>: expertos con poder de decisión, co-ubicados, con modelos compartidos al frente y comunicación semánticamente rica. Eso es una sesión ICE — no una reunión con proyector.</p>
    </>
  )
}

function Ppm() {
  return (
    <>
      <Head eyebrow="Pilar 3 · la producción" title="PPM: el proyecto como sistema de producción"
        lead="Project Production Management aplica ciencia de operaciones a la obra: insumos → transformación → productos, con variabilidad que se puede medir y gestionar." />
      <div className="nx-grid nx-g4 up" style={st(1)}>
        {([
          ['nx-v', '📦', 'WIP', 'El trabajo en proceso se limita: más frentes abiertos no es más avance, es más riesgo.'],
          ['nx-b', '📉', 'Variabilidad', 'El enemigo del plazo no es la lentitud: es la variación. Se mide con PPC y desviaciones.'],
          ['nx-g', '⛓️', 'Push → Pull', 'Del empujar tareas al jalar trabajo listo: lookahead y liberación de restricciones.'],
          ['nx-v', '🔁', 'Flujo', 'Trenes de trabajo y takt: producción rítmica y predecible, sector por sector.'],
        ] as Array<[string, string, string, string]>).map((c, i) => (
          <article className={`nx-card ${c[0]}`} key={c[2]} style={st(i + 1)}>
            <span className="nx-ic">{c[1]}</span>
            <h3>{c[2]}</h3>
            <p>{c[3]}</p>
          </article>
        ))}
      </div>
      <p className="nx-quote up" style={st(5)}>Aquí VDC se abraza con el <b>Lean Construction</b> que ya vieron en el diplomado: el Last Planner System es el instrumento estrella del pilar PPM. En el congreso IGLC 2021 (Lima) se documentaron <b>405 interacciones positivas</b> entre VDC y Lean.</p>
    </>
  )
}

function Scorecard() {
  return (
    <>
      <Head eyebrow="¿Y cómo sé si hago VDC?" title="El VDC Scorecard de Stanford"
        lead="Kam et al. (CIFE) crearon el instrumento para medir la madurez de una implementación VDC: 4 áreas, 10 divisiones, 56 medidas." />
      <Ladder steps={[
        { tag: '0–25%', t: 'Práctica convencional', d: 'Documentos 2D, decisiones por correo, sin métricas.' },
        { tag: '25–50%', t: 'Práctica típica', d: 'BIM en algunas disciplinas, coordinación reactiva.' },
        { tag: '50–75%', t: 'Práctica avanzada', d: 'Objetivos definidos, ICE regular, métricas de producción.' },
        { tag: '75–90%', t: 'Best practice', d: 'Cascada CO→FC completa, dashboards vivos, mejora continua.' },
        { tag: '90–100%', t: 'Práctica innovadora', d: 'El proyecto genera conocimiento nuevo para la industria.' },
      ]} />
      <SourceNote>Kam, Song & Senaratna — VDC Scorecard, CIFE WP135/136; validado en J. of Construction Engineering and Management 143(3), 2017. Aplicado a 108 proyectos en 13 países.</SourceNote>
    </>
  )
}

export const m2: Entry[] = [
  {
    id: 'm2-div', num: '', title: 'Módulo 02 · El canon Stanford',
    node: <SectionSlide eyebrow="Módulo 02" title={<>El canon:<br />Stanford CIFE</>}
      lead="Definición exacta, historia real y el framework completo — para que nadie más te venda BIM con nombre elegante."
      chips={['Kunz & Fischer', 'POP', 'ICE · BIM · PPM', 'Scorecard']} />,
    time: '0:33–0:34',
    note: 'Transición: ya duele el diagnóstico; ahora la solución con rigor académico. Anuncia que esta parte es la que separa a un profesional certificable de uno que repite jerga.',
  },
  {
    id: 'historia', num: '7', title: 'Medio siglo de una idea', node: <Historia />,
    time: '0:34–0:39',
    note: 'Recorre la línea de tiempo: Paulson 1976 → CIFE 1988 (Teicholz) → Team X 1995 → 4D en el Disney Concert Hall 1998 → el término VDC ~2001 → WP097 2012 → paper 2020. Punto pedagógico: VDC es ANTERIOR al boom comercial de BIM y nació para gestionarlo, no al revés.',
  },
  {
    id: 'definicion', num: '8', title: 'La definición canónica', node: <Definicion />,
    time: '0:39–0:44',
    note: 'Lee la definición textual DOS veces, despacio. Desarma las tres piezas: modelos de desempeño (POP: producto-organización-proceso, predicen y rastrean), objetivos explícitos (escritos y con meta) y públicos (visibles para todos). Pide que la copien: es la respuesta a la pregunta de examen “¿qué es VDC?”.',
  },
  {
    id: 'framework', num: '9', title: 'VDC ≠ BIM', node: <Framework />,
    time: '0:44–0:49',
    note: 'El slide anti-mito. BIM es un componente del framework junto con ICE, PPM/Lean y la gestión por objetivos (más el modelo organizacional VDT de Levitt). Analogía útil: BIM es el motor, VDC es el vehículo completo con volante (ICE), transmisión (PPM) y tablero (métricas).',
  },
  {
    id: 'cascada', num: '10', title: 'La cascada de objetivos', node: <CascadaCanon />,
    time: '0:49–0:56',
    note: 'EL diagrama de la clase — dedícale tiempo. Baja nivel por nivel: CO (valor del negocio, se mide en operación), PO (plazo/costo/calidad, al cierre), ProdO (desempeño semanal de ICE/BIM/PPM), FC (rituales que el equipo controla). Y léelo de vuelta: los FC elevan los ProdO, que aseguran los PO, que cumplen los CO. Frase para dictar: “CO y PO son promesas; ProdO y FC son la evidencia”.',
  },
  {
    id: 'ice-origen', num: '11', title: 'ICE nació en la NASA', node: <Ice />,
    time: '0:56–1:01',
    note: 'La historia que nadie olvida: Team X del JPL diseña misiones espaciales completas en ~3 semanas en vez de 9 meses, con sesiones de ~9 horas. El concepto técnico es LATENCIA: el tiempo entre pregunta y respuesta entre disciplinas. Chachere, Kunz y Levitt documentaron los 10 factores que la reducen casi a cero. ICE es eso aplicado a construcción.',
  },
  {
    id: 'ppm', num: '12', title: 'PPM: producción con ciencia', node: <Ppm />,
    time: '1:01–1:06',
    note: 'Conecta con el módulo Lean del diplomado: WIP limitado, variabilidad como enemigo, pull con lookahead, trenes de trabajo. PPM es donde vive el Last Planner System dentro de VDC. Dato citable: IGLC 2021 en Lima documentó 405 interacciones positivas VDC-Lean — no compiten, se refuerzan.',
  },
  {
    id: 'scorecard', num: '13', title: 'El VDC Scorecard', node: <Scorecard />,
    time: '1:06–1:10',
    note: 'Presenta la escalera de madurez del Scorecard (Kam et al., CIFE): de práctica convencional a innovadora, con 4 áreas × 10 divisiones × 56 medidas, aplicado a 108 proyectos en 13 países. Ejercicio de 60 segundos: cada uno ubica mentalmente a su empresa en un peldaño. Pide manos por nivel — suele haber honestidad brutal y risas.',
  },
  {
    id: 'flash-teamx', num: '⚡', title: 'Flash · Team X', node: <FlashSlide item={FLASH.teamx} />,
    time: '1:10–1:12',
    note: 'Quiz rápido de consolidación sobre Team X. La mayoría acierta si contaste bien la historia — refuerza el concepto de latencia una vez más: no es trabajar más rápido, es eliminar la espera entre disciplinas.',
  },
  {
    id: 'flash-vdcbim', num: '⚡', title: 'Flash · ¿VDC es BIM avanzado?', node: <FlashSlide item={FLASH.vdcbim} />,
    time: '1:12–1:14',
    note: 'Segundo flash del módulo, V/F. Es LA pregunta trampa del mundo VDC. Si alguien vota “verdadero”, pídele que defienda — y usa la definición canónica para resolver. Cierra el módulo: “pueden tener modelos LOD 400 espectaculares y cero VDC”.',
  },
]
