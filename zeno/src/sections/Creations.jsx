export default function Creations({ onDemo }) {
  return (
    <section id="Creations">
      {/* ───── CREATIONS ───── */
      function CreationsSection() {
        const items = [
          {
            name: "Luna",
            niche: "Mode & Lifestyle",
            handle: "@luna.style",
            followers: "45K",
            videos: "200",
            platform: "TikTok",
            seed: "luna-style",
          },
          {
            name: "Max",
            niche: "Fitness & Nutrition",
            handle: "@max.fit",
            followers: "32K",
            videos: "150",
            platform: "YouTube",
            seed: "max-fit",
          },
          {
            name: "Aria",
            niche: "Tech & Innovation",
            handle: "@aria.tech",
            followers: "28K",
            videos: "120",
            platform: "Instagram",
            seed: "aria-tech",
          },
          {
            name: "Nova",
            niche: "Cuisine & Gastronomie",
            handle: "@nova.cook",
            followers: "55K",
            videos: "300",
            platform: "TikTok",
            seed: "nova-cook",
          },
          {
            name: "Zephyr",
            niche: "Gaming & Esport",
            handle: "@zeph.plays",
            followers: "40K",
            videos: "250",
            platform: "YouTube",
            seed: "zephyr-play",
          },
          {
            name: "Iris",
            niche: "Voyage & Aventure",
            handle: "@iris.travel",
            followers: "38K",
            videos: "180",
            platform: "Instagram",
            seed: "iris-travel",
          },
        ];
        const platformIcon = (p) =>
          p === "TikTok"
            ? "ic:baseline-tiktok"
            : p === "YouTube"
            ? "mdi:youtube"
            : "mdi:instagram";
        const platformColor = (p) =>
          p === "TikTok" ? "#ff0050" : p === "YouTube" ? "#ff0000" : "#e1306c";
        return (
          <section
            id="creations"
            className="relative py-20"
            style={{ zIndex: 1 }}
          >
            <div className="max-w-6xl mx-auto px-5">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">
                  Des influenceurs IA déjà en action
                </h2>
                <p className="text-zen-muted text-lg">
                  Découvre ce que la communauté Zeno a créé — et imagine ce que
                  tu pourrais faire.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((c, i) => (
                  <div
                    key={i}
                    className="card-glow rounded-2xl overflow-hidden border"
                    style={{
                      background: "rgba(16,16,28,0.85)",
                      borderColor: "rgba(123,97,255,.15)",
                    }}
                  >
                    <div className="relative h-48">
                      <img
                        src={`https://picsum.photos/seed/${c.seed}/600/400`}
                        alt={c.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10101c] via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full border-2 border-zen-violet/50 overflow-hidden">
                          <img
                            src={`https://picsum.photos/seed/${c.seed}avatar/100/100`}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{c.name}</p>
                          <p className="text-zen-muted text-xs">{c.handle}</p>
                        </div>
                      </div>
                      <div
                        className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(0,0,0,.6)",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        <iconify-icon
                          icon={platformIcon(c.platform)}
                          width="14"
                          style={{ color: platformColor(c.platform) }}
                        />
                        {c.platform}
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-zen-violet/15 text-zen-cyan mb-3">
                        {c.niche}
                      </span>
                      <div className="flex items-center gap-5 text-sm">
                        <div>
                          <span className="font-semibold text-white">
                            {c.followers}
                          </span>{" "}
                          <span className="text-zen-muted">abonnés</span>
                        </div>
                        <div>
                          <span className="font-semibold text-white">
                            {c.videos}
                          </span>{" "}
                          <span className="text-zen-muted">vidéos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-14">
                <button
                  onClick={() => scrollTo("tarifs")}
                  className="btn-cyan font-semibold px-8 py-3 rounded-xl"
                >
                  Créer ton influenceur IA
                </button>
              </div>
            </div>
          </section>
        );
      }}
    </section>
  );
}