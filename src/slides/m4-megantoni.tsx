/* ========================= M4 · CASO MEGANTONI ========================== */
import { st, Head, SectionSlide, SourceNote } from '../deck/primitives'
import FlashSlide from '../deck/Flash'
import { FLASH } from './flashes'
import { Cascade, MetricsPanel, Stats, Table, AuditGame, Hub } from './visuals'
import type { Entry } from './types'

function Ficha() {
  return (
    <>
      <Head eyebrow="El caso vivo" title="Hospital de Megantoni: VDC en la Amazonía del Cusco"
        lead="Establecimiento de salud en Camisea, distrito de Megantoni (La Convención, Cusco). Dos documentos reales: el BEP del expediente técnico y el Plan VDC de la obra." />
      <div className="nx-grid nx-g4 up" style={st(1)}>
        {([
          ['nx-v', '📍', 'Camisea · Megantoni', 'La Convención, Cusco. Salud básica para el sistema amazónico; logística remota.'],
          ['nx-b', '🏛️', 'GORE Cusco / MINSA', 'Inversión pública, código 2614056 (Invierte.pe). La Entidad es dueña de los modelos.'],
          ['nx-g', '📐', 'Expediente: 150 días', '5 entregables (5/30/40/55/20 d.c.) bajo la Guía Nacional BIM y los EIR.'],
          ['nx-v', '🏗️', 'Obra: 18 meses', 'Meta de puesta en servicio ≤ 15/05/2025, desviación ≤3% en plazo y costo.'],
        ] as Array<[string, string, string, string]>).map((c, i) => (
          <article className={`nx-card ${c[0]}`} key={c[2]} style={st(i + 1)}>
            <span className="nx-ic">{c[1]}</span>
            <h3>{c[2]}</h3>
            <p>{c[3]}</p>
          </article>
        ))}
      </div>
      <p className="nx-quote up" style={st(5)}>Dos documentos, dos niveles de madurez: el <b>BEP v01</b> (marzo 2024, fase expediente) define procesos y estándares; el <b>Plan VDC v04</b> (octubre 2025) añade objetivos SMART, métricas y factores controlables. Esa evolución ES la historia de este módulo.</p>
    </>
  )
}

function CascadaReal() {
  return (
    <>
      <Head eyebrow="La cascada con datos reales" title="Del sistema de salud amazónico a la reunión del lunes" />
      <Cascade
        rows={[
          { code: 'CO', name: 'Cliente', desc: 'GORE Cusco / MINSA', ac: 'v', items: ['Operar ≤ 15/05/2025', '100% estándares MINSA + ISO 14644', '−10% costos O&M (As-Built LOD 500)'] },
          { code: 'PO', name: 'Proyecto', desc: 'promesas al cierre', ac: 'b', items: ['Obra en 18 meses, desviación ≤3%', '100% conformidad en componentes críticos', '100% colisiones resueltas antes de obra'] },
          { code: 'ProdO', name: 'Producción', desc: '15 métricas semanales', ac: 'g', items: ['ICE: decisión ≤3 días', 'BIM: ≥90% clashes resueltos', 'PPM: PPC ≥90%'] },
          { code: 'FC', name: 'Controlables', desc: 'rituales del equipo', ac: 'w', items: ['2 sesiones ICE/mes con pre-read', 'Federado semanal + QA/QC en CDE', 'Last Planner + Kanban semanal'] },
        ]}
        back="Un objetivo de OPERACIÓN del hospital (−10% O&M) termina obligando un ritual BIM semanal. Eso es bajar el valor en cascada."
      />
    </>
  )
}

