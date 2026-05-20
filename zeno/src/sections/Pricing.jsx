export default function Princing({ onDemo }) {
  return (
    <section id="Princing">
      {/* ───── PRICING ───── */
      function PricingSection() {
        const [annual, setAnnual] = useState(false);
        const [faq, setFaq] = useState(null);

        const plans = [
          {
            name: "Starter",
            tagline: "Pour découvrir sans engagement",
            price: "Gratuit — pour toujours",
            priceAnnual: null,
            savings: null,
            btn: "Commencer gratuitement",
            btnBg: "#1D9E75",
            features: [
              "1 influenceur IA personnalisable",
              "5 vidéos générées / mois",
              "1 réseau social connecté",
              "Qualité vidéo 720p",
              "Publication manuelle",
            ],
          },
          {
            name: "Nova",
            tagline: "Pour les créateurs sérieux",
            popular: true,
            price: "29€ / mois",
            priceAnnual: "250€ / an",
            savings: "✦ Économise 98€ — 3 mois offerts",
            btn: "Choisir Nova",
            btnBg: "#7b61ff",
            features: [
              "3 influenceurs IA",
              "Personnalisation poussée avec l'IA",
              "30 vidéos générées / mois",
              "3 réseaux sociaux connectés",
              "Qualité vidéo 1080p / 4K",
              "Publication automatique",
              "Analytics essentiels",
            ],
          },
          {
            name: "Stellar",
            tagline: "Pour les agences et grandes marques",
            price: "100€ / mois",
            priceAnnual: "990€ / an",
            savings: "✦ Économise 210€ — 2 mois offerts",
            btn: "Choisir Stellar",
            btnBg: "#C9A84C",
            features: [
              "50 influenceurs IA",
              "250 vidéos générées / mois",
              "Tous les réseaux connectés",
              "Avatar IA ultra-personnalisé",
              "Publication automatique avancée",
              "Analytics avancés + export PDF/Excel",
              "Accès API",
              "Support prioritaire",
            ],
          },
        ];

        const tableRows = [
          {
            cat: "Influenceurs IA",
            rows: [
              ["Nombre d'influenceurs IA", "1", "3", "50"],
              ["Personnalisation de base", "✓", "✓", "✓"],
              ["Personnalisation poussée IA", "✗", "✓", "✓"],
              ["Avatar ultra-personnalisé", "✗", "✗", "✓"],
            ],
          },
          {
            cat: "Vidéos",
            rows: [
              ["Vidéos générées / mois", "5", "30", "250"],
              ["Qualité 720p", "✓", "✓", "✓"],
              ["Qualité 1080p", "✗", "✓", "✓"],
              ["Qualité 4K", "✗", "✓", "✓"],
            ],
          },
          {
            cat: "Publication",
            rows: [
              ["Réseaux sociaux connectés", "1", "3", "Tous"],
              ["Publication manuelle", "✓", "✓", "✓"],
              ["Publication automatique", "✗", "✓", "✓"],
              ["Publication automatique avancée", "✗", "✗", "✓"],
            ],
          },
          {
            cat: "Analytics",
            rows: [
              ["Dashboard basique", "✓", "✓", "✓"],
              ["Analytics essentiels", "✗", "✓", "✓"],
              ["Analytics avancés", "✗", "✗", "✓"],
              ["Export PDF / Excel", "✗", "✗", "✓"],
            ],
          },
          {
            cat: "Support",
            rows: [
              ["Support par email", "✓", "✓", "✓"],
              ["Support prioritaire", "✗", "✗", "✓"],
              ["Accès API", "✗", "✗", "✓"],
              ["Facture entreprise", "✗", "✗", "✓"],
            ],
          },
        ];

        const faqs = [
          {
            q: "Est-ce que le plan Starter est vraiment gratuit pour toujours ?",
            r: "Oui, sans limite de durée et sans carte bancaire. Tu peux utiliser le plan Starter indéfiniment.",
          },
          {
            q: "Est-ce que je peux changer de plan à tout moment ?",
            r: "Oui, depuis ton tableau de bord. Aucun engagement.",
          },
          {
            q: "Quels moyens de paiement acceptez-vous ?",
            r: "Carte bancaire (Visa, Mastercard), PayPal et virement pour Stellar.",
          },
          {
            q: "Que se passe-t-il si j'annule ?",
            r: "Tu repasses sur Starter. Tes données sont conservées.",
          },
          {
            q: "Le plan Stellar convient-il aux entreprises ?",
            r: "Oui, facture disponible pour chaque paiement.",
          },
        ];

        const Check = ({ v }) => (
          <span
            className={
              v === "✓"
                ? "text-zen-green"
                : v === "✗"
                ? "text-red-400/60"
                : "text-white font-medium"
            }
          >
            {v}
          </span>
        );

        return (
          <section id="tarifs" className="relative py-20" style={{ zIndex: 1 }}>
            <div className="max-w-6xl mx-auto px-5">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">
                  Un plan pour chaque créateur
                </h2>
                <p className="text-zen-muted text-lg">
                  Commence gratuitement, évolue quand tu es prêt. Aucune carte
                  bancaire requise pour démarrer.
                </p>
              </div>

              {/* Toggle */}
              <div className="flex items-center justify-center gap-4 mb-14">
                <span
                  className={`text-sm font-medium ${
                    !annual ? "text-white" : "text-zen-muted"
                  }`}
                >
                  Mensuel
                </span>
                <div
                  className={`toggle-track ${annual ? "on" : ""}`}
                  onClick={() => setAnnual(!annual)}
                >
                  <div className="toggle-dot" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    annual ? "text-white" : "text-zen-muted"
                  }`}
                >
                  Annuel
                </span>
                {annual && (
                  <span className="text-xs font-semibold text-zen-green bg-zen-green/10 px-3 py-1 rounded-full ml-1">
                    Économise jusqu'à 210€
                  </span>
                )}
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                {plans.map((p, i) => {
                  const isPopular = !!p.popular;
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl p-7 border relative flex flex-col ${
                        isPopular ? "md:-mt-4 md:mb-0" : ""
                      }`}
                      style={{
                        background: isPopular
                          ? "#14143a"
                          : "rgba(16,16,28,0.85)",
                        borderColor: isPopular
                          ? "#7b61ff"
                          : "rgba(123,97,255,.15)",
                        borderWidth: isPopular ? "1.5px" : "1px",
                        boxShadow: isPopular
                          ? "0 0 40px rgba(123,97,255,.12)"
                          : "none",
                      }}
                    >
                      {isPopular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full bg-zen-violet text-white">
                          ⭐ Le plus populaire
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                      <p className="text-zen-muted text-sm mb-5">{p.tagline}</p>
                      <p className="text-2xl font-bold mb-1">
                        {annual && p.priceAnnual ? p.priceAnnual : p.price}
                      </p>
                      {annual && p.savings && (
                        <p className="text-sm text-zen-cyan mb-5">
                          {p.savings}
                        </p>
                      )}
                      {!annual && <div className="mb-5" />}
                      <ul className="space-y-3 mb-8 flex-1">
                        {p.features.map((f, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm"
                          >
                            <iconify-icon
                              icon="lucide:check"
                              width="16"
                              style={{
                                color: p.btnBg,
                                marginTop: 2,
                                flexShrink: 0,
                              }}
                            />
                            <span className="text-zen-muted">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:brightness-110"
                        style={{ background: p.btnBg }}
                      >
                        {p.btn}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Comparison Table */}
              <div className="mb-20">
                <h2 className="text-center text-xl md:text-2xl font-bold mb-10">
                  Comparer les plans en détail
                </h2>
                <div
                  className="overflow-x-auto rounded-2xl border border-white/5"
                  style={{ background: "rgba(16,16,28,0.6)" }}
                >
                  <table className="w-full min-w-[600px] text-sm">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="text-left py-4 px-5 text-zen-muted font-medium">
                          Fonctionnalité
                        </th>
                        <th className="text-center py-4 px-4 font-semibold">
                          Starter
                        </th>
                        <th className="text-center py-4 px-4 font-semibold text-zen-violet">
                          Nova
                        </th>
                        <th className="text-center py-4 px-4 font-semibold text-zen-gold">
                          Stellar
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableRows.map((cat, ci) => (
                        <React.Fragment key={ci}>
                          <tr>
                            <td
                              colSpan={4}
                              className="py-3 px-5 text-xs font-bold text-zen-violet uppercase tracking-wider bg-zen-violet/5"
                            >
                              {cat.cat}
                            </td>
                          </tr>
                          {cat.rows.map((r, ri) => (
                            <tr
                              key={ri}
                              className="border-b border-white/5 hover:bg-white/[.02] transition-colors"
                            >
                              <td className="py-3 px-5 text-zen-muted">
                                {r[0]}
                              </td>
                              <td className="py-3 px-4 text-center">
                                <Check v={r[1]} />
                              </td>
                              <td className="py-3 px-4 text-center">
                                <Check v={r[2]} />
                              </td>
                              <td className="py-3 px-4 text-center">
                                <Check v={r[3]} />
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ */}
              <div className="max-w-3xl mx-auto mb-10">
                <h2 className="text-center text-xl md:text-2xl font-bold mb-10">
                  Tu as des questions ? On a les réponses.
                </h2>
                <div className="space-y-3">
                  {faqs.map((f, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/5 overflow-hidden"
                      style={{ background: "rgba(16,16,28,0.6)" }}
                    >
                      <button
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[.02] transition-colors"
                        onClick={() => setFaq(faq === i ? null : i)}
                      >
                        <span className="font-medium text-sm pr-4">{f.q}</span>
                        <iconify-icon
                          icon="lucide:chevron-down"
                          width="18"
                          style={{
                            color: "#a0a0b0",
                            transition: "transform .3s",
                            transform:
                              faq === i ? "rotate(180deg)" : "rotate(0)",
                          }}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          faq === i
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="px-6 pb-4 text-zen-muted text-sm leading-relaxed">
                          {f.r}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Banner
              title="Lance-toi aujourd'hui — c'est gratuit."
              subtitle="Crée ton premier influenceur IA en moins de 10 minutes. Aucune carte bancaire requise."
              btn1="Commencer gratuitement"
              btn2={null}
              onBtn1={() => scrollTo("tarifs")}
            />
          </section>
        );
      }}
    </section>
  );
}