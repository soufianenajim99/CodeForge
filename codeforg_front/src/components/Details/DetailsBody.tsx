import stadeIcon from "../../assets/images/football 1.png";
import showerIcon from "../../assets/images/services/Group 210.png";
import shirtIcon from "../../assets/images/services/shirt 1.png";
import footve from "../../assets/images/StadePre/a946d1eb6eebff54a094c33064421780.jpg";

import athleticaIcon from "../../assets/images/Group 300.png";
import CardVen from "../CardVen";
const DetailsBody = () => {
  const footven = {
    img: footve,
    icon: athleticaIcon,
    title: "Football",
    number: "5 vs 5",
    desc: "ATHLETICA FNT EST UN CLUB OMNI SPORT.       Casablanca, Ain Sebaa.",
  };
  return (
    <div className=" grid grid-cols-3 gap-2 font-DmFont min-h-screen">
      <div className=" col-start-1 col-end-3">
        {/* Services */}
        <article className="w-[589px] mb-14">
          <h1 className=" font-semibold text-2xl mb-8">Services</h1>

          <div className="w-full bg-[#C4C4C4] h-[2px] drop-shadow-sm"></div>
          <div className="w-full flex justify-around my-8">
            <div className=" flex items-center justify-center gap-2">
              <img src={showerIcon} width={48} height={38} alt="" />
              <div>Douche</div>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <img src={stadeIcon} width={38} height={48} alt="" />

              <div>Balle</div>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <img src={shirtIcon} width={38} height={48} alt="" />
              <div>Tenue</div>
            </div>
          </div>
          <div className="w-full bg-[#C4C4C4] h-[1.5px] drop-shadow-sm"></div>
        </article>
        {/* Details */}
        <article>
          <h1 className="font-semibold text-2xl mb-8">Détail</h1>
          <div className=" font-PoppinsFont font-light text-lg leading-8 text-[#515151] grid gap-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur{" "}
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w-full my-10 bg-[#C4C4C4] h-[2px] drop-shadow-sm"></div>
        </article>
        {/* Localisation Maps */}
        <div className="">
          <div className="font-semibold text-2xl mb-8 my-11">
            Localisation Maps
          </div>
          <div className=" relative w-11/12 h-[414px] p-14">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13277.597824175657!2d-7.4022912000000005!3d33.698611199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1717155398745!5m2!1sfr!2sma"
              className="border-0 absolute inset-0 w-full h-full"
              //   allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full bg-[#C4C4C4] h-[1.5px] drop-shadow-sm my-14"></div>
        </div>
      </div>
      <article className=" col-start-1 col-end-4">
        <h1 className="font-semibold text-2xl mb-8">Terraine similaires</h1>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 w-full md:gap-x-6 mb-10  gap-y-9  mt-10">
          <CardVen info={footven} />
          <CardVen info={footven} />
          <CardVen info={footven} />
        </div>
      </article>
      <div className="col-start-3 col-end-4 row-start-1">
        <div>reservation</div>
      </div>
    </div>
  );
};

export default DetailsBody;
