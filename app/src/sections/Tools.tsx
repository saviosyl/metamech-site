import React from "react";

export default function Tools() {
  const tools = [
    {
      title: "BOM Automation",
      desc: "Master BOM + sheets by TYPE, highlight missing properties, consistent formatting for every project.",
      bullets: ["All levels (TLA → subassemblies → parts)", "Company-ready Excel output", "Fast & repeatable"],
    },
    {
      title: "PDF Merge + Index",
      desc: "Export drawings and merge into one PDF arranged hierarchically with an index and page numbers.",
      bullets: ["Tree order driven by BOM", "Logs missing drawings", "Cleaner packs for production"],
    },
    {
      title: "STEP Export",
      desc: "Auto-export unique STEP files for parts and subassemblies into structured folders.",
      bullets: ["Skips duplicates", "Batch export logic", "Supplier-ready output"],
    },
    {
      title: "DXF Flat Export",
      desc: "Sheet metal flat patterns exported to DXF with naming rules: material, thickness, quantity.",
      bullets: ["1:1, mm exports", "Filters custom parts", "Logs skipped items"],
    },
    {
      title: "Renumbering & Standards",
      desc: "Apply naming standards consistently across large assemblies without manual mistakes.",
      bullets: ["Vendor part rules", "Filename sanitisation", "Optional numbering policies"],
    },
    {
      title: "Templates & Properties",
      desc: "Bulk update drawing templates and custom properties across assemblies & parts.",
      bullets: ["Standardised deliverables", "Less admin time", "Cleaner engineering packs"],
    },
  ];

  return (
    <section id="tools" className="mm-section">
      <div className="mm-container">
        <h2 className="mm-h2">Automation Tools</h2>
        <p className="mm-lead">
          Practical engineering automation that removes repetitive tasks and standardises outputs across your team.
        </p>

        <div className="mm-grid-3">
          {tools.map((t) => (
            <div key={t.title} className="mm-card mm-card-hover">
              <div className="mm-card-head">
                <div className="mm-card-dot" />
                <h3 className="mm-h3">{t.title}</h3>
              </div>
              <p className="mm-text">{t.desc}</p>
              <ul className="mm-list">
                {t.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mm-strip">
          <div>
            <div className="mm-pill">Typical fits</div>
            <div className="mm-strip-title">Automation • Conveyors • System integration • Manufacturing</div>
          </div>
          <div className="mm-strip-note">Built for engineering teams that want speed + consistency.</div>
        </div>
      </div>
    </section>
  );
}