function PanelMetricas() {
  return (
    <>
      <Head eyebrow="El dashboard del plan" title="15 objetivos de producción — 5 por pilar"
        lead="Panel real del Plan VDC Megantoni (v04): cada meta tiene indicador, frecuencia y responsable." />
      <MetricsPanel pillars={[
        {
          name: 'ICE — decidir', ac: 'v', metrics: [
            ['≥85%', 'conflictos interdisciplinarios resueltos antes de obra'],
            ['≤3 días', 'promedio por decisión técnica'],
            ['≥90%', 'asistencia a sesiones ICE'],
            ['≥95%', 'decisiones de agenda cerradas'],
            ['≥90%', 'decisiones efectivas (impacto en costo)'],
          ],
        },
        {
          name: 'BIM — coordinar', ac: 'b', metrics: [
            ['≥90%', 'colisiones resueltas (modelos coordinados)'],
            ['≥15%', 'reducción de retrabajo en obra'],
            ['≥95%', 'precisión presupuestal de metrados'],
            ['1/sem', 'publicación del federado en el CDE'],
            ['100%', 'As-Built LOD 500 para operación'],
          ],
        },
        {
          name: 'PPM — producir', ac: 'g', metrics: [
            ['≥90%', 'PPC semanal (Last Planner)'],
            ['≤3%', 'desviación presupuestal en ejecución'],
            ['≥95%', 'productividad vs línea base'],
            ['≥95%', 'entregas puntuales'],
            ['100%', 'reportes de KPIs en Power BI'],
          ],
        },
      ]} />
      <SourceNote>Plan VDC Megantoni · GEN+ (PBEP-001 v04, octubre 2025), §4.1–4.3.</SourceNote>
    </>
  )
}

function Ritmo() {
  return (
    <>
      <Head eyebrow="Factores controlables" title="El ritmo operativo del proyecto"
        lead="Lo que el equipo CONTROLA cada semana — con herramienta y responsable asignados. Sin ritmo, las métricas son deseos." />
      <Table
        head={['Pilar', 'Ritual (factor controlable)', 'Frecuencia', 'Herramienta', 'Responsable']}
        hotCol={2}
        rows={[
          ['ICE', 'Sesión ICE con agenda y pre-read publicados', '2 / mes', 'Teams · Miro · Big Room', 'Facilitador VDC'],
          ['ICE', 'Bitácora de acuerdos y evaluación de impacto', 'Mensual', 'Acta + CDE', 'Facilitador VDC'],
          ['BIM', 'Actualización del modelo federado + checklist QA/QC', 'Semanal', 'Revit · Navisworks · ACC', 'BIM Manager'],
          ['BIM', 'Integración 4D/5D y auditoría de parámetros', 'Mensual', 'Navisworks · S10', 'BIM Manager'],
          ['PPM', 'Reunión Last Planner + Kanban + reporte PPC', 'Semanal', 'LPS · Power BI', 'Planner / PPM Lead'],
          ['PPM', 'Análisis de desviaciones y restricciones', 'Mensual', 'Power BI', 'Planner / PPM Lead'],
        ]}
      />
      <p className="nx-quote up" style={st(3)}>Cinco roles sostienen el sistema: <b>Facilitador VDC · BIM Manager · Coordinadores disciplinares · Planner/PPM Lead · Cliente-Supervisor</b> (que valida valor, costo y calidad).</p>
    </>
  )
}

function ClashPlan() {
  return (
    <>
      <Head eyebrow="Ingeniería del detalle" title="El clash control escrito ANTES de detectar"
        lead="El BEP de Megantoni no dice «haremos clash detection»: define la matriz completa de pruebas, prioridades y tolerancias." />
      <Stats items={[
        { v: '22', t: 'pruebas de interferencia definidas por pares de especialidad (P01–P22)', src: 'BEP Megantoni · §4.4, Tablas 7-8', ac: 'v' },
        { v: '5', t: 'niveles de prioridad, cada uno con su tolerancia: de 15 mm (alta) a 40 mm (baja)', src: 'BEP Megantoni · §4.4', ac: 'b' },
        { v: '±20 mm', t: 'tolerancia dura estructura vs MEP; blandas (espacios de uso y aperturas): ±25 mm', src: 'BEP Megantoni · §7.2, Tabla 13', ac: 'g' },
      ]} />
      <p className="nx-quote up" style={st(4)}>Además: nomenclatura estándar Plan BIM Perú para cada contenedor, parámetros de metrado (ME_Partida, ME_Bloque, ME_Piso…), modelos ≤300 MB y reuniones cada 15 días — auditoría de modelos, <b>ICE los jueves</b> y coordinación de disciplinas con informe de colisiones.</p>
    </>
  )
}

