/* ==================== M07 · MAPEO DE PROCESOS =========================== */
import { st, Head, SectionSlide } from '../deck/primitives'
import { ProcessMap, Lanes, PromptCard, Ladder } from './visuals'
import type { Entry } from './types'

function QueEs() {
  return (
    <>
      <Head eyebrow="La idea en una frase" title="Un mapa de procesos es un dibujo de quién hace qué, en qué orden"
        lead="Nada más — y nada menos. Si un practicante lo entiende en 60 segundos sin que nadie se lo explique, está bien hecho." />
      <ProcessMap
        nodes={[
          { t: 'Evento que INICIA', type: 'start' },
          { t: 'Actividad (verbo + objeto)', type: 'task' },
          { t: '¿Decisión? (pregunta sí/no)', type: 'dec', no: 'vuelve al paso anterior con una observación' },
          { t: 'Entregable (evidencia)', type: 'task' },
          { t: 'Evento que TERMINA', type: 'end' },
        ]}
        caption="Los 5 elementos de todo mapa: un inicio claro, actividades con verbo, decisiones como preguntas sí/no, un responsable por paso y un entregable que deja evidencia."
      />
      <p className="nx-quote up" style={st(3)}>¿Por qué importa en VDC? Porque el modelo POP de Stanford tiene tres letras — y la <b>P de Proceso</b> es la que casi nadie modela. Mapear el proceso es modelar la P que falta.</p>
    </>
  )
}

function Niveles() {
  return (
    <>
      <Head eyebrow="Tres niveles de zoom" title="Primero el mapa del país, después el plano de la casa"
        lead="El error clásico: empezar dibujando el detalle. Se mapea de macro a micro, y cada nivel responde una pregunta distinta." />
      <Ladder steps={[
        { tag: 'Nivel 1 · macro', t: 'SIPOC', d: '¿De qué va el proceso? Proveedores → Insumos → Proceso (5-7 macropasos) → Salidas → Clientes. Cabe en una tabla de 5 columnas.' },
        { tag: 'Nivel 2 · medio', t: 'Flujograma', d: '¿En qué orden pasan las cosas? Pasos y decisiones en secuencia — el dibujo del slide anterior. Ideal para explicar y detectar pasos que sobran.' },
        { tag: 'Nivel 3 · detalle', t: 'Carriles (swimlanes)', d: '¿Quién hace cada cosa? Una fila por responsable: aquí aparecen las esperas, los ping-pong entre áreas y los cuellos de botella.' },
      ]} />
      <p className="nx-quote up" style={st(3)}>Regla práctica: <b>SIPOC para acordar el alcance, flujograma para entender, carriles para mejorar</b>. El BEP de Megantoni y el flujo AMSAC que vimos son nivel 3.</p>
    </>
  )
}

function Criterios() {
  return (
    <>
      <Head eyebrow="Los criterios" title="7 criterios de un mapa que sí sirve"
        lead="Checklist auditable — igual que auditamos el BEP. Si tu mapa falla 2 o más, se rehace." />
      <div className="nx-grid nx-g4 up" style={st(1)}>
        {([
          ['nx-g', '🚪', '1 · Bordes claros', 'Inicia y termina en un EVENTO observable («llega el RFI», «se paga la factura») — no en una vaguedad.'],
          ['nx-b', '7️⃣', '2 · De 5 a 9 pasos', 'Por nivel de zoom. ¿Más de 9? Te falta subir de nivel o partir el proceso en dos.'],
          ['nx-v', '◆', '3 · Decisiones sí/no', 'Cada rombo es UNA pregunta cerrada. Si necesita párrafo, no es una decisión: son varias.'],
          ['nx-g', '👤', '4 · Un dueño por paso', 'Rol, no nombre de persona. Si un paso tiene dos dueños, tiene cero.'],
          ['nx-b', '🏃', '5 · Verbos de acción', '«Elaborar valorización», no «valorización». Sin verbo no hay actividad: hay un sustantivo flotando.'],
          ['nx-v', '📄', '6 · Cabe en una página', 'Si no cabe, nadie lo va a usar. El mapa que se usa vale más que el mapa completo.'],
          ['nx-g', '📊', '7 · Deja evidencia y se mide', 'Cada paso clave produce algo verificable, y el proceso tiene 1-3 métricas (¡formato VDC: fórmula, meta, frecuencia!).'],
          ['nx-b', '🤖', 'Bonus · Se automatiza', 'Regla del playbook GEN+: todo proceso repetible se convierte en plantilla, automatización o agente.'],
        ] as Array<[string, string, string, string]>).map((c, i) => (
          <article className={`nx-card ${c[0]}`} key={c[2]} style={st(i + 1)}>
            <span className="nx-ic">{c[1]}</span>
            <h3>{c[2]}</h3>
            <p>{c[3]}</p>
          </article>
        ))}
      </div>
    </>
  )
}

