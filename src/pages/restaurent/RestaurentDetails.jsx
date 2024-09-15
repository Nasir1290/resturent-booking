import React from "react";
import RestaurentInfo from "../../components/restaurent/RestaurentInfo";
import ReviewSection from "../../components/restaurent/ReviewSection";
import BookingModal from "../../components/restaurent/BookingModal";
import { allHotelData } from "../../data.js/hotelData";
import { useParams } from "react-router-dom";

const ResturentDetails = () => {
  const {id} = useParams();
  const selectedRestaurent = allHotelData.find((hotel) => hotel.id === id);
  return (
    <div>
      <RestaurentInfo restaurent={selectedRestaurent}/>
      <ReviewSection/>
      {/* <BookingModal/> */}
    </div>
  );
};

export default ResturentDetails;
