export default function Navbar({ active }) {
  return (
    <nav>
      {/* ───── VIDEO MODAL ───── */
      function VideoModal({ onClose }) {
        useEffect(() => {
          const h = (e) => {
            if (e.key === "Escape") onClose();
          };
          window.addEventListener("keydown", h);
          return () => window.removeEventListener("keydown", h);
        }, [onClose]);
        return (
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex: 100 }}
            onClick={onClose}
          >
            <div className="absolute inset-0 bg-black/80" />
            <div
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute -top-10 right-0 text-zen-muted hover:text-white transition-colors"
              >
                <iconify-icon icon="lucide:x" width="24" />
              </button>
              <div
                className="rounded-2xl overflow-hidden border border-white/10"
                style={{ aspectRatio: "16/9", background: "#0d0d1f" }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-zen-violet/20 flex items-center justify-center">
                    <iconify-icon
                      icon="lucide:play"
                      width="28"
                      style={{ color: "#7b61ff", marginLeft: 2 }}
                    />
                  </div>
                  <p className="text-zen-muted text-sm">
                    Démo vidéo — Bientôt disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </nav>
  );
}