import { JSX, useState } from "react";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import footballIcon from "../assets/images/football 1.png";
import paddleIcon from "../assets/images/paddle.png";
import arcIcon from "../assets/images/tirArc.png";
import basketballIcon from "../assets/images/basket.png";
import footballpre from "../assets/images/StadePre/3148649a8bdac52e622d2dcdcfcb87e6.jpg";
import arcpre from "../assets/images/StadePre/85808b785189d9fef4bd61d85eed558a.jpg";
import paddlepre from "../assets/images/StadePre/250817cfe423a25350cf9f153590242b.jpg";
import basketballpre from "../assets/images/StadePre/47fcf0f6fc5397e95b5e0bbfab1c5c35.jpg";
import footve from "../assets/images/StadePre/a946d1eb6eebff54a094c33064421780.jpg";
import basketve from "../assets/images/StadePre/9504403bd5521024a1f834c0a0f3e8c6.jpg";
import athleticaIcon from "../assets/images/Group 300.png";
import "../App.css";
import FilterSearch from "../components/FilterSearch";
import CardRec from "../components/CardRec";
import CardVen from "../components/CardVen";
import CardWh from "../components/CardWh";
const footballrec = {
  icon: footballIcon,
  image: footballpre,
  text: "Football",
};
const arcrec = {
  icon: arcIcon,
  image: arcpre,
  text: "Tir à l’arc",
};
const basketballrec = {
  icon: basketballIcon,
  image: basketballpre,
  text: "Basketball",
};
const paddlerec = {
  icon: paddleIcon,
  image: paddlepre,
  text: "Paddle",
};

const footven = {
  img: footve,
  icon: athleticaIcon,
  title: "Football",
  number: "5 vs 5",
  desc: "ATHLETICA FNT EST UN CLUB OMNI SPORT.       Casablanca, Ain Sebaa.",
};
const paddven = {
  img: paddlepre,
  title: "Paddle",
  desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore",
};
const baskven = {
  img: basketve,
  title: "Basketball",
  desc: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore",
};

const Cards = [
  {
    num: "01",
    title: "Apprentissage Ludique",
    desc: "Apprenez à coder en vous amusant grâce à des jeux et défis interactifs adaptés à tous les niveaux.",
  },
  {
    num: "02",
    title: "Défis pour Tous les Niveaux",
    desc: " Des défis pour débutants, intermédiaires et experts, pour progresser à votre rythme.",
  },
  {
    num: "03",
    title: "Classements et Récompenses",
    desc: "Mesurez-vous à la communauté, grimpez les classements et débloquez des récompenses exclusives.",
  },
  {
    num: "04",
    title: "Communauté Active",
    desc: "Échangez avec d'autres passionnés de code, partagez vos solutions et améliorez-vous ensemble.",
  },
  {
    num: "05",
    title: "Mises à Jour Régulières",
    desc: " De nouveaux défis et compétitions ajoutés chaque semaine pour ne jamais s'ennuyer !",
  },
];

export default function Home(): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  return (
    <div className="min-h-screen ">
      <div className="container">
        <Navbar />
        {/* Réservez votre Terrain de Jeu Facilement */}
        <div className="w-screen mx-auto">
          <div className="hero-container-section font-DmFont">
            <div className="hero-section w-4/5 mx-auto flex items-center justify-center">
              <div className="heading-title flex items-center justify-center flex-col gap-6">
                <h1 className="heading-title-main">
                  Relevez des Défis de Code en un Clic !
                </h1>
                <p className="w-72 md:w-full heading-title-para text-base font-normal">
                  Codez, Jouez, Progressez : Défis Ludiques, Compétences
                  Renforcées ! !
                </p>
              </div>
            </div>
          </div>

          <FilterSearch />
        </div>
      </div>
      <div className=" relative z-0 w-4/5 mx-auto -mt-8">
        <div className="font-DmFont flex justify-center flex-col gap-12 items-center text-center ">
          <h1 className=" md:w-full text-center text-[40px] font-bold">
            Nos Top Compétitions Recommandées
          </h1>
          <div className="  flex stades-container justify-between items-stretch w-full overflow-x-auto overflow-y-hidden custom-scrollbar">
            <CardRec info={footballrec} />
            <CardRec info={paddlerec} />
            <CardRec info={basketballrec} />
            <CardRec info={arcrec} />
          </div>
        </div>
        {/* Terrains en vedette */}
        <div className="min-h-screen ">
          <div className=" mx-auto">
            <div className="flex w-full justify-between items-end">
              <div>
                <h1 className="font-semibold text-[40px]  py-7 font-DmFont">
                  Nos Défis de Programmation les Plus Populaires
                </h1>
                <p className="text-gray-400 font-normal text-lg w-3/4 font-PoppinsFont">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do ei mod tempor incididunt ut labore et dolore magna
                </p>
              </div>
              <div className="hidden md:block">
                <button className="w-[186px] h-[48px] bg-green-900 text-white rounded-2xl font-semibold text-base">
                  <a href="./pages/SearchPage.html">Voir plus</a>
                </button>
              </div>
            </div>
            {/* <div className="vendettes-cards flex md:flex-row flex-col items-center justify-center "> */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 w-full md:gap-x-6 mb-10  gap-y-9  mt-10">
              <CardVen info={footven} />
              <CardVen info={paddven} />
              <CardVen info={baskven} />
            </div>
            {/* </div> */}
            <div className=" w-full flex items-center justify-center mb-10">
              <div className="block md:hidden">
                <button className="w-[186px] h-[48px] bg-green-900 text-white rounded-2xl font-semibold text-base">
                  <a href="./pages/SearchPage.html">Voir plus</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pourquoi Nous Choisir ? */}
      <div className="bg-[#f4f4f4] font-DmFont py-14">
        <div className=" min-h-screen  flex items-center justify-center w-4/5 mx-auto">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            <div className="flex flex-col gap-4 overflow-y-hidden  p-6 rounded-lg  max-w-[360px] h-[303px] ">
              <h1 className="font-semibold sm:text-4xl text-4xl  md:text-3xl xl:text-4xl text-black mb-4">
                Pourquoi Nous Choisir ?
              </h1>
              <p className="text-[#3E3E3E] sm:text-base xl:text-base text-base md:text-sm font-normal md:w-full w-5/6 sm:w-5/6 xl:w-5/6 leading-6 mb-1 font-PoppinsFont">
                Découvrez pourquoi les développeurs choisissent <b>CodeFrog</b>{" "}
                pour relever des défis passionnants, progresser en
                programmation, et rejoindre une communauté dynamique, le tout
                avec une expérience simple et motivante.
              </p>
            </div>
            {Cards.map((card, index) => (
              <CardWh
                key={index}
                info={card}
                isSelected={selectedCard === index}
                onClick={() => setSelectedCard(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Nos partenaires */}
      <NewsLetter />

      <Footer />
    </div>
  );
}
