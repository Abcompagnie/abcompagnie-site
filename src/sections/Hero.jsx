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

            <div className="mt-8 flex gap-4">

              {/* DEMANDE DE DEVIS */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#0000FF] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Demander un devis
              </button>

              {/* SCROLL REALISATIONS */}
              <button
                onClick={() => onScrollTo("projects")}
                className="hidden md:inline-flex border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Voir nos réalisations
              </button>

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
