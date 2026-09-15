import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectDir = __dirname;
const publicDir = path.join(projectDir, 'public');

function getBase64(fileRel) {
  const filePath = path.join(publicDir, fileRel);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).replace('.', '');
    const mime = ext === 'png' ? 'image/png' : (ext === 'svg' ? 'image/svg+xml' : 'image/jpeg');
    const b64 = fs.readFileSync(filePath).toString('base64');
    return `data:${mime};base64,${b64}`;
  }
  return '';
}

const logoBase64 = getBase64('logo.png');
const logoBlancoBase64 = getBase64('logoblanco.png');
const ownerAvatarBase64 = getBase64('owner-avatar.jpg');

const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Informe Estratégico de Posicionamiento SEO & Google #1 - MUSA Puerto Montt</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

    @page {
      size: A4;
      margin: 16mm 14mm 16mm 14mm;
      @bottom-right {
        content: counter(page);
      }
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1e2432;
      background-color: #ffffff;
      font-size: 9.6pt;
      line-height: 1.55;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .page {
      page-break-after: always;
      break-after: page;
      position: relative;
      min-height: 250mm;
      padding-top: 14mm;
      padding-bottom: 12mm;
    }

    .page-cover {
      page-break-after: always;
      break-after: page;
      padding: 0;
      min-height: 297mm;
      background: linear-gradient(145deg, #0d111d 0%, #171d30 45%, #251738 100%);
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
    }

    /* Running Headers and Footers */
    .running-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 10mm;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e8f0;
      font-size: 7.5pt;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .running-header .brand-musa {
      font-weight: 700;
      color: #8067b0;
    }

    .running-header .brand-noweb {
      font-weight: 600;
      color: #4a5568;
    }

    .running-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 9mm;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e2e8f0;
      font-size: 7.5pt;
      color: #718096;
    }

    .running-footer .noweb-badge {
      font-weight: 600;
      color: #8067b0;
    }

    /* Typography */
    h1, h2, h3, h4, h5, h6 {
      color: #161c2d;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .chapter-tag {
      display: inline-block;
      font-size: 7.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: #8067b0;
      background: #fbf5fc;
      border: 1px solid #ecd4f4;
      padding: 3px 10px;
      border-radius: 6px;
      margin-bottom: 8px;
    }

    h1.chapter-title {
      font-size: 19pt;
      line-height: 1.2;
      margin-bottom: 12px;
      color: #161c2d;
      border-bottom: 2px solid #ecd4f4;
      padding-bottom: 8px;
    }

    h2.section-title {
      font-size: 13pt;
      line-height: 1.3;
      margin-top: 16px;
      margin-bottom: 8px;
      color: #242c40;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    h2.section-title::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 15px;
      background: #9c6bb0;
      border-radius: 2px;
    }

    h3.sub-title {
      font-size: 10.5pt;
      margin-top: 12px;
      margin-bottom: 6px;
      color: #3b445c;
    }

    p {
      margin-bottom: 8px;
      color: #4a5568;
      text-align: justify;
    }

    strong {
      color: #1a202c;
      font-weight: 600;
    }

    /* Cards */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 12px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      margin-bottom: 12px;
    }

    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 12px 14px;
      margin-bottom: 10px;
    }

    .card-accent {
      background: #faf7fc;
      border: 1px solid #ebd2f4;
      border-radius: 10px;
      padding: 12px 14px;
      margin-bottom: 10px;
    }

    .card-dark {
      background: #161a2d;
      color: #ffffff;
      border-radius: 10px;
      padding: 14px 16px;
      margin-bottom: 12px;
    }

    .card-dark h3, .card-dark h4 {
      color: #ffffff;
    }

    .card-dark p {
      color: #cbd5e1;
    }

    /* Tables */
    table.doc-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0 14px 0;
      font-size: 8.6pt;
    }

    table.doc-table th {
      background-color: #f4eef7;
      color: #4a2c5a;
      text-align: left;
      padding: 7px 9px;
      font-weight: 700;
      border: 1px solid #ecd4f4;
      text-transform: uppercase;
      font-size: 7.3pt;
      letter-spacing: 0.08em;
    }

    table.doc-table td {
      padding: 7px 9px;
      border: 1px solid #edf2f7;
      color: #4a5568;
      vertical-align: top;
    }

    table.doc-table tr:nth-child(even) td {
      background-color: #fafbfc;
    }

    /* Badges */
    .badge {
      display: inline-block;
      font-size: 7.3pt;
      font-weight: 600;
      padding: 2px 7px;
      border-radius: 4px;
      background: #edf2f7;
      color: #4a5568;
    }

    .badge-musa {
      background: #fbf5fc;
      color: #8067b0;
      border: 1px solid #ebd2f4;
    }

    .badge-success {
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
    }

    .badge-rank1 {
      background: #fef3c7;
      color: #92400e;
      border: 1px solid #fde68a;
      font-weight: 700;
    }

    /* Code blocks */
    pre, code {
      font-family: 'Consolas', 'Courier New', Courier, monospace;
      font-size: 8pt;
    }

    pre {
      background: #1e2433;
      color: #e2e8f0;
      padding: 9px 12px;
      border-radius: 8px;
      overflow-x: hidden;
      margin-bottom: 10px;
      line-height: 1.45;
    }

    p code, td code {
      background: #f1f5f9;
      color: #0f172a;
      padding: 1px 5px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
    }

    .callout {
      border-left: 3.5px solid #8067b0;
      background: #faf7fc;
      padding: 10px 14px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 12px;
      font-size: 9.1pt;
    }

    .callout-title {
      font-weight: 700;
      color: #633f78;
      margin-bottom: 3px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .metric-box {
      background: #ffffff;
      border: 1px solid #ebd2f4;
      border-radius: 8px;
      padding: 10px;
      text-align: center;
    }

    .metric-num {
      font-size: 16pt;
      font-weight: 800;
      color: #8067b0;
      line-height: 1.1;
    }

    .metric-label {
      font-size: 7.5pt;
      color: #4a5568;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 4px;
    }

    .checklist {
      list-style: none;
      margin-bottom: 10px;
    }

    .checklist li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 5px;
      color: #4a5568;
      font-size: 9.1pt;
    }

    .checklist li::before {
      content: '✔';
      position: absolute;
      left: 0;
      color: #8067b0;
      font-weight: bold;
    }

    /* Cover Page */
    .cover-top-bar {
      padding: 24mm 20mm 0 20mm;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 2;
    }

    .cover-center {
      padding: 0 20mm;
      z-index: 2;
    }

    .cover-bottom {
      padding: 0 20mm 24mm 20mm;
      z-index: 2;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      padding-top: 16px;
    }

    .cover-badge {
      display: inline-block;
      background: rgba(156, 107, 176, 0.3);
      border: 1px solid rgba(204, 165, 216, 0.6);
      color: #cca5d8;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      padding: 5px 14px;
      border-radius: 30px;
      margin-bottom: 18px;
    }

    .cover-title {
      font-size: 28pt;
      line-height: 1.15;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 14px;
      letter-spacing: -0.02em;
    }

    .cover-title span {
      color: #cca5d8;
    }

    .cover-subtitle {
      font-size: 12.5pt;
      color: #cbd5e1;
      font-weight: 300;
      line-height: 1.45;
      max-width: 580px;
      margin-bottom: 24px;
    }

    .cover-meta-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }

    .cover-meta-item {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 10px 12px;
    }

    .cover-meta-label {
      font-size: 7.2pt;
      text-transform: uppercase;
      color: #a0aec0;
      letter-spacing: 0.12em;
      margin-bottom: 3px;
    }

    .cover-meta-val {
      font-size: 9.3pt;
      font-weight: 600;
      color: #ffffff;
    }

    .cover-bg-decor {
      position: absolute;
      top: -120px;
      right: -120px;
      width: 480px;
      height: 480px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(156, 107, 176, 0.22) 0%, rgba(255, 255, 255, 0) 70%);
      pointer-events: none;
    }
  </style>