function Auditoria() {
  return (
    <>
      <Head eyebrow="Ejercicio en vivo" title="Audita este BEP real: encuentra los 5 errores"
        lead="Seis afirmaciones tomadas del BEP v01 de Megantoni. Cinco esconden un error real del documento; una es correcta. Toca cada tarjeta para auditar." />
      <AuditGame items={[
        { claim: 'La tabla de nomenclatura usa el código de inversión 2466086 — Red de Salud Puente Piedra (Lima), autor: Corporación Prisma.', error: true, why: 'Es el ejemplo de OTRO proyecto: plantilla reciclada sin adaptar. El código de Megantoni es 2614056.' },
        { claim: 'El CDE se gestiona con estados WIP → Compartido → Publicado → Archivo según NTP-ISO 19650.', error: false, why: 'Esto sí está bien definido en el BEP — incluso con 5 niveles de acceso al ECD.' },
        { claim: 'Los campos de organización, localización, entidad responsable y nombre de la inversión están completos.', error: true, why: 'Están EN BLANCO en el BEP v01 — un documento “de cumplimiento” que nadie terminó de llenar.' },
        { claim: 'La tabla de roles BIM identifica con nombre a cada responsable del proyecto.', error: true, why: 'La tabla de roles está vacía: hay cargos sin personas. Sin responsable no hay accountability.' },
        { claim: 'La plataforma ECD declarada es Google Drive.', error: true, why: 'Funciona como repositorio, pero no gestiona estados ni flujos ISO 19650. El Plan VDC 2025 lo corrige: Autodesk Construction Cloud.' },
        { claim: 'El BEP y el Plan VDC nombran a la misma entidad contratante.', error: true, why: 'Inconsistencia real: Municipalidad Distrital de Megantoni en un documento, GORE Cusco/MINSA en el otro.' },
      ]} />
    </>
  )
}

function Moraleja() {
  return (
    <>
      <Head eyebrow="La lección del caso" title="BEP de cumplimiento ≠ Plan VDC gestionado" />
      <Hub core="VDC" sub="lo que convierte un BEP en gestión" ac="nx-v" nodes={[
        ['Objetivos SMART', 'cascada CO→PO→ProdO con metas numéricas'],
        ['Métricas vivas', 'medidas cada semana, visibles para todos'],
        ['Factores controlables', 'rituales con frecuencia y responsable'],
        ['Ciclo de mejora', 'analizar desviaciones y ajustar el plan'],
      ]} />
      <p className="nx-quote up" style={st(2)}>El BEP dice <b>cómo se produce la información</b>; el Plan VDC dice <b>cómo se gestiona el proyecto con esa información</b>. Un BEP entregado “para cumplir el TDR” y olvidado en una carpeta es papel; el mismo documento con métricas y ritmo es un sistema operativo.</p>
    </>
  )
}

