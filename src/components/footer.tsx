import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Larosndo</h3>
            <p className="text-gray-400">
              Connecting you to the future of internet technology.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#fb923c] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-[#fb923c] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-[#fb923c] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#fb923c] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#fb923c] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-[#fb923c]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-[#fb923c]" />
                <span>info@larosndo.com</span>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2 text-[#fb923c]" />
                <span>123 Tech Street, Internet City, 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Larosndo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
