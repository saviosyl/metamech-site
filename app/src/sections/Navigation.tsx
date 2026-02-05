import React, { useEffect, useMemo, useState } from "react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navigation() {
  const logoUrl = useMemo(
    () => import.meta.env.BASE_URL + "metamech-logo.png",
    []
  );

  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const ids = ["home", "tools", "how", "pricing", "trial", "renewals", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: 0.35, rootMargin: "-80px 0px -60% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="mm-nav">
      <div className="mm-container mm-nav-inner">
        <div className="mm-brand" onClick={() => scrollToId("home")} role="button" tabIndex={0}>
          <img src={logoUrl} alt="MetaMech Solution" className="mm-logo" />
          <div className="mm-brand-text">
            <div className="mm-brand-title">MetaMech Solution</div>
            <div className="mm-brand-sub">Engineering Automation</div>
          </div>
        </div>

        <nav className="mm-menu">
          <button className={active === "tools" ? "mm-link active" : "mm-link"} onClick={() => scrollToId("tools")}>TOOLS</button>
          <button className={active === "pricing" ? "mm-link active" : "mm-link"} onClick={() => scrollToId("pricing")}>PRICING</button>
          <button className={active === "trial" ? "mm-link active" : "mm-link"} onClick={() => scrollToId("trial")}>TRIAL</button>
          <button className={active === "renewals" ? "mm-link active" : "mm-link"} onClick={() => scrollToId("renewals")}>RENEWALS</button>
          <button className={active === "contact" ? "mm-link active" : "mm-link"} onClick={() => scrollToId("contact")}>CONTACT</button>
        </nav>

        <div className="mm-cta">
          <button className="mm-btn mm-btn-ghost" onClick={() => scrollToId("trial")}>TRIAL</button>
          <button className="mm-btn mm-btn-primary" onClick={() => scrollToId("contact")}>REQUEST DEMO</button>
        </div>
      </div>
    </header>
  );
}