function Metodo() {
  return (
    <>
      <Head eyebrow="El método conversacional" title="El proceso se levanta preguntando, no dibujando"
        lead="Método real de GEN+ (plantilla de captura del Knowledge OS): 5 preguntas a quien EJECUTA el proceso — el mapa sale solo." />
      <div className="nx-grid nx-g3 up" style={st(1)}>
        {([
          ['nx-v', '❓', '1 · ¿Qué problema resuelve?', 'Y qué pasa si se hace mal. Esto define si el proceso merece mapearse.'],
          ['nx-b', '🚦', '2 · ¿Cuándo inicia y cuándo termina?', 'Los dos eventos de borde. La respuesta suele revelar que nadie lo tiene claro.'],
          ['nx-g', '👥', '3 · ¿Quién hace qué — y qué evidencia deja?', 'Persona por persona. La evidencia (correo, archivo, firma) es lo que hace auditable el mapa.'],
          ['nx-v', '📦', '4 · ¿Qué se entrega y cómo se valida?', 'Entregable + validador. Un paso sin validación es un riesgo disfrazado de avance.'],
          ['nx-b', '🔥', '5 · ¿Dónde duele?', 'El paso que siempre se atasca, el retrabajo, la espera. Ahí vive la mejora — y la automatización.'],
        ] as Array<[string, string, string, string]>).map((c, i) => (
          <article className={`nx-card ${c[0]}`} key={c[2]} style={st(i + 1)}>
            <span className="nx-ic">{c[1]}</span>
            <h3>{c[2]}</h3>
            <p>{c[3]}</p>
          </article>
        ))}
        <article className="nx-card nx-g" style={st(6)}>
          <span className="nx-ic">⚡</span>
          <h3>Y la versión con IA</h3>
          <p>Este mismo método está encapsulado en <b>GEN+ AI Process</b>: describes tu proceso conversando y la IA lo convierte en mapa con carriles, métricas y riesgos. <b>apalpan.github.io/gen-plus-ai-process</b></p>
        </article>
      </div>
    </>
  )
}

function EjemploRfi() {
  return (
    <>
      <Head eyebrow="Ejemplo 1 · técnico de obra" title="El RFI: de 12 días a 3"
        lead="Proceso real simplificado: una consulta de obra (RFI). Mapearlo reveló dos pasos que no agregaban valor." />
      <ProcessMap
        nodes={[
          { t: 'Surge la duda en campo', type: 'start' },
          { t: 'Redactar RFI con foto y ubicación en el modelo', type: 'task' },
          { t: '¿Está completa la información?', type: 'dec', no: 'regresa a campo — 40% de los RFIs rebotaban aquí' },
          { t: 'Especialista responde sobre el modelo', type: 'task' },
          { t: '¿Requiere cambio de diseño?', type: 'dec', no: 'respuesta directa al residente' },
          { t: 'Se agenda en la próxima ICE', type: 'task' },
          { t: 'Respuesta publicada en el CDE', type: 'end' },
        ]}
        caption="La mejora no fue tecnológica: fue el criterio 3 (¿información completa?) convertido en checklist de campo. Métrica del proceso: latencia de respuesta ≤ 3 días — el mismo formato de métrica VDC."
      />
    </>
  )
}

