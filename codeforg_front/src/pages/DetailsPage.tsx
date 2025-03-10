import DetailsBody from "../components/Details/DetailsBody";
import HeaderDetails from "../components/Details/HeaderDetails";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DetailsPage = () => {
  return (
    <div className=" bg-[#F1FCFD]">
      <Navbar />
      <div className=" w-5/6 mx-auto">
        <div>
          <HeaderDetails />
        </div>
        <div>
          <DetailsBody />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
