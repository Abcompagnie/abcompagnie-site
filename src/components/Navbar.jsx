import { useState, useEffect } from "react";
import { Menu, X } from "feather-icons-react";

export default function Navbar({ sections }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { key: "home", label: "Accueil" },
    { key: "about", label: "À propos" },
    { key: "services", label: "Services" },
    { key: "projects", label: "Réalisation" },
    { key: "domains", label: "Autres domaines" },
    { key: "contact", label: "Contact" },
  ];

  const scrollTo = (key) => {
    sections[key]?.current?.scrollIntoView({ behavior: "smooth" });
    setActive(key);
    setOpen(false);
  };

  // Détection automatique de la section visible
  useEffect(() => {
    const handleScroll = () => {
      for (const key in sections) {
        const section = sections[key].current;
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(key);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO - À GAUCHE */}
        <button onClick={() => scrollTo("home")} className="flex-shrink-0">
          <img src="/logo.png" alt="logo" className="h-10" />
        </button>

        {/* MENU DESKTOP - À DROITE */}
        <div className="hidden md:flex ml-auto space-x-8">
          {links.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={`font-medium transition ${active === key
                ? "text-[#b5331b]"
                : "text-gray-600 hover:text-[#b5331b]"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#BF391D] focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 border-t">
          {links.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={`block w-full text-left font-medium ${active === key ? "text-[#FF8811]" : "text-gray-700"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
