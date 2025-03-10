interface Prop {
  info: {
    num: string;
    title: string;
    desc: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

const CardWh = ({ info, isSelected, onClick }: Prop) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg overflow-y-hidden flex flex-col justify-start items-start p-6 max-w-[360px] h-[303px] 
            ${isSelected ? "bg-[#0E6147] text-white" : "bg-white text-black"}`}
    >
      <div
        className={`text-[58px] font-semibold ${
          isSelected ? "text-white" : "text-[#0E6147]"
        }`}
      >
        {info.num}
      </div>
      <h2
        className={`xl:mt-4 sm:mt-4 mt-4 md:mt-0 block  font-semibold md:text-lg xl:text-2xl text-2xl sm:text-2xl ${
          isSelected ? "text-white" : "text-[#5C5C5C]"
        }`}
      >
        {info.title}
      </h2>
      <p
        className={`mt-2 xl:text-base text-base sm:text-base md:text-sm font-normal font-PoppinsFont md:w-full xl:w-5/6 sm:w-5/6 w-5/6 leading-6  ${
          isSelected ? "text-white" : "text-[#787878]"
        }`}
      >
        {info.desc}
      </p>
    </div>
  );
};

export default CardWh;
