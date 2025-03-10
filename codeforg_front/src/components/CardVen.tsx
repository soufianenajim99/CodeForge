import { Link } from "react-router";

interface item {
  icon?: string;
  img: string;
  title: string;
  number?: string;
  desc: string;
}

interface Prop {
  info: item;
}
const CardVen = ({ info }: Prop) => {
  return (
    <div className="bg-white rounded-lg relative shadow-lg overflow-hidden flex flex-col h-auto font-PoppinsFont">
      <img
        src={info.img}
        alt="Sport Image"
        className="w-full h-[274px]  object-cover"
      />
      {info.icon && (
        <img
          src={info.icon}
          width={115}
          height={30}
          className="absolute top-5 left-5"
        />
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-black font-medium text-2xl">
            {info.title}
          </h2>

          {info.number && <p className="font-light text-xl"> {info.number}</p>}
        </div>

        <p className="text-gray-500 text-sm font-normal mt-2">{info.desc}</p>
        <div className="mt-auto pt-7 flex justify-between items-center">
          <div>
            <p className="font-bold">A partir de</p>
            <p>
              <span className="size-10 font-normal text-2xl">400</span>
              Dhs
            </p>
          </div>
          <button className="py-2 px-14 bg-green-900 text-white rounded-xl font-DmFont">
            <Link to={"/detailspage"}>Réserver</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardVen;
