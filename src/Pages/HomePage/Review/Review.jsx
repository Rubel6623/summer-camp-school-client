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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map((review) => (
          <SwiperSlide key={review._id}>

            <div className="flex flex-col items-center mx-24 my-16 bg-red-100 bg-opacity-40 p-8 rounded-lg">
              <img className="w-32 h-32 rounded-full" src={review.image} alt="" />

              <h3 className="text-2xl text-orange-500">{review.name}</h3>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />

              <p className="py-8">{review.details}</p>
            </div>

          </SwiperSlide>
        ))
        }
      </Swiper>
     
    </div>
  );
};

export default Review;