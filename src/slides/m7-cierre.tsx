/* ============================= CIERRE =================================== */
import { st, Head, SectionSlide } from '../deck/primitives'
import AecodeLogo from '../deck/AecodeLogo'
import { FlipDeck, Sources, Flow } from './visuals'
import type { Entry } from './types'

function Entregable() {
  return (
    <>
      <Head eyebrow="Tu misión" title="El Plan VDC de TU proyecto"
        lead="El entregable del módulo: aplicar la plantilla de 10 secciones a un proyecto real (el tuyo, o uno que conozcas bien)." />
      <Flow steps={[
        ['Elige el proyecto', 'Uno real, con un dolor real: retrabajos, plazos, decisiones lentas.'],
        ['Escribe la cascada', '2 CO + 2 PO en el idioma del cliente — con fecha y número.'],
        ['Diseña las métricas', '3 ProdO + 3 FC por pilar, en formato Descripción·Fórmula·Meta·Frecuencia.'],
        ['Define el ritmo', 'Calendario semanal: qué sesión, qué publicación, qué reporte — y quién.'],
      ]} loop="rúbrica de 7 criterios · se comparte la plantilla + 2 ejemplos resueltos (hospital y vivienda)" />
      <p className="nx-quote up" style={st(3)}>Tres preguntas de arranque para tu plan: ¿cuál es el presupuesto y plazo comprometidos? ¿qué restricciones normativas aplican (Plan BIM Perú / TDR)? ¿qué CDE y software serán oficiales?</p>
    </>
  )
}

function Repaso() {
  return (
    <>
      <Head eyebrow="Repaso relámpago" title="Seis conceptos que deben salir de aquí contigo"
        lead="Voltea cada tarjeta — primero intenta responder, después verifica. El deck queda publicado para repasar." />
      <FlipDeck cards={[
        { icon: '🎯', k: 'VDC', tag: 'la definición', q: '¿Puedes decir la definición canónica sin mirar?', ac: 'nx-v', back: [['✓', 'Modelos de desempeño integrados y multidisciplinarios…'], ['🎯', '…al servicio de objetivos de negocio explícitos y públicos.'], ['📚', 'Kunz & Fischer · CIFE WP097 (2012) / CM&E (2020)']] },
        { icon: '🌊', k: 'La cascada', tag: 'el corazón', q: '¿Cómo baja el valor del cliente hasta el lunes del equipo?', ac: 'nx-b', back: [['✓', 'CO → PO → ProdO → FC — y se lee de vuelta.'], ['💬', '«CO y PO son promesas; ProdO y FC son la evidencia.»'], ['🏥', 'Megantoni: operar ≤15/05/2025 → 2 ICE/mes.']] },
        { icon: '🧭', k: 'ICE', tag: 'pilar 1', q: '¿Qué hace que una ICE no sea “una reunión más”?', ac: 'nx-v', back: [['✓', 'Pre-read 24h + agenda minutada + decisores en la mesa.'], ['⏱️', 'Se mide: ≥80% temas resueltos, latencia ≤2 días.'], ['🚀', 'Origen: Team X del JPL — 9 meses → 3 semanas.']] },
        { icon: '🏗️', k: 'BIM en VDC', tag: 'pilar 2', q: '¿Cuál es la meta correcta del clash management?', ac: 'nx-b', back: [['✓', '0 clashes CRÍTICOS abiertos antes de liberar a obra.'], ['🔧', 'Con prioridades y tolerancias (15–40 mm), duro vs blando.'], ['📦', 'Y todo publicado en el CDE: WIP→Compartido→Publicado.']] },
        { icon: '⚙️', k: 'PPM', tag: 'pilar 3', q: '¿Qué protege el plazo: la velocidad o la confiabilidad?', ac: 'nx-g', back: [['✓', 'La confiabilidad: PPC ≥90% y variabilidad contenida.'], ['🔓', 'Lookahead 3-6 semanas: liberar restricciones antes.'], ['📉', 'WIP ≤1,0 — más frentes abiertos no es más avance.']] },
        { icon: '📏', k: 'Métricas', tag: 'el idioma', q: '¿Cuáles son los 4 campos de toda métrica VDC?', ac: 'nx-g', back: [['✓', 'Descripción · Fórmula · Meta · Frecuencia.'], ['⚡', 'Y la 5ª implícita: ¿qué decisión habilita?'], ['🌱', 'Empieza con 5 métricas, escala a 15 con madurez.']] },
      ]} />
    </>
  )
}

