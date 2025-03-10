const GridDetails = () => {
  return (
    <div className=" min-h-[446px] grid lg:grid-cols-4 lg:grid-rows-2 gap-5 ">
      <div className="lg:block hidden col-start-1 col-end-3 row-start-1 row-end-3 h-full bg-[#D9D9D9] rounded-[20px]"></div>
      <div className="bg-[#D9D9D9] lg:block hidden rounded-[20px]"></div>
      <div className="bg-[#D9D9D9] lg:block hidden rounded-[20px]"></div>
      <div className="bg-[#D9D9D9] lg:block hidden rounded-[20px]"></div>
      <div className="bg-[#D9D9D9]  rounded-[20px] relative">
        <button className=" drop-shadow-xl font-DmFont font-bold text-base w-[128px] h-[48px] absolute right-[14px] bottom-[16px] bg-white text-black rounded-xl">
          Voir Plus
        </button>
      </div>
    </div>
  );
};

export default GridDetails;
