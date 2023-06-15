import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Review from "../Review/Review";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;