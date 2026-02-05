import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Install",
      desc: "Download the package, extract, and run the installer/EXE on your engineering PC.",
    },
    {
      n: "2",
      title: "Configure",
      desc: "Set your folder paths, templates, and property rules once. The tool remembers your settings.",
    },
    {
      n: "3",
      title: "Run",
      desc: "Open your top-level assembly and execute actions: BOM, PDFs, STEP/DXF, renumbering, standards.",
    },
  ];

  return (
    <section id="how" className="mm-section mm-section-alt">
      <div className="mm-container">
        <h2 className="mm-h2">How It Works</h2>
        <p className="mm-lead">
          Simple workflow. Strong results. The goal is consistent outputs with fewer human errors.
        </p>

        <div className="mm-grid-3">
          {steps.map((s) => (
            <div key={s.n} className="mm-card mm-step">
              <div className="mm-step-top">
                <div className="mm-step-num">{s.n}</div>
                <div className="mm-step-title">{s.title}</div>
              </div>
              <div className="mm-text">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mm-note mm-note-strong">
          Want the tool to match your company standards (properties, templates, naming)? MetaMech can customise it.
        </div>
      </div>
    </section>
  );
}

