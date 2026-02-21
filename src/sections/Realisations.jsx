
import { useState } from "react";

export default function Realisation() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: "Immeuble résidentiel",
      category: "Construction",
      image: "/realisations/projet1.1.jpeg",
      images: [
        "/realisations/projet1.2.jpeg",
        "/realisations/projet1.1.jpeg",
        "/realisations/projet1.3.jpeg",
        
      ],
    },
    {
      title: "Rénovation de bâtiment",
      category: "Rénovation",
      image: "/realisations/projet-5.jpg",
      images: [
        "/realisations/projet-5.jpg",
        "/realisations/projet2.1.jpeg",
        "/realisations/projet2.2.jpeg",
      ],
    },
    {
      title: "Route & voirie",
      category: "Travaux publics",
      image: "/realisations/projet-1.jpeg",
      images: [
        "/realisations/projet3.1.jpeg",
        "/realisations/projet3.2.jpeg",
        "/realisations/projet3.3.jpeg",
      ],
    },
    {
      title: "Résidence",
      category: "Bâtiment",
      image: "/realisations/projet-6.jpg",
      images: [
        "/realisations/projet4.1.jpeg",
        "/realisations/projet4.2.jpeg",
        "/realisations/projet4.3.jpeg",
      ],
    },
    {
      title: "Plan architectural 3D",
      category: "Conception",
      image: "/realisations/projet5.1.jpeg",
      images: [
        "/realisations/projet5.1.jpeg",
        "/realisations/projet5.2.jpeg",
        "/realisations/projet5.3.jpeg",
      ],
    },
    {
      title: "Impression murale",
      category: "Décoration",
      image: "/realisations/projet-4.jpeg",
      images: [
        "/realisations/projet6.1.jpeg",
        "/realisations/projet6.2.jpeg",
        "/realisations/projet6.3.jpeg",
        "/realisations/projet6.4.jpeg",
      ],
    },
  ];

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

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
            Découvrez quelques-uns de nos projets réalisés.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openGallery(project)}
              className="group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

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

      {/* GALLERY MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* Close */}
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={selectedProject.images[currentImage]}
            alt=""
            className="max-h-[80vh] max-w-[90vw] rounded-xl"
          />

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
