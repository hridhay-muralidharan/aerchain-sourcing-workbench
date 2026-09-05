import fs from "node:fs";
import path from "node:path";

const root = path.resolve("docs/rebuild/validation/aerchain-v2");
const sourceFile = "AERCHAIN_BUSINESS_UNIT_INTAKE_DRAFT_003.md";

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function inline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\">$1</a>");
}

function isTableRow(line) { return line.trim().startsWith("|") && line.trim().endsWith("|"); }
function cells(line) { return line.trim().slice(1, -1).split("|").map((cell) => cell.trim()); }

function renderMarkdown(markdown) {
  const lines = markdown.replaceAll("\r", "").split("\n");
  const output = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i += 1; continue; }
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) { output.push(`<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`); i += 1; continue; }
    if (line.startsWith("> ")) { output.push(`<blockquote>${inline(line.slice(2))}</blockquote>`); i += 1; continue; }
    if (isTableRow(line) && i + 1 < lines.length && isTableRow(lines[i + 1]) && /^\|?\s*:?-{2,}/.test(lines[i + 1].replace(/\|/g, "").trim())) {
      const header = cells(line); i += 2; const rows = [];
      while (i < lines.length && isTableRow(lines[i])) { rows.push(cells(lines[i])); i += 1; }
      output.push(`<div class="table-wrap"><table><thead><tr>${header.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    const listMatch = line.match(/^\s*(-|\d+\.)\s+(.+)$/);
    if (listMatch) {
      const ordered = listMatch[1] !== "-"; const items = [];
      while (i < lines.length) {
        const item = lines[i].match(ordered ? /^\s*\d+\.\s+(.+)$/ : /^\s*-\s+(.+)$/);
        if (!item) break; items.push(`<li>${inline(item[1])}</li>`); i += 1;
      }
      output.push(`<${ordered ? "ol" : "ul"}>${items.join("")}</${ordered ? "ol" : "ul"}>`); continue;
    }
    const paragraph = [line]; i += 1;
    while (i < lines.length && lines[i].trim() && !/^(#{1,6})\s+/.test(lines[i]) && !isTableRow(lines[i]) && !/^\s*(?:-|\d+\.)\s+/.test(lines[i])) { paragraph.push(lines[i]); i += 1; }
    output.push(`<p>${inline(paragraph.join(" "))}</p>`);
  }
  return output.join("\n");
}

const source = fs.readFileSync(path.join(root, sourceFile), "utf8");
const body = renderMarkdown(source);
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Aerchain business-unit intake review</title>
<style>
:root{--ink:#17212b;--muted:#66717c;--line:#d9dee2;--paper:#f6f7f5;--surface:#fff;--blue:#1769aa;--blue-soft:#e7f1f9;--amber:#9b5f15;--shadow:0 18px 50px rgba(31,47,59,.08)}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55}.shell{max-width:1240px;margin:0 auto;padding:38px 30px 72px}.masthead{border-bottom:1px solid var(--line);padding-bottom:28px}.kicker,.eyebrow{color:var(--blue);font:600 11px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase}.kicker{margin:0 0 12px}h1{font-size:clamp(34px,5vw,64px);letter-spacing:-.055em;line-height:1;margin:0 0 16px;max-width:780px}.lede{max-width:720px;color:var(--muted);font-size:17px;margin:0}.status{display:flex;flex-wrap:wrap;gap:9px;margin:20px 0 28px}.badge{border:1px solid var(--line);border-radius:999px;background:var(--surface);padding:7px 12px;color:var(--muted);font-size:12px}.badge strong{color:var(--ink)}.review-note{border-left:3px solid var(--amber);background:var(--amber-soft);padding:13px 16px;margin:0 0 28px;color:#654313}.review-note strong{display:block;color:var(--amber);font-size:12px;text-transform:uppercase;letter-spacing:.08em}.body{background:var(--surface);border:1px solid var(--line);box-shadow:var(--shadow);padding:38px clamp(20px,5vw,68px)}.body>h1{display:none}.body h2{border-top:1px solid var(--line);padding-top:28px;margin:40px 0 12px;font-size:28px;letter-spacing:-.04em}.body h3{color:var(--blue);font-size:18px;margin:28px 0 8px}.body p,.body ul,.body ol{max-width:86ch}.body li{margin:6px 0}.body a{color:var(--blue)}.body code{background:#eef1f2;border:1px solid #e1e5e7;border-radius:4px;padding:1px 5px;font:12px ui-monospace,SFMono-Regular,Menlo,monospace}.table-wrap{overflow-x:auto;border:1px solid var(--line);margin:20px 0 26px}table{width:100%;min-width:650px;border-collapse:collapse;font-size:13px}th{background:#f0f4f5;text-align:left;color:#41515d;font-size:11px;letter-spacing:.05em;text-transform:uppercase}th,td{border-bottom:1px solid var(--line);padding:11px 13px;vertical-align:top}tr:last-child td{border:0}blockquote{border-left:3px solid var(--blue);color:var(--muted);padding:7px 18px;margin:22px 0}.footer{display:flex;justify-content:space-between;gap:20px;color:var(--muted);font-size:12px;margin-top:22px}@media(max-width:700px){.shell{padding:24px 15px 50px}.body{padding:24px 16px}.footer{display:block}.footer span{display:block;margin-top:6px}}
</style></head><body><main class="shell"><header class="masthead"><p class="kicker">Aerchain · discovery input</p><h1>Business-unit intake, third pass.</h1><p class="lede">A provisional workflow synthesis across the assignment and Aerchain’s dedicated agent pages, with inferred steps clearly separated from verified business facts.</p></header><div class="status"><span class="badge"><strong>Version</strong> draft 003</span><span class="badge"><strong>Source</strong> assignment + agent pages</span><span class="badge"><strong>Next gate</strong> your review</span><span class="badge"><strong>Downstream</strong> paused</span></div><div class="review-note"><strong>Review focus</strong>Please review the inferred actor map, end-to-end workflow, and where the assignment agent fits across Intake, Sourcing, Evaluation, and Aera.</div><article class="body">${body}</article><footer class="footer"><span>Source Markdown: <a href="${sourceFile}">${sourceFile}</a></span><span>Generated as a standalone local review page.</span></footer></main></body></html>`;
fs.writeFileSync(path.join(root, "index.html"), html);
console.log(`wrote ${path.join(root, "index.html")}`);
