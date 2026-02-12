import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="apropos_abc.JPG"
              alt="Entreprise BTP - Chantier"
              className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-[#BF391D]/20 rounded-2xl -z-10" />
          </div>

          {/* TEXTE */}
          <div className="text-center md:text-left">
            <span className="text-[#BF391D] font-semibold uppercase tracking-wide">
              À propos de nous
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Une expertise solide dans le domaine du BTP
            </h2>

            <p className="mt-6 text-gray-600 text-left">
              Forts de plusieurs années d’expérience, nous accompagnons nos
              clients dans la réalisation de projets de construction,
              rénovation et travaux publics. A B Compagnie est une entreprise
              familiale fondée en hommage à Aliou Ba, bâtisseur visionnaire.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Construction et travaux publics",
                "Respect des normes et délais",
                "Équipe qualifiée et expérimentée",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-[#BF391D] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

