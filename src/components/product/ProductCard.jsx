

import FoodImage from "../../assets/food.png";

const ProductCard = () => {
  return (
    <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
      {/* Image div */}
      <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
        <img
          src={FoodImage}
          className="object-contain object-center w-full h-full"
          alt="food"
        />
      </div>

      {/* Text div */}
      <div className="flex flex-col mt-4">
        <h2 className="text-xl font-bold mb-2 truncate">Spinach & Mushroom</h2>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          imperdiet lectus.
        </p>
        <h4 className="text-lg font-bold mb-2">$192.00</h4>
        <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
