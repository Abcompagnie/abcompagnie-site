import React, { useState } from "react";
import ServiceFormModal from "../components/ServiceFormModal";

export default function Hero({ onScrollTo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 mt-20" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-6 pb-24 w-full">
          <div className="max-w-2xl">

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Construisons des ouvrages solides et durables
            </h1>

            <p className="mt-4 text-lg text-gray-200">
              Spécialistes du BTP, nous réalisons vos projets de construction,
              rénovation, conception de plans architecturaux, maquettes 2D/3D
              et travaux publics avec rigueur et qualité.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">

              {/* DEMANDE DE DEVIS */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#0000FF] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Demander un devis
              </button>

              {/* SCROLL REALISATIONS */}
              {/* <button
                onClick={() => onScrollTo("projects")}
                className="hidden md:inline-flex border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Voir nos réalisations
              </button> */}

              {/* Bouton whatsapp */}

              <a
                href="https://wa.me/221765243293?text=Bonjour, je souhaite avoir plus d’informations sur vos réalisations."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.52 3.48A11.77 11.77 0 0012.05 0C5.4 0 .02 5.38.02 12.02c0 2.12.55 4.19 1.6 6.02L0 24l6.16-1.6a12 12 0 005.89 1.5h.01c6.64 0 12.02-5.38 12.02-12.02 0-3.21-1.25-6.23-3.56-8.4z" />
                </svg>

                Nous contacter par WhatsApp
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ServiceFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
