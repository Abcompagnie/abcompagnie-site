import {
  Home,
  Edit3,
  Box,
  Printer,
  ShoppingBag,
  PenTool,
}
from "feather-icons-react";

export default function Service() {
  const services = [
    {
      title: "Bâtiment & Travaux Publics",
      description:
        "Réalisation de projets de construction, rénovation et travaux publics dans le respect des normes et des délais.",
      icon: Home,
    },
    {
      title: "Conception de Plans Architecturaux",
      description:
        "Étude et conception de plans architecturaux adaptés à vos besoins et conformes aux réglementations en vigueur.",
      icon: Edit3,
    },
    {
      title: "Maquettes 2D & 3D",
      description:
        "Modélisation 2D et 3D pour une meilleure visualisation de vos projets avant leur réalisation.",
      icon: Box,
    },
    {
      title: "Impression sur Tous Supports",
      description:
        "Impression professionnelle de plans, affiches, supports publicitaires et documents techniques.",
      icon: Printer,
    },
    {
      title: "Commerce Général",
      description:
        "Fourniture et commercialisation de matériaux, équipements et divers produits de qualité.",
      icon: ShoppingBag,
    },
    {
      title: "Décoration intérieure et extérieure",
      description:
        "Conception et réalisation de décorations intérieures, extérieures, murales et de sols, alliant esthétique, créativité et finitions de qualité",
      icon: PenTool,
    },
  ];

  return (
    <section id="service" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#BF391D] font-bold uppercase tracking-wide">
            Nos services
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Des solutions complètes pour vos projets
          </h2>

          <p className="mt-4 text-gray-600">
            Nous proposons une gamme de services couvrant l’ensemble de vos
            besoins, de la conception à la réalisation.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#0000FF]/10 rounded-2xl mb-6">
                  <Icon className="text-[#0000FF]" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
