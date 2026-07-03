/* =========================================================================
   FLASHES VDC — interludios de aprendizaje de la masterclass.
   Preguntas clave, datos ancla y frases síntesis; uno por módulo.
   ========================================================================= */
import type { FlashItem } from '../deck/Flash'

export const FLASH: Record<string, FlashItem> = {
  apertura: {
    kind: 'debate', tag: 'Para la sala · apertura',
    q: '¿Por qué los proyectos siguen fallando si nunca tuvimos tanta tecnología?',
    anchor: { v: '+80%', t: 'puede llegar a costar un proyecto grande sobre su presupuesto original', src: 'McKinsey, Imagining Construction’s Digital Future (2016)' },
    d: 'No hay una respuesta única — y eso es exactamente lo que VDC ataca: los proyectos no fallan por falta de software, fallan por decisiones tardías, información dispersa y producción sin métricas. Guarden su hipótesis: al final de la clase la revisamos.',
  },
  retrabajo: {
    kind: 'quiz', tag: 'Flash · diagnóstico',
    q: '¿Cuál es la causa número 1 del retrabajo en obra, según la evidencia?',
    options: [
      { id: 'a', t: 'Mano de obra poco calificada' },
      { id: 'b', t: 'Mala comunicación y datos deficientes del proyecto' },
      { id: 'c', t: 'Clima y condiciones de sitio' },
    ],
    answer: 'b',
    explain: 'El 48% de todo el retrabajo en EE.UU. se explica por mala comunicación (26%) y datos deficientes del proyecto (22%) — unos US$31 mil millones solo en 2018. El retrabajo no es un problema de manos: es un problema de información. Por eso VDC ataca la información y las decisiones, no a la cuadrilla.',
    src: 'PlanGrid + FMI, Construction Disconnected (2018)',
  },
  teamx: {
    kind: 'quiz', tag: 'Flash · el origen de ICE',
    q: 'El Team X del JPL (NASA) diseñaba misiones espaciales en ~9 meses. Con sesiones ICE, ¿en cuánto lo hacía?',
    options: [
      { id: 'a', t: '~6 meses' },
      { id: 'b', t: '~3 meses' },
      { id: 'c', t: '~3 semanas' },
    ],
    answer: 'c',
    explain: 'De 9 meses a ~3 semanas, con sesiones intensivas de ~9 horas donde todos los expertos deciden juntos, con los modelos al frente. El secreto no es trabajar más rápido: es reducir la LATENCIA — el tiempo muerto entre una pregunta y su respuesta. Eso mismo es lo que ICE trae a la construcción.',
    src: 'Chachere, Kunz & Levitt · CIFE WP116, Stanford',
  },
  vdcbim: {
    kind: 'quiz', tag: 'Flash · verdadero o falso',
    q: 'VDC es, en esencia, «BIM avanzado»: mejores modelos 3D con más detalle.',
    options: [{ id: 'v', t: 'Verdadero' }, { id: 'f', t: 'Falso' }],
    answer: 'f',
    explain: 'BIM es solo UNO de los componentes. VDC es un marco de gestión: modelos de desempeño multidisciplinarios al servicio de objetivos de negocio explícitos y públicos — con ICE para decidir, PPM para producir y métricas para controlar. Puedes tener modelos LOD 400 espectaculares y cero VDC.',
    src: 'Kunz & Fischer · CIFE WP097 (2012) / CM&E (2020)',
  },
  escalar: {
    kind: 'quiz', tag: 'Flash · criterio de coordinador',
    q: 'Tu métrica «interferencias críticas abiertas» sube dos semanas seguidas. ¿Cuál es la acción VDC correcta?',
    options: [
      { id: 'a', t: 'Pedir a los modeladores que trabajen el fin de semana' },
      { id: 'b', t: 'Escalar el tema a la próxima sesión ICE con los responsables' },
      { id: 'c', t: 'Bajar la meta para que la métrica vuelva a verde' },
    ],
    answer: 'b',
    explain: 'Cada métrica existe para habilitar una decisión. Clashes críticos creciendo = decisiones pendientes entre disciplinas → se resuelve en ICE, con los que deciden en la mesa y el modelo federado al frente. Más horas no arreglan un problema de coordinación, y maquillar la meta destruye el sistema.',
    src: '15 Métricas Clave para Coordinador BIM · GEN+',
  },
  lod500: {
    kind: 'quiz', tag: 'Flash · caso Megantoni',
    q: 'El cliente quiere operar el hospital con –10% de costos anuales de O&M. ¿Qué exige el plan VDC para lograrlo?',
    options: [
      { id: 'a', t: 'Más sesiones ICE durante la obra' },
      { id: 'b', t: 'Un modelo As-Built LOD 500 entregado a operación' },
      { id: 'c', t: 'PPC semanal ≥ 90% durante la construcción' },
    ],
    answer: 'b',
    explain: 'El –10% de O&M se gana DESPUÉS de la obra: mantenimiento planificado, activos inventariados, sistemas ubicables. Eso solo existe si el modelo As-Built LOD 500 llega completo a operación. Nota la cascada: un objetivo del cliente (CO) definido en la fase de plan… obliga una métrica BIM en obra.',
    src: 'Plan VDC Megantoni · GEN+ (v04, 2025)',
  },
  peru2026: {
    kind: 'quiz', tag: 'Flash · normativa peruana',
    q: '¿Desde cuándo es obligatoria la metodología BIM para proyectos del Gobierno Nacional y regionales seleccionados?',
    options: [
      { id: 'a', t: 'Ya es obligatoria desde 2023' },
      { id: 'b', t: 'Agosto de 2026' },
      { id: 'c', t: 'Julio de 2030' },
    ],
    answer: 'b',
    explain: 'Agosto 2026 — o sea, el próximo mes. El hito 2030 es la extensión a gobiernos locales y la meta de inversión pública gestionada digitalmente. Quien domine BIM/VDC hoy no está aprendiendo una habilidad optativa: está llegando justo a tiempo al mandato.',
    src: 'Plan BIM Perú · D.S. 289-2019-EF, D.S. 108-2021-EF, hoja de ruta MEF',
  },
  cierre: {
    kind: 'frase', tag: 'Síntesis final',
    t: <>«La IA no reemplaza al VDC: <b>lo alimenta.</b> Sin objetivos, modelos y métricas, no hay nada que optimizar.»</>,
    d: 'Primero el sistema de gestión (VDC), después la amplificación (IA). El caso IGLC 2025 lo demuestra: −24% en el casco estructural y −25,000 horas-hombre con VDC clásico, sin un solo modelo de IA. La ola de IA multiplica al que ya mide.',
  },
  decidir: {
    kind: 'frase', tag: 'Síntesis del módulo',
    t: <>«VDC no es modelar mejor: <b>es decidir mejor</b> — y probarlo con métricas.»</>,
    d: 'ICE reduce la latencia de las decisiones, BIM les da una única fuente de verdad, PPM convierte la decisión en producción confiable. Las métricas son el idioma común de los tres pilares.',
  },
}
