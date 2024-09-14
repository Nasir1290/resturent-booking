import React from "react";
import RestaurentInfo from "../../components/restaurent/RestaurentInfo";
import ReviewSection from "../../components/restaurent/ReviewSection";
import BookingModal from "../../components/restaurent/BookingModal";

const ResturentDetails = () => {
  return (
    <div>
      <RestaurentInfo/>
      <ReviewSection/>
      {/* <BookingModal/> */}
    </div>
  );
};

export default ResturentDetails;
