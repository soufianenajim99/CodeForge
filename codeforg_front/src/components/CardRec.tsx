interface item {
  icon: string;
  image: string;
  text: string;
}

interface Prop {
  info: item;
}
const CardRec = ({ info }: Prop) => {
  return (
    <div
      style={{ backgroundImage: `url(${info.image})` }}
      className=" bg-cover bg-center bg-no-repeat rounded-[20px] relative grow  shrink-0 h-full w-64"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#d9d9d900] to-[#29312e91] rounded-[20px]">
        <div className="absolute inset-x-0 bottom-0 h-16 rounded-b-3xl bg-gradient-to-b from-transparent to-slate-900 z-10"></div>
        <div className="text-white absolute z-20 flex justify-start items-end h-full w-11/12 pb-4">
          <div className=" flex items-baseline gap-2 pl-4">
            <img
              className="filter invert"
              src={info.icon}
              width={22}
              height={22}
              alt=""
            />

            <h1 className="font-bold text-2xl pb-3 h-4">{info.text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRec;
