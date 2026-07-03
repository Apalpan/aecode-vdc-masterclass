/* ========================== M5 · VDC EN EL PERÚ ========================= */
import { st, Head, SectionSlide, SourceNote } from '../deck/primitives'
import FlashSlide from '../deck/Flash'
import { FLASH } from './flashes'
import { Tline, Flow, Table, Ladder } from './visuals'
import type { Entry } from './types'

function Normativa() {
  return (
    <>
      <Head eyebrow="El marco peruano" title="Rumbo al BIM obligatorio: la línea de tiempo"
        lead="El Perú tiene una de las hojas de ruta BIM más detalladas de Latinoamérica — y el próximo hito está a semanas de distancia." />
      <Tline items={[
        { y: '2019', t: 'D.S. 289-2019-EF', d: 'Incorporación progresiva de BIM en la inversión pública (Plan BIM Perú, medida 1.1 del PNCP).' },
        { y: '2021', t: 'D.S. 108-2021-EF + NTP', d: 'Definición legal de BIM; NTP-ISO 19650-1 y -2 publicadas (abril 2021).' },
        { y: '2023', t: 'Guía Nacional BIM', d: 'R.D. 0003-2023-EF/63.01: usos BIM, niveles de madurez, formatos (EIR, BEP, matriz).' },
        { y: '2024-25', t: 'Ley 32069 + NTP -5/-4', d: 'Contrataciones públicas exigen modelos de información; ISO 19650-5 (seguridad) y -4.' },
        { y: 'ago 2026', t: 'Obligatorio GN + GORE', d: 'Tipologías seleccionadas del Gobierno Nacional y regionales. Es EL PRÓXIMO MES.', hot: true },
        { y: 'jul 2030', t: 'Todo el sector público', d: 'Gobiernos locales incluidos: inversión pública gestionada digitalmente.' },
      ]} />
      <SourceNote>El Peruano / MEF (D.S. 289-2019-EF, D.S. 108-2021-EF, R.D. 0003-2023-EF/63.01) · INACAL (NTP-ISO 19650). Nota de rigor: el PNCP fijó el hito GN/GORE en dic-2025; la aplicación obligatoria comunicada por el MEF rige desde ago-2026 — citar la fuente específica al usar la fecha, y verificar cifras de entidades en mef.gob.pe.</SourceNote>
    </>
  )
}

function CajaHerramientas() {
  return (
    <>
      <Head eyebrow="La caja de herramientas oficial" title="27 usos BIM, 6 niveles de madurez, un ecosistema documental"
        lead="La Guía Nacional BIM no es prosa: es un sistema de piezas que todo BEP peruano debe ensamblar." />
      <Flow steps={[
        ['OIR → PIR/AIR', 'Requisitos de información de la organización, del proyecto y del activo.'],
        ['EIR', 'Requisitos de intercambio: qué información exige la Entidad (Formato 04).'],
        ['BEP', 'El plan de ejecución BIM del proveedor: cómo se cumplirá el EIR (Formato 05).'],
        ['TIDP / MIDP', 'Planes de entrega de información por equipo y consolidado.'],
        ['PIM → AIM', 'Modelo de información del proyecto → del activo, para operar.'],
      ]} loop="todo vive y se audita en el CDE" />
      <div className="nx-chips up" style={st(3)}>
        <span className="nx-chip"><i>📚</i> 27 usos BIM oficiales numerados (la ANIN aplica 13 en 2025)</span>
        <span className="nx-chip"><i>📶</i> 6 niveles de madurez: Inexistente → Optimizado</span>
        <span className="nx-chip"><i>🧩</i> Regla práctica: priorizar 6–10 usos por proyecto con LOIN verificable</span>
      </div>
      <p className="nx-quote up" style={st(4)}>Dato de gestión del cambio: en el plan BIM real de la ANIN, el riesgo más alto (80/100) no es tecnológico — es la <b>resistencia al cambio de las personas</b>. Por eso VDC pone a ICE (personas decidiendo juntas) al centro.</p>
    </>
  )
}

