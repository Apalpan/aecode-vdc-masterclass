/* ============================ M1 · EL PROBLEMA ========================== */
import { st, Head, SectionSlide, SourceNote } from '../deck/primitives'
import FlashSlide from '../deck/Flash'
import { FLASH } from './flashes'
import { Stats, VS } from './visuals'
import type { Entry } from './types'

function ExpedienteRoto() {
  return (
    <>
      <Head eyebrow="El síntoma" title="El expediente que se rompe en obra"
        lead="Caso real peruano: la misma partida, medida en el expediente técnico y medida desde el modelo BIM." />
      <Stats items={[
        { v: '37.877 m²', t: 'de muro de ladrillo KK de soga según el metrado del expediente técnico', src: 'Caso real GEN+ · flujo de detección de interferencias (Navisworks)', ac: 'r' },
        { v: '25.658 m²', t: 'la misma partida medida desde el modelo BIM — 32% menos', src: 'Mismo proyecto, tabla de actualización de partidas', ac: 'g' },
        { v: '1.325', t: 'interferencias solo entre arquitectura y estructura en un hospital real (ESSALUD Puno)', src: 'GEN+ · Hospital del Altiplano, Clash Detective', ac: 'w' },
      ]} />
      <p className="nx-quote up" style={st(4)}>Cada diferencia de metrado y cada interferencia no resuelta es un <b>adicional, un RFI o un retraso</b> esperando su turno en obra. El diagnóstico VDC: reprocesos, baja trazabilidad y decisiones lentas.</p>
    </>
  )
}

function Desperdicio() {
  return (
    <>
      <Head eyebrow="La causa raíz" title="El desperdicio nace en las decisiones, no en el campo"
        lead="Dos hallazgos con décadas de evidencia — y plena vigencia." />
      <div className="nx-grid nx-g2 up" style={st(1)}>
        <article className="nx-card nx-v" style={st(1)}>
          <span className="nx-kbadge">Hallazgo 1 · Boyd Paulson, Stanford (1976)</span>
          <h3>Las decisiones tempranas definen el costo</h3>
          <p>La capacidad de influir en el costo final es máxima al inicio del proyecto y cae en picada cuando empieza la construcción — mientras el costo de cambiar sube. Diseñar bien las decisiones tempranas vale más que optimizar la obra. (La famosa «curva de MacLeamy» de 2004 es una re-edición de esta idea.)</p>
        </article>
        <article className="nx-card nx-b" style={st(2)}>
          <span className="nx-kbadge">Hallazgo 2 · NIST GCR 04-867 (2004)</span>
          <h3>La información mal gestionada cuesta miles de millones</h3>
          <p>US$15.800 millones anuales pierde la industria de EE.UU. solo por interoperabilidad inadecuada — datos que no fluyen entre diseño, construcción y operación. Dos tercios de ese costo lo paga el propietario durante la operación.</p>
        </article>
      </div>
      <SourceNote>Paulson (1976), «Designing to Reduce Construction Costs» · Gallaher et al., NIST GCR 04-867 (2004) · PlanGrid+FMI (2018): 48% del retrabajo por comunicación y datos.</SourceNote>
    </>
  )
}

function Tradicional() {
  return (
    <>
      <Head eyebrow="Dos formas de gestionar" title="Gestión tradicional vs gestión VDC" />
      <VS
        bad={{
          pill: 'Tradicional', h: 'Documentos y reuniones', items: [
            'La verdad vive en planos 2D y correos dispersos.',
            'Reuniones sin agenda: se informa, no se decide.',
            'Los problemas se descubren en obra, uno por uno.',
            'El avance se reporta a fin de mes, cuando ya pasó.',
            'El éxito se define como «ojalá salga».',
          ],
        }}
        good={{
          pill: 'VDC', h: 'Modelos, decisiones y métricas', items: [
            'Una única fuente de verdad: el modelo federado en el CDE.',
            'Sesiones ICE: decisiones multidisciplinarias con latencia mínima.',
            'Los conflictos se resuelven en el modelo, antes de obra.',
            'Producción medida cada semana: PPC, latencia, clashes.',
            'Objetivos explícitos y públicos, en cascada desde el cliente.',
          ],
        }}
      />
      <p className="nx-quote up" style={st(4)}>La diferencia no es el software: es <b>dónde se toman las decisiones y cómo se mide la producción</b>.</p>
    </>
  )
}

export const m1: Entry[] = [
  {
    id: 'm1-div', num: '', title: 'Módulo 01 · El problema',
    node: <SectionSlide eyebrow="Módulo 01" title={<>El problema<br />que VDC resuelve</>}
      lead="Diagnóstico con evidencia: dónde y por qué la gestión tradicional pierde plata, plazo y confianza."
      chips={['Retrabajo', 'Latencia de decisiones', 'Información dispersa']} />,
    time: '0:15–0:16',
    note: 'Transición: ya vimos los números macro; ahora bajemos al proyecto. Este módulo justifica todo lo que viene — si el diagnóstico no duele, la metodología no se adopta.',
  },
  {
    id: 'expediente', num: '4', title: 'El expediente que se rompe en obra', node: <ExpedienteRoto />,
    time: '0:16–0:21',
    note: 'Caso real de GEN+: la partida de muro KK con 32% de diferencia entre expediente y modelo, y las 1.325 interferencias ARQ-EST del Hospital del Altiplano (ESSALUD Puno). Pregunta a la sala: ¿quién ha visto un metrado del expediente que no cuadra? Deja que 2-3 cuenten su historia — el dolor compartido abre la mente.',
  },
  {
    id: 'desperdicio', num: '5', title: 'Dónde nace el desperdicio', node: <Desperdicio />,
    time: '0:21–0:26',
    note: 'Dos hallazgos históricos: Paulson 1976 (las decisiones tempranas definen el costo — ojo: la curva que todos llaman “de MacLeamy” es de Paulson, dato para expertos) y NIST 2004 (US$15.8B/año por interoperabilidad inadecuada, 2/3 lo paga el propietario en operación). Conclusión: el desperdicio es informacional y decisional.',
  },
  {
    id: 'vs-tradicional', num: '6', title: 'Tradicional vs VDC', node: <Tradicional />,
    time: '0:26–0:30',
    note: 'Contraste directo. Recorre 2-3 filas de cada lado, no todas. Enfatiza el cierre: la diferencia no es el software — una empresa puede tener Revit y Navisworks y seguir gestionando “a la tradicional”. VDC es dónde se decide y cómo se mide.',
  },
  {
    id: 'flash-retrabajo', num: '⚡', title: 'Flash · La causa del retrabajo', node: <FlashSlide item={FLASH.retrabajo} />,
    time: '0:30–0:33',
    note: 'Primer quiz con alternativas. Pide manos alzadas por opción antes de revelar. La respuesta (b) suele sorprender a los que votaron por mano de obra. Ancla el 48% (26% comunicación + 22% datos deficientes) — es EL dato que justifica invertir en gestión de información.',
  },
]
