import leetcode from "../assets/images/partenaires/LeetCode_Logo.png";
import coding_ninja from "../assets/images/partenaires/Coding_Ninja.png";
import defold from "../assets/images/partenaires/Defold_Logo.png";
import scratch from "../assets/images/partenaires/Scratch_Logo.png";
import codegame from "../assets/images/partenaires/code_this_game_Logo.png";

const NewsLetter = () => {
  return (
    <div className="min-h-screen fifth-section w-screen pt-10 font-PoppinsFont">
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col text-center gap-5 items-center justify-center">
          <h1 className="font-semibold text-[40px] pb-5 font-DmFont">
            Nos partenaires
          </h1>
          <p className="md:w-2/3 w-full text-[#5C5F62] font-normal text-base">
            Nous sommes fiers de collaborer avec des partenaires de confiance
            qui partagent notre passion pour la programmation et notre
            engagement envers l'excellence. Ensemble, nous vous offrons des
            expériences d'apprentissage et de défis uniques, stimulantes et de
            haute qualité.
          </p>
          <div className="pb-14">
            <div className="grid items-center w-[80vw] grid-cols-[minmax(150px,_1fr)_minmax(150px,_1fr)_minmax(150px,_1fr)_minmax(150px,_1fr)_minmax(150px,_1fr)] sm:grid-cols-[minmax(150px,_1fr)_minmax(150px,_1fr)_minmax(150px,_1fr)_minmax(150px,_1fr)_minmax(150px,_1fr)] md:grid-cols-[minmax(200px,_1fr)_minmax(200px,_1fr)_minmax(200px,_1fr)_minmax(200px,_1fr)_minmax(200px,_1fr)] justify-items-center pt-8 overflow-x-auto overflow-y-hidden custom-scrollbar gap-16 md:gap-0">
              <img
                src={leetcode}
                width={200}
                height={44}
                alt="Katana"
                className="min-w-[150px]"
              />
              <img
                src={coding_ninja}
                width={149}
                height={28}
                alt="Travava"
                className="min-w-[149px]"
              />
              <img
                src={defold}
                width={200}
                height={54}
                alt="Bigui"
                className="min-w-[98px]"
              />
              <img
                src={scratch}
                width={228}
                height={42}
                alt="Booking"
                className="min-w-[228px]"
              />
              <img
                src={codegame}
                width={300}
                height={42}
                alt="Jakmaen"
                className="min-w-[148px]"
              />
            </div>
          </div>
          {/* News-Letters  */}
          <div className="w-full min-h-80  bg-emerald-800  pt-10 rounded-3xl mb-14 ">
            <div className="w-4/5 flex mx-auto pb-7">
              <div className="">
                <h1 className="font-normal tracking-wide text-2xl md:text-[40px] pb-5 text-white font-DmFont">
                  Restez informé des meilleurs défis de code !
                </h1>
                <p className="font-normal text-base lg:text-base text-gray-300 lg:w-4/5 w-11/12 mx-auto pb-10 ">
                  Ne manquez aucune compétition, défi ou astuce pour progresser
                  en programmation. Abonnez-vous à notre newsletter et recevez
                  les dernières nouveautés et conseils exclusifs chaque mois.
                </p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Tapez votre email ici"
                    className="relative w-full lg:w-4/5 py-5 pl-4 pr-20 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    type="submit"
                    className="w-full font-DmFont lg:w-[186px] my-3 lg:my-0 lg:absolute lg:inset-y-2 lg:right-16  lg:py-2 py-4 bg-white lg:bg-green-800 rounded-xl text-emerald-800 lg:text-white lg:transform lg:-translate-x-1/4 text-sm font-medium"
                  >
                    S&apos;abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
