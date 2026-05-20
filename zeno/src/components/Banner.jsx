export default function Navbar({ active }) {
  return (
    <nav>
      {/* ───── BANNER CTA ───── */
      function Banner({
        title,
        subtitle,
        btn1,
        btn2,
        onBtn1,
        onBtn2,
        btn2Mail,
      }) {
        return (
          <section className="py-20 px-5">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
              <p className="text-zen-muted mb-8 max-w-xl mx-auto">{subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onBtn1}
                  className="btn-cyan font-semibold px-8 py-3 rounded-xl"
                >
                  {btn1}
                </button>
                {btn2Mail ? (
                  <a
                    href={btn2Mail}
                    className="border border-white/15 text-white font-medium px-8 py-3 rounded-xl hover:border-zen-cyan/50 transition-colors"
                  >
                    {btn2}
                  </a>
                ) : btn2 ? (
                  <button
                    onClick={onBtn2}
                    className="border border-white/15 text-white font-medium px-8 py-3 rounded-xl hover:border-zen-cyan/50 transition-colors"
                  >
                    {btn2}
                  </button>
                ) : null}
              </div>
            </div>
          </section>
        );
      }}
    </nav>
  );
}