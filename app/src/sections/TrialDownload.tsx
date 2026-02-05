import React, { useMemo, useState } from "react";
import { postToFormspree } from "../utils/formspree";

const LS_UNLOCK = "mm_trial_unlocked_v1";

export default function TrialDownload() {
  const trialZipUrl = useMemo(
    () => import.meta.env.BASE_URL + "downloads/MetaMech_Trial_Package.zip",
    []
  );
  const quickStartUrl = useMemo(
    () => import.meta.env.BASE_URL + "downloads/MetaMech_Trial_QuickStart.pdf",
    []
  );

  const [unlocked, setUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem(LS_UNLOCK) === "1";
    } catch {
      return false;
    }
  });

  const [status, setStatus] = useState<string>(
    unlocked ? "Status: unlocked. Download enabled." : "Status: enter details to unlock download."
  );
  const [busy, setBusy] = useState<boolean>(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setStatus("Status: submitting…");

    const ok = await postToFormspree(e.currentTarget);
    if (ok) {
      try {
        localStorage.setItem(LS_UNLOCK, "1");
      } catch {}
      setUnlocked(true);
      setStatus("Status: submitted successfully. Download unlocked.");
    } else {
      setStatus("Status: submit failed. Please try again.");
    }

    setBusy(false);
  }

  return (
    <section id="trial" className="mm-section mm-section-alt">
      <div className="mm-container">
        <h2 className="mm-h2">Download 3-Day Trial</h2>
        <p className="mm-lead">
          No card required. Submit your details to unlock the trial download.
        </p>

        <div className="mm-two">
          <div className="mm-card">
            <h3 className="mm-h3">Step 1 — Your Details</h3>
            <p className="mm-text">
              This helps MetaMech track trial requests and provide fast support.
            </p>

            <form onSubmit={onSubmit}>
              <input type="hidden" name="source" value="trial" />
              <input type="hidden" name="plan" value="trial" />
              <input type="hidden" name="price_eur" value="0" />

              <div className="mm-form-grid">
                <label className="mm-field">
                  <span>Company *</span>
                  <input name="company" required placeholder="e.g., ABC Engineering Ltd" />
                </label>
                <label className="mm-field">
                  <span>Full name *</span>
                  <input name="name" required placeholder="Your name" />
                </label>
              </div>

              <div className="mm-form-grid">
                <label className="mm-field">
                  <span>Work email *</span>
                  <input name="email" type="email" required placeholder="you@company.com" />
                </label>
                <label className="mm-field">
                  <span>Role *</span>
                  <input name="role" required placeholder="Mechanical Design Engineer" />
                </label>
              </div>

              <label className="mm-field">
                <span>Country *</span>
                <input name="country" required placeholder="Ireland" />
              </label>

              <button className="mm-btn mm-btn-primary" type="submit" disabled={busy}>
                {busy ? "Submitting…" : "Unlock Download"}
              </button>

              <div className={unlocked ? "mm-status ok" : "mm-status"}>{status}</div>
            </form>
          </div>

          <div className="mm-card">
            <h3 className="mm-h3">Step 2 — Download</h3>

            <a
              className={unlocked ? "mm-btn mm-btn-warm" : "mm-btn mm-btn-warm mm-disabled"}
              href={unlocked ? trialZipUrl : "#"}
              onClick={(e) => {
                if (!unlocked) e.preventDefault();
              }}
            >
              ⬇ Download Trial Package (ZIP)
            </a>

            <div className="mm-note">
              File path: <b>{trialZipUrl.replace(location.origin, "")}</b>
            </div>

            <div style={{ height: 12 }} />

            <a className="mm-btn mm-btn-ghost" href={quickStartUrl} target="_blank" rel="noreferrer">
              Open QuickStart PDF
            </a>

            <div className="mm-note" style={{ marginTop: 10 }}>
              Tip: Put your EXE or ZIP into <b>app/public/downloads/</b>. It becomes public at{" "}
              <b>{import.meta.env.BASE_URL}downloads/</b> after deploy.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
