import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "/src/assets/main-logo.png"; // Adjust the path to your logo image
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary py-10 text-white">
      {/* Upper Section */}
      <div className="container mx-auto px-4">
        <div className="border-b border-gray-400 pb-6 flex flex-col lg:flex-row justify-between">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <img src={Logo} alt="Logo" className="h-16 mb-4 mx-auto lg:mx-0" />
            <p className="text-sm text-center lg:text-left">
              The Food we had enjoyed at the time of dinner. It was really
              delicious taste with great quality, everything had unique taste
              which we had ordered, nice arrangement and services from the staff
              while eating, we found nothing bad about this hotel.
            </p>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-end space-y-6">
            {/* Follow Us Section */}
            <div className=" flex flex-col justify-center items-center">
              <h3 className="font-semibold mb-2 text-center lg:text-right">
                Follow Us
              </h3>
              <div className="flex space-x-4 justify-center lg:justify-end">
                <Link to="https://www.instagram.com" aria-label="Instagram">
                  <FaInstagram size={24} />
                </Link>
                <Link to="https://www.facebook.com" aria-label="Facebook">
                  <FaFacebook size={24} />
                </Link>
                <Link to="https://www.twitter.com" aria-label="Twitter">
                  <FaTwitter size={24} />
                </Link>
              </div>
            </div>
            {/* Call Us Section */}
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-semibold text-center lg:text-right">
                Call Us
              </h3>
              <p className="text-center lg:text-right">+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="container mx-auto px-4 mt-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 lg:mb-0">
          <p className="text-sm text-center lg:text-left">
            Design and Develop by Sparktech Agency
          </p>
        </div>
        {/* Right Section */}
        <div className="flex space-x-6">
          <Link to="/about" className="text-sm hover:underline">
            About Us
          </Link>
          <Link to="/terms-and-conditions" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-sm hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
