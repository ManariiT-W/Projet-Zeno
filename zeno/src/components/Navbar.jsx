export default function Navbar({ active }) {
  return (
    <nav>
      {/* ───── NAVBAR ───── */
      function Navbar({ active }) {
        const [open, setOpen] = useState(false);
        const links = [
          ["accueil", "Accueil"],
          ["about", "À propos"],
          ["creations", "Créations"],
          ["tarifs", "Tarifs"],
        ];
        return (
          <nav
            className="fixed top-0 left-0 right-0 glass"
            style={{ zIndex: 50, height: 60 }}
          >
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-5">
              <img
                src="/logo.png"
                alt="Zeno"
                className="h-8 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  const s = document.createElement("span");
                  s.textContent = "ZENO";
                  s.style.cssText =
                    "font-family:'Syne',sans-serif;font-size:22px;font-weight:700;color:#7b61ff;letter-spacing:2px";
                  e.target.parentNode.insertBefore(s, e.target);
                }}
              />
              <div className="hidden md:flex items-center gap-8">
                {links.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`text-sm font-medium transition-colors pb-0.5 border-b-2 ${
                      active === id
                        ? "text-white border-zen-violet"
                        : "text-zen-muted border-transparent hover:text-zen-violet"
                    }`}
                    style={active !== id ? { textShadow: "none" } : {}}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollTo("tarifs")}
                className="hidden md:block btn-cyan font-semibold text-sm px-5 py-2 rounded-lg"
              >
                Commencer gratuitement
              </button>
              <button
                className="md:hidden text-white"
                onClick={() => setOpen(!open)}
              >
                <iconify-icon
                  icon={open ? "lucide:x" : "lucide:menu"}
                  width="24"
                />
              </button>
            </div>
            {open && (
              <div className="md:hidden glass border-t border-white/5 px-5 py-4 flex flex-col gap-4">
                {links.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => {
                      scrollTo(id);
                      setOpen(false);
                    }}
                    className={`text-sm font-medium text-left ${
                      active === id ? "text-zen-violet" : "text-zen-muted"
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    scrollTo("tarifs");
                    setOpen(false);
                  }}
                  className="btn-cyan font-semibold text-sm px-5 py-2 rounded-lg w-full"
                >
                  Commencer gratuitement
                </button>
              </div>
            )}
          </nav>
        );
      }
}
    </nav>
  );
}