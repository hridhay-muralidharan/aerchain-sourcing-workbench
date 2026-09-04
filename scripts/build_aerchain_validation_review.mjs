import fs from "node:fs";
import path from "node:path";

const root = path.resolve("docs/rebuild/validation/aerchain-v1");
const output = path.join(root, "index.html");

const artifacts = [
  {
    id: "intake",
    label: "01 · Business-unit intake",
    file: "AERCHAIN_BUSINESS_UNIT_INTAKE.md",
    eyebrow: "INPUT CONTEXT",
    title: "What Aerchain is solving",
    summary: "The evidence base, workflow, actors, constraints, and unknowns that must remain separate from product decisions."
  },
  {
    id: "decisions",
    label: "02 · PM decisions",
    file: "AERCHAIN_PM_DECISIONS.md",
    eyebrow: "PRODUCT JUDGMENT",
    title: "What the product is choosing",
    summary: "The bounded product framing, authority model, trade-offs, and decisions carried forward into requirements."
  },
  {
    id: "prd",
    label: "03 · PRD",
    file: "AERCHAIN_PRD.md",
    eyebrow: "PRODUCT CONTRACT",
    title: "What Aera must be",
    summary: "The product agreement connecting approved context and decisions to outcomes, capabilities, constraints, and proof."
  },
  {
    id: "stories",
    label: "04 · Stories + criteria",
    file: "AERCHAIN_EPICS_STORIES_ACCEPTANCE_CRITERIA.md",
    eyebrow: "EXECUTION CONTRACT",
    title: "How each outcome is reviewed",
    summary: "Five real-world procurement outcomes with shared criteria across experience, deterministic behavior, AI, safety, evidence, and review."
  }
];

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function inline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\">$1</a>");
}

function isTableRow(line) {
  return line.trim().startsWith("|") && line.trim().endsWith("|");
}

function tableCells(line) {
  return line.trim().slice(1, -1).split("|").map((cell) => cell.trim());
}

