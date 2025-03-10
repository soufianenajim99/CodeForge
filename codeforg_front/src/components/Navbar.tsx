import { Link } from "react-router";
import logo from "../assets/images/Codefrog_Logo.png";
import panier from "../assets/images/Group 24.png";
import user from "../assets/images/Group 23.png";
import menu from "../assets/images/menu.png";

const Navbar = () => {
  const links = [
    { name: "Accueil", path: "/" },
    { name: "Jeux de Codage", path: "/jeuxcodage" },
    { name: "Classement", path: "/classement" },
    { name: "Profil", path: "/profil" },
    { name: "Communauté", path: "/community" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="h-20 bg-white w-screen font-DmFont">
      <div className="w-4/5  mx-auto h-full flex justify-between items-center">
        <div className="flex items-center h-full justify-between md:gap-16">
          <div className=" my-auto">
            <img
              loading="lazy"
              className="w-20 h-16 mb-2 "
              src={logo}
              alt="codeFrog"
            />
          </div>
          <ul className="hidden xl:flex md:gap-4 lg:gap-12">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>
                  <span className="title">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden xl:flex gap-6 items-center justify-center">
          <div className="part">Devenire partenaire</div>
          <div className="flex gap-4">
            <div className="relative">
              <img src={panier} alt="" width={36} height={36} />

              <div className=" absolute top-1 right-1 size-5 rounded-full  bg-amber-600 -translate-y-1/2 translate-x-1/2">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
                  0
                </span>
              </div>
            </div>

            <img src={user} alt="" width={36} height={36} />
          </div>
        </div>
        <div className="block xl:hidden">
          <button>
            <img src={menu} width={42} height={42} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
