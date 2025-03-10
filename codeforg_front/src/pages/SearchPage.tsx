import FilterSearch from "../components/FilterSearch";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navtab from "../components/Navtab";
import footve from "../assets/images/StadePre/a946d1eb6eebff54a094c33064421780.jpg";

import athleticaIcon from "../assets/images/Group 300.png";
import CardVen from "../components/CardVen";
import { Pagination } from "@heroui/pagination";
const SearchPage = () => {
  const footven = {
    img: footve,
    icon: athleticaIcon,
    title: "Football",
    number: "5 vs 5",
    desc: "ATHLETICA FNT EST UN CLUB OMNI SPORT.       Casablanca, Ain Sebaa.",
  };
  return (
    <div className="min-h-screen ">
      <div className="container">
        <Navbar />
        {/* Réservez votre Terrain de Jeu Facilement */}
        <div className="w-screen mx-auto">
          <div className="font-DmFont bg-[#c4c4c4]">
            <div className="h-[331px] w-4/5 mx-auto flex items-center justify-center"></div>
          </div>

          {/* Filter_Search */}
          <FilterSearch />
        </div>
      </div>
      <div className=" relative z-0 w-4/5 min-h-screen mx-auto">
        <Navtab />
        {/* Cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 w-full md:gap-x-6 mb-10  gap-y-9  mt-10">
          <CardVen info={footven} />
          <CardVen info={footven} />
          <CardVen info={footven} />
          <CardVen info={footven} />
          <CardVen info={footven} />
          <CardVen info={footven} />
          <CardVen info={footven} />
          <CardVen info={footven} />
          <CardVen info={footven} />
        </div>
        <div className=" flex justify-center items-center my-28">
          <Pagination
            classNames={{
              item: "bg-[#EDEFF6] font-PoppinsFont font-medium text-base",
              wrapper: "md:gap-4 gap-2",
              cursor: " bg-[#0E6147] text-white",
            }}
            radius="sm"
            size="lg"
            showControls
            total={54}
            siblings={0}
            initialPage={1}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
