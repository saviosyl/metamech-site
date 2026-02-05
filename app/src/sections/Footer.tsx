import React, { useMemo } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const logoUrl = useMemo(
    () => import.meta.env.BASE_URL + "metamech-logo.png",
    []
  );

  return (
    <footer className="mm-footer">
      <div className="mm-container mm-footer-inner">
        <div className="mm-footer-left">
          <img src={logoUrl} className="mm-footer-logo" alt="MetaMech Solution" />
          <div>
            <div className="mm-footer-title">MetaMech Solution</div>
            <div className="mm-footer-sub">Premium engineering automation • Galway, Ireland</div>
          </div>
        </div>

        <div className="mm-footer-right">
          <div>© {year} MetaMech Solution</div>
          <div>
            <a href="mailto:hi@metamechsolutions.com" style={{ textDecoration: "underline" }}>
              hi@metamechsolutions.com
            </a>
          </div>
        </div>
      </div>

      <div className="mm-container mm-footer-legal">
        SOLIDWORKS® is a registered trademark of Dassault Systèmes. MetaMech Solution is an independent
        engineering consultancy and software provider and is not affiliated with, endorsed by, or sponsored by
        Dassault Systèmes or SOLIDWORKS.
      </div>
    </footer>
  );
}

