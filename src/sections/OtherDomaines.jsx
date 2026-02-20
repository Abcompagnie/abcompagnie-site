// import {
//   Figma,
//   Activity,   // utilisé comme icône "élevage" (animaux)
//   Home,
// } from "feather-icons-react";

// export default function OtherDomaines() {
//   const domaines = [
//     {
//       title: "Agriculture",
//       description:
//         "Production agricole durable, valorisation des terres et exploitation moderne adaptée aux besoins locaux.",
//       icon: Figma,
//     },
//     {
//       title: "Élevage",
//       description:
//         "Activités d’élevage respectueuses des normes sanitaires, axées sur la qualité et la productivité.",
//       icon: Activity,
//     },
//     {
//       title: "Immobilier",
//       description:
//         "Investissement, gestion et développement de projets immobiliers résidentiels et commerciaux.",
//       icon: Home,
//     },
//   ];

//   return (
//     <section id="domains" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto">
//           <span className="text-[#BF391D] font-semibold uppercase tracking-wide">
//             Autres domaines
//           </span>

//           <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
//             Des activités diversifiées et complémentaires
//           </h2>

//           <p className="mt-4 text-gray-600">
//             En plus du BTP, nous intervenons dans plusieurs secteurs clés afin
//             d’offrir des solutions complètes et durables.
//           </p>
//         </div>

//         {/* DOMAINS GRID */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {domaines.map((domaine, index) => {
//             const Icon = domaine.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
//               >
//                 <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#0000FF]/10 rounded-2xl mb-6">
//                   <Icon className="text-[#0000FF]" size={30} />
//                 </div>

//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {domaine.title}
//                 </h3>

//                 <p className="mt-4 text-gray-600 leading-relaxed">
//                   {domaine.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import {
  Figma,
  Activity,
  Home,
  ArrowRight,
  X,
} from "feather-icons-react";

export default function OtherDomaines() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  const domaines = [
    {
      title: "Agriculture",
      shortDescription:
        "Production agricole durable et valorisation moderne des terres.",
      fullDescription:
        "Nous développons des projets agricoles innovants incluant irrigation moderne, transformation des produits, mécanisation avancée et optimisation des rendements pour répondre aux besoins locaux et internationaux.",
      image: "/domains/agriculture.jpg",
      icon: Figma,
    },
    {
      title: "Élevage",
      shortDescription:
        "Activités d’élevage respectueuses des normes sanitaires.",
      fullDescription:
        "Nos exploitations respectent les normes sanitaires internationales et intègrent des pratiques modernes pour améliorer la productivité et garantir la qualité des produits.",
      image: "/domains/elevage.jpg",
      icon: Activity,
    },
    {
      title: "Immobilier",
      shortDescription:
        "Investissement et développement de projets immobiliers.",
      fullDescription:
        "Nous réalisons des projets immobiliers clés en main, incluant étude de faisabilité, conception architecturale, suivi des travaux et gestion complète des biens.",
      image: "/domains/immobilier.jpg",
      icon: Home,
    },
  ];

  return (
    <section id="domains" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">          <span className="text-[#BF391D] font-semibold uppercase tracking-wide">            Autres domaines           </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Des activités diversifiées et complémentaires           </h2>

          <p className="mt-4 text-gray-600">
            En plus du BTP, nous intervenons dans plusieurs secteurs clés afin
            d’offrir des solutions complètes et durables.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domaines.map((domaine, index) => {
            const Icon = domaine.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#0000FF]/10 rounded-2xl mb-6">
                  <Icon className="text-[#0000FF]" size={30} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {domaine.title}
                </h3>

                {/* 2 lignes max */}
                <p className="mt-4 text-gray-600 leading-relaxed text-center line-clamp-2 flex-grow">
                  {domaine.shortDescription}
                </p>

                <button
                  onClick={() => setSelectedDomain(domaine)}
                  className="mt-6 inline-flex items-center justify-center gap-2 text-[#0000FF] font-semibold hover:gap-3 transition-all"
                >
                  Voir plus
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL STYLE PAGE */}
      {selectedDomain && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedDomain(null)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON EN HAUT À DROITE */}
            <button
              onClick={() => setSelectedDomain(null)}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-md hover:scale-110 transition z-10"
            >
              <X size={20} className="text-gray-700" />
            </button>

            {/* IMAGE */}
            <img
              src={selectedDomain.image}
              alt={selectedDomain.title}
              className="w-full h-64 object-cover"
            />

            {/* CONTENT */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedDomain.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {selectedDomain.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
