export default function Navbar({ active }) {
  return (
    <nav>
      {/* ───── FOOTER ───── */
      function Footer() {
        return (
          <footer
            className="relative border-t border-white/5"
            style={{ zIndex: 1, background: "#060610" }}
          >
            <div className="max-w-6xl mx-auto px-5 py-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                {/* Col 1 */}
                <div>
                  <img
                    src="/logo.png"
                    alt="Zeno"
                    className="h-7 object-contain mb-4"
                    onError={(e) => {
                      e.target.style.display = "none";
                      const s = document.createElement("span");
                      s.textContent = "ZENO";
                      s.style.cssText =
                        "font-family:'Syne',sans-serif;font-size:20px;font-weight:700;color:#7b61ff;letter-spacing:2px";
                      e.target.parentNode.insertBefore(s, e.target);
                    }}
                  />
                  <p className="text-zen-muted text-sm mb-2">
                    La plateforme des influenceurs IA
                  </p>
                  <p className="text-zen-muted/60 text-xs">© 2026 Zeno</p>
                </div>
                {/* Col 2 */}
                <div>
                  <h4 className="font-semibold text-sm mb-4">Navigation</h4>
                  <div className="flex flex-col gap-2.5">
                    {[
                      ["accueil", "Accueil"],
                      ["about", "À propos"],
                      ["creations", "Créations"],
                      ["tarifs", "Tarifs"],
                    ].map(([id, label]) => (
                      <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="text-zen-muted text-sm hover:text-zen-cyan transition-colors text-left"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Col 3 */}
                <div>
                  <h4 className="font-semibold text-sm mb-4">Nous suivre</h4>
                  <div className="flex flex-col gap-2.5">
                    {[
                      ["https://tiktok.com", "TikTok", "ic:baseline-tiktok"],
                      ["https://instagram.com", "Instagram", "mdi:instagram"],
                      ["https://youtube.com", "YouTube", "mdi:youtube"],
                      ["https://linkedin.com", "LinkedIn", "mdi:linkedin"],
                    ].map(([url, label, icon]) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-zen-muted text-sm hover:text-zen-cyan transition-colors"
                      >
                        <iconify-icon icon={icon} width="16" />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
                {/* Col 4 */}
                <div>
                  <h4 className="font-semibold text-sm mb-4">Support</h4>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href="mailto:contact@zeno.ai?subject=Signaler%20un%20bug"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zen-muted text-sm hover:text-zen-cyan transition-colors"
                    >
                      Signaler un bug
                    </a>
                    <a
                      href="mailto:contact@zeno.ai?subject=Sugg%C3%A9rer%20une%20am%C3%A9lioration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zen-muted text-sm hover:text-zen-cyan transition-colors"
                    >
                      Suggérer une amélioration
                    </a>
                    <a
                      href="mailto:contact@zeno.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors"
                      style={{ color: "#1D9E75" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#2bb88a")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#1D9E75")
                      }
                    >
                      contact@zeno.ai
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/5 pt-6 text-center">
                <p className="text-zen-muted/60 text-xs">
                  © 2026 Zeno — Tous droits réservés ·{" "}
                  <a
                    href="mailto:contact@zeno.ai"
                    className="hover:text-zen-cyan transition-colors"
                  >
                    contact@zeno.ai
                  </a>
                </p>
              </div>
            </div>
          </footer>
        );
      }}
    </nav>
  );
}