function EjemploValorizacion() {
  return (
    <>
      <Head eyebrow="Ejemplo 2 · administrativo" title="La valorización mensual, en carriles"
        lead="Nivel 3: una fila por responsable. Los carriles hacen visible lo que el flujograma esconde — las esperas entre áreas." />
      <Lanes
        lanes={[
          { role: 'Contratista', ac: 'b', steps: [
            { t: 'Medir avance en campo' }, { t: 'Elaborar valorización' }, { t: 'Presentar a supervisión' }, { t: 'Subsanar observaciones', hot: true },
          ] },
          { role: 'Supervisión', ac: 'v', steps: [
            { t: 'Revisar metrados vs avance' }, { t: '¿Conforme?', dec: true }, { t: 'Emitir conformidad' },
          ] },
          { role: 'Entidad', ac: 'g', steps: [
            { t: 'Tramitar pago' }, { t: 'Pagar (fin del proceso)' },
          ] },
        ]}
        caption="El cuello de botella vive en el ping-pong «observaciones → subsanación»: cada rebote cuesta ~5 días. La mejora VDC: metrados extraídos del modelo BIM (≥80%) reducen las observaciones de metrado casi a cero."
      />
    </>
  )
}

function EjemploIce() {
  return (
    <>
      <Head eyebrow="Ejemplo 3 · conexión VDC" title="El ciclo de coordinación BIM→ICE es un proceso mapeado"
        lead="Todo lo que vimos en el módulo 3 — dibujado como proceso. Así se documenta en un BEP." />
      <ProcessMap
        nodes={[
          { t: 'Lunes: disciplinas publican modelos en el CDE', type: 'start' },
          { t: 'Federar y correr clash detective', type: 'task' },
          { t: 'Priorizar interferencias (matriz + tolerancias)', type: 'task' },
          { t: '¿Hay críticas que requieren decisión?', type: 'dec', no: 'se resuelven por flujo normal en el CDE' },
          { t: 'Pre-read 24 h antes de la ICE', type: 'task' },
          { t: 'Sesión ICE: decidir con responsable y fecha', type: 'task' },
          { t: 'Acuerdos publicados en el CDE', type: 'end' },
        ]}
        caption="Criterios cumplidos: bordes claros (lunes → acuerdos publicados), 7 pasos, decisión sí/no, un dueño por paso, evidencia en el CDE y métricas (latencia ≤2 días, ≥80% temas resueltos). Un proceso VDC de libro."
      />
    </>
  )
}

function PromptMapa() {
  return (
    <>
      <Head eyebrow="Prompt 1 · para cualquiera, con ChatGPT" title="Genera tu mapa de procesos conversando"
        lead="Copia este prompt tal cual. Funciona en ChatGPT, Claude o Gemini — y devuelve el mapa en Mermaid, que se pega en mermaid.live, Notion u Obsidian para verlo dibujado." />
      <PromptCard
        tag="copiar y pegar"
        title="Mapeador de procesos conversacional"
        prompt={`Actúa como consultor senior de procesos en construcción. Vas a ayudarme a mapear un proceso de mi trabajo.

PASO 1 — Hazme estas 5 preguntas UNA POR UNA (espera mi respuesta antes de la siguiente):
1. ¿Qué problema resuelve este proceso y qué pasa si sale mal?
2. ¿Con qué evento inicia y con qué evento termina?
3. ¿Quién hace qué, en qué orden, y qué evidencia deja cada paso?
4. ¿Qué se entrega al final y quién lo valida?
5. ¿Dónde se atasca o duele hoy?

PASO 2 — Con mis respuestas, genera:
a) FICHA: nombre del proceso, dueño, evento de inicio, evento de fin.
b) TABLA DE PASOS: N° | actividad (verbo + objeto) | responsable | evidencia | tiempo estimado. Máximo 9 pasos.
c) DIAGRAMA en código Mermaid (flowchart LR): decisiones como rombos con pregunta sí/no, inicio y fin redondeados.
d) 3 MÉTRICAS: nombre | fórmula simple | meta sugerida | frecuencia.
e) 2 RIESGOS con su señal de alerta temprana.
f) 1 PASO AUTOMATIZABLE con IA y qué humano lo valida.

REGLAS: lenguaje simple sin jerga, verbos de acción, si algo es ambiguo pregúntame antes de asumir.`}
      />
    </>
  )
}

