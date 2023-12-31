import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Review from "../Review/Review";


const Home = () => {
  return (
    <div>
      <Helmet>
      <title>Music Guru | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Review></Review>
    </div>
  );
};

export default Home;