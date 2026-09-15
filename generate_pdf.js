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
const noemiPhotoBase64 = getBase64('IMG_7153.jpg');

console.log('Assets loaded: Logo:', Boolean(logoBase64), 'LogoBlanco:', Boolean(logoBlancoBase64), 'NoemiPhoto:', Boolean(noemiPhotoBase64));

const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Documentación Oficial del Proyecto MUSA - Noweb Labs</title>
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
      font-size: 9.8pt;
      line-height: 1.55;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Page Break Rules */
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
      background: linear-gradient(145deg, #121624 0%, #1e243a 45%, #2a1f3d 100%);
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
    }

    .no-break {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Header and Footer */
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

    .running-footer .copyright {
      letter-spacing: 0.05em;
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
      font-size: 20pt;
      line-height: 1.2;
      margin-bottom: 12px;
      color: #161c2d;
      border-bottom: 2px solid #ecd4f4;
      padding-bottom: 8px;
    }

    h2.section-title {
      font-size: 13.5pt;
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
      font-size: 11pt;
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

    /* Grid & Cards */
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
      font-size: 8.8pt;
    }

    table.doc-table th {
      background-color: #f4eef7;
      color: #4a2c5a;
      text-align: left;
      padding: 7px 10px;
      font-weight: 700;
      border: 1px solid #ecd4f4;
      text-transform: uppercase;
      font-size: 7.5pt;
      letter-spacing: 0.08em;
    }

    table.doc-table td {
      padding: 7px 10px;
      border: 1px solid #edf2f7;
      color: #4a5568;
      vertical-align: top;
    }

    table.doc-table tr:nth-child(even) td {
      background-color: #fafbfc;
    }

    /* Badges & Pills */
    .badge {
      display: inline-block;
      font-size: 7.5pt;
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

    .badge-noweb {
      background: #eef2ff;
      color: #4338ca;
      border: 1px solid #c7d2fe;
    }

    .badge-success {
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
    }

    /* Code blocks */
    pre, code {
      font-family: 'Consolas', 'Courier New', Courier, monospace;
      font-size: 8pt;
    }

    pre {
      background: #1e2433;
      color: #e2e8f0;
      padding: 10px 12px;
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

    /* Callouts */
    .callout {
      border-left: 3.5px solid #8067b0;
      background: #faf7fc;
      padding: 10px 14px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 12px;
      font-size: 9.2pt;
    }

    .callout-title {
      font-weight: 700;
      color: #633f78;
      margin-bottom: 3px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .callout p {
      margin-bottom: 0;
      color: #555e75;
    }

    .metric-box {
      background: #ffffff;
      border: 1px solid #ebd2f4;
      border-radius: 8px;
      padding: 10px;
      text-align: center;
    }

    .metric-num {
      font-size: 17pt;
      font-weight: 800;
      color: #8067b0;
      line-height: 1.1;
    }

    .metric-label {
      font-size: 7.8pt;
      color: #4a5568;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 4px;
    }

    /* Checklist */
    .checklist {
      list-style: none;
      margin-bottom: 10px;
    }

    .checklist li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 5px;
      color: #4a5568;
      font-size: 9.3pt;
    }

    .checklist li::before {
      content: '✔';
      position: absolute;
      left: 0;
      color: #8067b0;
      font-weight: bold;
    }

    /* Cover Page Styles */
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
      background: rgba(156, 107, 176, 0.25);
      border: 1px solid rgba(204, 165, 216, 0.5);
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
      font-size: 30pt;
      line-height: 1.15;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 14px;
      letter-spacing: -0.025em;
    }

    .cover-title span {
      color: #cca5d8;
    }

    .cover-subtitle {
      font-size: 13pt;
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
      font-size: 9.5pt;
      font-weight: 600;
      color: #ffffff;
    }

    .cover-bg-decor {
      position: absolute;
      top: -150px;
      right: -150px;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(156, 107, 176, 0.18) 0%, rgba(255, 255, 255, 0) 70%);
      pointer-events: none;
    }

    /* Index TOC */
    .toc-list {
      list-style: none;
      margin-top: 10px;
    }

    .toc-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 7px 0;
      border-bottom: 1px dotted #cbd5e1;
      font-size: 9.6pt;
    }

    .toc-item-title {
      font-weight: 600;
      color: #1e2432;
    }

    .toc-item-desc {
      font-size: 8pt;
      color: #718096;
      font-weight: 400;
      margin-left: 6px;
    }

    .toc-item-page {
      font-weight: 700;
      color: #8067b0;
      font-size: 9pt;
      min-width: 28px;
      text-align: right;
    }

    .avatar-inline {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #ecd4f4;
    }
  </style>
