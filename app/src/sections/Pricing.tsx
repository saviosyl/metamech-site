import React, { useMemo, useState } from "react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type PlanKey = "trial" | "standard" | "premium" | "plus";

const PLANS: Record<PlanKey, { name: string; price: number; blurb: string; bullets: string[]; tag?: string }> = {
  trial: {
    name: "Trial (3 Days)",
    price: 0,
    blurb: "No card required. Limited access for evaluation.",
    bullets: ["3-day expiry", "QuickStart included", "Demo workflows"],
  },
  standard: {
    name: "Standard Pack",
    price: 999,
    blurb: "Core automation pack for engineering teams.",
    bullets: ["BOM automation", "PDF export/merge", "Configurable rules"],
  },
  premium: {
    name: "Premium Pack",
    price: 1299,
    blurb: "Best value. Adds export automation for suppliers and manufacturing.",
    bullets: ["All Standard features", "STEP export automation", "Advanced options"],
    tag: "Most Popular",
  },
  plus: {
    name: "Premium Plus",
    price: 1599,
    blurb: "Full suite for standardisation across projects.",
    bullets: ["All Premium features", "Template/property bulk updates", "Advanced naming systems"],
  },
};

// Put your real Stripe payment links here (optional). Use "#" if not ready.
const STRIPE_LINKS: Partial<Record<PlanKey, string>> = {
  standard: "https://buy.stripe.com/28E5kC61J4252sl6vi2Nq00",
  premium: "https://buy.stripe.com/4gM28qgGnaqteb38Dq2Nq01",
  plus: "#",
};

const REVOLUT_LINK = "https://revolut.me/saviosyl";

export default function Pricing() {
  const [selected, setSelected] = useState<PlanKey>("premium");

  const checkout = useMemo(() => {
    const p = PLANS[selected];
    return { ...p, key: selected };
  }, [selected]);

  function openStripe() {
    if (checkout.key === "trial") {
      scrollToId("trial");
      return;
    }
    const url = STRIPE_LINKS[checkout.key] || "#";
    if (!url || url === "#") {
      alert("Stripe link not configured yet. Add it in Pricing.tsx (STRIPE_LINKS).");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openInvoiceMail() {
    const subject = encodeURIComponent("MetaMech License Purchase / Invoice Request");
    const body = encodeURIComponent(
      `Hi MetaMech Solution,

I would like to purchase:

Plan: ${checkout.name}
Price: €${checkout.price}

Please send an invoice or secure payment link.

Thanks`
    );
    window.location.href = `mailto:hi@metamechsolutions.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="pricing" className="mm-section">
      <div className="mm-container">
        <h2 className="mm-h2">Pricing</h2>
        <p className="mm-lead">
          Simple one-time licenses, designed for fast ROI. Choose a plan and proceed to payment or trial.
        </p>

        <div className="mm-grid-3">
          {(Object.keys(PLANS) as PlanKey[]).map((k) => {
            const p = PLANS[k];
            const isSel = k === selected;
            return (
              <button
                key={k}
                className={isSel ? "mm-card mm-price mm-price-sel" : "mm-card mm-price"}
                onClick={() => setSelected(k)}
                type="button"
              >
                {p.tag ? <div className="mm-ribbon">{p.tag}</div> : null}
                <div className="mm-pill">{p.name.toUpperCase()}</div>
                <div className="mm-price-val">€{p.price.toLocaleString("en-IE")}</div>
                <div className="mm-text">{p.blurb}</div>
                <ul className="mm-list">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mm-price-foot">{isSel ? "SELECTED ✓" : "Click to select"}</div>
              </button>
            );
          })}
        </div>

        <div className="mm-card mm-checkout">
          <div className="mm-checkout-left">
            <div className="mm-pill">Selected Plan</div>
            <div className="mm-checkout-title">{checkout.name}</div>
            <div className="mm-checkout-price">€{checkout.price.toLocaleString("en-IE")}</div>
            <div className="mm-note">
              Trial is free and unlocks the download after you submit your details.
              Paid plans can be purchased via Stripe/Revolut or invoice.
            </div>
          </div>

          <div className="mm-checkout-right">
            <button className="mm-btn mm-btn-primary" onClick={openStripe} type="button">
              {checkout.key === "trial" ? "Go to Trial Download" : "Pay Now (Stripe)"}
            </button>
            <a className="mm-btn mm-btn-warm" href={REVOLUT_LINK} target="_blank" rel="noreferrer">
              Pay with Revolut
            </a>
            <button className="mm-btn mm-btn-ghost" onClick={openInvoiceMail} type="button">
              Request Invoice (Email)
            </button>
            <div className="mm-note">
              For renewals, go to the <b>Renewals</b> section below.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

