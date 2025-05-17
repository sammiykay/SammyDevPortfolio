import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Kayode<span className="text-primary">.dev</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Full-stack developer specialized in creating visually stunning
              websites, robust web solutions, automation tools, and trading
              scripts.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "services", "resume", "portfolio", "contact"].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="text-gray-400 hover:text-primary transition"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-400">
                <MapPin className="mr-3 text-primary shrink-0 mt-1" size={18} />
                <span>
                  5 Akindele Lane, Fardock Estate, Iju Ishaga, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="mr-3 text-primary shrink-0" size={18} />
                <span>+234 9071502233</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="mr-3 text-primary shrink-0" size={18} />
                <span>kayodeola47@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Developed by Sammiykay, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