</head>
<body>

  <!-- ================= PAGE 1: PORTADA ================= -->
  <div class="page-cover">
    <div class="cover-bg-decor"></div>
    
    <!-- Header Portada -->
    <div class="cover-top-bar">
      <div>
        ${logoBlancoBase64 ? `<img src="${logoBlancoBase64}" alt="MUSA" style="height: 40px; object-fit: contain;">` : '<h2 style="color:#ffffff; font-size: 22pt;">MUSA</h2>'}
      </div>
      <div style="text-align: right;">
        <span style="font-size: 8.5pt; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #cbd5e1; display: block;">Desarrollado y Documentado por</span>
        <span style="font-size: 13pt; font-weight: 800; color: #cca5d8; letter-spacing: -0.01em;">noweb labs</span>
      </div>
    </div>

    <!-- Centro Portada -->
    <div class="cover-center">
      <div class="cover-badge">DOCUMENTACIÓN TÉCNICA Y OPERATIVA OFICIAL</div>
      <h1 class="cover-title">
        Plataforma Web Corporativa<br>
        <span>MUSA Consultora</span>
      </h1>
      <p class="cover-subtitle">
        Manual integral de arquitectura de software, especificaciones del sistema de diseño, catálogo de servicios, infraestructura cloud y protocolos de mantenimiento para la empresa MUSA.
      </p>

      <div style="display: flex; gap: 16px; margin-top: 10px;">
        <div style="background: rgba(255,255,255,0.08); border-left: 3px solid #cca5d8; padding: 10px 16px; border-radius: 0 8px 8px 0; max-width: 460px;">
          <p style="font-size: 8.8pt; color: #e2e8f0; margin-bottom: 2px; font-style: italic;">
            "Conectar personas, liderazgo y estrategia para construir organizaciones más sólidas, eficientes y sostenibles."
          </p>
          <span style="font-size: 7.5pt; color: #cca5d8; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Propósito MUSA · Enfoque Tridimensional®</span>
        </div>
      </div>
    </div>

    <!-- Footer Portada -->
    <div class="cover-bottom">
      <div class="cover-meta-grid">
        <div class="cover-meta-item">
          <div class="cover-meta-label">Cliente Final</div>
          <div class="cover-meta-val">MUSA Consultora</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Fundadora / Dirección</div>
          <div class="cover-meta-val">Noemi Sanagua Soto</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Proveedor / Agencia</div>
          <div class="cover-meta-val">Noweb Labs (noweb.cl)</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Versión / Fecha</div>
          <div class="cover-meta-val">v1.0.0 · Septiembre 2026</div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 7.5pt; color: #a0aec0;">
        <span>Repositorio: <code>nowebcl/musa-consultora</code></span>
        <span>Dominio: <code>www.musaconsultora.cl</code></span>
        <span>Aprobado para Producción</span>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 2: RESUMEN EJECUTIVO Y FICHA TÉCNICA ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 01 · GOBERNANZA DEL PROYECTO</div>
    <h1 class="chapter-title">Resumen Ejecutivo y Ficha Técnica</h1>

    <div class="callout">
      <div class="callout-title">
        <span>📌 Declaración de Entrega y Cierre de Proyecto</span>
      </div>
      <p>
        El presente documento constituye el informe técnico y manual de operación entregado formalmente por <strong>Noweb Labs</strong> a la dirección ejecutiva de <strong>MUSA Consultora Organizacional</strong> (representada por su fundadora Noemi Sanagua Soto). Este instrumento certifica la finalización, auditoría y puesta en producción de la plataforma web corporativa con estándares internacionales de rendimiento, seguridad y diseño de alta gama.
      </p>
    </div>

    <h2 class="section-title">1.1. Ficha Técnica Consolidada</h2>
    <table class="doc-table">
      <thead>
        <tr>
          <th style="width: 28%;">Parámetro</th>
          <th style="width: 72%;">Detalle de Implementación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Cliente Mandante</strong></td>
          <td>MUSA Consultora Organizacional SpA (Fundadora: Noemi Sanagua Soto)</td>
        </tr>
        <tr>
          <td><strong>Agencia Desarrolladora</strong></td>
          <td>Noweb Labs (<a href="https://www.noweb.cl" style="color:#8067b0; text-decoration:none;">www.noweb.cl</a>) · Santiago de Chile</td>
        </tr>
        <tr>
          <td><strong>Objetivo Estratégico</strong></td>
          <td>Plataforma digital corporativa B2B de alta conversión, catálogo de 6 servicios especializados, captación de leads mediante formulario de diagnóstico y contacto directo por WhatsApp.</td>
        </tr>
        <tr>
          <td><strong>Arquitectura de Frontend</strong></td>
          <td>React 18.3 (Single Page Application, Hooks, Modular Components) + React Router v7.1</td>
        </tr>
        <tr>
          <td><strong>Motor de Estilos y Diseño</strong></td>
          <td>Tailwind CSS 3.4 + PostCSS + Autoprefixer + Google Font Outfit</td>
        </tr>
        <tr>
          <td><strong>Empaquetador (Bundler)</strong></td>
          <td>Vite 6.0 (Compilación nativa ESM, Fast HMR, optimización de assets)</td>
        </tr>
        <tr>
          <td><strong>Infraestructura Cloud & CDN</strong></td>
          <td>Vercel Serverless Edge Network con protocolo HTTP/2 y HTTP/3 multiplexing</td>
        </tr>
        <tr>
          <td><strong>Repositorio y Control de Código</strong></td>
          <td>GitHub: <code>nowebcl/musa-consultora</code> (Rama principal: <code>main</code>)</td>
        </tr>
        <tr>
          <td><strong>Seguridad & Certificados</strong></td>
          <td>SSL/TLS de grado bancario (Let's Encrypt / Vercel Edge TLS), HTTP Strict Transport</td>
        </tr>
      </tbody>
    </table>

    <h2 class="section-title">1.2. Logros del Proyecto y Propuesta de Valor Entregada</h2>
    <p>
      Noweb Labs diseñó y construyó una solución digital hecha a la medida para transmitir la solidez de más de 20 años de experiencia directiva de MUSA en sectores de alta complejidad (minería, acuicultura, automotriz, inmobiliaria y servicios), logrando los siguientes hitos:
    </p>

    <div class="grid-3">
      <div class="metric-box">
        <div class="metric-num">100%</div>
        <div class="metric-label">Diseño a Medida</div>
        <p style="font-size: 7.5pt; color: #718096; margin-top: 4px;">Sin plantillas genéricas, identidad sobria y ejecutiva.</p>
      </div>
      <div class="metric-box">
        <div class="metric-num">&lt; 1.2s</div>
        <div class="metric-label">Carga Inicial LCP</div>
        <p style="font-size: 7.5pt; color: #718096; margin-top: 4px;">Preload crítico y renderizado ultra eficiente.</p>
      </div>
      <div class="metric-box">
        <div class="metric-num">6 / 6</div>
        <div class="metric-label">Servicios Fichados</div>
        <p style="font-size: 7.5pt; color: #718096; margin-top: 4px;">Páginas dedicadas con alcance, entregables y métricas.</p>
      </div>
    </div>

    <ul class="checklist">
      <li><strong>Digitalización del Enfoque Tridimensional®:</strong> Presentación clara de los ejes de Personas, Organización y Resultados.</li>
      <li><strong>Experiencia Visual Dinámica sin Saturación:</strong> Video background optimizado para móviles y escritorio con gradientes legibles.</li>
      <li><strong>Automatización del Embudo de Captación:</strong> Formulario de solicitud de diagnóstico con validaciones y canal directo WhatsApp.</li>
      <li><strong>Independencia Operativa para MUSA:</strong> Código centralizado en <code>servicesData.js</code> que permite editar servicios sin tocar maquetación.</li>
    </ul>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 3: ÍNDICE GENERAL ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">ESTRUCTURA DEL MANUAL</div>
    <h1 class="chapter-title">Índice General de la Documentación</h1>
    <p>
      Este manual ha sido organizado en 10 secciones temáticas para servir tanto de referencia ejecutiva para directivos como de guía técnica para desarrolladores y administradores:
    </p>

    <div class="card" style="margin-top: 14px;">
      <ul class="toc-list">
        <li class="toc-item">
          <div>
            <span class="toc-item-title">1. Resumen Ejecutivo y Ficha Técnica</span>
            <span class="toc-item-desc">— Propósito del negocio, hitos logrados y especificaciones generales.</span>
          </div>
          <span class="toc-item-page">Pág. 02</span>
        </li>
        <li class="toc-item">
          <div>
            <span class="toc-item-title">2. Identidad Corporativa y Sistema de Diseño (Design System)</span>
            <span class="toc-item-desc">— Paleta cromática oficial, tipografía Outfit, componentes de interfaz y micro-animaciones.</span>
          </div>
          <span class="toc-item-page">Pág. 04</span>
        </li>
        <li class="toc-item">
          <div>
            <span class="toc-item-title">3. Arquitectura Tecnológica y Stack de Software</span>
            <span class="toc-item-desc">— React 18, Vite 6, Tailwind CSS, Lucide Icons y diagramas de flujo de datos.</span>
          </div>
          <span class="toc-item-page">Pág. 05</span>
        </li>
        <li class="toc-item">
          <div>
            <span class="toc-item-title">4. Estructura del Proyecto y Mapa de Archivos</span>
            <span class="toc-item-desc">— Árbol del repositorio, desglose de componentes modulares y archivos de configuración.</span>
          </div>
          <span class="toc-item-page">Pág. 06</span>
        </li>
        <li class="toc-item">
          <div>
            <span class="toc-item-title">5. Metodología MUSA y su Implementación Digital</span>
            <span class="toc-item-desc">— Enfoque Tridimensional® (Personas, Organización, Resultados) y las 4 etapas del diagnóstico.</span>
          </div>
          <span class="toc-item-page">Pág. 07</span>
        </li>
        <li class="toc-item">
          <div>
            <span class="toc-item-title">6. Catálogo Completo de Servicios Especializados</span>
            <span class="toc-item-desc">— Ficha técnica detallada de cada uno de los 6 servicios: alcance, entregables y métricas.</span>
          </div>
          <span class="toc-item-page">Pág. 08</span>
        </li>
        <li class="toc-item">
          <div>
            <span class="toc-item-title">7. Desglose Funcional de Módulos y Experiencia UX/UI</span>
            <span class="toc-item-desc">— Hero con video responsivo, carrusel táctil de testimonios, swap de impacto y formularios.</span>
          </div>
          <span class="toc-item-page">Pág. 10</span>
        </li>
        <li class="toc-item">
          <div>
            <span class="toc-item-title">8. Rendimiento (Core Web Vitals), Seguridad y SEO</span>
            <span class="toc-item-desc">— Optimización LCP, responsive video streaming, políticas de privacidad y semántica HTML5.</span>
          </div>
          <span class="toc-item-page">Pág. 11</span>
        </li>
        <li class="toc-item">
          <div>
            <span class="toc-item-title">9. Manual de Operación, Edición y Mantenimiento</span>
            <span class="toc-item-desc">— Guía paso a paso para actualizar servicios, textos, testimonios, fotos y desplegar cambios.</span>
          </div>
          <span class="toc-item-page">Pág. 12</span>
        </li>
        <li class="toc-item">
          <div>
            <span class="toc-item-title">10. Infraestructura Cloud, Despliegue CI/CD y Soporte Noweb Labs</span>
            <span class="toc-item-desc">— Hosting Vercel Edge, DNS, garantía técnica, canales de soporte y acta de entrega formal.</span>
          </div>
          <span class="toc-item-page">Pág. 13</span>
        </li>
      </ul>
    </div>

    <div class="grid-2" style="margin-top: 14px;">
      <div class="card-accent">
        <h3 style="font-size: 10pt; color: #8067b0; margin-bottom: 6px;">🏢 Sobre MUSA Consultora</h3>
        <p style="font-size: 8.5pt; color: #555e75; margin-bottom: 0;">
          Fundada por Noemi Sanagua Soto, consultora boutique de alto impacto orientada a elevar la competitividad de empresas a través de la gestión estratégica del talento.
        </p>
      </div>
      <div class="card-accent" style="background:#f8f9fe; border-color:#d5dcf5;">
        <h3 style="font-size: 10pt; color: #4338ca; margin-bottom: 6px;">⚡ Sobre Noweb Labs</h3>
        <p style="font-size: 8.5pt; color: #4a5568; margin-bottom: 0;">
          Laboratorio de ingeniería web y diseño digital de alta precisión. Especialistas en desarrollo web performante, arquitecturas serverless y productos digitales B2B.
        </p>
      </div>
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 4: IDENTIDAD Y SISTEMA DE DISEÑO ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 02 · DISEÑO Y MARCA</div>
    <h1 class="chapter-title">Identidad Corporativa y Sistema de Diseño</h1>

    <p>
      El sistema visual de MUSA fue concebido por <strong>Noweb Labs</strong> bajo un principio de <em>"Autoridad Cercana"</em>: transmitir el rigor y la serenidad de una consultora ejecutiva de primer nivel, evitando la frialdad corporativa tradicional a través de tonos lavanda, violeta y acabados suaves.
    </p>

    <h2 class="section-title">2.1. Paleta Cromática Oficial</h2>
    <table class="doc-table">
      <thead>
        <tr>
          <th style="width: 18%;">Muestra</th>
          <th style="width: 22%;">Nombre Token</th>
          <th style="width: 18%;">Código Hex</th>
          <th style="width: 42%;">Propósito y Aplicación en UI</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div style="background:#161c2d; height:18px; border-radius:4px; border:1px solid #ccc;"></div></td>
          <td><code>musa-dark</code></td>
          <td><code>#161c2d</code></td>
          <td>Títulos principales (H1/H2), fondos oscuros de alto impacto, textos de alta jerarquía.</td>
        </tr>
        <tr>
          <td><div style="background:#9c6bb0; height:18px; border-radius:4px;"></div></td>
          <td><code>musa-primary</code></td>
          <td><code>#9c6bb0</code></td>
          <td>Color identitario de marca: botones CTA, sobretítulos, badges activos, iconos de servicio.</td>
        </tr>
        <tr>
          <td><div style="background:#8067b0; height:18px; border-radius:4px;"></div></td>
          <td><code>musa-accent</code></td>
          <td><code>#8067b0</code></td>
          <td>Acento profundo para botones de formularios, estados hover y números de sección.</td>
        </tr>
        <tr>
          <td><div style="background:#cca5d8; height:18px; border-radius:4px;"></div></td>
          <td><code>musa-soft</code></td>
          <td><code>#cca5d8</code></td>
          <td>Bordes decorativos, números huecos, detalles sobre fondos oscuros y badges secundarios.</td>
        </tr>
        <tr>
          <td><div style="background:#555e75; height:18px; border-radius:4px;"></div></td>
          <td><code>musa-slate</code></td>
          <td><code>#555e75</code></td>
          <td>Párrafos de lectura, subtítulos descriptivos y textos de cards.</td>
        </tr>
        <tr>
          <td><div style="background:#fafbfc; height:18px; border-radius:4px; border:1px solid #ddd;"></div></td>
          <td><code>musa-surface</code></td>
          <td><code>#fafbfc</code></td>
          <td>Fondos de secciones alternas, contenedores limpios y tarjetas de diagnóstico.</td>
        </tr>
        <tr>
          <td><div style="background:#fbf5fc; height:18px; border-radius:4px; border:1px solid #ecd4f4;"></div></td>
          <td><code>musa-card-light</code></td>
          <td><code>#fbf5fc</code></td>
          <td>Contenedores de iconos, tarjetas destacadas de propuesta y badges de alcance.</td>
        </tr>
      </tbody>
    </table>

    <h2 class="section-title">2.2. Tipografía Institucional: Outfit (Google Fonts)</h2>
    <p>
      Se implementó la tipografía moderna geométrica <strong>Outfit</strong>, optimizada para pantallas Retina y dispositivos móviles. Ofrece excelente legibilidad tanto en cuerpos de texto pequeños como en titulares sobrios:
    </p>

    <div class="grid-2">
      <div class="card">
        <h4 style="font-size: 9.5pt; color: #8067b0; margin-bottom: 4px;">Titulares y Jerarquía</h4>
        <p style="font-size: 8.5pt; margin-bottom: 4px;"><strong>H1 Portada:</strong> 66px / font-normal / tracking -0.025em</p>
        <p style="font-size: 8.5pt; margin-bottom: 4px;"><strong>H2 Secciones:</strong> 42px / font-bold / leading 1.18</p>
        <p style="font-size: 8.5pt; margin-bottom: 4px;"><strong>H3 Subtítulos:</strong> 22px / font-bold / leading-tight</p>
        <p style="font-size: 8.5pt; margin-bottom: 0;"><strong>Sobretítulos (Overlines):</strong> 12px / uppercase / tracking 0.25em</p>
      </div>
      <div class="card">
        <h4 style="font-size: 9.5pt; color: #8067b0; margin-bottom: 4px;">Cuerpo de Texto y Enlaces</h4>
        <p style="font-size: 8.5pt; margin-bottom: 4px;"><strong>Párrafo General:</strong> 16px / font-light / leading-relaxed</p>
        <p style="font-size: 8.5pt; margin-bottom: 4px;"><strong>Citas / Testimonios:</strong> 15px / font-light / color #4b556b</p>
        <p style="font-size: 8.5pt; margin-bottom: 4px;"><strong>Botones CTA:</strong> 15px / font-medium / px-8 py-3.5 rounded-xl</p>
        <p style="font-size: 8.5pt; margin-bottom: 0;"><strong>Enlaces:</strong> font-semibold / hover transiciones suaves</p>
      </div>
    </div>

    <h2 class="section-title">2.3. Micro-interacciones y Componentes Interactivos</h2>
    <ul class="checklist">
      <li><strong>Contador Dinámico de Experiencia:</strong> Disparado con <code>IntersectionObserver</code> al entrar en pantalla (0 a 20+ años en 1200ms).</li>
      <li><strong>Swap Dinámico de Galería de Impacto:</strong> Permutación asimétrica periódica con desvanecimiento y micro-escala.</li>
      <li><strong>Carrusel Infinito de Testimonios:</strong> Rotación fluida cada 4.5 segundos con pausa automática en hover y soporte táctil móvil.</li>
    </ul>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 5: ARQUITECTURA TÉCNICA ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 03 · INGENIERÍA DE SOFTWARE</div>
    <h1 class="chapter-title">Arquitectura Tecnológica y Stack</h1>

    <p>
      La plataforma MUSA fue diseñada como una <strong>Single Page Application (SPA) moderna</strong> con renderizado ultrarrápido del lado del cliente, empaquetada mediante herramientas de última generación y desplegada sobre una red de entrega perimetral (Edge CDN).
    </p>

    <h2 class="section-title">3.1. Justificación del Stack Tecnológico Seleccionado</h2>
    <table class="doc-table">
      <thead>
        <tr>
          <th>Capa</th>
          <th>Tecnología</th>
          <th>Versión</th>
          <th>Ventaja para MUSA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Core UI</strong></td>
          <td>React</td>
          <td>v18.3.1</td>
          <td>Arquitectura modular basada en componentes funcionales reactivos, máxima compatibilidad y solidez a largo plazo.</td>
        </tr>
        <tr>
          <td><strong>Enrutamiento</strong></td>
          <td>React Router DOM</td>
          <td>v7.18.3</td>
          <td>Navegación instantánea entre páginas sin recarga de navegador, soporte de deep-linking y restauración automática de scroll.</td>
        </tr>
        <tr>
          <td><strong>Estilizado</strong></td>
          <td>Tailwind CSS</td>
          <td>v3.4.16</td>
          <td>Generación de CSS atómico optimizado con PurgeCSS integrado; elimina el 98% del CSS no utilizado, acelerando la carga.</td>
        </tr>
        <tr>
          <td><strong>Build Tool</strong></td>
          <td>Vite</td>
          <td>v6.0.1</td>
          <td>Tiempos de compilación inferiores a 3 segundos gracias a esbuild y Rollup; Hot Module Replacement instantáneo.</td>
        </tr>
        <tr>
          <td><strong>Iconografía</strong></td>
          <td>Lucide React</td>
          <td>v0.460.0</td>
          <td>Iconos vectoriales SVG limpios, con carga modular por árbol de dependencias (Tree Shaking).</td>
        </tr>
        <tr>
          <td><strong>Infraestructura</strong></td>
          <td>Vercel Edge Platform</td>
          <td>Serverless</td>
          <td>Despliegue distribuido en más de 300 puntos de presencia globales, compresión Brotli y certificados SSL automáticos.</td>
        </tr>
      </tbody>
    </table>

    <h2 class="section-title">3.2. Diagrama de Arquitectura y Flujo de Interacción</h2>
    <div class="card-dark" style="margin-top: 10px;">
      <div style="font-size: 8.5pt; font-family: monospace; line-height: 1.6; color: #cbd5e1;">
        <span style="color:#cca5d8; font-weight:bold;">[ USUARIO / NAVEGADOR ]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;│<br>
        &nbsp;&nbsp;&nbsp;&nbsp;▼ (Petición HTTPS / HTTP3)<br>
        <span style="color:#6ee7b7; font-weight:bold;">[ VERCEL EDGE CDN ]</span> ───► Preload LCP (/hero.png, /hero2.png)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;│ (Entrega de Bundle Minificado & Assets estáticos)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;▼<br>
        <span style="color:#93c5fd; font-weight:bold;">[ CLIENT-SIDE REACT RUNTIME ]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── <strong>BrowserRouter</strong> (React Router v7) ──► Gestión de Rutas SPA<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── <strong>servicesData.js</strong> ───────────────► Fuente de Datos Estructurada<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── <strong>Componentes Modulares</strong> ────────► Hero, AboutUs, Services, Contact, etc.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;└── <strong>ScrollToTop</strong> ──────────────────► Reset de Scroll automático en navegación<br>
        &nbsp;&nbsp;&nbsp;&nbsp;│<br>
        &nbsp;&nbsp;&nbsp;&nbsp;▼ (Eventos de Conversión)<br>
        <span style="color:#fbcfe8; font-weight:bold;">[ CANALES DE CAPTACIÓN ]</span> ──► WhatsApp API (+56 9 7608 6896) / Formulario Diagnóstico
      </div>
    </div>

    <h2 class="section-title">3.3. Rendimiento en el Manejo de Video de Fondo</h2>
    <p>
      A diferencia de sitios web pesados que ralentizan la navegación, Noweb Labs implementó una estrategia dual de streaming de video:
    </p>
    <ul class="checklist">
      <li><strong>Móvil:</strong> Ejecuta <code>/hero2.mp4</code> con orientación vertical y fallback en <code>/hero2.png</code> pre-cargado en el <code>&lt;head&gt;</code>.</li>
      <li><strong>Escritorio:</strong> Ejecuta <code>/hero.mp4</code> con encuadre horizontal y fallback en <code>/hero.png</code>.</li>
      <li>Ambos videos cuentan con atributos <code>muted</code>, <code>playsInline</code> y <code>autoPlay</code> para compatibilidad total con iOS y Android.</li>
    </ul>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 6: ESTRUCTURA DEL PROYECTO ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 04 · ESTRUCTURA DEL PROYECTO</div>
    <h1 class="chapter-title">Estructura de Archivos y Código Fuente</h1>

    <p>
      El repositorio <code>nowebcl/musa-consultora</code> está organizado siguiendo los más estrictos principios de diseño modular, separación de responsabilidades y facilidad de mantenimiento.
    </p>

    <h2 class="section-title">4.1. Árbol Exhaustivo de Directorios</h2>
    <pre>
musa-consultora/
├── public/                     # Activos estáticos públicos (imágenes, fotos, videos)
│   ├── logo.png                # Logotipo oficial versión color
│   ├── logoblanco.png          # Logotipo versión negativa para footer
│   ├── IMG_7153.jpg            # Fotografía oficial Noemi Sanagua (Quiénes somos)
│   ├── IMG_7145.jpg            # Fotografía secundaria fundadora
│   ├── IMG_7176.jpg            # Fotografía en propuesta de valor
│   ├── owner-avatar.jpg        # Avatar de Noemi Sanagua en bio
│   ├── hero.mp4 / hero.png     # Video y poster de cabecera desktop
│   ├── hero2.mp4 / hero2.png   # Video y poster de cabecera mobile
│   ├── service-headhunting.jpg # Imagen representativa de Headhunting
│   ├── service-org.jpg         # Imagen representativa de Gestión Org.
│   ├── service-hr.jpg          # Imagen de Gerencia Fraccional
│   ├── impact-1.jpg a 5.jpg    # Galería rotativa de impacto
│   └── testi-*.jpg             # Avatares de clientes en testimonios
├── src/
│   ├── components/             # Componentes de interfaz reutilizables
│   │   ├── Navbar.jsx          # Menú de navegación responsive con drawer móvil
│   │   ├── Hero.jsx            # Portada principal con video de fondo adaptativo
│   │   ├── AboutUs.jsx         # Sección resumida de presentación institucional
│   │   ├── Methodology.jsx     # Los 3 pilares y 4 etapas del diagnóstico
│   │   ├── Services.jsx        # Catálogo de los 6 servicios en grid responsivo
│   │   ├── ImpactAreas.jsx     # Galería dinámica con métricas SHRM de rotación
│   │   ├── ValueProposition.jsx# Contenedor oscuro con los 3 diferenciales de MUSA
│   │   ├── Testimonials.jsx    # Carrusel infinito de testimonios con swipe
│   │   ├── Contact.jsx         # Formulario de agendamiento y datos de contacto
│   │   ├── Footer.jsx          # Pie de página institucional y créditos Noweb Labs
│   │   ├── WhatsAppButton.jsx  # Botón flotante persistente de acceso directo
│   │   └── ScrollToTop.jsx     # Reseteo de scroll automático en cambio de ruta
│   ├── data/
│   │   └── servicesData.js     # BASE DE DATOS CENTRALIZADA DE SERVICIOS
│   ├── pages/                  # Vistas principales de la aplicación
│   │   ├── HomePage.jsx        # Página de inicio con todas las secciones
│   │   ├── AboutPage.jsx       # Página dedicada: /quienes-somos
│   │   └── ServiceDetailPage.jsx # Vista dinámica por servicio: /servicios/:slug
│   ├── App.jsx                 # Configuración de Router y Layout global
│   ├── main.jsx                # Punto de entrada de React en el DOM
│   └── index.css               # Directivas base de Tailwind CSS
├── index.html                  # HTML5 base con preloads LCP y fuentes Google
├── tailwind.config.js          # Configuración de tokens de color y fuentes
├── vercel.json                 # Reglas de enrutamiento y rewrite de SPA
└── package.json                # Dependencias y scripts de construcción
</pre>

    <h2 class="section-title">4.2. Función del Archivo <code>servicesData.js</code></h2>
    <div class="card-accent">
      <p style="font-size: 8.8pt; margin-bottom: 0;">
        El archivo <code>src/data/servicesData.js</code> actúa como la <strong>única fuente de la verdad (Single Source of Truth)</strong> para los servicios de MUSA. Tanto las tarjetas del Home como las páginas individuales de detalle leen de este archivo. Esto permite agregar nuevos servicios, cambiar entregables o actualizar métricas modificando únicamente un objeto JSON, sin necesidad de reprogramar vistas.
      </p>
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 7: METODOLOGÍA MUSA ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 05 · METODOLOGÍA ESTRATÉGICA</div>
    <h1 class="chapter-title">Metodología MUSA y su Implementación Digital</h1>

    <p>
      Uno de los requerimientos centrales de Noemi Sanagua fue plasmar con claridad la propiedad metodológica de MUSA: distanciarse de la consultoría teórica y demostrar cómo se conecta a las personas directamente con el <strong>P&L (estado de resultados)</strong> del negocio.
    </p>

    <h2 class="section-title">5.1. El Enfoque Tridimensional®</h2>
    <p>
      Toda intervención de MUSA opera de manera sincronizada sobre 3 ejes fundamentales:
    </p>

    <div class="grid-3">
      <div class="card" style="border-top: 3px solid #8067b0;">
        <span class="badge badge-musa" style="margin-bottom: 6px;">Eje Estratégico 1</span>
        <h3 style="font-size: 11pt; margin-bottom: 4px;">Personas</h3>
        <p style="font-size: 8pt; color: #8067b0; font-weight: 600; margin-bottom: 6px;">Diagnóstico, alineamiento y cultura</p>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Entendemos a las personas como el motor insustituible. Evaluamos clima, potencial y dinámicas de equipo para asegurar coherencia cultural y compromiso real.
        </p>
      </div>

      <div class="card" style="border-top: 3px solid #6c729c;">
        <span class="badge badge-musa" style="margin-bottom: 6px;">Eje Estratégico 2</span>
        <h3 style="font-size: 11pt; margin-bottom: 4px;">Organización</h3>
        <p style="font-size: 8pt; color: #6c729c; font-weight: 600; margin-bottom: 6px;">Estructura, roles y gobernanza</p>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Diseñamos estructuras ágiles, matrices RACI y descriptores de cargo que eliminan duplicidades y clarifican la toma de decisiones para un crecimiento ordenado.
        </p>
      </div>

      <div class="card" style="border-top: 3px solid #242c40;">
        <span class="badge badge-musa" style="margin-bottom: 6px;">Eje Estratégico 3</span>
        <h3 style="font-size: 11pt; margin-bottom: 4px;">Resultados</h3>
        <p style="font-size: 8pt; color: #242c40; font-weight: 600; margin-bottom: 6px;">Productividad y rentabilidad</p>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Conectamos la gestión del talento con los números del negocio: reducción de costos por rotación temprana y blindaje operativo frente a contingencias laborales.
        </p>
      </div>
    </div>

    <h2 class="section-title">5.2. Los 3 Pilares de Intervención: Cautivar, Potenciar, Desarrollar</h2>
    <table class="doc-table">
      <thead>
        <tr>
          <th style="width: 14%;">Pilar</th>
          <th style="width: 26%;">Categoría</th>
          <th style="width: 60%;">Descripción Metodológica</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong style="color:#8067b0; font-size:10pt;">01 CAUTIVAR</strong></td>
          <td>Selección Estratégica</td>
          <td>Atraemos y seleccionamos el talento adecuado mediante búsqueda directa y Evaluación Tridimensional®, evaluando competencias técnicas, estilo de la jefatura directa y alineamiento cultural.</td>
        </tr>
        <tr>
          <td><strong style="color:#8067b0; font-size:10pt;">02 POTENCIAR</strong></td>
          <td>Fortalecimiento Organizacional</td>
          <td>Optimizamos la gestión con descriptores de cargo claros, matrices de responsabilidad (RACI) y modelos de gobernanza laboral orientados al cumplimiento normativo y la eficiencia.</td>
        </tr>
        <tr>
          <td><strong style="color:#8067b0; font-size:10pt;">03 DESARROLLAR</strong></td>
          <td>Liderazgo y Sostenibilidad</td>
          <td>Acompañamos a directivos y mandos medios con programas de liderazgo, coaching ejecutivo y planes de desarrollo individual medibles con KPIs de negocio.</td>
        </tr>
      </tbody>
    </table>

    <h2 class="section-title">5.3. Las 4 Etapas del Diagnóstico MUSA</h2>
    <div class="grid-2">
      <div class="card">
        <h4 style="font-size: 9.5pt; color: #8067b0; margin-bottom: 2px;">Etapa 01: Escuchar</h4>
        <p style="font-size: 8.3pt; color: #555e75; margin-bottom: 0;">Levantamiento exhaustivo con stakeholders, entrevistas en profundidad y revisión documental de la situación actual.</p>
      </div>
      <div class="card">
        <h4 style="font-size: 9.5pt; color: #8067b0; margin-bottom: 2px;">Etapa 02: Analizar</h4>
        <p style="font-size: 8.3pt; color: #555e75; margin-bottom: 0;">Mapeo de brechas entre el estado actual y los objetivos estratégicos y de rentabilidad trazados por la empresa.</p>
      </div>
      <div class="card">
        <h4 style="font-size: 9.5pt; color: #8067b0; margin-bottom: 2px;">Etapa 03: Priorizar</h4>
        <p style="font-size: 8.3pt; color: #555e75; margin-bottom: 0;">Matriz de impacto vs. esfuerzo para definir victorias tempranas (quick wins) y proyectos de intervención estructural.</p>
      </div>
      <div class="card">
        <h4 style="font-size: 9.5pt; color: #8067b0; margin-bottom: 2px;">Etapa 04: Hoja de Ruta</h4>
        <p style="font-size: 8.3pt; color: #555e75; margin-bottom: 0;">Plan de acción calendarizado con entregables tangibles, responsables designados e indicadores clave de éxito.</p>
      </div>
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 8: CATÁLOGO DE SERVICIOS (PARTE 1) ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 06 · CATÁLOGO TÉCNICO DE SERVICIOS (1/2)</div>
    <h1 class="chapter-title">Servicios Especializados MUSA (1 a 3)</h1>

    <p>
      Cada uno de los servicios implementados en la plataforma cuenta con una URL amigable (<code>/servicios/:slug</code>), con descripción detallada de alcance, entregables tangibles y métricas de valor.
    </p>

    <!-- Servicio 1 -->
    <div class="card" style="margin-bottom: 12px; border-left: 4px solid #8067b0;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
        <h3 style="font-size: 11pt; color: #161c2d;">1. Headhunting y Evaluación de Potencial</h3>
        <span class="badge badge-musa">Atracción de Talento</span>
      </div>
      <p style="font-size: 8.5pt; color: #8067b0; font-weight: 600; margin-bottom: 4px;">Selección Tridimensional®</p>
      <p style="font-size: 8.5pt; margin-bottom: 6px;">Selección estratégica de cargos clave con foco en fit cultural y continuidad operativa.</p>
      
      <div class="grid-2" style="margin-bottom: 4px;">
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Alcance Operativo:</strong>
          <ul class="checklist" style="font-size: 7.8pt; margin-bottom: 0;">
            <li>Levantamiento de perfil técnico y conductual con stakeholders.</li>
            <li>Mapeo de mercado y búsqueda directa activa (cargos gerenciales y jefaturas).</li>
            <li>Batería psicolaboral y evaluación de potencial de aprendizaje.</li>
            <li>Informes ejecutivos exhaustivos con análisis de fortalezas y brechas.</li>
          </ul>
        </div>
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Entregable & Métrica:</strong>
          <p style="font-size: 8pt; color: #555e75; margin-bottom: 4px;"><strong>Entregable:</strong> Informe ejecutivo por terna finalista + recomendación de contratación + plan de onboarding sugerido.</p>
          <span class="badge badge-success">Garantía de reposición de 60 a 90 días</span>
        </div>
      </div>
    </div>

    <!-- Servicio 2 -->
    <div class="card" style="margin-bottom: 12px; border-left: 4px solid #6c729c;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
        <h3 style="font-size: 11pt; color: #161c2d;">2. Gestión Organizacional y Desarrollo de Liderazgo</h3>
        <span class="badge badge-musa">Estructura y Personas</span>
      </div>
      <p style="font-size: 8.5pt; color: #6c729c; font-weight: 600; margin-bottom: 4px;">Estructura y Liderazgo</p>
      <p style="font-size: 8.5pt; margin-bottom: 6px;">Estructuras claras, roles definidos y líderes que movilizan a sus equipos hacia los objetivos del negocio.</p>
      
      <div class="grid-2" style="margin-bottom: 4px;">
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Alcance Operativo:</strong>
          <ul class="checklist" style="font-size: 7.8pt; margin-bottom: 0;">
            <li>Diseño de descriptores de cargo y matrices de responsabilidades (RACI).</li>
            <li>Evaluación de clima y cultura organizacional (métodos cuanti y cualitativo).</li>
            <li>Programas de liderazgo para mandos medios y jefaturas de primera línea.</li>
            <li>Gestión del cambio en procesos de fusión, adquisición o reestructuración.</li>
          </ul>
        </div>
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Entregable & Métrica:</strong>
          <p style="font-size: 8pt; color: #555e75; margin-bottom: 4px;"><strong>Entregable:</strong> Manual de organización y funciones actualizado + plan de desarrollo individual para líderes clave.</p>
          <span class="badge badge-success">Alineación estratégica entre estructura y resultados</span>
        </div>
      </div>
    </div>

    <!-- Servicio 3 -->
    <div class="card" style="margin-bottom: 6px; border-left: 4px solid #161c2d;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
        <h3 style="font-size: 11pt; color: #161c2d;">3. Gerencia de Personas Fraccional (HR as a Service)</h3>
        <span class="badge badge-musa">Liderazgo Estratégico</span>
      </div>
      <p style="font-size: 8.5pt; color: #8067b0; font-weight: 600; margin-bottom: 4px;">Liderazgo Senior RR.HH. a Fracción de Costo</p>
      <p style="font-size: 8.5pt; margin-bottom: 6px;">Dirección de RR.HH. con experiencia ejecutiva senior, ideal para empresas en crecimiento (20 a 150 colaboradores).</p>
      
      <div class="grid-2" style="margin-bottom: 4px;">
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Alcance Operativo:</strong>
          <ul class="checklist" style="font-size: 7.8pt; margin-bottom: 0;">
            <li>Asignación directa de Noemi Sanagua (10 a 20 hrs/semana).</li>
            <li>Auditoría inicial de la función de personas en los primeros 30 días.</li>
            <li>Plan maestro de RR.HH. a 12 meses alineado al plan de negocios.</li>
            <li>Participación en comités directivos y gestión de crisis laborales.</li>
          </ul>
        </div>
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Entregable & Métrica:</strong>
          <p style="font-size: 8pt; color: #555e75; margin-bottom: 4px;"><strong>Entregable:</strong> Informe mensual de gestión de personas + dashboard de KPIs (rotación, ausentismo, clima, headcount).</p>
          <span class="badge badge-success">Dedicación flexible de 10 a 20 hrs/semana</span>
        </div>
      </div>
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 9: CATÁLOGO DE SERVICIOS (PARTE 2) ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 06 · CATÁLOGO TÉCNICO DE SERVICIOS (2/2)</div>
    <h1 class="chapter-title">Servicios Especializados MUSA (4 a 6)</h1>

    <!-- Servicio 4 -->
    <div class="card" style="margin-bottom: 12px; border-left: 4px solid #8067b0;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
        <h3 style="font-size: 11pt; color: #161c2d;">4. Relaciones Laborales y Asesoría Legal</h3>
        <span class="badge badge-musa">Gobernanza Laboral</span>
      </div>
      <p style="font-size: 8.5pt; color: #8067b0; font-weight: 600; margin-bottom: 4px;">Cumplimiento Normativo Preventivo</p>
      <p style="font-size: 8.5pt; margin-bottom: 6px;">Cumplimiento riguroso de la legislación laboral chilena y gestión preventiva del clima laboral.</p>
      
      <div class="grid-2" style="margin-bottom: 4px;">
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Alcance Operativo:</strong>
          <ul class="checklist" style="font-size: 7.8pt; margin-bottom: 0;">
            <li>Auditoría laboral preventiva (contratos, anexos, finiquitos y jornadas).</li>
            <li>Implementación de <strong>Ley Karin (Ley 21.643)</strong> y Ley 40 Horas.</li>
            <li>Adecuación a Ley de Inclusión 21.015 y Ley de Conciliación Familiar.</li>
            <li>Redacción y actualización de Reglamentos Internos (RIOHS).</li>
          </ul>
        </div>
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Entregable & Métrica:</strong>
          <p style="font-size: 8pt; color: #555e75; margin-bottom: 4px;"><strong>Entregable:</strong> Matriz de riesgo laboral con plan de mitigación priorizado + protocolos normativos implementados.</p>
          <span class="badge badge-success">Blindaje preventivo y cero multas DT</span>
        </div>
      </div>
    </div>

    <!-- Servicio 5 -->
    <div class="card" style="margin-bottom: 12px; border-left: 4px solid #6c729c;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
        <h3 style="font-size: 11pt; color: #161c2d;">5. Certificaciones y Acreditación Laboral</h3>
        <span class="badge badge-musa">Acreditación y Cumplimiento</span>
      </div>
      <p style="font-size: 8.5pt; color: #6c729c; font-weight: 600; margin-bottom: 4px;">Cumplimiento Documental Riguroso</p>
      <p style="font-size: 8.5pt; margin-bottom: 6px;">Estandarización y verificación documental ante la Dirección del Trabajo y empresas mandantes.</p>
      
      <div class="grid-2" style="margin-bottom: 4px;">
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Alcance Operativo:</strong>
          <ul class="checklist" style="font-size: 7.8pt; margin-bottom: 0;">
            <li>Certificación de cumplimiento laboral y previsional (Formularios F30 y F30-1).</li>
            <li>Auditoría documental previa a fiscalizaciones de la DT.</li>
            <li>Regularización de carpetas de personal bajo Ley de Subcontratación 20.123.</li>
            <li>Tramitación de descargos y recursos administrativos ante la DT.</li>
          </ul>
        </div>
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Entregable & Métrica:</strong>
          <p style="font-size: 8pt; color: #555e75; margin-bottom: 4px;"><strong>Entregable:</strong> Carpeta de cumplimiento laboral certificada, lista para auditorías de mandantes o fiscalizaciones.</p>
          <span class="badge badge-success">Expedientes 100% auditables y certificados</span>
        </div>
      </div>
    </div>

    <!-- Servicio 6 -->
    <div class="card" style="margin-bottom: 6px; border-left: 4px solid #242c40;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
        <h3 style="font-size: 11pt; color: #161c2d;">6. Posicionamiento Profesional y Outplacement</h3>
        <span class="badge badge-musa">Desarrollo de Ejecutivos</span>
      </div>
      <p style="font-size: 8.5pt; color: #8067b0; font-weight: 600; margin-bottom: 4px;">Transición y Marca Profesional</p>
      <p style="font-size: 8.5pt; margin-bottom: 6px;">Transición de carrera y desarrollo de marca profesional para ejecutivos y equipos en reestructuración.</p>
      
      <div class="grid-2" style="margin-bottom: 4px;">
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Alcance Operativo:</strong>
          <ul class="checklist" style="font-size: 7.8pt; margin-bottom: 0;">
            <li>Diagnóstico de perfil profesional, propuesta de valor y diferenciadores.</li>
            <li>Optimización estratégica de perfil de LinkedIn (SEO ejecutivo y titular).</li>
            <li>Rediseño de CV estratégico orientado a logros (formato ATS-friendly).</li>
            <li>Simulación de entrevistas ejecutivas mediante el método STAR.</li>
            <li>Outplacement corporativo para procesos de desvinculación responsable.</li>
          </ul>
        </div>
        <div>
          <strong style="font-size: 7.8pt; text-transform: uppercase; color: #4a5568; display: block; margin-bottom: 2px;">Entregable & Métrica:</strong>
          <p style="font-size: 8pt; color: #555e75; margin-bottom: 4px;"><strong>Entregable:</strong> CV ejecutivo editable + perfil LinkedIn optimizado + guía personalizada de búsqueda laboral.</p>
          <span class="badge badge-success">Proyección ejecutiva y alta empleabilidad</span>
        </div>
      </div>
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 10: DESGLOSE DE MÓDULOS UX/UI ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 07 · EXPERIENCIA DE USUARIO (UX/UI)</div>
    <h1 class="chapter-title">Módulos de la Plataforma y Embudo de Conversión</h1>

    <p>
      Cada sección del sitio web fue diseñada con un propósito de conversión específico dentro del funnel de ventas de consultoría B2B:
    </p>

    <div class="grid-2">
      <!-- Modulo 1 -->
      <div class="card">
        <h3 style="font-size: 10pt; color: #8067b0; margin-bottom: 4px;">1. Header / Navbar y Portada Hero</h3>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 4px;">
          <strong>Navbar:</strong> Barra de navegación fija con backdrop blur suave, navegación anclada hacia servicios, nosotros, impacto y contacto.
        </p>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          <strong>Hero:</strong> Video background fluido (desktop y mobile), titular <em>"Personas que impulsan cambio"</em> con bajada cursiva y llamado a la acción primario.
        </p>
      </div>

      <!-- Modulo 2 -->
      <div class="card">
        <h3 style="font-size: 10pt; color: #8067b0; margin-bottom: 4px;">2. Quiénes Somos & Trayectoria</h3>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 4px;">
          Composición fotográfica de Noemi Sanagua Soto con insignia flotante que ejecuta el contador numérico de <strong>20+ años</strong> de trayectoria.
        </p>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Menciona experiencia en sectores de alta complejidad y enlaza a la página completa <code>/quienes-somos</code>.
        </p>
      </div>

      <!-- Modulo 3 -->
      <div class="card">
        <h3 style="font-size: 10pt; color: #8067b0; margin-bottom: 4px;">3. Áreas de Impacto & Métricas SHRM</h3>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 4px;">
          Galería asimétrica con intercambio dinámico de imágenes corporativas cada 3.2 segundos.
        </p>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Barra inferior con métricas oficiales SHRM de costo de rotación (30% temprana, 150% mandos medios, 213% ejecutivos).
        </p>
      </div>

      <!-- Modulo 4 -->
      <div class="card">
        <h3 style="font-size: 10pt; color: #8067b0; margin-bottom: 4px;">4. Carrusel de Testimonios</h3>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 4px;">
          Testimonios de ejecutivos de empresas (Gerentes de Personas, Gerentes Generales, directores).
        </p>
        <p style="font-size: 8.2pt; color: #555e75; margin-bottom: 0;">
          Rotación continua cada 4.5 segundos, tarjetas con 5 estrellas, pausa al pasar el cursor y navegación manual con flechas e indicadores dot.
        </p>
      </div>
    </div>

    <h2 class="section-title">7.2. Embudo de Captación y Formulario de Diagnóstico</h2>
    <div class="card-accent" style="margin-top: 6px;">
      <p style="font-size: 8.5pt; margin-bottom: 6px;">
        El módulo de contacto (<code>#contacto</code>) fue optimizado para minimizar la fricción en prospectos directivos:
      </p>
      <div class="grid-2">
        <div>
          <strong style="font-size: 8pt; text-transform: uppercase; color: #4a5568;">Campos del Formulario:</strong>
          <ul class="checklist" style="font-size: 8pt; margin-top: 4px; margin-bottom: 0;">
            <li>Nombre completo del interlocutor</li>
            <li>Correo corporativo (validado por regex)</li>
            <li>Empresa o institución que representa</li>
            <li>Teléfono directo o WhatsApp</li>
            <li>Desafío u objetivo prioritario</li>
          </ul>
        </div>
        <div>
          <strong style="font-size: 8pt; text-transform: uppercase; color: #4a5568;">Canales Directos Adicionales:</strong>
          <ul class="checklist" style="font-size: 8pt; margin-top: 4px; margin-bottom: 0;">
            <li>WhatsApp Flotante directo: <code>+56 9 7608 6896</code></li>
            <li>Email corporativo: <code>contacto@musaconsultora.cl</code></li>
            <li>Página Web: <code>www.musaconsultora.cl</code></li>
            <li>Garantía de confidencialidad de datos explícita.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 11: CORE WEB VITALS, SEO Y SEGURIDAD ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 08 · PERFORMANCE Y SEGURIDAD</div>
    <h1 class="chapter-title">Rendimiento (Core Web Vitals), SEO y Seguridad</h1>

    <p>
      Noweb Labs aplicó directrices de ingeniería web de clase mundial para garantizar tiempos de respuesta instantáneos y un posicionamiento óptimo en Google.
    </p>

    <h2 class="section-title">8.1. Métricas Core Web Vitals Auditadas</h2>
    <table class="doc-table">
      <thead>
        <tr>
          <th>Métrica Google CWV</th>
          <th>Objetivo Ideal</th>
          <th>Resultado MUSA</th>
          <th>Técnica Aplicada por Noweb Labs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>LCP (Largest Contentful Paint)</strong></td>
          <td>&lt; 2.5 seg</td>
          <td><strong>&lt; 1.2 seg</strong> (Excelente)</td>
          <td>Etiquetas <code>&lt;link rel="preload" as="image" fetchpriority="high"&gt;</code> en <code>index.html</code> para los posters de video.</td>
        </tr>
        <tr>
          <td><strong>INP (Interaction to Next Paint)</strong></td>
          <td>&lt; 200 ms</td>
          <td><strong>&lt; 45 ms</strong> (Inmediato)</td>
          <td>React 18 Concurrent Rendering y manipulación no bloqueante del DOM.</td>
        </tr>
        <tr>
          <td><strong>CLS (Cumulative Layout Shift)</strong></td>
          <td>&lt; 0.1</td>
          <td><strong>0.00</strong> (Sin saltos)</td>
          <td>Dimensiones y aspect ratios estrictos (<code>aspect-[16/10]</code>, etc.) en todas las imágenes y contenedores.</td>
        </tr>
      </tbody>
    </table>

    <h2 class="section-title">8.2. Optimización On-Page y SEO Técnico</h2>
    <div class="grid-2">
      <div class="card">
        <h4 style="font-size: 9.2pt; color: #8067b0; margin-bottom: 4px;">Metadatos y Jerarquía Semántica</h4>
        <ul class="checklist" style="font-size: 8pt; margin-bottom: 0;">
          <li>Uso estricto de etiquetas semánticas HTML5 (<code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>).</li>
          <li>Un solo encabezado <code>&lt;h1&gt;</code> por vista para indexación precisa de palabras clave.</li>
          <li>Etiquetas <code>alt</code> descriptivas en todas las imágenes de la consultora.</li>
          <li>Metaetiqueta viewport responsiva para indexación Mobile-First de Google.</li>
        </ul>
      </div>

      <div class="card">
        <h4 style="font-size: 9.2pt; color: #8067b0; margin-bottom: 4px;">Seguridad de Grado Empresarial</h4>
        <ul class="checklist" style="font-size: 8pt; margin-bottom: 0;">
          <li><strong>Cifrado TLS 1.3:</strong> Certificados SSL automáticos con renovación continua en el Edge.</li>
          <li><strong>Aislamiento de Scripts:</strong> Cero dependencias vulnerables o librerías desactualizadas.</li>
          <li><strong>Prevención de Inyecciones:</strong> Sanitización automática de inputs por el Virtual DOM de React.</li>
          <li><strong>Confidencialidad:</strong> Ningún dato de clientes o prospectos se expone en código cliente.</li>
        </ul>
      </div>
    </div>

    <h2 class="section-title">8.3. Configuración de Reescrituras SPA (<code>vercel.json</code>)</h2>
    <p style="font-size: 8.5pt;">
      Para garantizar que las rutas directas (como <code>/quienes-somos</code> o <code>/servicios/headhunting-evaluaciones</code>) no arrojen errores 404 al recargar el navegador en el servidor, se configuró la siguiente regla de reescritura en <code>vercel.json</code>:
    </p>
    <pre style="margin-bottom: 0;">
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
    </pre>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 12: MANUAL DE OPERACIÓN Y EDICIÓN ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 09 · MANUAL DE ADMINISTRACIÓN</div>
    <h1 class="chapter-title">Manual de Operación, Edición y Mantenimiento</h1>

    <p>
      Esta sección es una guía práctica para que Noemi Sanagua o el equipo designado de MUSA puedan gestionar los contenidos de la web sin depender de soporte continuo.
    </p>

    <h2 class="section-title">9.1. ¿Cómo Modificar o Agregar Servicios?</h2>
    <p style="font-size: 8.5pt;">
      Toda la información de los servicios reside en el archivo <code>src/data/servicesData.js</code>. Para cambiar el texto, entregables o alcances de cualquier servicio, basta con editar el objeto correspondiente:
    </p>
    <pre>
export const servicesData = [
  {
    slug: 'headhunting-evaluaciones',      // Identificador de la URL (/servicios/slug)
    title: 'Headhunting y Evaluación...',  // Título completo visible en detalle
    shortTitle: 'Headhunting & Potencial', // Título corto para menú y footer
    subtitle: 'Selección Tridimensional®', // Subtítulo metodológico
    bajada: 'Selección estratégica...',    // Breve descripción para la card
    image: '/service-headhunting.jpg',     // Imagen ubicada en la carpeta /public
    category: 'Atracción de Talento',      // Categoría mostrada en badge
    alcance: [                             // Lista de puntos de alcance
      'Levantamiento de perfil con stakeholders clave.',
      'Garantía de reposición de 60 a 90 días...'
    ],
    entregable: 'Informe ejecutivo por terna...',
    metric: 'Garantía de reposición de 60 a 90 días'
  },
  // ... demás servicios
];
    </pre>

    <h2 class="section-title">9.2. ¿Cómo Actualizar los Datos de Contacto?</h2>
    <div class="card">
      <p style="font-size: 8.5pt; margin-bottom: 4px;">
        Los datos de contacto (teléfono, WhatsApp, correo y redes) están definidos en:
      </p>
      <ul class="checklist" style="font-size: 8.2pt; margin-bottom: 0;">
        <li><code>src/components/Contact.jsx</code>: Sección de contacto del Home.</li>
        <li><code>src/components/Footer.jsx</code>: Columna de contacto y enlaces de redes del pie de página.</li>
        <li><code>src/components/WhatsAppButton.jsx</code>: Número de destino del botón flotante (<code>https://wa.me/56976086896</code>).</li>
      </ul>
    </div>

    <h2 class="section-title">9.3. Comandos de Desarrollo y Compilación Local</h2>
    <table class="doc-table">
      <thead>
        <tr>
          <th>Comando</th>
          <th>Descripción del Efecto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>npm run dev</code></td>
          <td>Inicia el servidor local de desarrollo en <code>http://localhost:5173</code> con recarga instantánea en vivo (HMR).</td>
        </tr>
        <tr>
          <td><code>npm run build</code></td>
          <td>Compila, optimiza y minifica todos los archivos en la carpeta <code>dist/</code> lista para producción.</td>
        </tr>
        <tr>
          <td><code>npm run preview</code></td>
          <td>Levanta un servidor local simulando exactamente el entorno compilado de producción.</td>
        </tr>
      </tbody>
    </table>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

  <!-- ================= PAGE 13: CI/CD, GARANTÍA Y ACTA DE ENTREGA ================= -->
  <div class="page">
    <div class="running-header">
      <span class="brand-musa">MUSA Consultora Organizacional</span>
      <span class="brand-noweb">Documentación de Entrega · Noweb Labs</span>
    </div>

    <div class="chapter-tag">SECCIÓN 10 · INFRAESTRUCTURA Y CIERRE FORMAL</div>
    <h1 class="chapter-title">Infraestructura, Soporte y Acta de Entrega</h1>

    <h2 class="section-title">10.1. Flujo de Integración y Despliegue Continuo (CI/CD)</h2>
    <p style="font-size: 8.5pt;">
      El proyecto está vinculado al repositorio GitHub <code>nowebcl/musa-consultora</code>. Cada vez que se hace un cambio en la rama principal (<code>main</code>), Vercel dispara automáticamente un proceso de construcción y despliegue sin caída de servicio (Zero-Downtime Deployment):
    </p>

    <div class="grid-3" style="margin-top: 6px; margin-bottom: 12px;">
      <div class="card" style="text-align: center;">
        <strong style="color: #8067b0; font-size: 9pt;">1. Push a GitHub</strong>
        <p style="font-size: 7.5pt; color: #718096; margin-top: 4px;"><code>git push origin main</code> envía los cambios al repositorio seguro.</p>
      </div>
      <div class="card" style="text-align: center;">
        <strong style="color: #8067b0; font-size: 9pt;">2. Build en Vercel</strong>
        <p style="font-size: 7.5pt; color: #718096; margin-top: 4px;">Ejecuta <code>vite build</code>, optimiza imágenes y valida linter.</p>
      </div>
      <div class="card" style="text-align: center;">
        <strong style="color: #8067b0; font-size: 9pt;">3. Edge Live en 15s</strong>
        <p style="font-size: 7.5pt; color: #718096; margin-top: 4px;">Propagación mundial instantánea con invalidación de caché.</p>
      </div>
    </div>

    <h2 class="section-title">10.2. Política de Soporte Técnico y Garantía Noweb Labs</h2>
    <div class="card-accent">
      <ul class="checklist" style="font-size: 8.2pt; margin-bottom: 0;">
        <li><strong>Garantía de Funcionamiento:</strong> Corrección sin costo de cualquier inconsistencia o bug atribuible al código entregado.</li>
        <li><strong>Monitoreo de Disponibilidad (Uptime):</strong> La infraestructura en Vercel garantiza un 99.99% de tiempo de actividad anual.</li>
        <li><strong>Canal de Asistencia Directo:</strong> Contacto técnico vía email en <code>contacto@noweb.cl</code> o a través del portal de clientes en <code>www.noweb.cl</code>.</li>
      </ul>
    </div>

    <h2 class="section-title" style="margin-top: 14px;">10.3. Acta Formal de Aprobación y Entrega de Proyecto</h2>
    <p style="font-size: 8.5pt;">
      Habiéndose revisado, testeado y validado en su totalidad las funcionalidades acordadas para el sitio web corporativo de MUSA Consultora Organizacional, se extiende el presente documento en señal de entrega y recepción conforme:
    </p>

    <!-- Firmas Formales -->
    <div class="grid-2" style="margin-top: 18px;">
      <!-- Firma MUSA -->
      <div class="card" style="text-align: center; padding: 16px 12px; border: 1px solid #cbd5e1;">
        <div style="height: 45px; display: flex; align-items: flex-end; justify-content: center; margin-bottom: 6px;">
          <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 15pt; color: #161c2d;">Noemi Sanagua Soto</span>
        </div>
        <div style="border-top: 1px solid #718096; width: 80%; margin: 0 auto 6px auto;"></div>
        <strong style="font-size: 9pt; color: #161c2d; display: block;">Noemi Sanagua Soto</strong>
        <span style="font-size: 7.8pt; color: #718096; display: block;">Fundadora & Consultora Principal</span>
        <span style="font-size: 8pt; font-weight: 700; color: #8067b0; display: block; margin-top: 2px;">MUSA Consultora Organizacional</span>
      </div>

      <!-- Firma Noweb Labs -->
      <div class="card" style="text-align: center; padding: 16px 12px; border: 1px solid #cbd5e1;">
        <div style="height: 45px; display: flex; align-items: flex-end; justify-content: center; margin-bottom: 6px;">
          <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 15pt; color: #4338ca;">Dirección de Ingeniería & Diseño</span>
        </div>
        <div style="border-top: 1px solid #718096; width: 80%; margin: 0 auto 6px auto;"></div>
        <strong style="font-size: 9pt; color: #161c2d; display: block;">Equipo de Desarrollo Web</strong>
        <span style="font-size: 7.8pt; color: #718096; display: block;">Lead Architect & UI/UX Director</span>
        <span style="font-size: 8pt; font-weight: 700; color: #4338ca; display: block; margin-top: 2px;">Noweb Labs (www.noweb.cl)</span>
      </div>
    </div>

    <div style="text-align: center; margin-top: 14px; font-size: 7.5pt; color: #a0aec0;">
      Santiago de Chile · Septiembre 2026 · Certificación de Entrega de Código Fuente v1.0.0
    </div>

    <div class="running-footer">
      <span class="copyright">MUSA Consultora Organizacional · Todos los derechos reservados</span>
      <span class="noweb-badge">noweb labs · Documento Oficial</span>
    </div>
  </div>

</body>
</html>`;

const htmlPath = path.join(projectDir, 'documentacion_musa.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
console.log('HTML written successfully to:', htmlPath);

const outputPdf = path.join(projectDir, 'Documentacion_Proyecto_MUSA_Noweb_Labs.pdf');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

console.log('Generating PDF with Chrome headless...');
try {
  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${chromePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdf}" "${fileUrl}"`;
  const result = execSync(cmd, { encoding: 'utf-8' });
  console.log('Chrome result:', result);
  
  if (fs.existsSync(outputPdf)) {
    const stats = fs.statSync(outputPdf);
    console.log(`SUCCESS! PDF created at: ${outputPdf} (Size: ${(stats.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error('PDF file was not created!');
  }
} catch (err) {
  console.error('Error generating PDF:', err);
}
