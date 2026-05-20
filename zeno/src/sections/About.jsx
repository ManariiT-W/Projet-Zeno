export default function About({ onDemo }) {
  return (
    <section id="About">
      {/* ───── ABOUT ───── */
      function AboutSection() {
        const values = [
          {
            icon: "lucide:accessibility",
            title: "Accessibilité",
            desc: "Créer un influenceur IA doit être aussi simple que créer un compte sur un réseau social.",
          },
          {
            icon: "lucide:bot",
            title: "Automatisation",
            desc: "Le temps est précieux. L'IA travaille pour toi pendant que tu te concentres sur l'essentiel.",
          },
          {
            icon: "lucide:sparkles",
            title: "Innovation",
            desc: "Nous repoussons les limites de ce que l'IA peut faire pour les créateurs de contenu.",
          },
        ];
        const timeline = [
          {
            n: "01",
            title: "Lancement de la plateforme — 2026",
            desc: "Création de la première version de Zeno.",
          },
          {
            n: "02",
            title: "Nouvelles fonctionnalités IA — 2026",
            desc: "Ajout de nouvelles voix, styles visuels et niches de contenu.",
          },
          {
            n: "03",
            title: "Ouverture de l'équipe — 2027",
            desc: "Les premiers membres rejoignent l'aventure.",
          },
          {
            n: "04",
            title: "Expansion internationale — 2027",
            desc: "Zeno disponible en plusieurs langues.",
          },
        ];
        return (
          <section id="about" className="relative py-20" style={{ zIndex: 1 }}>
            <div className="max-w-6xl mx-auto px-5">
              {/* Mission */}
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">
                  Notre mission : démocratiser la création d'influenceurs IA
                </h2>
                <p className="text-zen-muted text-lg leading-relaxed">
                  Nous croyons que chaque personne mérite sa propre présence IA
                  sur les réseaux sociaux — peu importe son niveau technique ou
                  son budget.
                </p>
              </div>

              {/* Founder */}
              <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-20 max-w-4xl mx-auto">
                <div className="shrink-0">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-zen-violet/30">
                    <img
                      src="https://picsum.photos/seed/zenofounder/300/300"
                      alt="Fondateur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Un créateur, une vision, une plateforme.
                  </h3>
                  <p className="text-zen-muted leading-relaxed">
                    Je suis Alex, fondateur de Zeno. J'ai créé cette plateforme
                    avec une conviction simple : l'IA va transformer la création
                    de contenu, et tout le monde doit pouvoir en profiter. Seul
                    derrière ce projet aujourd'hui, je construis quelque chose
                    de plus grand pour demain.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="mb-20">
                <h2 className="text-center text-xl md:text-2xl font-bold mb-12">
                  Ce qui nous guide chaque jour
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {values.map((v, i) => (
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
                          icon={v.icon}
                          width="20"
                          style={{ color: "#7b61ff" }}
                        />
                      </div>
                      <h3 className="font-semibold text-base mb-2">
                        {v.title}
                      </h3>
                      <p className="text-zen-muted text-sm leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-10 max-w-3xl mx-auto">
                <h2 className="text-center text-xl md:text-2xl font-bold mb-12">
                  L'aventure ne fait que commencer
                </h2>
                <div className="relative pl-8 border-l border-zen-violet/25">
                  {timeline.map((t, i) => (
                    <div key={i} className="mb-8 last:mb-0 relative">
                      <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-zen-bg border-2 border-zen-violet/60 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-zen-violet" />
                      </div>
                      <span className="text-zen-cyan text-xs font-bold">
                        {t.n}
                      </span>
                      <h3 className="font-semibold text-base mt-1 mb-1">
                        {t.title}
                      </h3>
                      <p className="text-zen-muted text-sm">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Banner
              title="Tu veux faire partie de l'aventure ?"
              subtitle="Que tu sois créateur, investisseur ou simplement curieux — on veut t'entendre."
              btn1="Commencer gratuitement"
              btn2="Nous contacter"
              onBtn1={() => scrollTo("tarifs")}
              btn2Mail="mailto:contact@zeno.ai?subject=Prise%20de%20contact%20%E2%80%94%20Zeno"
            />
          </section>
        );
      }}
    </section>
  );
}