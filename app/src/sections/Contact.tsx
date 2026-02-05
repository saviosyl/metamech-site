import React, { useState } from "react";
import { postToFormspree } from "../utils/formspree";

export default function Contact() {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("Status: not sent yet.");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setStatus("Status: submitting…");

    const ok = await postToFormspree(e.currentTarget);
    setStatus(ok ? "Status: sent. We’ll contact you shortly." : "Status: failed. Please try again.");
    setBusy(false);
  }

  return (
    <section id="contact" className="mm-section mm-section-alt">
      <div className="mm-container">
        <h2 className="mm-h2">Contact</h2>
        <p className="mm-lead">
          Request a demo or tell us what you want to automate. We’ll reply with the best solution.
        </p>

        <div className="mm-two">
          <div className="mm-card">
            <h3 className="mm-h3">Request a Demo</h3>

            <form onSubmit={onSubmit}>
              <input type="hidden" name="source" value="contact" />

              <div className="mm-form-grid">
                <label className="mm-field">
                  <span>Company *</span>
                  <input name="company" required placeholder="Company name" />
                </label>
                <label className="mm-field">
                  <span>Full name *</span>
                  <input name="name" required placeholder="Your name" />
                </label>
              </div>

              <div className="mm-form-grid">
                <label className="mm-field">
                  <span>Email *</span>
                  <input name="email" type="email" required placeholder="you@company.com" />
                </label>
                <label className="mm-field">
                  <span>SolidWorks version</span>
                  <input name="solidworks" placeholder="2022 / 2023 / 2024 / 2025" />
                </label>
              </div>

              <label className="mm-field">
                <span>What do you want to automate? *</span>
                <input name="message" required placeholder="BOM / PDFs / STEP / DXF / renumbering / templates…" />
              </label>

              <button className="mm-btn mm-btn-primary" type="submit" disabled={busy}>
                {busy ? "Submitting…" : "Send Request"}
              </button>

              <div className="mm-status">{status}</div>

              <div className="mm-note">
                Or email:{" "}
                <a href="mailto:hi@metamechsolutions.com" style={{ textDecoration: "underline" }}>
                  hi@metamechsolutions.com
                </a>
              </div>
            </form>
          </div>

          <div className="mm-card">
            <h3 className="mm-h3">For faster setup, send</h3>
            <ul className="mm-list">
              <li>Example top-level assembly (structure is enough)</li>
              <li>Your naming rules & template files</li>
              <li>What outputs you need (BOM/PDF/STEP/DXF)</li>
              <li>Any special rules (Vendor PN, TYPE, etc.)</li>
            </ul>
            <div className="mm-note">
              Based in Galway, Ireland • Remote support available.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

