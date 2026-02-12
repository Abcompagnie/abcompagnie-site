import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "feather-icons-react";

export default function Footer() {
  return (
    <footer className="bg-[#0000FF] text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* COL 1 – LOGO & DESCRIPTION */}
        <div>
          <div className="flex items-left">
            <div className="w-full h-20">
              <img src="logo1.jpg" alt="logo" />
            </div>
            
          </div>

          <p className="text-white text-sm text-left">
            Architecture moderne et construction durable pour un avenir responsable.
          </p>

          <div className="flex gap-4 mt-6">
            <a className="hover:text-green-500" href="#"><Linkedin size={20} /></a>
            <a className="hover:text-green-500" href="#"><Twitter size={20} /></a>
            <a className="hover:text-green-500" href="#"><Facebook size={20} /></a>
          </div>
        </div>

        {/* COL 2 – NAVIGATION */}
        <div className="text-left">
          <h4 className="font-bold mb-4">NAVIGATION</h4>
          <ul className="space-y-3 text-white text-sm">
            <li><a href="#home" className="hover:text-white">Accueil</a></li>
            <li><a href="#about" className="hover:text-white">À propos</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Réalisations</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* COL 3 – SERVICES */}
        <div className="text-left">
          <h4 className="font-bold mb-4 ">SERVICES</h4>
          <ul className="space-y-3 text-white text-sm">
            <li>Bâtiment & Travaux Publics</li>
            <li>Conception de Plans Architecturaux</li>
            <li>Maquettes 2D & 3D</li>
            <li>Impression sur Tous Supports</li>
            <li>Décoration intérieure et extérieure</li>
            <li>Commerce Général</li>
          </ul>
        </div>

        {/* COL 4 – CONTACT */}
        <div className="text-left">
          <h4 className="font-bold mb-4">CONTACT</h4>
          <ul className="space-y-4 text-white text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} />
              abcompagniesn@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} />
              +221 70 641 00 48 / 76 524 32 93
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} />
              Sindia RN1 – Route de Mbour
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white py-6 text-center text-sm text-white">
        © 2026 <span className="font-semibold text-white">AB Compagnie</span>. Tous droits réservés.
      </div>
    </footer>
  );
}
