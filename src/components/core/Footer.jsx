import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
  const navs = [
    { tab: "Playground", page: "/playground" },
    { tab: "Challenges", page: "/upcoming" },
    { tab: "Community", page: "/community" },
    { tab: "Pro", page: "/pro" },
  ];

  return (
    <footer className="bg-purple-900 bg-opacity-100 py-6 lg:px-32 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4 py-4">
          {/* Logo and description */}
          <div>
            <div className="flex">
              <img src={logo} alt="Codeteria Logo" className="w-[40px] h-[40px] mr-2" />
              <Link to="/" className="text-2xl font-bold text-white">
                Codeteria
              </Link>
            </div>
            <p className="text-gray-300 ml-2">Empowering coders worldwide</p>
            <div className="mt-4 ml-2">
              <Link to="/terms">Terms and Conditions</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {navs.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.page}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {item.tab}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Community</h3>
            <ul className="space-y-2">
              {["Forums", "Blog", "Events", "Partnerships"].map((item, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Connect</h3>
            <p className="text-gray-300 mb-3 ml-1">support@codeteria.com</p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 hover:scale-125 transform transition-transform duration-200 hover:text-yellow-400"
              >
                <i className="fa-brands fa-facebook p-2 border border-white rounded-full"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 hover:scale-125 transform transition-transform duration-200 hover:text-yellow-400"
              >
                <i className="fab fa-twitter p-2 border border-white rounded-full"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 hover:scale-125 transform transition-transform duration-200 hover:text-yellow-400"
              >
                <i className="fab fa-instagram p-2 border border-white rounded-full"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 hover:scale-125 transform transition-transform duration-200 hover:text-yellow-400"
              >
                <i className="fab fa-linkedin p-2 border border-white rounded-full"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-400" />

        <div className="mt-4 text-center text-gray-300">
          © 2024 Codeteria. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