function PromptInfografia() {
  return (
    <>
      <Head eyebrow="Prompt 2 · comunicar el proceso" title="De ideas clave a infografía en 2 pasos"
        lead="Un mapa que nadie ve no mejora nada. Este prompt convierte tus 3-6 ideas clave en una infografía lista para generar como imagen o armar en Canva." />
      <PromptCard
        tag="copiar y pegar"
        title="Generador de infografías simples"
        prompt={`Quiero convertir estas ideas clave en una infografía simple y profesional:

[PEGA AQUÍ TUS 3-6 IDEAS CLAVE — por ejemplo, los pasos y métricas del mapa de procesos que generamos]

PASO 1 — Propón primero la ESTRUCTURA en texto y espera mi OK:
- Titular: máximo 8 palabras, con el beneficio o el número más fuerte.
- Subtítulo: 1 línea de contexto.
- 3 a 5 bloques: cada uno con ícono sugerido + título corto + dato o frase de máximo 12 palabras.
- Jerarquía: dime qué va más grande y qué es secundario.
- Cierre: 1 conclusión o llamado a la acción.

PASO 2 — Cuando apruebe la estructura:
- Genera la infografía como IMAGEN en formato vertical 4:5.
- Estilo: fondo azul marino oscuro (#0E1121), acentos violeta y verde, tipografía sans limpia, íconos de línea, mucho espacio en blanco, cero saturación de texto.
- Alternativa: si no puedes generar imágenes, dame las instrucciones exactas por bloque para armarla en Canva (posición, tamaño, color).

REGLA DE ORO: una idea por bloque. Si un bloque necesita un párrafo, se parte en dos o se elimina.`}
      />
    </>
  )
}