export const m4: Entry[] = [
  {
    id: 'm4-div', num: '', title: 'Módulo 04 · Caso Megantoni',
    node: <SectionSlide eyebrow="Módulo 04 · caso vivo" title={<>Hospital de Megantoni:<br />el plan VDC real</>}
      lead="Un hospital en la Amazonía del Cusco, dos documentos reales y una auditoría en vivo — con errores incluidos, porque así se aprende."
      chips={['GORE Cusco / MINSA', 'BEP v01 → Plan VDC v04', 'Auditoría en vivo']} />,
    time: '2:10–2:11',
    note: 'Regreso de la pausa. Sube la energía: “ahora viene lo que ningún libro les puede dar — un plan VDC real, con sus aciertos y sus errores, y ustedes van a auditarlo”. Contexto humano: Camisea, salud amazónica, logística remota; este proyecto importa.',
  },
  {
    id: 'ficha', num: '24', title: 'Ficha del proyecto', node: <Ficha />,
    time: '2:11–2:15',
    note: 'La ficha: Camisea/Megantoni (La Convención, Cusco), GORE Cusco/MINSA, código de inversión 2614056, expediente en 150 días + obra en 18 meses. Presenta los DOS documentos: BEP v01 (marzo 2024) y Plan VDC v04 (octubre 2025) — la evolución entre ambos es la historia del módulo.',
  },
  {
    id: 'cascada-real', num: '25', title: 'La cascada con datos reales', node: <CascadaReal />,
    time: '2:15–2:21',
    note: 'El diagrama del módulo 2, ahora con datos reales. Recorre la bajada completa: operar el hospital ≤15/05/2025 → obra 18 meses ≤3% → decisión ≤3 días / clashes ≥90% / PPC ≥90% → 2 ICE al mes, federado semanal, LPS semanal. Remata con la lectura inversa: el ritual del lunes sostiene la fecha de operación del hospital.',
  },
  {
    id: 'panel-metricas', num: '26', title: 'Las 15 métricas del plan', node: <PanelMetricas />,
    time: '2:21–2:26',
    note: 'El panel 3×5 completo del plan real. No lo leas entero: destaca una métrica por pilar y su porqué — decisiones ≤3 días (la latencia de Team X aterrizada), −15% retrabajo (conecta con el 48% de PlanGrid/FMI), 100% As-Built LOD 500 (conecta con el CO3 de O&M). Señala que cada una trae etiqueta costo/plazo/calidad.',
  },
  {
    id: 'ritmo', num: '27', title: 'El ritmo operativo', node: <Ritmo />,
    time: '2:26–2:30',
    note: 'La tabla de factores controlables: ICE 2/mes con pre-read, federado semanal con QA/QC, Last Planner semanal con PPC en Power BI — cada ritual con herramienta y responsable. Y los 5 roles del sistema. Frase: “sin ritmo, las métricas son deseos; el calendario es el que gestiona”.',
  },
  {
    id: 'clash-plan', num: '28', title: 'Clash control de nivel pro', node: <ClashPlan />,
    time: '2:30–2:34',
    note: 'El detalle fino que impresiona a los técnicos: 22 pruebas P01-P22 por pares de especialidad, 5 prioridades con tolerancias de 15 a 40 mm, duras vs blandas (±20/±25 mm). Más: nomenclatura Plan BIM Perú, parámetros de metrado ME_*, modelos ≤300 MB, ICE los jueves. Esto se escribe ANTES de detectar el primer clash.',
  },
  {
    id: 'auditoria', num: '29', title: 'Ejercicio: audita el BEP', node: <Auditoria />,
    time: '2:34–2:42',
    note: 'LA dinámica estrella — 8 minutos. Divide la sala en parejas, 3 minutos para debatir cuáles son los 5 errores, luego destapa tarjeta por tarjeta con votación a mano alzada. Los errores son REALES del BEP v01: plantilla reciclada de otro proyecto (Puente Piedra/Prisma), campos en blanco, roles sin nombres, Google Drive como ECD, entidades inconsistentes. Cuenta que esto pasa en la vida real cuando el BEP se hace “para cumplir”.',
  },
  {
    id: 'moraleja', num: '30', title: 'BEP ≠ Plan VDC', node: <Moraleja />,
    time: '2:42–2:45',
    note: 'La moraleja del ejercicio: el BEP define cómo se produce la información; el Plan VDC cómo se GESTIONA el proyecto con ella. Los 4 ingredientes que convierten un BEP en VDC: objetivos SMART, métricas vivas, factores controlables y ciclo de mejora. El mismo proyecto pasó de BEP-de-cumplimiento (2024) a plan gestionado (2025).',
  },
  {
    id: 'flash-lod500', num: '⚡', title: 'Flash · El −10% de O&M', node: <FlashSlide item={FLASH.lod500} />,
    time: '2:45–2:47',
    note: 'Quiz de cierre del caso: ¿qué exige el plan para lograr −10% de O&M? El As-Built LOD 500. Es la pregunta más conceptual del día — muestra que la cascada funciona hacia adelante en el tiempo: un objetivo de OPERACIÓN definido hoy obliga una métrica BIM durante toda la obra.',
  },
]
