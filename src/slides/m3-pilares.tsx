/* ========================= M3 · LOS TRES PILARES ======================== */
import { st, Head, SectionSlide, SourceNote } from '../deck/primitives'
import FlashSlide from '../deck/Flash'
import { FLASH } from './flashes'
import { IceAgenda, Flow, Stats, Table, MetricsPanel } from './visuals'
import type { Entry } from './types'

function IceAnatomia() {
  return (
    <>
      <Head eyebrow="ICE · la sesión" title="Los 90 minutos que reemplazan dos semanas de correos"
        lead="Formato real de sesión ICE (GEN+): agenda minutada en 6 bloques. Cada bloque produce algo — o se corta." />
      <IceAgenda blocks={[
        { min: 5, t: 'Apertura', d: 'Objetivo de la sesión y acuerdos pendientes de la anterior.' },
        { min: 10, t: 'Métricas', d: 'Dashboard ICE·BIM·PPM: qué está en rojo y por qué.' },
        { min: 30, t: 'Issues críticos', d: 'Resolución sobre el modelo federado, issue por issue.' },
        { min: 25, t: 'Alternativas', d: 'Evaluación costo·plazo·calidad·constructabilidad.' },
        { min: 15, t: 'Acciones', d: 'Responsable + fecha + evidencia para cada acuerdo.' },
        { min: 5, t: 'Cierre', d: 'Lectura de acuerdos y confirmación de asistentes.' },
      ]} />
    </>
  )
}

function IceReglas() {
  return (
    <>
      <Head eyebrow="ICE · el sistema" title="Sin pre-read no hay ICE"
        lead="La sesión es la punta del iceberg: el valor se fabrica antes (preparación) y después (acuerdos trazables)." />
      <div className="nx-grid nx-g3 up" style={st(1)}>
        <article className="nx-card nx-v" style={st(1)}>
          <span className="nx-ic">📬</span>
          <h3>24 h antes · pre-read</h3>
          <p>Modelo federado actualizado, reporte de interferencias <b>priorizadas</b> y restricciones de obra. Si no llegó, la sesión se reprograma: decidir sin insumos es teatro.</p>
        </article>
        <article className="nx-card nx-b" style={st(2)}>
          <span className="nx-ic">🧑‍🤝‍🧑</span>
          <h3>Roles con responsabilidad</h3>
          <p><b>Facilitador ICE</b> dirige y corta; <b>BIM Coordinator</b> presenta modelo e issues; <b>Especialistas</b> deciden la solución técnica; <b>VDC Manager</b> vigila métricas; <b>Scribe</b> registra el acta.</p>
        </article>
        <article className="nx-card nx-g" style={st(3)}>
          <span className="nx-ic">📋</span>
          <h3>Acta = matriz de acuerdos</h3>
          <p>7 columnas: ID · tema · decisión · responsable · fecha · estado · <b>evidencia (link al CDE)</b>. La matriz de acuerdos es la memoria del proyecto.</p>
        </article>
      </div>
      <p className="nx-quote up" style={st(4)}>Cadena de propósito real de una ICE: objetivo de sesión (resolver interferencias MEP nivel 03) → objetivo VDC (latencia de decisión de 7 → 2 días) → resultado medible (80% de issues críticos cerrados con responsable y evidencia).</p>
    </>
  )
}

function IceMetricas() {
  return (
    <>
      <Head eyebrow="ICE · el control" title="La propia sesión ICE se mide"
        lead="Si la sesión no rinde cuentas, degenera en reunión. Cuatro KPIs del formato real:" />
      <Stats items={[
        { v: '≥80%', t: 'de los temas tratados se cierran EN la sesión (temas cerrados / tratados)', src: 'Formato Agenda ICE · GEN+', ac: 'v' },
        { v: '≤2 días', t: 'de latencia entre el registro del issue y la decisión', src: 'Formato Agenda ICE · GEN+', ac: 'b' },
        { v: '≥90%', t: 'de asistencia de los roles clave requeridos', src: 'Formato Agenda ICE · GEN+', ac: 'g' },
        { v: '100%', t: 'de cumplimiento del pre-read: insumos completos 24 h antes', src: 'Formato Agenda ICE · GEN+', ac: 'w' },
      ]} />
      <p className="nx-quote up" style={st(5)}>Si una métrica de la propia ICE falla dos sesiones seguidas, el <b>Facilitador VDC</b> ajusta el formato — el ritual también se mejora con datos.</p>
    </>
  )
}