function Ecosistema() {
  return (
    <>
      <Head eyebrow="El ecosistema" title="Quién es quién en el VDC peruano"
        lead="Precisión importa: los actores reales, con su evidencia real." />
      <div className="nx-grid nx-g3 up" style={st(1)}>
        <article className="nx-card nx-v" style={st(1)}>
          <span className="nx-ic">🎓</span>
          <h3>Academia</h3>
          <p>La alianza certificada con <b>Stanford CIFE la tiene la Universidad de Lima</b> (7ª edición 2026, ~9 meses) — no la PUCP, que investiga VDC vía tesis. U. Continental ofrece especialización propia.</p>
        </article>
        <article className="nx-card nx-b" style={st(2)}>
          <span className="nx-ic">🏆</span>
          <h3>Caso insignia</h3>
          <p><b>Cosapi · Videna</b> (Panamericanos Lima 2019): 18 meses, 2.800 trabajadores, IPD+VDC — presentado por <b>Martin Fischer (director de CIFE)</b> como best practice global en Stanford.</p>
        </article>
        <article className="nx-card nx-g" style={st(3)}>
          <span className="nx-ic">🌎</span>
          <h3>Comunidad</h3>
          <p>Congreso Internacional VDC (CIVDC, Ulima, 4 ediciones) y la <b>Red VDC Latinoamérica</b> (6 países). Perú es referente regional en marco institucional VDC.</p>
        </article>
      </div>
      <p className="nx-quote up" style={st(4)}>La brecha documentada por la academia (2026): <b>política pública avanzada vs capacidad real de implementación</b> — decenas de entidades con plan BIM aprobado y pocas con ejecución real. Esa brecha es exactamente la oportunidad profesional de ustedes.</p>
    </>
  )
}

function CasosGen() {
  return (
    <>
      <Head eyebrow="VDC en producción" title="Cuatro obras reales, cuatro sabores de VDC"
        lead="Proyectos de GEN+ donde los conceptos de hoy están funcionando ahora mismo:" />
      <Table
        head={['Proyecto', 'Tipo', 'Qué se hizo', 'Piezas VDC en juego']}
        rows={[
          ['Túnel Ollachea (INTERSUR)', 'Vial · subterráneo', 'Modelado + compatibilización + metrados + 4D en obra', 'CDE Trimble Connect · ICE semanal · tablero Miro · dashboards'],
          ['Puente Santa Rosa', 'Vial · licitación', 'BEP preliminar + Plan de Calidad para la oferta técnica', 'ISO 19650 + Guía BIM Perú + estándares Provías'],
          ['Puente Sisa', 'Arco metálico', 'Modelado LOD 350 todas las especialidades + metrados', 'Automatización Dynamo/Python · clash en Navisworks · pago por hitos'],
          ['Hospital Belempampa (GORE Cusco)', 'Salud · implementación', 'BIM 4D + sectorización automatizada + Power BI + capacitación', 'Flujo Revit–Dynamo–Excel · trenes de trabajo · curva S viva'],
        ]}
      />
      <p className="nx-quote up" style={st(3)}>Fíjense en el patrón: <b>el VDC empieza antes de ganar la obra</b> (el BEP de la oferta), vive durante el diseño (clash y metrados), y gobierna la ejecución (4D, PPC, dashboards).</p>
    </>
  )
}

function Arranque() {
  return (
    <>
      <Head eyebrow="Implementar de verdad" title="Cómo arranca una implementación VDC real"
        lead="El método de arranque que usamos en GEN+ — tres pasos y un cuestionario de 9 preguntas de diagnóstico (aquí, las 6 esenciales)." />
      <Flow steps={[
        ['Diagnóstico', 'Reunión inicial: alcance, objetivos del cliente, estado del proyecto y procesos-problema que duelen.'],
        ['Diseño del sistema', 'Objetivos de producción + métricas + factores controlables en los 3 pilares: ICE, BIM y PPM.'],
        ['Ciclo semanal', 'Análisis de indicadores cada semana; si el resultado no acompaña, se ajustan métricas y rituales.'],
      ]} loop="implementar VDC es instalar un ciclo, no entregar un documento" />
      <div className="nx-chips up" style={st(3)}>
        {['¿Cuál es el objetivo del cliente?', '¿En qué estado está el proyecto?', '¿Qué procesos queremos medir y mejorar?', '¿Quiénes son las partes interesadas?', '¿Qué herramientas y automatización existen?', '¿Qué se espera de la implementación?'].map((q) => (
          <span className="nx-chip" key={q}><i>❓</i> {q}</span>
        ))}
      </div>
    </>
  )
}

function PlanAnatomia() {
  return (
    <>
      <Head eyebrow="Tu entregable del diplomado" title="Anatomía del Plan VDC — el documento que van a escribir"
        lead="Plantilla oficial de 10 secciones, dosis mínima de contenido y banco de metas de referencia para calibrar las suyas." />
      <Ladder steps={[
        { tag: 'Secciones 1–2', t: 'Contexto + Framework', d: 'El problema urgente del proyecto y la cascada CO → PO → ProdO → FC.' },
        { tag: 'Dosis mínima', t: '2 CO · 2 PO · 3+3 por pilar', d: '2 objetivos de cliente, 2 de proyecto y 3 ProdO + 3 FC por cada pilar (ICE·BIM·PPM): mínimo 22 elementos con métrica.' },
        { tag: 'Secciones 3–8', t: 'Métricas + estrategia', d: 'Toda métrica en formato Descripción·Fórmula·Meta·Frecuencia + árbol de interrelaciones.' },
        { tag: 'Secciones 9–10', t: 'Reflexión + próximos pasos', d: 'Qué aprendió el equipo y el roadmap de implementación (pilotar → estandarizar → escalar).' },
      ]} />
      <p className="nx-quote up" style={st(3)}>Metas de referencia para calibrar: latencia de decisión ≤48–72 h · asistencia ICE ≥90% · modelos a tiempo ≥95% · clashes resueltos ≥90–98% · desviación 5D ≤2% · PPC 85–90%. Rúbrica de evaluación: <b>7 criterios</b> (motivación, objetivos SMART, métricas, FC, estrategia, procesos, seguimiento).</p>
    </>
  )
}

