# VDC · Virtual Design and Construction — Masterclass AECODE

Masterclass interactiva de 3 horas del **Diplomado BIM·Lean·BI·IA (AECODE Training)**, dictada por **Alejandro Palpan** (Certificado & Mentor VDC — Stanford; PM en GEN+).

**Live:** https://apalpan.github.io/aecode-vdc-masterclass/

## La clase

71 diapositivas en 9 módulos — marco **Stanford CIFE** aterrizado al Perú con el **Hospital de Megantoni** (Camisea, Cusco) como caso vivo:

| Módulo | Contenido | Franja |
|---|---|---|
| Apertura | La industria en números (McKinsey, NIST, PlanGrid/FMI) | 0:00–0:14 |
| 01 · El problema | Retrabajo, latencia y expedientes rotos — con casos reales | 0:14–0:28 |
| 02 · Canon Stanford | Definición canónica, POP, cascada CO→PO→ProdO→FC, ICE (Team X/NASA), PPM, Scorecard | 0:28–1:00 |
| 03 · Tres pilares | Sesión ICE 90', clash management, CDE ISO 19650, Last Planner, 15 métricas | 1:00–1:36 |
| — pausa 10' — | | 1:36–1:46 |
| 04 · Caso Megantoni | Plan VDC real + **auditoría de BEP en vivo** (5 errores reales) | 1:46–2:17 |
| 05 · VDC en el Perú | Plan BIM Perú (hito ago-2026), ISO 19650 NTP, Ulima×Stanford, casos GEN+ | 2:17–2:39 |
| 06 · VDC + IA | Evidencia por capas: clash ML, reality capture, scheduling generativo | 2:39–2:49 |
| 07 · Mapeo de procesos | Taller exprés: símbolos, 3 niveles de zoom, 7 criterios, 3 ejemplos (RFI, valorización, ciclo BIM→ICE) y **2 prompts IA copiables** (mapa + infografía), alineado a GEN+ AI Process | 2:49–3:09 |
| Cierre | Entregable (Plan VDC propio), flip-cards de repaso, fuentes con confianza | 3:09–3:20 |

## Interacción

- **⚡ 7 flashes**: quiz, dato, frase y debate — se resetean al salir del slide.
- **🔍 Auditoría de BEP en vivo**: 6 tarjetas clicables (5 errores reales del BEP v01).
- **🃏 Flip-cards** de repaso con volteo 3D.
- **🤖 2 prompts IA con botón copiar**: mapa de procesos conversacional (salida Mermaid) e infografía en 2 pasos.
- **🎤 Modo presentador** (tecla `N`): guion completo + cronómetro de 3 h 20 + franja por slide.
- **▦ Índice** (tecla `G`) con búsqueda y salto por módulos (select en la barra).
- Deep-linking por hash (`#/vdc/25`), tema oscuro/claro AECODE, swipe táctil.

## Stack

Vite + React 18 + TypeScript. Identidad oficial AECODE (navy `#0E1121`, tri-acento violeta/azul/verde, Manrope + Inter, OKLCH). Sin librerías de charts: SVG/CSS puro.

```bash
npm install
npm run dev        # desarrollo
npm run typecheck  # tsc --noEmit
npm run build      # dist/
```

Deploy: GitHub Actions → GitHub Pages en cada push a `main`.

## Fuentes

Todo dato citado lleva fuente y nivel de confianza (alta/media/baja) — ver módulo final. Canon: Kunz & Fischer (CIFE WP097/2012, CM&E 2020), Chachere-Kunz-Levitt (WP087/WP116), Kam et al. (VDC Scorecard). Evidencia: McKinsey 2016/2017, NIST 2004, PlanGrid+FMI 2018, DBIA 2024, IGLC 33 (2025). Perú: D.S. 289-2019-EF, D.S. 108-2021-EF, Guía Nacional BIM (R.D. 0003-2023), NTP-ISO 19650. Documentos de proyecto: GEN+ (Plan VDC/BEP Megantoni, formato ICE, 15 métricas, PEBs de túneles y puentes).