function BimFederacion() {
  return (
    <>
      <Head eyebrow="BIM · la coordinación" title="Federar, detectar, tolerar"
        lead="El flujo técnico que alimenta cada ICE: de los modelos por disciplina al reporte de interferencias priorizado." />
      <Flow steps={[
        ['Exportar NWC', 'Cada disciplina publica su caché desde Revit: geometría + parámetros.'],
        ['Federar NWF', 'Navisworks une los NWC en un set liviano de vínculos: el modelo federado.'],
        ['Clash Detective', '4 tipos de prueba: estático, conservador, espacio libre (clearance) y duplicados.'],
        ['Publicar NWD', 'Instantánea del federado + reporte HTML/XML + matriz Excel por especialidades.'],
      ]} loop="ciclo semanal: actualizar modelos → re-federar → re-testear" />
      <p className="nx-quote up" style={st(3)}>La <b>tolerancia</b> es el filtro de ruido: 15 mm para clashes de alta prioridad, hasta 40 mm para baja — y distingue interferencia <b>dura</b> (geometrías que chocan) de <b>blanda</b> (espacios de uso y mantenimiento invadidos).</p>
    </>
  )
}

function ClashCiclo() {
  return (
    <>
      <Head eyebrow="BIM · caso real" title="Gestionar interferencias ≠ contar choques"
        lead="Hospital del Altiplano (ESSALUD, Puno) — conteo real por par de disciplinas en la primera corrida:" />
      <Table
        head={['Prueba', 'Par de disciplinas', 'Conflictos', 'Lectura']}
        hotCol={2}
        rows={[
          ['P1', 'Arquitectura vs Estructura', '1.325', 'Muros y tabiques contra pórticos: el clásico.'],
          ['P2', 'Arquitectura vs Mecánicas', '444', 'Ductos HVAC atravesando ambientes.'],
          ['P3', 'Estructuras vs Mecánicas', '273', 'Montantes y ductos contra vigas.'],
          ['P4', 'Estructuras vs Desagüe', '59', 'Pases sanitarios no previstos.'],
          ['P5', 'Desagüe vs Mecánicas', '34', 'Cruce de redes en techos técnicos.'],
        ]}
      />
      <p className="nx-quote up" style={st(3)}>Cada clash vive un ciclo: <b>Nuevo → Activo → Revisado → Aprobado o Resuelto</b>. La meta VDC no es “cero clashes detectados” sino <b>cero críticos abiertos antes de liberar a obra</b>, con latencia de cierre ≤ 3 días.</p>
      <SourceNote>GEN+ · flujo de detección de interferencias en Navisworks, Hospital del Altiplano ESSALUD (Puno). Matriz de 22 pruebas (P01–P22) con 5 prioridades y tolerancias de 15–40 mm en el caso Megantoni.</SourceNote>
    </>
  )
}

function Cde() {
  return (
    <>
      <Head eyebrow="BIM · la información" title="El CDE decide, no el correo"
        lead="Entorno Común de Datos según ISO 19650 (NTP peruana 2021): la información tiene estados, y solo lo publicado existe." />
      <Flow steps={[
        ['WIP', 'Trabajo en proceso: cada equipo produce en su área privada.'],
        ['Compartido', 'Con calidad suficiente, se comparte para revisión (REV. 0).'],
        ['Publicado', 'Aprobado sin observaciones: apto para usarse y construirse.'],
        ['Archivo', 'Histórico auditable: qué se supo, cuándo y quién decidió.'],
      ]} />
      <div className="nx-grid nx-g2 up" style={st(3)}>
        <article className="nx-card nx-b" style={st(3)}>
          <span className="nx-kbadge">Caso real · flujo AMSAC (Autodesk Docs)</span>
          <h3>Forma vs fondo</h3>
          <p>Observaciones de <b>forma</b> → nubes de revisión sobre el documento; de <b>fondo</b> → incidencias tipificadas y trazables. Regla de oro: <b>no se aprueba</b> un contenedor con nubes o incidencias abiertas.</p>
        </article>
        <article className="nx-card nx-g" style={st(4)}>
          <span className="nx-kbadge">Separación de poderes</span>
          <h3>Revisar ≠ aprobar</h3>
          <p>Tres carriles: el contratista produce y subsana; los revisores especialistas observan; el administrador contractual aprueba. En obra pública peruana, <b>la Entidad es dueña de los modelos</b>.</p>
        </article>
      </div>
    </>
  )
}