function renderMarkdown(markdown) {
  const lines = markdown.replaceAll("\r", "").split("\n");
  const html = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i += 1; continue; }
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      html.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      i += 1;
      continue;
    }
    if (line.startsWith("> ")) {
      html.push(`<blockquote>${inline(line.slice(2))}</blockquote>`);
      i += 1;
      continue;
    }
    if (isTableRow(line) && i + 1 < lines.length && isTableRow(lines[i + 1]) && /^\|?\s*:?-{2,}/.test(lines[i + 1].replace(/\|/g, "").trim())) {
      const headers = tableCells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && isTableRow(lines[i])) { rows.push(tableCells(lines[i])); i += 1; }
      html.push(`<div class="table-wrap"><table><thead><tr>${headers.map((cell) => `<th>${inline(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    const unordered = line.match(/^\s*-\s+(.+)$/);
    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      const orderedList = Boolean(ordered);
      const items = [];
      while (i < lines.length) {
        const match = lines[i].match(orderedList ? /^\s*\d+\.\s+(.+)$/ : /^\s*-\s+(.+)$/);
        if (!match) break;
        items.push(`<li>${inline(match[1])}</li>`);
        i += 1;
      }
      html.push(`<${orderedList ? "ol" : "ul"}>${items.join("")}</${orderedList ? "ol" : "ul"}>`);
      continue;
    }
    const paragraph = [line];
    i += 1;
    while (i < lines.length && lines[i].trim() && !/^(#{1,6})\s+/.test(lines[i]) && !isTableRow(lines[i]) && !/^\s*(?:-|\d+\.)\s+/.test(lines[i])) {
      paragraph.push(lines[i]);
      i += 1;
    }
    html.push(`<p>${inline(paragraph.join(" "))}</p>`);
  }
  return html.join("\n");
}

const rendered = artifacts.map((artifact) => {
  const markdown = fs.readFileSync(path.join(root, artifact.file), "utf8");
  return { ...artifact, content: renderMarkdown(markdown) };
});

const nav = rendered.map((artifact, index) => `<button id="tab-${artifact.id}" class="tab ${index === 0 ? "is-active" : ""}" role="tab" aria-selected="${index === 0}" aria-controls="panel-${artifact.id}" data-tab="${artifact.id}"><span>${artifact.label}</span><small>${String(index + 1).padStart(2, "0")}</small></button>`).join("");
const panels = rendered.map((artifact, index) => `<section class="panel ${index === 0 ? "is-active" : ""}" id="panel-${artifact.id}" role="tabpanel" aria-labelledby="tab-${artifact.id}" data-panel="${artifact.id}"><div class="panel-intro"><p class="eyebrow">${artifact.eyebrow}</p><h2>${artifact.title}</h2><p class="panel-summary">${artifact.summary}</p><div class="source-file">Source <a href="${artifact.file}"><code>${artifact.file}</code></a></div></div><article class="artifact-body">${artifact.content}</article></section>`).join("");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Aerchain validation review</title>
  <style>
    :root { color-scheme: light; --ink:#17212b; --muted:#66717c; --line:#d9dee2; --paper:#f6f7f5; --surface:#ffffff; --blue:#1769aa; --blue-soft:#e7f1f9; --amber:#9b5f15; --amber-soft:#fff4df; --shadow:0 18px 50px rgba(31,47,59,.08); }
    * { box-sizing:border-box; }
    body { margin:0; background:var(--paper); color:var(--ink); font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height:1.55; }
    .shell { max-width:1440px; margin:0 auto; padding:36px 34px 80px; }
    .masthead { display:flex; justify-content:space-between; gap:28px; align-items:flex-end; border-bottom:1px solid var(--line); padding-bottom:30px; }
    .kicker,.eyebrow { color:var(--blue); font:600 11px/1.2 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing:.13em; text-transform:uppercase; }
    h1 { font-size:clamp(34px,4.6vw,66px); letter-spacing:-.055em; line-height:1; max-width:750px; margin:12px 0 16px; }
    .lede { max-width:650px; margin:0; color:var(--muted); font-size:17px; }
    .meta { min-width:220px; text-align:right; color:var(--muted); font-size:13px; }
    .meta strong { display:block; color:var(--ink); font-size:14px; }
    .review-strip { display:flex; flex-wrap:wrap; gap:10px; margin:22px 0 26px; }
    .badge { border:1px solid var(--line); border-radius:999px; background:var(--surface); padding:7px 12px; color:var(--muted); font-size:12px; }
    .badge strong { color:var(--ink); }
    .tabs { display:flex; gap:7px; border-bottom:1px solid var(--line); overflow-x:auto; }
    .tab { appearance:none; border:0; border-bottom:3px solid transparent; background:transparent; color:var(--muted); cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:18px; min-width:190px; padding:15px 13px 13px; font:600 13px ui-sans-serif, sans-serif; text-align:left; }
    .tab small { color:#a3adb5; font:11px ui-monospace, SFMono-Regular, Menlo, monospace; }
    .tab:hover,.tab:focus-visible { color:var(--ink); background:#eef2f3; outline:none; }
    .tab.is-active { color:var(--blue); border-bottom-color:var(--blue); }
    .panel { display:none; padding-top:38px; }
    .panel.is-active { display:block; animation:fade .22s ease-out; }
    .panel-intro { display:grid; grid-template-columns:minmax(0,1fr) minmax(240px,390px); column-gap:50px; align-items:end; margin-bottom:30px; }
    .panel-intro .eyebrow { grid-column:1/-1; margin:0 0 9px; }
    h2 { font-size:clamp(27px,3vw,43px); letter-spacing:-.045em; line-height:1.05; margin:0; }
    .panel-summary { color:var(--muted); margin:0; max-width:390px; }
    .source-file { grid-column:1/-1; color:var(--muted); font-size:12px; margin-top:18px; }
    code { background:#eef1f2; border:1px solid #e1e5e7; border-radius:4px; padding:1px 5px; font:12px ui-monospace, SFMono-Regular, Menlo, monospace; }
    .artifact-body { background:var(--surface); border:1px solid var(--line); box-shadow:var(--shadow); padding:40px clamp(22px,5vw,72px); }
    .artifact-body h1 { display:none; }
    .artifact-body h2 { border-top:1px solid var(--line); padding-top:30px; margin-top:40px; font-size:28px; }
    .artifact-body h3 { color:var(--blue); font-size:18px; margin:30px 0 8px; }
    .artifact-body p { max-width:86ch; }
    .artifact-body strong { color:#0e4f80; }
    .artifact-body a { color:var(--blue); }
    .artifact-body ul,.artifact-body ol { max-width:86ch; padding-left:24px; }
    .artifact-body li { margin:6px 0; }
    blockquote { border-left:3px solid var(--blue); color:var(--muted); margin:22px 0; padding:7px 18px; }
    .table-wrap { overflow-x:auto; margin:20px 0 26px; border:1px solid var(--line); }
    table { width:100%; border-collapse:collapse; min-width:660px; font-size:13px; }
    th { background:#f0f4f5; color:#41515d; text-align:left; font-size:11px; letter-spacing:.05em; text-transform:uppercase; }
    th,td { border-bottom:1px solid var(--line); padding:11px 13px; vertical-align:top; }
    tr:last-child td { border-bottom:0; }
    .footer { display:flex; justify-content:space-between; gap:20px; color:var(--muted); font-size:12px; margin-top:26px; }
    @keyframes fade { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:none; } }
    @media (max-width:760px) { .shell { padding:24px 16px 50px; } .masthead { display:block; } .meta { text-align:left; margin-top:22px; } .panel-intro { display:block; } .panel-summary { margin-top:14px; } .source-file { margin-top:16px; } .artifact-body { padding:25px 17px; } .artifact-body h2 { font-size:23px; } .footer { display:block; } }
    @media (prefers-reduced-motion:reduce) { .panel.is-active { animation:none; } }
  </style>
</head>
<body>
  <main class="shell">
    <header class="masthead">
      <div>
        <p class="kicker">Aerchain · contract validation</p>
        <h1>Four artifacts. One review path.</h1>
        <p class="lede">A focused reading surface for the business context, product judgment, product contract, and outcome-level acceptance criteria.</p>
      </div>
      <div class="meta"><strong>Validation bundle v1</strong>Generated 04 Sep 2026<br>Source: Aerchain repository context</div>
    </header>
    <div class="review-strip"><span class="badge"><strong>Review status</strong> conditional</span><span class="badge"><strong>Branch</strong> codex/aerchain-rebuild</span><span class="badge"><strong>Authority</strong> product-specific instance</span><span class="badge"><strong>Harness</strong> unchanged</span></div>
    <nav class="tabs" role="tablist" aria-label="Aerchain artifacts">${nav}</nav>
    ${panels}
    <footer class="footer"><span>Use the tabs left to right. Unknowns and blockers are intentionally visible.</span><span>Generated from the Markdown artifacts in this folder.</span></footer>
  </main>
  <script>
    const tabs = [...document.querySelectorAll('[data-tab]')];
    const panels = [...document.querySelectorAll('[data-panel]')];
    function activate(id) {
      tabs.forEach((tab) => { const active = tab.dataset.tab === id; tab.classList.toggle('is-active', active); tab.setAttribute('aria-selected', String(active)); });
      panels.forEach((panel) => panel.classList.toggle('is-active', panel.dataset.panel === id));
    }
    tabs.forEach((tab) => tab.addEventListener('click', () => activate(tab.dataset.tab)));
    document.addEventListener('keydown', (event) => {
      if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
      const current = tabs.findIndex((tab) => tab.classList.contains('is-active'));
      const next = event.key === 'ArrowRight' ? (current + 1) % tabs.length : (current - 1 + tabs.length) % tabs.length;
      tabs[next].focus(); activate(tabs[next].dataset.tab);
    });
  </script>
</body>
</html>`;

fs.writeFileSync(output, html);
console.log(`wrote ${output}`);
