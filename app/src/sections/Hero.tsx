import React from "react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section id="home" className="mm-section mm-hero">
      <div className="mm-container mm-hero-grid">
        <div className="mm-card mm-hero-card">
          <div className="mm-pill">Built by a Mechanical Design Engineer • Production-first logic</div>
          <h1 className="mm-h1">
            SOLIDWORKS <span className="mm-accent">AUTOMATION</span> TOOLS THAT SAVE HOURS
          </h1>
          <p className="mm-lead">
            MetaMech delivers premium automation for BOMs, drawing PDFs, STEP/DXF exports, renumbering, and
            standards — designed for real assemblies and real deadlines.
          </p>

          <div className="mm-actions">
            <button className="mm-btn mm-btn-primary" onClick={() => scrollToId("tools")}>
              Explore Tools
            </button>
            <button className="mm-btn mm-btn-ghost" onClick={() => scrollToId("pricing")}>
              View Pricing
            </button>
            <button className="mm-btn mm-btn-warm" onClick={() => scrollToId("trial")}>
              Download 3-Day Trial
            </button>
          </div>

          <div className="mm-kpis">
            <div className="mm-kpi">
              <div className="mm-kpi-val">1-Click</div>
              <div className="mm-kpi-lbl">BOM, PDFs, STEP, DXF outputs</div>
            </div>
            <div className="mm-kpi">
              <div className="mm-kpi-val">Standards</div>
              <div className="mm-kpi-lbl">Naming, templates, properties</div>
            </div>
            <div className="mm-kpi">
              <div className="mm-kpi-val">Less Errors</div>
              <div className="mm-kpi-lbl">Repeatable automation logic</div>
            </div>
          </div>
        </div>

        <div className="mm-card mm-hero-side">
          <h2 className="mm-h2">What MetaMech Automates</h2>
          <ul className="mm-list">
            <li><b>Master BOM</b> + split by TYPE, missing property highlights</li>
            <li><b>PDF export + merge</b> with index & page numbers</li>
            <li><b>STEP export</b> for unique parts + subassemblies</li>
            <li><b>DXF flat patterns</b> for sheet metal with rules</li>
            <li><b>Renumbering</b> using your naming standards</li>
            <li><b>Template & properties</b> bulk updates across assemblies</li>
          </ul>

          <div className="mm-note">
            Built for SolidWorks 2022–2025 workflows. Customisable to your internal standards.
          </div>

          <div className="mm-mini-bar" />
        </div>
      </div>
    </section>
  );
}

