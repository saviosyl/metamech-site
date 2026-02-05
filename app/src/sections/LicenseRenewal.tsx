import React, { useState } from "react";
import { postToFormspree } from "../utils/formspree";

export default function LicenseRenewal() {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("Status: fill the form to request renewal.");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setStatus("Status: submitting…");

    const ok = await postToFormspree(e.currentTarget);
    setStatus(ok ? "Status: submitted. MetaMech will contact you shortly." : "Status: failed. Please try again.");
    setBusy(false);
  }

  return (
    <section id="renewals" className="mm-section">
      <div className="mm-container">
        <h2 className="mm-h2">License Renewals</h2>
        <p className="mm-lead">
          Request a renewal or upgrade. We’ll respond with the correct payment link or invoice.
        </p>

        <div className="mm-two">
          <div className="mm-card">
            <h3 className="mm-h3">Renewal Request</h3>

            <form onSubmit={onSubmit}>
              <input type="hidden" name="source" value="renewals" />

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
                  <span>License ID *</span>
                  <input name="license_id" required placeholder="e.g., MM-XXXX-XXXX" />
                </label>
              </div>

              <div className="mm-form-grid">
                <label className="mm-field">
                  <span>Request type *</span>
                  <select name="request_type" required>
                    <option value="">Select</option>
                    <option value="renewal">Renewal</option>
                    <option value="upgrade">Upgrade</option>
                    <option value="additional_seats">Additional seats</option>
                    <option value="invoice">Invoice request</option>
                  </select>
                </label>
                <label className="mm-field">
                  <span>Preferred payment</span>
                  <select name="payment_preference">
                    <option value="stripe">Stripe</option>
                    <option value="revolut">Revolut</option>
                    <option value="invoice">Invoice</option>
                  </select>
                </label>
              </div>

              <label className="mm-field">
                <span>Notes</span>
                <input name="notes" placeholder="Renewal date, seats, tool pack…" />
              </label>

              <button className="mm-btn mm-btn-primary" type="submit" disabled={busy}>
                {busy ? "Submitting…" : "Submit Renewal Request"}
              </button>

              <div className="mm-status">{status}</div>
            </form>
          </div>

          <div className="mm-card">
            <h3 className="mm-h3">What to include</h3>
            <ul className="mm-list">
              <li>License ID (from your tool)</li>
              <li>Which plan you want (Standard / Premium / Premium Plus)</li>
              <li>How many seats you need</li>
              <li>SolidWorks version (2022–2025)</li>
            </ul>

            <div className="mm-note">
              Prefer email?{" "}
              <a href="mailto:hi@metamechsolutions.com" style={{ textDecoration: "underline" }}>
                hi@metamechsolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