function Ppm() {
  return (
    <>
      <Head eyebrow="PPM · la producción" title="Last Planner: la promesa semanal que se mide"
        lead="El pilar PPM operacionaliza el Lean del diplomado: planificar con quien ejecuta, liberar restricciones antes, medir el cumplimiento." />
      <Flow steps={[
        ['Plan maestro', 'Hitos y fases: la promesa grande del proyecto.'],
        ['Lookahead 3–6 sem', 'Identificar restricciones y liberarlas ≥1 semana antes del inicio.'],
        ['Plan semanal', 'Solo entra trabajo LIBRE de restricciones. Publicado antes del lunes.'],
        ['PPC + causas', '¿Qué % de lo prometido se cumplió? Toda falla registra su causa raíz (RNC).'],
      ]} loop="mejora continua: las causas de no cumplimiento alimentan el siguiente ciclo" />
      <p className="nx-quote up" style={st(3)}>Metas de referencia: <b>PPC ≥ 90%</b> · variabilidad de entregas ≤ 10% · restricciones liberadas a tiempo ≥ 90% · WIP (frentes activos/permitidos) ≤ 1,0. La confiabilidad — no la velocidad — es lo que protege el plazo.</p>
    </>
  )
}

function MetricaFormato() {
  return (
    <>
      <Head eyebrow="Métricas · el idioma común" title="Toda métrica VDC se escribe igual"
        lead="Cuatro campos, sin excepción. Si falta uno, no es una métrica: es una intención." />
      <Table
        head={['Descripción', 'Fórmula', 'Meta', 'Frecuencia']}
        hotCol={2}
        rows={[
          ['Decisiones técnicas cerradas a tiempo (ICE)', 'decisiones <48h / total ×100', '≥ 85%', 'Semanal'],
          ['Colisiones resueltas antes de obra (BIM)', 'clashes resueltos / detectados ×100', '≥ 98%', 'Quincenal'],
          ['Confiabilidad de planificación PPC (PPM)', 'tareas cumplidas / prometidas ×100', '≥ 90%', 'Semanal'],
          ['Desviación de cantidades 5D (BIM)', '|modelo − comprado| / modelo ×100', '≤ 2%', 'Quincenal'],
        ]}
      />
      <p className="nx-quote up" style={st(3)}>Y una quinta columna implícita, la más importante: <b>¿qué decisión habilita?</b> Una métrica que no dispara ninguna acción es decoración de dashboard.</p>
    </>
  )
}

function Quince() {
  return (
    <>
      <Head eyebrow="Métricas · el arsenal" title="Las 15 métricas del Coordinador BIM"
        lead="Matriz operativa real (GEN+): cada una con fórmula, fuente, meta — y la decisión que habilita." />
      <MetricsPanel pillars={[
        {
          name: 'Entrega y calidad', ac: 'v', metrics: [
            ['≥95%', 'modelos entregados a tiempo (MIDP/TIDP)'],
            ['≥85%', 'aprobados en primera revisión QA/QC'],
            ['≥95%', 'elementos con parámetros completos'],
            ['≥90%', 'cumplimiento LOD/LOI por disciplina'],
            ['≥95%', 'nomenclatura y estándares conformes'],
          ],
        },
        {
          name: 'Coordinación', ac: 'b', metrics: [
            ['0', 'clashes críticos abiertos antes de liberar a obra'],
            ['≥80%', 'interferencias cerradas por ciclo'],
            ['≤3 días', 'latencia de cierre de issues críticos'],
            ['100%', 'sistemas críticos coordinados en 3D'],
            ['↓', 'RFIs por coordinación (0 críticas evitables)'],
          ],
        },
        {
          name: 'Aprovechamiento', ac: 'g', metrics: [
            ['≥80%', 'metrados extraídos desde el modelo'],
            ['≥90%', 'planos derivados del modelo'],
            ['100%', 'publicaciones correctas en el CDE'],
            ['≤5%', 'horas de retrabajo por inconsistencias BIM'],
            ['≥30%', 'tareas repetitivas automatizadas (Dynamo/API)'],
          ],
        },
      ]} />
    </>
  )
}