export const m5: Entry[] = [
  {
    id: 'm5-div', num: '', title: 'Módulo 05 · VDC en el Perú',
    node: <SectionSlide eyebrow="Módulo 05" title={<>VDC en el Perú:<br />del piloto al mandato</>}
      lead="Normativa que ya tiene fecha, un ecosistema que lidera la región y casos de infraestructura funcionando hoy."
      chips={['Plan BIM Perú', 'ISO 19650 · NTP', 'Ulima × Stanford', 'Casos GEN+']} />,
    note: 'Transición: del caso al contexto país. Gancho: “lo que acaban de aprender deja de ser optativo en agosto de 2026 — les muestro por qué”.',
  },
  {
    id: 'normativa', num: '31', title: 'La línea de tiempo normativa', node: <Normativa />,
    note: 'Recorre la línea: D.S. 289-2019 → D.S. 108-2021 + NTP-ISO 19650 → Guía Nacional BIM 2023 → Ley 32069 → AGOSTO 2026 (obligatorio para Gobierno Nacional y regionales en tipologías seleccionadas — destácalo, es el próximo mes) → julio 2030 (todo el sector público). Advertencia de rigor: las cifras de “entidades con plan BIM” varían entre fuentes (50/90/150) — verificar en el portal MEF antes de citar una.',
  },
  {
    id: 'caja', num: '32', title: 'La caja de herramientas oficial', node: <CajaHerramientas />,
    note: 'El ecosistema documental ISO 19650 en flujo: OIR → PIR/AIR → EIR (Formato 04) → BEP (Formato 05) → TIDP/MIDP → PIM/AIM, todo en el CDE. Los 27 usos BIM oficiales (la ANIN aplica 13) y la regla práctica de priorizar 6-10 usos con LOIN. Cierra con el dato de gestión del cambio: el riesgo #1 documentado es la resistencia de las personas — por eso ICE.',
  },
  {
    id: 'ecosistema', num: '33', title: 'Quién es quién', node: <Ecosistema />,
    note: 'Precisión que da autoridad: la alianza Stanford CIFE certificada la tiene la ULIMA (no la PUCP — mito frecuente); el caso insignia validado externamente es Cosapi-Videna, presentado por el propio Martin Fischer. Y la brecha política-industria documentada en 2026: muchas entidades con plan aprobado, poca capacidad real — esa brecha es el mercado laboral de los alumnos.',
  },
  {
    id: 'casos-gen', num: '34', title: 'Cuatro obras reales GEN+', node: <CasosGen />,
    note: 'Los cuatro casos en tabla: Ollachea (túnel con ICE semanal y Miro), Santa Rosa (BEP para licitación — el VDC empieza antes de ganar), Sisa (LOD 350 con automatización Dynamo y pago por hitos de modelo) y GORE Cusco (sectorización automatizada Revit-Dynamo-Excel + 4D + Power BI). Patrón: VDC antes, durante y después del contrato.',
  },
  {
    id: 'arranque', num: '35', title: 'Cómo arranca una implementación', node: <Arranque />,
    note: 'El método de arranque real: diagnóstico con 9 preguntas (muestra las 6 del slide), diseño del sistema de métricas en los 3 pilares, y ciclo semanal de indicadores con ajuste. Frase: implementar VDC es instalar un ciclo, no entregar un documento.',
  },
  {
    id: 'plan-anatomia', num: '36', title: 'Anatomía de tu Plan VDC', node: <PlanAnatomia />,
    note: 'El entregable del diplomado: plantilla de 10 secciones, dosis mínima 2 CO + 2 PO + (3 ProdO + 3 FC) × 3 pilares, formato universal de métrica, banco de metas de referencia para calibrar y rúbrica de 7 criterios. Anuncia que la plantilla y dos ejemplos resueltos (hospital y vivienda) se comparten al final.',
  },
  {
    id: 'flash-peru', num: '⚡', title: 'Flash · ¿Desde cuándo es obligatorio?', node: <FlashSlide item={FLASH.peru2026} />,
    note: 'Quiz normativo: agosto 2026 para Gobierno Nacional y regionales (no 2023, no 2030 — el 2030 es gobiernos locales). Este dato convierte el diplomado en urgencia profesional.',
  },
]
