import GridDetails from "./GridDetails";
import stadeIcon from "../../assets/images/terrain-de-foot 2.png";

const HeaderDetails = () => {
  return (
    <div>
      <div className="flex justify-between w-full h-32 items-center md:items-end font-DmFont">
        <div className="flex flex-col gap-1 md:gap-5">
          <h1 className="md:text-4xl text-3xl font-semibold tracking-wide">
            ATHLETICA FNT
          </h1>
          <p className="text-lg font-normal text-gray-500 font-PoppinsFont">
            Casablanca, Ain Sebaa.
          </p>
        </div>
        <div className="lg:flex gap-1 flex-col hidden">
          <h1 className="text-2xl font-bold font-PoppinsFont">
            A partir de 400 Dhs
          </h1>
          <div className="flex gap-1 items-center">
            <div className="text-sm font-semibold text-gray-900">
              Type de terrain
            </div>
            <img src={stadeIcon} width={18} height={18} alt="" />
            <div>5 vs 5</div>
          </div>
        </div>
      </div>
      <div className=" my-16">
        <GridDetails />
        <div className="lg:hidden gap-1 flex-col flex my-4 float-right font-DmFont">
          <h1 className="text-2xl font-bold font-PoppinsFont">
            A partir de 400 Dhs
          </h1>
          <div className="flex gap-1 items-center">
            <div className="text-sm font-semibold text-gray-900">
              Type de terrain
            </div>
            <img src={stadeIcon} width={18} height={18} alt="" />
            <div>5 vs 5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetails;