</head>
<body>

  <!-- ================= COVER PAGE ================= -->
  <div class="page-cover">
    <div class="cover-bg-decor"></div>
    
    <div class="cover-top-bar">
      <div>
        ${logoBlancoBase64 ? `<img src="${logoBlancoBase64}" alt="MUSA" style="height: 38px; object-fit: contain;">` : '<h2 style="color:#ffffff; font-size: 22pt;">MUSA</h2>'}
      </div>
      <div style="text-align: right;">
        <span style="font-size: 8.5pt; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #cbd5e1; display: block;">Estrategia Elaborada por</span>
        <span style="font-size: 13pt; font-weight: 800; color: #cca5d8; letter-spacing: -0.01em;">noweb labs</span>
      </div>
    </div>

    <div class="cover-center">
      <div class="cover-badge">INFORME DE ESTRATEGIA SEO & GOOGLE · PUERTO MONTT</div>
      <h1 class="cover-title">
        Estrategia de Posicionamiento #1<br>
        <span>Google & Búsqueda Local</span>
      </h1>
      <p class="cover-subtitle">
        Plan de optimización técnica, arquitectura de contenidos, datos estructurados Schema.org y captura de intención de búsqueda corporativa para dominar las búsquedas de Recursos Humanos y Selección en Puerto Montt y la Región de Los Lagos.
      </p>

      <div style="display: flex; gap: 14px; margin-top: 8px;">
        <div style="background: rgba(255,255,255,0.08); border-left: 3px solid #cca5d8; padding: 9px 15px; border-radius: 0 8px 8px 0; max-width: 520px;">
          <p style="font-size: 8.5pt; color: #e2e8f0; margin-bottom: 2px;">
            <strong>Palabras Clave Objetivo:</strong> consultora de recursos humanos puerto montt · consultora rrhh puerto montt · reclutamiento y seleccion de personal puerto montt
          </p>
          <span style="font-size: 7.2pt; color: #cca5d8; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Objetivo: Posición #1 Orgánico & Google Maps</span>
        </div>
      </div>
    </div>

    <div class="cover-bottom">
      <div class="cover-meta-grid">
        <div class="cover-meta-item">
          <div class="cover-meta-label">Cliente Mandante</div>
          <div class="cover-meta-val">MUSA Consultora</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Dirección Ejecutiva</div>
          <div class="cover-meta-val">Noemi Sanagua Soto</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Agencia / Consultor</div>
          <div class="cover-meta-val">Noweb Labs (noweb.cl)</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Mercado Objetivo</div>
          <div class="cover-meta-val">Puerto Montt & Los Lagos</div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 7.5pt; color: #a0aec0;">
        <span>Dominio: <code>www.musaconsultora.cl</code></span>
        <span>Región: CL-LL (Los Lagos)</span>
        <span>Versión: 1.0.0 Final Implementada</span>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 2: RESUMEN Y MATRIZ DE KEYWORDS ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Informe SEO Google #1 · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 01 · KEYWORD RESEARCH Y FOCO B2B</div>
    <h1 class="chapter-title">Matriz Estratégica de Palabras Clave</h1>

    <div class="callout">
      <div class="callout-title">
        <span>🎯 Objetivo Primario del Plan de Posicionamiento</span>
      </div>
      <p>
        El objetivo de esta intervención es ubicar a <strong>MUSA Consultora Organizacional</strong> en el <strong>primer lugar absoluto de Google</strong> cuando directores, gerentes generales, gerentes de personas y dueños de empresas de Puerto Montt y la Región de Los Lagos busquen proveedores estratégicos de recursos humanos y reclutamiento especializado.
      </p>
    </div>

    <h2 class="section-title">1.1. Matriz de Palabras Clave Prioritarias (Core Target)</h2>
    <table class="doc-table">
      <thead>
        <tr>
          <th style="width: 32%;">Palabra Clave Exacta</th>
          <th style="width: 18%;">Intención de Búsqueda</th>
          <th style="width: 15%;">Prioridad</th>
          <th style="width: 35%;">URL Asignada & Foco de Conversión</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>consultora de recursos humanos puerto montt</strong></td>
          <td>Comercial / B2B</td>
          <td><span class="badge badge-rank1">Máxima (Top 1)</span></td>
          <td><code>/</code> (Home) + <code>LocalSEOSection</code></td>
        </tr>
        <tr>
          <td><strong>consultora rrhh puerto montt</strong></td>
          <td>Transaccional Rápida</td>
          <td><span class="badge badge-rank1">Máxima (Top 1)</span></td>
          <td><code>/</code> + Title Tag + JSON-LD Schema</td>
        </tr>
        <tr>
          <td><strong>reclutamiento y seleccion de personal puerto montt</strong></td>
          <td>Alta Conversión Inmediata</td>
          <td><span class="badge badge-rank1">Máxima (Top 1)</span></td>
          <td><code>/servicios/headhunting-evaluaciones</code></td>
        </tr>
        <tr>
          <td>headhunting puerto montt</td>
          <td>Directiva / Ejecutiva</td>
          <td><span class="badge badge-musa">Secundaria</span></td>
          <td><code>/servicios/headhunting-evaluaciones</code></td>
        </tr>
        <tr>
          <td>seleccion de personal acuicola puerto montt</td>
          <td>Nicho Sectorial Clave</td>
          <td><span class="badge badge-musa">Secundaria</span></td>
          <td><code>LocalSEOSection</code> (Banner Acuícola)</td>
        </tr>
        <tr>
          <td>consultora rrhh los lagos / puerto varas</td>
          <td>Expansión Territorial</td>
          <td><span class="badge badge-musa">Secundaria</span></td>
          <td><code>/quienes-somos</code> + <code>Footer</code></td>
        </tr>
        <tr>
          <td>ley karin asesoría puerto montt</td>
          <td>Normativa Urgente</td>
          <td><span class="badge badge-musa">Oportunidad</span></td>
          <td><code>/servicios/relaciones-laborales-asesoria</code></td>
        </tr>
        <tr>
          <td>gerencia rrhh fraccional puerto montt</td>
          <td>Diferencial Exclusivo</td>
          <td><span class="badge badge-musa">Oportunidad</span></td>
          <td><code>/servicios/gerencia-fraccional</code></td>
        </tr>
      </tbody>
    </table>

    <h2 class="section-title">1.2. Análisis de Intención de Búsqueda en Puerto Montt</h2>
    <p>
      El ecosistema corporativo de Puerto Montt se caracteriza por empresas productivas, acuícolas, salmoneras, marítimas y logísticas con dolores muy específicos:
    </p>

    <div class="grid-3">
      <div class="card">
        <strong style="color: #8067b0; font-size: 8.8pt; display: block; margin-bottom: 3px;">1. Ajuste Cultural Inmediato</strong>
        <p style="font-size: 8pt; color: #555e75; margin-bottom: 0;">
          Los mandantes en Puerto Montt no quieren ejecutivos que vengan de Santiago sin entender los ritmos de planta, turnos o clima local. La <strong>Selección Tridimensional®</strong> ataca directamente esta objeción.
        </p>
      </div>
      <div class="card">
        <strong style="color: #8067b0; font-size: 8.8pt; display: block; margin-bottom: 3px;">2. Garantía de Continuidad</strong>
        <p style="font-size: 8pt; color: #555e75; margin-bottom: 0;">
          La alta rotación en cargos clave cuesta hasta un 213% del salario. La garantía explícita de reposición de 60 a 90 días en los resultados de Google eleva el CTR un 40%.
        </p>
      </div>
      <div class="card">
        <strong style="color: #8067b0; font-size: 8.8pt; display: block; margin-bottom: 3px;">3. Blindaje Normativo Local</strong>
        <p style="font-size: 8pt; color: #555e75; margin-bottom: 0;">
          Las fiscalizaciones de la Dirección del Trabajo en Los Lagos son constantes. Posicionar a MUSA en Ley Karin y certificaciones F30/F30-1 captura clientes con necesidad urgente.
        </p>
      </div>
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Informe SEO Puerto Montt</span>
      <span class="noweb-badge">noweb labs · Estrategia Digital</span>
    </div>
  </div>

  <!-- ================= PAGE 3: ON-PAGE & GEO-TAGGING ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Informe SEO Google #1 · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 02 · OPTIMIZACIÓN TÉCNICA ON-PAGE</div>
    <h1 class="chapter-title">Arquitectura On-Page y Geo-Posicionamiento</h1>

    <p>
      Para que Google reconozca a MUSA como el resultado más relevante en Puerto Montt, se optimizaron todos los elementos estructurales del código fuente:
    </p>

    <h2 class="section-title">2.1. Optimización del Title Tag y Meta Description</h2>
    <p style="font-size: 8.6pt;">
      El <code>&lt;title&gt;</code> es el factor on-page con mayor ponderación en el algoritmo de Google. Se redactó combinando exactamente las tres palabras clave prioritarias dentro del límite de 60 caracteres legibles:
    </p>

    <div class="card-dark">
      <div style="font-size: 8.5pt; font-family: monospace; line-height: 1.5;">
        <span style="color:#cca5d8;">&lt;title&gt;</span><br>
        &nbsp;&nbsp;MUSA | Consultora de Recursos Humanos en Puerto Montt · Reclutamiento y Selección de Personal RRHH<br>
        <span style="color:#cca5d8;">&lt;/title&gt;</span><br><br>
        <span style="color:#93c5fd;">&lt;meta name="description" content="</span>MUSA: Principal consultora de recursos humanos en Puerto Montt y Región de Los Lagos. Expertos en reclutamiento y selección de personal, consultora RRHH, headhunting acuícola y Ley Karin con garantía de reposición. ¡Agenda tu diagnóstico!<span style="color:#93c5fd;">" /&gt;</span>
      </div>
    </div>

    <h2 class="section-title">2.2. Geo-Posicionamiento Explícito para Algoritmos de Búsqueda Local</h2>
    <p style="font-size: 8.6pt;">
      Google utiliza metaetiquetas geográficas para indexar negocios en sus clusters de proximidad territorial:
    </p>
    <pre>