function Fuentes() {
  return (
    <>
      <Head eyebrow="Bibliografía comentada" title="Las fuentes de esta clase — con su nivel de confianza"
        lead="Rigor AECODE: distinguimos lo verificado en fuente primaria de lo reportado por terceros. Úsenlo igual en sus trabajos." />
      <Sources groups={[
        {
          h: 'Canon académico (Stanford CIFE)', items: [
            { t: 'Kunz & Fischer — CIFE WP097 (2012) y Construction Management & Economics 38(4) (2020)', conf: 'alta' },
            { t: 'Chachere, Kunz & Levitt — ICE y latencia: CIFE WP087 (2004) y WP116', conf: 'alta' },
            { t: 'Kam et al. — VDC Scorecard: WP135/136 y JCEM 143(3) (2017)', conf: 'alta' },
            { t: 'NASA NTRS — The Evolution of Team-X (2021)', conf: 'alta' },
          ],
        },
        {
          h: 'Evidencia de impacto', items: [
            { t: 'McKinsey — Reinventing Construction (2017); Imagining Construction’s Digital Future (2016)', conf: 'alta' },
            { t: 'NIST GCR 04-867 — costo de interoperabilidad inadecuada (2004)', conf: 'alta' },
            { t: 'PlanGrid + FMI — Construction Disconnected (2018)', conf: 'alta' },
            { t: 'DBIA — ROI 10× de clash detection en design-build de US$230M (2024)', conf: 'alta' },
            { t: 'Sutter Eden Medical Center — 333 vs ~3.000 RFIs (DPR/ENR)', conf: 'media' },
            { t: 'IGLC 33 (2025) — VDC en hospital: −24% casco, −25.000 HH', conf: 'alta' },
          ],
        },
        {
          h: 'Normativa y contexto Perú', items: [
            { t: 'D.S. 289-2019-EF · D.S. 108-2021-EF · R.D. 0003-2023-EF/63.01 (Guía Nacional BIM)', conf: 'alta' },
            { t: 'NTP-ISO 19650-1/-2 (2021), -5 (2024), -4 (2025) — INACAL', conf: 'alta' },
            { t: 'Ulima × Stanford CIFE — programa VDC (7ª edición 2026)', conf: 'alta' },
            { t: 'Cosapi · Videna — validado por M. Fischer (Stanford CEE)', conf: 'alta' },
            { t: 'Cifras de entidades públicas con plan BIM (50/90/150) — verificar en MEF', conf: 'baja' },
          ],
        },
        {
          h: 'Documentos de proyecto (GEN+)', items: [
            { t: 'Plan VDC + BEP Hospital de Megantoni (PBEP-001, v01 2024 / v04 2025)', conf: 'alta' },
            { t: 'Formato Agenda ICE y Acta de Acuerdos · 15 Métricas del Coordinador BIM', conf: 'alta' },
            { t: 'PEB Túnel Ollachea · BEP Puente Santa Rosa · Puente Sisa · GORE Cusco', conf: 'alta' },
            { t: 'Claims virales tipo «$1 en BIM = $20» — sin fuente primaria: NO citar', conf: 'baja' },
          ],
        },
      ]} />
    </>
  )
}

function Gracias() {
  return (
    <div className="nx-cover" style={{ gridTemplateColumns: '1fr' }}>
      <div className="cover" style={{ alignItems: 'center', textAlign: 'center' }}>
        <AecodeLogo className="cover-mark up" style={st(0)} />
        <h1 className="cover-title up" style={st(1)}>
          De «ojalá salga» a<br /><span className="grad">«lo estamos controlando»</span>
        </h1>
        <p className="cover-lead up" style={st(2)}>
          VDC existe para que las promesas se cumplan: un hospital operando a tiempo en la Amazonía
          vale más que cualquier modelo bonito. Objetivos explícitos, decisiones rápidas, producción medida.
        </p>
        <div className="cover-sign up" style={st(3)} aria-hidden="false">
          <span className="cs-name">Alejandro Palpan</span>
          <span className="cs-dot" aria-hidden="true" />
          <span className="cs-role">GEN+ · AECODE — Diplomado BIM·Lean·BI·IA</span>
        </div>
        <div className="cover-hud up" style={st(4)}>
          <span className="ch-item"><b>Entregable</b> tu Plan VDC (plantilla + rúbrica)</span>
          <span className="ch-sep" />
          <span className="ch-item"><b>Deck</b> publicado — repasa las flip-cards</span>
          <span className="ch-sep" />
          <span className="ch-item live"><span className="ch-dot" /> aecode.ai</span>
        </div>
      </div>
    </div>
  )
}

export const m7: Entry[] = [
  {
    id: 'cierre-div', num: '', title: 'Cierre',
    node: <SectionSlide eyebrow="Cierre" title={<>Aterrizar:<br />tu Plan VDC</>}
      lead="Lo aprendido se consolida haciendo: el entregable, el repaso y las fuentes para seguir."
      chips={['Entregable', 'Flip-cards', 'Bibliografía']} />,
    note: 'Recta final. Recupera las hipótesis del debate inicial (slide 4): ¿cuáles sobrevivieron? Normalmente “falta de planificación” se transforma en “falta de sistema de decisiones y métricas” — el arco de la clase completo.',
  },
  {
    id: 'entregable', num: '41', title: 'Tu Plan VDC', node: <Entregable />,
    note: 'El entregable en 4 pasos: proyecto real → cascada (2 CO + 2 PO) → métricas (3+3 por pilar) → ritmo semanal. Se comparte la plantilla editable + los dos ejemplos resueltos (hospital USD 85M y vivienda 50 unidades) + la rúbrica de 7 criterios. Fecha de entrega según cronograma del diplomado.',
  },
  {
    id: 'repaso', num: '42', title: 'Repaso con flip-cards', node: <Repaso />,
    note: 'Repaso activo: pide a 6 voluntarios — cada uno responde UNA tarjeta antes de voltearla. Si el tiempo aprieta, hazlo con 3 y recuerda que el deck queda publicado con las 6 para repasar en casa.',
  },
  {
    id: 'fuentes', num: '43', title: 'Fuentes y confianza', node: <Fuentes />,
    note: 'La bibliografía comentada con niveles de confianza — y el meta-mensaje: así se citan fuentes en AECODE. Señala los dos “baja”: las cifras de entidades públicas sin fecha de corte clara y los multiplicadores virales sin fuente primaria ($1=$20) que NO deben citar jamás en un entregable.',
  },
  {
    id: 'gracias', num: '', title: 'Gracias', node: <Gracias />,
    note: 'Cierre emocional: VDC existe para que las promesas se cumplan — el hospital de Megantoni operando a tiempo vale más que cualquier modelo bonito. Preguntas finales, contacto y siguiente sesión del diplomado. Fin.',
  },
]
