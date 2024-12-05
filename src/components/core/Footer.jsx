import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useAPI } from "../../context/apiContext";

const Footer = () => {
  const navs = [
    { tab: "Playground", page: "/playground" },
    { tab: "Challenges", page: "/upcoming" },
    { tab: "Community", page: "/community" },
    { tab: "Pro", page: "/pro" },
  ];

  const {dark} = useAPI();

  return (
    <footer className={`${dark? "bg-slate-700":"bg-slate-300"} bg-opacity-100 py-6 lg:px-32 backdrop-blur-lg w-full`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4 py-4">
          {/* Logo and description */}
          <div>
            <div className="flex">
              <img src={logo} alt="Codeteria Logo" className="w-[40px] h-[40px] mr-2" />
              <Link to="/" className="text-2xl font-bold ">
                Codeteria
              </Link>
            </div>
            <p className="ml-2">Empowering coders worldwide</p>
            <div className="mt-4 ml-2">
              <Link to="/terms">Terms and Conditions</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`${dark? "text-yellow-400": "text-yellow-700"} text-xl font-bold mb-4 `}>Quick Links</h3>
            <ul className="space-y-2">
              {navs.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.page}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {item.tab}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className={`${dark? "text-yellow-400": "text-yellow-700"} text-xl font-bold mb-4 `}>Community</h3>
            <ul className="space-y-2">
              {["Forums", "Blog", "Events", "Partnerships"].map((item, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className={`${dark? "text-yellow-400": "text-yellow-700"} text-xl font-bold mb-4 `}>Connect</h3>
            <p className="mb-3 ml-1 hover:text-yellow-400">support@codeteria.com</p>
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
                href="https://instagram.com/arjun.atp"
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 hover:scale-125 transform transition-transform duration-200 hover:text-yellow-400"
              >
                <i className="fab fa-instagram p-2 border border-white rounded-full"></i>
              </a>
              <a
                href="https://linkedin.com/in/arjunatapadkar"
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

        <div className="mt-4 text-center">
          © 2024 Codeteria. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
