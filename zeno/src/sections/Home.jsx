export default function Home({ onDemo }) {
  return (
    <section id="Home">
      {/* ───── HOME ───── */
      function HomeSection({ onDemo }) {
        const cards = [
          {
            icon: "lucide:mouse-pointer-click",
            title: "Aucune compétence requise",
            desc: "Pas besoin de coder, monter des vidéos ou connaître l'IA. On s'occupe de tout.",
          },
          {
            icon: "lucide:timer",
            title: "Résultats en 10 minutes",
            desc: "Ton influenceur IA est créé, configuré et prêt à publier en moins de 10 minutes.",
          },
          {
            icon: "lucide:share-2",
            title: "3 réseaux connectés",
            desc: "TikTok, Instagram et YouTube connectés en un seul endroit, publication automatique.",
          },
          {
            icon: "lucide:credit-card",
            title: "Essai gratuit sans CB",
            desc: "Tu testes la plateforme gratuitement, sans carte bancaire, sans engagement.",
          },
        ];
        const steps = [
          {
            n: "01",
            title: "Décris ton influenceur",
            desc: "Donne-lui un nom, une niche, un style visuel et une personnalité",
          },
          {
            n: "02",
            title: "L'IA génère tout",
            desc: "Avatar, voix, script et vidéo créés automatiquement en quelques minutes",
          },
          {
            n: "03",
            title: "Publication auto",
            desc: "Tes vidéos sont publiées sur tes réseaux selon ton planning défini",
          },
        ];
        return (
          <section
            id="accueil"
            className="relative pt-28 pb-10"
            style={{ zIndex: 1 }}
          >
            {/* Hero with Halo */}
            <div className="relative overflow-hidden">
              {/* Violet halo */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ zIndex: 0 }}
              >
                <div
                  style={{
                    width: "min(800px,90vw)",
                    height: "min(550px,70vw)",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse at center, rgba(123,97,255,0.16) 0%, rgba(123,97,255,0.09) 35%, rgba(123,97,255,0.03) 55%, transparent 75%)",
                    filter: "blur(80px)",
                  }}
                ></div>
              </div>
              {/* Cyan core */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ zIndex: 0 }}
              >
                <div
                  style={{
                    width: "min(350px,50vw)",
                    height: "min(280px,40vw)",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse at center, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.04) 40%, transparent 70%)",
                    filter: "blur(50px)",
                  }}
                ></div>
              </div>
              {/* Hero content */}
              <div
                className="relative max-w-4xl mx-auto text-center px-5 pt-10 pb-20"
                style={{ zIndex: 1 }}
              >
                <h1
                  className="anim-up font-bold leading-tight mb-6"
                  style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
                >
                  Crée ton Influenceur IA
                  <br />
                  en quelques clics
                </h1>
                <p className="anim-up d2 text-zen-muted text-lg mb-10 max-w-xl mx-auto">
                  Génère des vidéos automatiquement et publie sur TikTok,
                  Instagram et YouTube — sans effort.
                </p>
                <div className="anim-up d3 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => scrollTo("tarifs")}
                    className="btn-cyan font-semibold px-8 py-3.5 rounded-xl text-base"
                  >
                    Commencer gratuitement
                  </button>
                  <button
                    onClick={onDemo}
                    className="border border-white/15 text-white font-medium px-8 py-3.5 rounded-xl text-base hover:border-zen-cyan/40 transition-colors"
                  >
                    Démo vidéo
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Cards */}
            <div className="max-w-6xl mx-auto px-5 py-16">
              <h2 className="text-center text-xl md:text-2xl font-bold mb-12">
                Tout ce dont tu as besoin, dès le premier jour
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cards.map((c, i) => (
                  <div
                    key={i}
                    className="card-glow rounded-2xl p-6 border"
                    style={{
                      background: "rgba(16,16,28,0.85)",
                      borderColor: "rgba(123,97,255,.2)",
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-zen-violet/15 flex items-center justify-center mb-4">
                      <iconify-icon
                        icon={c.icon}
                        width="20"
                        style={{ color: "#7b61ff" }}
                      />
                    </div>
                    <h3 className="font-semibold text-base mb-2">{c.title}</h3>
                    <p className="text-zen-muted text-sm leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="max-w-5xl mx-auto px-5 py-16">
              <h2 className="text-center text-xl md:text-2xl font-bold mb-14">
                Comment créer ton influenceur IA en 3 étapes
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                {steps.map((s, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center text-center max-w-[240px]">
                      <div className="w-12 h-12 rounded-full border border-zen-cyan/30 flex items-center justify-center mb-4 text-zen-cyan font-bold text-sm">
                        {s.n}
                      </div>
                      <h3 className="font-semibold text-base mb-2">
                        {s.title}
                      </h3>
                      <p className="text-zen-muted text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    {i < 2 && (
                      <div className="hidden md:flex items-center px-4 text-zen-violet/40">
                        <iconify-icon icon="lucide:arrow-right" width="24" />
                      </div>
                    )}
                    {i < 2 && (
                      <div className="md:hidden py-1 text-zen-violet/40">
                        <iconify-icon icon="lucide:arrow-down" width="24" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="text-center mt-10">
                <button
                  onClick={() => scrollTo("tarifs")}
                  className="btn-cyan font-semibold px-8 py-3 rounded-xl"
                >
                  Essayer maintenant
                </button>
              </div>
            </div>

            <Banner
              title="Prêt à lancer ton influenceur IA ?"
              subtitle="Rejoins les premiers créateurs qui automatisent leur présence sur les réseaux grâce à l'IA."
              btn1="Commencer gratuitement"
              btn2="Voir les créations"
              onBtn1={() => scrollTo("tarifs")}
              onBtn2={() => scrollTo("creations")}
            />
          </section>
        );
      }}
    </section>
  );
}