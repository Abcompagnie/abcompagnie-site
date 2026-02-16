export default function Realisation() {
  const projects = [
    {
      title: "Immeuble résidentiel",
      category: "Construction",
      image: "/realisations/projet-2.jpeg",
    },
    {
      title: "Rénovation de bâtiment",
      category: "Rénovation",
      image: "/realisations/projet-5.jpg",
    },
    {
      title: "Route & voirie",
      category: "Travaux publics",
      image: "/realisations/projet-1.jpeg",
    },
    {
      title: "Résidence",
      category: "Bâtiment",
      image: "/realisations/projet-6.jpg",
    },
    {
      title: "Plan architectural 3D",
      category: "Conception",
      image: "/realisations/projet-3.jpeg",
    },
    {
      title: "Impression sur un support",
      category: "Impression Murale",
      image: "/realisations/projet-4.jpeg",
    },
  ];

  return (
    <section id="realisation" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#BF391D] font-bold uppercase tracking-wide">
            Nos réalisations
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Dernières réalisations livrées avec rigueur et qualité
          </h2>

          <p className="mt-4 text-gray-600">
            Découvrez quelques-uns de nos projets réalisés dans le domaine du
            bâtiment, des travaux publics et de la conception.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-all">
                <span className="text-sm text-white font-semibold">
                  {project.category}
                </span>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