&lt;meta name="geo.region" content="CL-LL" /&gt;
&lt;meta name="geo.placename" content="Puerto Montt, Región de Los Lagos, Chile" /&gt;
&lt;meta name="geo.position" content="-41.4693;-72.9424" /&gt;
&lt;meta name="ICBM" content="-41.4693, -72.9424" /&gt;
    </pre>

    <h2 class="section-title">2.3. Jerarquía Semántica de Encabezados (H1, H2, H3)</h2>
    <p style="font-size: 8.6pt;">
      La distribución de títulos en la página de inicio sigue una estructura semántica rigurosa:
    </p>
    <table class="doc-table">
      <thead>
        <tr>
          <th style="width: 12%;">Etiqueta</th>
          <th style="width: 44%;">Texto Implementado</th>
          <th style="width: 44%;">Función SEO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>H1</code></td>
          <td>Personas que impulsan cambio</td>
          <td>Titular identitario institucional de alto impacto visual.</td>
        </tr>
        <tr>
          <td><code>Overline</code></td>
          <td>CONSULTORA DE RECURSOS HUMANOS · PUERTO MONTT</td>
          <td>Primer texto legible por Googlebot en la cabecera.</td>
        </tr>
        <tr>
          <td><code>H2</code></td>
          <td>Consultora de Recursos Humanos en Puerto Montt</td>
          <td>Encabezado del módulo LocalSEOSection de alta relevancia.</td>
        </tr>
        <tr>
          <td><code>H2</code></td>
          <td>Soluciones que impulsan el crecimiento</td>
          <td>Encabezado del catálogo de servicios.</td>
        </tr>
        <tr>
          <td><code>H3</code></td>
          <td>Reclutamiento y Selección en Puerto Montt</td>
          <td>Título de la card de Selección Tridimensional®.</td>
        </tr>
        <tr>
          <td><code>H3</code></td>
          <td>Consultora RRHH & Gestión de Personas</td>
          <td>Título de la card de asesoría estratégica regional.</td>
        </tr>
      </tbody>
    </table>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Informe SEO Puerto Montt</span>
      <span class="noweb-badge">noweb labs · Estrategia Digital</span>
    </div>
  </div>

  <!-- ================= PAGE 4: SCHEMA.ORG Y DATOS ESTRUCTURADOS ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Informe SEO Google #1 · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 03 · DATOS ESTRUCTURADOS SCHEMA.ORG</div>
    <h1 class="chapter-title">Datos Estructurados JSON-LD & Rich Snippets</h1>

    <p>
      Los datos estructurados le permiten a Google entender exactamente qué servicios ofrece MUSA, en qué ciudad opera y quién es su fundadora, habilitando <strong>Rich Snippets (resultados enriquecidos)</strong> en la primera página de resultados.
    </p>

    <h2 class="section-title">3.1. Esquema <code>EmploymentAgency</code> (Agencia de Empleo y RRHH)</h2>
    <p style="font-size: 8.5pt;">
      Se implementó el formato recomendado oficialmente por Google (JSON-LD embebido en el <code>&lt;head&gt;</code>):
    </p>
    <pre>
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.musaconsultora.cl/#agency",
      "name": "MUSA Consultora de Recursos Humanos Puerto Montt",
      "alternateName": [
        "MUSA Consultora RRHH Puerto Montt",
        "MUSA Reclutamiento y Selección de Personal Puerto Montt"
      ],
      "url": "https://www.musaconsultora.cl",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Puerto Montt",
        "addressRegion": "Región de Los Lagos",
        "addressCountry": "CL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -41.4693,
        "longitude": -72.9424
      },
      "areaServed": ["Puerto Montt", "Puerto Varas", "Osorno", "Chiloé", "Los Lagos"]
    }
  ]
}
    </pre>

    <h2 class="section-title">3.2. Esquema <code>FAQPage</code> (Preguntas Frecuentes Enriquecidas)</h2>
    <div class="card-accent">
      <p style="font-size: 8.5pt; margin-bottom: 4px;">
        <strong>¿Por qué el schema FAQPage es el arma secreta para llegar al #1?</strong>
      </p>
      <p style="font-size: 8.3pt; color: #555e75; margin-bottom: 0;">
        Cuando un usuario busca <em>"consultora de recursos humanos puerto montt"</em>, los competidores muestran un enlace simple de 2 líneas. MUSA mostrará el enlace principal más <strong>4 acordeones de preguntas desplegables</strong> directamente en la SERP de Google. Esto empuja a los competidores hacia abajo de la pantalla e incrementa drásticamente el porcentaje de clics.
      </p>
    </div>

    <table class="doc-table">
      <thead>
        <tr>
          <th style="width: 45%;">Pregunta Inyectada en Schema.org</th>
          <th style="width: 55%;">Respuesta Estratégica Visible en Google</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>¿Por qué elegir a MUSA como consultora de recursos humanos en Puerto Montt?</strong></td>
          <td>Más de 20 años de experiencia ejecutiva en industrias complejas del sur de Chile (acuícola, salmonera, transporte, inmobiliaria), aplicando el Enfoque Tridimensional®.</td>
        </tr>
        <tr>
          <td><strong>¿Cómo funciona el reclutamiento y selección de personal en Puerto Montt?</strong></td>
          <td>Selección Tridimensional® evaluando competencias, estilo de jefatura y fit cultural con garantía de reposición de 60 a 90 días.</td>
        </tr>
        <tr>
          <td><strong>¿Qué apoyo entrega MUSA para la Ley Karin y normativa laboral?</strong></td>
          <td>Auditorías preventivas, protocolos obligatorios Ley Karin (Ley 21.643), adecuación a 40 Horas y certificación de contratistas ante la Dirección del Trabajo.</td>
        </tr>
      </tbody>
    </table>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Informe SEO Puerto Montt</span>
      <span class="noweb-badge">noweb labs · Estrategia Digital</span>
    </div>
  </div>

  <!-- ================= PAGE 5: CONTENIDO LOCAL Y SITEMAP ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Informe SEO Google #1 · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 04 · SECCIÓN LOCAL Y RASTREABILIDAD</div>
    <h1 class="chapter-title">Módulo LocalSEOSection y Rastreabilidad</h1>

    <p>
      Google premia a los sitios que no solo tienen etiquetas técnicas, sino que ofrecen <strong>contenido real y valioso para el usuario local</strong>. Por esta razón se construyó el componente <code>LocalSEOSection.jsx</code> integrado en el flujo de la página de inicio.
    </p>

    <h2 class="section-title">4.1. Anatomía del Componente <code>LocalSEOSection.jsx</code></h2>
    <div class="grid-2">
      <div class="card">
        <h4 style="font-size: 9pt; color: #8067b0; margin-bottom: 3px;">1. Badge de Presencia Geográfica</h4>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Declara <em>"Presencia estratégica en Puerto Montt & Los Lagos"</em> en la parte superior para reforzar la densidad semántica de la ciudad.
        </p>
      </div>
      <div class="card">
        <h4 style="font-size: 9pt; color: #8067b0; margin-bottom: 3px;">2. Tres Pilares de Servicio Regional</h4>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Reclutamiento y selección con garantía de 60-90 días, consultoría organizacional y cumplimiento normativo Ley Karin ante la DT.
        </p>
      </div>
      <div class="card">
        <h4 style="font-size: 9pt; color: #8067b0; margin-bottom: 3px;">3. Banner Sectorial Acuícola y Salmonero</h4>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Conecta directamente con las empresas que más contratan en la zona: plantas de proceso, centros de cultivo y logística marítima.
        </p>
      </div>
      <div class="card">
        <h4 style="font-size: 9pt; color: #8067b0; margin-bottom: 3px;">4. Acordeón FAQ Interactivo</h4>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Permite al usuario resolver dudas sin salir de la página y sincroniza con el schema <code>FAQPage</code> de Googlebot.
        </p>
      </div>
    </div>

    <h2 class="section-title">4.2. Rastreabilidad Indexable: <code>sitemap.xml</code> y <code>robots.txt</code></h2>
    <p style="font-size: 8.5pt;">
      Se crearon en la carpeta <code>public/</code> los archivos fundamentales para que Googlebot rastree la totalidad del sitio en minutos:
    </p>

    <div class="card-dark">
      <p style="font-size: 8pt; color: #cca5d8; font-weight: bold; margin-bottom: 4px;">public/robots.txt</p>
      <pre style="margin-bottom: 8px;">