function CincoNucleo() {
  return (
    <>
      <Head eyebrow="Métricas · la madurez" title="Empieza con 5, no con 15"
        lead="El error clásico: lanzar 15 métricas sin disciplina de medición. La recomendación del documento es brutalmente práctica." />
      <div className="nx-grid nx-g2 up" style={st(1)}>
        <article className="nx-card nx-g" style={st(1)}>
          <span className="nx-kbadge">Núcleo · desde el día 1</span>
          <h3>Las 5 métricas fundadoras</h3>
          <p>1 · Entregas de modelos a tiempo<br />2 · Clashes críticos abiertos<br />3 · Latencia de cierre de issues<br />4 · Parámetros obligatorios completos<br />5 · Publicaciones correctas en el CDE</p>
        </article>
        <article className="nx-card nx-v" style={st(2)}>
          <span className="nx-kbadge">Escalar · cuando hay disciplina</span>
          <h3>Después: 5D, retrabajo, automatización</h3>
          <p>Cuando el equipo ya mide sin que se lo pidan, se suman las métricas de costo (desviación 5D), impacto económico (horas de retrabajo) y productividad (% automatizado). Medir mal 15 cosas es peor que medir bien 5.</p>
        </article>
      </div>
      <p className="nx-quote up" style={st(3)}>El dashboard mínimo viable: <b>3 métricas por pilar, visibles siempre</b> — el tablero 3×3 que cabe en una pantalla y se revisa en 10 minutos cada semana.</p>
    </>
  )
}

