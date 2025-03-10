import logo from "../assets/images/Codefrog_Logo.png";
import fblogo from "../assets/images/footer/Artboard11.png";
import itlogo from "../assets/images/footer/video 1.png";
import ldlogo from "../assets/images/footer/business 1.png";
import twlogo from "../assets/images/footer/social-media 1.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-gray-200 md:block hidden">
        <footer className="bg-gray-200 text-[#868484] py-10 font-PoppinsFont">
          <div className="w-10/12 mx-auto">
            <div className="mb-4 -ml-3">
              <img src={logo} width={160} height={30} alt="" />
            </div>
            <div className="container mx-auto grid grid-cols-3 gap-8 items-start text-lg font-normal">
              <div>
                <div className="mb-4 flex flex-col gap-2">
                  <p className=" ">
                    Rue Atlas, IMM 45 Etg 4 N° 15, MAARIF, <br />
                    Casablanca
                  </p>
                  <p className=" ">contact@codeFrog.com</p>
                  <p className=" ">+212 777 766 879</p>
                </div>
                <div className="">
                  <div className=" flex gap-3">
                    <img src={fblogo} width={27} height={27} alt="" />
                    <img src={itlogo} width={27} height={27} alt="" />
                    <img src={ldlogo} width={27} height={27} alt="" />
                    <img src={twlogo} width={27} height={27} alt="" />
                  </div>
                </div>
              </div>

              <div className=" justify-self-end">
                <div className="mb-4 flex flex-col gap-4">
                  <p className=" ">À propos de nous</p>
                  <p className=" ">
                    <a href="#">Termes et conditions</a>
                  </p>
                  <p className=" ">
                    <a href="#">Contactez-nous</a>
                  </p>
                </div>
              </div>

              <div className="justify-self-end">
                <div className="mb-4 flex flex-col gap-4">
                  <p className=" ">Liste des stades</p>
                  <p className=" ">
                    <a href="#">Politique de confidentialité</a>
                  </p>
                  <p className=" ">
                    <a href="#">FAQ</a>
                  </p>
                  <p className=" ">
                    <a href="#">Devenir partenaire</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container w-full border-t border-gray-300 my-8"></div>

          <div className="container mx-auto text-center text-black font-medium text-sm font-DmFont">
            <p className=" text-sm font-normal">
              @ Copyright 2024 | <span className="font-medium">codeFrog</span>
            </p>
          </div>
        </footer>
      </div>
      <div className="bg-gray-200 md:hidden block">
        <footer className="bg-gray-200 py-10 w-4/5 mx-auto font-normal text-base font-PoppinsFont text-[#868484]">
          <div className="container mx-auto flex flex-col gap-12">
            <div>
              <div className="mb-4">
                <img src={logo} width={140} height={30} alt="" />
              </div>
              <div className="mb-2 flex flex-col gap-2">
                <p className=" ">
                  Rue Atlas, IMM 45 Etg 4 N° 15, MAARIF, <br />
                  Casablanca
                </p>
                <p className=" ">contact@codeFrog.com</p>
                <p className=" ">+212 777 766 879</p>
              </div>
              <div>
                <div className=" flex gap-3">
                  <img src={fblogo} width={27} height={27} alt="" />
                  <img src={itlogo} width={27} height={27} alt="" />
                  <img src={ldlogo} width={27} height={27} alt="" />
                  <img src={twlogo} width={27} height={27} alt="" />
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-3">
              <p className="">À propos de nous</p>
              <p className="">
                <a href="#">Termes et conditions</a>
              </p>
              <p className="">
                <a href="#">Contactez-nous</a>
              </p>

              <p className="">Liste des stades</p>
              <p className="">
                <a href="#">Politique de confidentialité</a>
              </p>
              <p className="">
                <a href="#">FAQ</a>
              </p>
              <p className="">
                <a href="#">Devenir partenaire</a>
              </p>
            </div>
          </div>

          <div className="container mx-auto border-t border-gray-300 my-8"></div>

          <div className="container mx-auto text-center text-black font-medium text-sm font-DmFont">
            <p className=" text-base font-medium">
              @ Copyright 2024 | <span className="font-semibold">codeFrog</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
