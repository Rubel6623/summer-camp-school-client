/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);


  return (
    <div>
      <SectionTitle subHeading={'Students Opinions'} heading={'Feedback'}></SectionTitle>

      <div className="flex">

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map((review) => (
          <SwiperSlide key={review._id}>

            <div className="flex items-center gap-6 mx-24 my-16 bg-red-100 bg-opacity-40 p-8 rounded-lg">
              <img className="w-40 h-40 rounded-full" src={review.image} alt="" />

              <div>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />

              <p className="py-8">{review.details}</p>
              </div>
            </div>

          </SwiperSlide>
        ))
        }
      </Swiper>

      <div>
        <h3>About Us</h3>
        <h2>Music Instrument Learning School</h2>
        <p>Twee echo park celiac YOLO dreamcatcher bushwick. Pitchfork fam tousled sustainable mumblecore tote bag trust fund tacos organic four dollar toast kickstarter pork belly.</p>
      </div>

      </div>
     
    </div>
  );
};

export default Review;