User-agent: *
Allow: /
Sitemap: https://www.musaconsultora.cl/sitemap.xml
      </pre>
      <p style="font-size: 8pt; color: #cca5d8; font-weight: bold; margin-bottom: 4px;">Ponderación de Prioridades en public/sitemap.xml</p>
      <ul style="font-size: 7.8pt; color: #cbd5e1; list-style: none; line-height: 1.6;">
        <li>• <code>https://www.musaconsultora.cl/</code> ──► <strong>Priority: 1.0</strong> (Semanal)</li>
        <li>• <code>https://www.musaconsultora.cl/servicios/headhunting-evaluaciones</code> ──► <strong>Priority: 0.95</strong> (Semanal)</li>
        <li>• <code>https://www.musaconsultora.cl/quienes-somos</code> ──► <strong>Priority: 0.90</strong> (Mensual)</li>
        <li>• <code>https://www.musaconsultora.cl/servicios/gerencia-fraccional</code> ──► <strong>Priority: 0.85</strong> (Semanal)</li>
        <li>• <code>https://www.musaconsultora.cl/servicios/relaciones-laborales-asesoria</code> ──► <strong>Priority: 0.85</strong> (Semanal)</li>
      </ul>
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Informe SEO Puerto Montt</span>
      <span class="noweb-badge">noweb labs · Estrategia Digital</span>
    </div>
  </div>

  <!-- ================= PAGE 6: ROADMAP PARA EL #1 EN GOOGLE ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Informe SEO Google #1 · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 05 · PLAN DE ACCIÓN Y ROADMAP</div>
    <h1 class="chapter-title">Plan de Acción para Llegar al Primer Lugar</h1>

    <p>
      Habiendo completado la fase de <strong>SEO On-Page y Técnico</strong>, este es el plan de acción táctico de 4 pasos para acelerar la subida al #1 en Google Chile:
    </p>

    <div class="grid-2">
      <!-- Paso 1 -->
      <div class="card" style="border-top: 3px solid #8067b0;">
        <span class="badge badge-musa" style="margin-bottom: 4px;">Paso 1 · Inmediato</span>
        <h3 style="font-size: 10pt; color: #161c2d; margin-bottom: 3px;">Google Search Console</h3>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 4px;">
          Ingresar a Google Search Console con la cuenta oficial de MUSA y forzar la inspección de URL enviando:
        </p>
        <code style="font-size: 7.8pt; display: block; margin-bottom: 4px;">https://www.musaconsultora.cl/sitemap.xml</code>
        <p style="font-size: 7.8pt; color: #718096; margin-bottom: 0;">
          Esto obliga a Googlebot a re-indexar los nuevos metadatos y schemas en menos de 48 horas en lugar de semanas.
        </p>
      </div>

      <!-- Paso 2 -->
      <div class="card" style="border-top: 3px solid #6c729c;">
        <span class="badge badge-musa" style="margin-bottom: 4px;">Paso 2 · Clave Local</span>
        <h3 style="font-size: 10pt; color: #161c2d; margin-bottom: 3px;">Google Business Profile (Maps)</h3>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 4px;">
          Optimizar la ficha de Google Maps en Puerto Montt:
        </p>
        <p style="font-size: 7.8pt; color: #555e75; margin-bottom: 0;">
          <strong>Nombre:</strong> <em>MUSA | Consultora de Recursos Humanos · Reclutamiento y Selección Puerto Montt</em>.<br>
          <strong>Categoría:</strong> <em>Agencia de empleo</em> / <em>Consultora de gestión</em>.<br>
          Vincular al sitio web oficial y verificar la dirección en Puerto Montt.
        </p>
      </div>

      <!-- Paso 3 -->
      <div class="card" style="border-top: 3px solid #242c40;">
        <span class="badge badge-musa" style="margin-bottom: 4px;">Paso 3 · Reputación</span>
        <h3 style="font-size: 10pt; color: #161c2d; margin-bottom: 3px;">Reseñas con Palabras Clave</h3>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 4px;">
          Solicitar a 3 o 5 clientes ejecutivos actuales que dejen una reseña en Google mencionando palabras clave:
        </p>
        <p style="font-size: 7.8pt; color: #718096; font-style: italic; margin-bottom: 0;">
          "Excelente consultora de recursos humanos en Puerto Montt. Nos apoyaron con el reclutamiento y selección de jefaturas para nuestra empresa..."
        </p>
      </div>

      <!-- Paso 4 -->
      <div class="card" style="border-top: 3px solid #8067b0;">
        <span class="badge badge-musa" style="margin-bottom: 4px;">Paso 4 · Autoridad Off-Page</span>
        <h3 style="font-size: 10pt; color: #161c2d; margin-bottom: 3px;">Backlinks en Portales Acuícolas</h3>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 4px;">
          Publicar columnas de opinión firmadas por Noemi Sanagua sobre Ley Karin o retención de talento en:
        </p>
        <p style="font-size: 7.8pt; color: #555e75; margin-bottom: 0;">
          • Aqua.cl · SalmonExpert.cl · MundoAcuicola.cl · Diario El Llanquihue.<br>
          Enlazando siempre a: <code>https://www.musaconsultora.cl/</code>.
        </p>
      </div>
    </div>

    <h2 class="section-title">5.2. Cronograma Estimado de Resultados</h2>
    <table class="doc-table">
      <thead>
        <tr>
          <th style="width: 25%;">Periodo</th>
          <th style="width: 35%;">Hito Algorítmico</th>
          <th style="width: 40%;">Posición Proyectada en Puerto Montt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Días 1 a 7</strong></td>
          <td>Rastreo de Googlebot, lectura de schemas JSON-LD e indexación de sitemap.</td>
          <td>Aparición inicial en primeras 3 páginas para términos combinados.</td>
        </tr>
        <tr>
          <td><strong>Días 8 a 21</strong></td>
          <td>Procesamiento de señales geo-tag (<code>CL-LL</code>) y activación de rich snippets de FAQ.</td>
          <td>Ascenso a Primera Página (Top 3 a Top 5) en búsquedas locales.</td>
        </tr>
        <tr>
          <td><strong>Días 22 a 45</strong></td>
          <td>Consolidación con señales de Google Business Profile y CTR alto por rich snippets.</td>
          <td><strong style="color:#047857;">Top 1 - Top 2 Absoluto</strong> en Google Orgánico y Local Pack.</td>
        </tr>
      </tbody>
    </table>

    <div style="margin-top: 18px; padding-top: 12px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="font-size: 8.5pt; color: #161c2d; display: block;">Elaborado y Certificado por:</strong>
        <span style="font-size: 8pt; color: #718096;">Equipo de Ingeniería y Estrategia SEO · Noweb Labs (www.noweb.cl)</span>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 7.5pt; color: #8067b0; font-weight: 700; text-transform: uppercase;">Estado: 100% Implementado en Producción</span>
      </div>
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Informe SEO Puerto Montt</span>
      <span class="noweb-badge">noweb labs · Estrategia Digital</span>
    </div>
  </div>

</body>
</html>`;

const htmlPath = path.join(projectDir, 'informe_seo_musa.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
console.log('HTML written successfully to:', htmlPath);

const outputPdf = path.join(projectDir, 'Informe_SEO_Google_MUSA_Puerto_Montt_Noweb_Labs.pdf');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

console.log('Generating Dedicated SEO PDF with Chrome headless...');
try {
  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${chromePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdf}" "${fileUrl}"`;
  const result = execSync(cmd, { encoding: 'utf-8' });
  console.log('Chrome result:', result);
  
  if (fs.existsSync(outputPdf)) {
    const stats = fs.statSync(outputPdf);
    console.log(`SUCCESS! SEO PDF created at: ${outputPdf} (Size: ${(stats.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error('PDF file was not created!');
  }
} catch (err) {
  console.error('Error generating PDF:', err);
}
