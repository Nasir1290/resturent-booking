import React from "react";
import ReviewStarImage from "../../assets/review-star.png";
import ReviewedPersonImage from "../../assets/reviewed-person.png";

const ReviewSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Review Heading and Stats */}
      <div className="flex flex-col items-start mb-6">
        <h1 className="text-2xl font-bold mb-8">Review</h1>
        <div className="flex items-center mt-4 sm:mt-0">
          <span className="text-3xl font-semibold">4.8</span>
          <img src={ReviewStarImage} className=" w-6 h-6 mx-3" alt="review" />

          <span className="ml-2 text-secondary">5,922 Reviews</span>
        </div>
      </div>

      {/* User Feedback Section */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">User Feedback</h2>

        {/* Feedback Cards */}
        <div className="space-y-6 mb-32">
          {[1, 2, 3].map((item, index) => (
            <div key={index}>
              <div className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {/* User Avatar */}
                <img
                  src={ReviewedPersonImage}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full object-cover"
                />

                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-secondary font-medium">
                      Dianne Russell
                    </h3>
                    <span className="text-sm text-secondary">Just now</span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mt-2 mb-2">
                    {Array(5)
                      .fill("")
                      .map((_, idx) => (
                        <img
                          key={idx}
                          src={ReviewStarImage}
                          className="w-4 h-4"
                          alt="review"
                        />
                      ))}
                  </div>

                  <p className="text-secondary text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis
                    dignissim arcu, sit amet consequat sem auctor a.
                  </p>
                </div>
              </div>

              {/* Horizontal line after each review except the last one */}
              {index < [1, 2, 3].length - 1 && (
                <hr className=" border-b-1 border-gray-700 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