export const m6b: Entry[] = [
  {
    id: 'm7-div', num: '', title: 'Módulo 07 · Mapeo de procesos',
    node: <SectionSlide eyebrow="Módulo 07 · taller" title={<>Mapear procesos:<br />ver antes de mejorar</>}
      lead="No puedes mejorar —ni automatizar, ni ponerle IA— a lo que no puedes ver. El taller exprés para dibujar cualquier proceso en simple."
      chips={['SIPOC → carriles', '7 criterios', '3 ejemplos', '2 prompts IA']} />,
    note: 'Taller exprés antes del cierre. Motivación: en el módulo 2 vimos el modelo POP — Producto lo modela BIM, Organización la define el organigrama… ¿y el Proceso? Casi nadie lo dibuja. Además, la regla del playbook GEN+: todo proceso repetible debe convertirse en plantilla, automatización o agente — pero primero hay que verlo.',
  },
  {
    id: 'pm-quees', num: '41', title: 'Qué es un mapa de procesos', node: <QueEs />,
    note: 'La definición desarmada: un dibujo de quién hace qué y en qué orden. Recorre los 5 elementos sobre el diagrama: evento de inicio (óvalo), actividades con verbo (rectángulo), decisión como pregunta sí/no (rombo), entregable con evidencia, evento de fin. Test de calidad: si un practicante lo entiende en 60 segundos, está bien hecho. Conexión VDC: es la P de Proceso del modelo POP.',
  },
  {
    id: 'pm-niveles', num: '42', title: 'Los 3 niveles de zoom', node: <Niveles />,
    note: 'La escalera: SIPOC (macro, 5 columnas, acuerda el alcance) → flujograma (orden y decisiones, para entender) → carriles/swimlanes (quién hace qué, para mejorar). Error clásico que hay que nombrar: empezar por el detalle. Referencia interna: el flujo AMSAC del módulo 3 era nivel 3 con carriles.',
  },
  {
    id: 'pm-criterios', num: '43', title: 'Los 7 criterios', node: <Criterios />,
    note: 'El checklist auditable — espejo del ejercicio del BEP: bordes claros, 5-9 pasos, decisiones sí/no, un dueño por paso, verbos de acción, cabe en una página, deja evidencia y se mide (¡con el formato de métrica VDC!). Y el bonus del playbook GEN+: todo proceso repetible → plantilla, automatización o agente. Anuncia que los ejemplos que siguen se auditan con estos criterios.',
  },
  {
    id: 'pm-metodo', num: '44', title: 'El método conversacional', node: <Metodo />,
    note: 'El secreto: el proceso se levanta PREGUNTANDO a quien lo ejecuta, no dibujando en gabinete. Las 5 preguntas de la plantilla de captura GEN+ (problema, bordes, quién/evidencia, entregable/validación, dónde duele). Y presenta la app GEN+ AI Process: el mismo método, conversando con IA — mapa con carriles, métricas y riesgos en minutos. Demo de 1 minuto si hay internet.',
  },
  {
    id: 'pm-ej-rfi', num: '45', title: 'Ejemplo 1 · El RFI', node: <EjemploRfi />,
    note: 'Ejemplo técnico: el RFI de obra en 7 pasos con 2 decisiones. La historia: 40% de los RFIs rebotaban por información incompleta — mapearlo lo hizo visible y un checklist de campo lo arregló; la latencia bajó de ~12 a ~3 días. Moraleja: la mejora salió del MAPA, no de comprar software. Y la métrica del proceso usa el formato VDC.',
  },
  {
    id: 'pm-ej-valorizacion', num: '46', title: 'Ejemplo 2 · La valorización', node: <EjemploValorizacion />,
    note: 'Ejemplo administrativo en carriles: contratista / supervisión / entidad. Señala el cuello de botella real: el ping-pong observaciones-subsanación (~5 días por rebote). Conexión VDC: metrados extraídos del modelo (≥80%, métrica M09 del módulo 3) eliminan las observaciones de metrado. Pregunta a la sala: ¿en su empresa cuántos días toma una valorización?',
  },
  {
    id: 'pm-ej-ice', num: '47', title: 'Ejemplo 3 · El ciclo BIM→ICE', node: <EjemploIce />,
    note: 'El ejemplo que cierra el círculo: todo el ciclo de coordinación del módulo 3, dibujado como proceso de 7 pasos. Audítalo en vivo contra los 7 criterios con la sala (cumple todos). Mensaje: así se documenta un proceso dentro de un BEP — el flujo AMSAC y el clash control de Megantoni son exactamente esto.',
  },
  {
    id: 'pm-prompt-mapa', num: '48', title: 'Prompt 1 · Tu mapa con ChatGPT', node: <PromptMapa />,
    note: 'El regalo práctico #1: prompt copiable (botón en pantalla) que replica el método conversacional — 5 preguntas una por una y devuelve ficha + tabla + diagrama Mermaid + métricas + riesgos + paso automatizable. Explica Mermaid en una frase: código que se pega en mermaid.live, Notion u Obsidian y se dibuja solo. Tarea sugerida: mapear un proceso propio esta semana con este prompt.',
  },
  {
    id: 'pm-prompt-info', num: '49', title: 'Prompt 2 · La infografía', node: <PromptInfografia />,
    note: 'El regalo práctico #2: de las ideas clave a una infografía en 2 pasos — primero estructura en texto (titular ≤8 palabras, 3-5 bloques con ícono, jerarquía, cierre) y recién después la imagen (o instrucciones para Canva). Regla de oro: una idea por bloque. Cierre del taller: mapa + infografía = el proceso se entiende y se comunica; recién entonces se automatiza.',
  },
]