export const m3: Entry[] = [
  {
    id: 'm3-div', num: '', title: 'Módulo 03 · Los tres pilares',
    node: <SectionSlide eyebrow="Módulo 03" title={<>ICE · BIM · PPM:<br />la maquinaria</>}
      lead="Cómo se opera VDC en el día a día: la sesión que decide, el modelo que coordina y la producción que se mide."
      chips={['Sesión ICE 90’', 'Clash management', 'CDE · ISO 19650', 'Last Planner', '15 métricas']} />,
    time: '1:14–1:15',
    note: 'Transición: del framework a la maquinaria. Este es el módulo más operativo — pide que anoten formatos y números meta, porque todos salen de documentos reales de proyecto.',
  },
  {
    id: 'ice-anatomia', num: '14', title: 'La sesión ICE por dentro', node: <IceAnatomia />,
    time: '1:15–1:20',
    note: 'Recorre la barra de 90 minutos bloque por bloque: 5-10-30-25-15-5. Los dos bloques gordos (issues 30’ y alternativas 25’) SIEMPRE ocurren sobre el modelo federado, nunca sobre un PPT. Anécdota útil: la diferencia entre “te presento el avance” y “decidamos este pase de ducto ahora, con el costo de cada alternativa en pantalla”.',
  },
  {
    id: 'ice-reglas', num: '15', title: 'Pre-read, roles y acta', node: <IceReglas />,
    time: '1:20–1:25',
    note: 'Los tres seguros de la ICE: pre-read 24h antes (sin insumos no hay sesión), roles con responsabilidad explícita (facilitador, BIM coordinator, especialistas con PODER DE DECISIÓN, VDC manager, scribe) y la matriz de acuerdos con evidencia enlazada al CDE. Lee la cadena de propósito real: sesión → objetivo VDC (7→2 días) → resultado medible.',
  },
  {
    id: 'ice-metricas', num: '16', title: 'La ICE también se mide', node: <IceMetricas />,
    time: '1:25–1:28',
    note: 'Cuatro KPIs de la propia sesión: ≥80% temas resueltos, ≤2 días de latencia, ≥90% asistencia, 100% pre-read. Idea fuerza: el ritual también rinde cuentas — si la ICE no cierra temas, se rediseña la ICE, no se culpa a la gente.',
  },
  {
    id: 'bim-federacion', num: '17', title: 'Federar, detectar, tolerar', node: <BimFederacion />,
    time: '1:28–1:33',
    note: 'El flujo técnico NWC→NWF→NWD con los 4 tipos de prueba del Clash Detective. Concepto clave que separa juniors de seniors: la TOLERANCIA como filtro de ruido (15–40 mm según prioridad) y la diferencia entre clash duro y blando (espacios de uso y mantenimiento). Sin esto, el reporte de clashes es un tsunami inmanejable.',
  },
  {
    id: 'clash-caso', num: '18', title: 'Caso: Hospital del Altiplano', node: <ClashCiclo />,
    time: '1:33–1:37',
    note: 'Números reales de un hospital de ESSALUD en Puno: 1.325 clashes ARQ-EST en la primera corrida. Mensaje: detectar es lo fácil — gestionar es priorizar (matriz de 22 pruebas, 5 prioridades) y cerrar el ciclo de vida de cada clash con latencia ≤3 días. La meta no es cero detectados: es cero CRÍTICOS abiertos antes de liberar a obra.',
  },
  {
    id: 'cde', num: '19', title: 'El CDE decide, no el correo', node: <Cde />,
    time: '1:37–1:42',
    note: 'ISO 19650 aterrizada: estados WIP → Compartido → Publicado → Archivo (NTP peruana desde 2021). El caso AMSAC muestra la separación revisar/aprobar y la tipificación forma (nubes) vs fondo (incidencias). Regla de oro para dictar: “si no está en el CDE, no existe; si no está publicado, no se construye”.',
  },
  {
    id: 'ppm-lps', num: '20', title: 'Last Planner y PPC', node: <Ppm />,
    time: '1:42–1:47',
    note: 'Conexión directa con el módulo Lean del diplomado: plan maestro → lookahead 3-6 semanas (liberar restricciones ≥1 semana antes) → plan semanal solo con trabajo libre → PPC + causas de no cumplimiento. Metas de referencia: PPC ≥90%, WIP ≤1.0. Frase: la confiabilidad protege el plazo, no la velocidad.',
  },
  {
    id: 'metrica-formato', num: '21', title: 'Toda métrica se escribe igual', node: <MetricaFormato />,
    time: '1:47–1:50',
    note: 'La plantilla universal: Descripción | Fórmula | Meta | Frecuencia — con un ejemplo por pilar. Y la quinta columna implícita: ¿qué decisión habilita? Ejercicio relámpago: pide a alguien que convierta “queremos menos retrabajos” en una métrica bien escrita.',
  },
  {
    id: 'quince-metricas', num: '22', title: 'Las 15 métricas del Coordinador BIM', node: <Quince />,
    time: '1:50–1:54',
    note: 'El arsenal completo en tres columnas: entrega/calidad, coordinación y aprovechamiento del modelo. No las leas todas — señala 3-4 y explica su “decisión habilitada”: clashes críticos ↑ → escalar a ICE; publicaciones CDE <100% → riesgo de construir con información obsoleta; metrados desde BIM ≥80% → el presupuesto vive en el modelo.',
  },
  {
    id: 'cinco-nucleo', num: '23', title: 'Empieza con 5, no con 15', node: <CincoNucleo />,
    time: '1:54–1:57',
    note: 'Consejo de implementación con madurez: arrancar con las 5 métricas núcleo y escalar a 5D/retrabajo/automatización solo cuando el equipo ya mide con disciplina. El dashboard mínimo viable es 3×3. Advierte del anti-patrón: el “dashboard fantasma” con 20 métricas que nadie actualiza desde marzo.',
  },
  {
    id: 'flash-escalar', num: '⚡', title: 'Flash · Criterio de coordinador', node: <FlashSlide item={FLASH.escalar} />,
    time: '1:57–1:59',
    note: 'Quiz de criterio profesional: clashes críticos subiendo dos semanas → escalar a ICE (no más horas, no maquillar la meta). Este flash consolida la idea central del módulo: métrica → decisión.',
  },
  {
    id: 'frase-decidir', num: '⚡', title: 'Síntesis · Decidir mejor', node: <FlashSlide item={FLASH.decidir} />,
    time: '1:59–2:00',
    note: 'Cierre del módulo con la frase síntesis: VDC no es modelar mejor, es decidir mejor — y probarlo con métricas. ANUNCIA LA PAUSA DE 10 MINUTOS aquí. Al volver: el caso Megantoni completo y la auditoría en vivo.',
  },
]
