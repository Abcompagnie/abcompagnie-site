import {
  Figma,
  Activity,   // utilisé comme icône "élevage" (animaux)
  Home,
} from "feather-icons-react";

export default function OtherDomaines() {
  const domaines = [
    {
      title: "Agriculture",
      description:
        "Production agricole durable, valorisation des terres et exploitation moderne adaptée aux besoins locaux.",
      icon: Figma,
    },
    {
      title: "Élevage",
      description:
        "Activités d’élevage respectueuses des normes sanitaires, axées sur la qualité et la productivité.",
      icon: Activity,
    },
    {
      title: "Immobilier",
      description:
        "Investissement, gestion et développement de projets immobiliers résidentiels et commerciaux.",
      icon: Home,
    },
  ];

  return (
    <section id="domains" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#BF391D] font-semibold uppercase tracking-wide">
            Autres domaines
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Des activités diversifiées et complémentaires
          </h2>

          <p className="mt-4 text-gray-600">
            En plus du BTP, nous intervenons dans plusieurs secteurs clés afin
            d’offrir des solutions complètes et durables.
          </p>
        </div>

        {/* DOMAINS GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domaines.map((domaine, index) => {
            const Icon = domaine.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#0000FF]/10 rounded-2xl mb-6">
                  <Icon className="text-[#0000FF]" size={30} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {domaine.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {domaine.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
