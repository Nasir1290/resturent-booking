import React, { useEffect, useState } from "react";
import { FaEdit, FaRegEdit } from "react-icons/fa"; // For the edit icon


import { MdDeleteSweep } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/general/Loading";



const User = () => {
  const { user, loading } = useAuth();
  const firstLetter = user?.displayName.charAt(0);
  console.log(user);

  const dummyuser = {
    name: "John Doe",
    email: "john.doe@example.com",
    contact: "123-456-7890",
    address: "123 Main St, Springfield",
    image: "https://via.placeholder.com/150", // Placeholder image for now
    orders: [
      {
        meal: "Pizza",
        orderDate: "2024-09-01",
        deliveryDate: "2024-09-02",
        price: "$10",
        status: "Delivered",
      },
      {
        meal: "Burger",
        orderDate: "2024-09-05",
        deliveryDate: "2024-09-06",
        price: "$8",
        status: "Pending",
      },
      // Add more orders here
    ],
  };

  const [activeSection, setActiveSection] = useState("orderHistory");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Render Edit Profile Form
  const renderEditProfile = () => (
    <div className="mt-4" data-aos="fade-ease-in">
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={user?.displayName}
          />
        </div>
        <div>
          <label className="block mb-1">Contact No.</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={user?.contact}
          />
        </div>
        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={user?.address}
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">
          Save Changes
        </button>
      </form>
    </div>
  );

  // Render Change Password Form
  const renderChangePassword = () => (
    <div className="mt-4" data-aos="fade-in">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Old Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">
          Update Password
        </button>
      </form>
    </div>
  );

  // Render Order History Table
//   const renderOrderHistory = () => {
//     const menuData = [
//       {
//         id: 1,
//         image: "/food.jpg",
//         menuName: "Pasta",
//         ourMenu: "Breakfast",
//         mealPlan: "Medium Meal",
//         img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//       },
//       {
//         id: 2,
//         image: "/food.jpg",
//         menuName: "Salad",
//         ourMenu: "Snacks",
//         mealPlan: "Small Paleo Meal",
//         img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//       },
//       {
//         id: 3,
//         image: "/food.jpg",
//         menuName: "Pizza",
//         ourMenu: "Lunch",
//         mealPlan: "Large Meal",
//         img: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
//       },
//       {
//         id: 4,
//         image: "/food.jpg",
//         menuName: "Burger",
//         ourMenu: "Dinner",
//         mealPlan: "Small Meal",
//         img: "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//       },
//       {
//         id: 5,
//         image: "/food.jpg",
//         menuName: "Soup",
//         ourMenu: "Snacks",
//         mealPlan: "Medium Meal",
//         img: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
//       },
//       {
//         id: 1,
//         image: "/food.jpg",
//         menuName: "Pasta",
//         ourMenu: "Breakfast",
//         mealPlan: "Medium Meal",
//         img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//       },
//       {
//         id: 2,
//         image: "/food.jpg",
//         menuName: "Salad",
//         ourMenu: "Snacks",
//         mealPlan: "Small Paleo Meal",
//         img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//       },
//       {
//         id: 3,
//         image: "/food.jpg",
//         menuName: "Pizza",
//         ourMenu: "Lunch",
//         mealPlan: "Large Meal",
//         img: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
//       },
//       {
//         id: 4,
//         image: "/food.jpg",
//         menuName: "Burger",
//         ourMenu: "Dinner",
//         mealPlan: "Small Meal",
//         img: "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//       },
//       {
//         id: 5,
//         image: "/food.jpg",
//         menuName: "Soup",
//         ourMenu: "Snacks",
//         mealPlan: "Medium Meal",
//         img: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
//       },
//       {
//         id: 1,
//         image: "/food.jpg",
//         menuName: "Pasta",
//         ourMenu: "Breakfast",
//         mealPlan: "Medium Meal",
//         img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//       },
//       {
//         id: 2,
//         image: "/food.jpg",
//         menuName: "Salad",
//         ourMenu: "Snacks",
//         mealPlan: "Small Paleo Meal",
//         img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//       },
//       {
//         id: 3,
//         image: "/food.jpg",
//         menuName: "Pizza",
//         ourMenu: "Lunch",
//         mealPlan: "Large Meal",
//         img: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
//       },
//       {
//         id: 4,
//         image: "/food.jpg",
//         menuName: "Burger",
//         ourMenu: "Dinner",
//         mealPlan: "Small Meal",
//         img: "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//       },
//       {
//         id: 5,
//         image: "/food.jpg",
//         menuName: "Soup",
//         ourMenu: "Snacks",
//         mealPlan: "Medium Meal",
//         img: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
//       },
//     ];

//     return (
//       <div className=" mt-4" data-aos="left">
//         <table className="w-full border-collapse table-auto text-center text-small md:font-bold ">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Image</th>
//               <th className="border p-2">Menu Name</th>
//               <th className="border p-2">Our Menu</th>
//               <th className="border p-2">Meal Plan</th>
//               <th className="border p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {menuData.map((menu) => (
//               <tr key={menu.id} className="border-t">
//                 <td className="border p-2">{menu.id}</td>
//                 <td className="border p-2 text-start">
//                   <img
//                     src={menu.img}
//                     alt="menu"
//                     className="inline-block w-8 h-8 rounded-full object-cover"
//                   />
//                 </td>
//                 <td className="border p-2">{menu.menuName}</td>
//                 <td className="border p-2">{menu.ourMenu}</td>
//                 <td className="border p-2">{menu.mealPlan}</td>
//                 <td className="border p-2 ">
//                   <button className="text-blue-500 bg-gray-300 ml-2 px-3 py-1 text-center rounded-md">
//                     <FaRegEdit />
//                   </button>
//                   <button className="text-red-500 ml-2 bg-gray-300 px-3 py-1 text-center rounded-md">
//                     <MdDeleteSweep />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* User Info Section */}
      <div className="flex flex-col items-center justify-center gap-4">
        {/* User Image with Edit Icon */}
        <div className="relative" data-aos="fade-in">
          {user?.photoURL ? (
            <img
              className="h-32 w-32 md:h-52 md:w-52 rounded-full border-3 object-cover overflow-hidden"
              src={user?.photoURL}
              alt={user?.displayName}
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-400 h-32 w-32 md:h-48 md:w-48 rounded-full text-white text-4xl font-semibold uppercase">
              {firstLetter}
            </div>
          )}

          <button className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full">
            <FaEdit />
          </button>
        </div>
        {/* User Name and Email */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => setActiveSection("editProfile")}
          className={`${
            activeSection === "editProfile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } p-2 rounded`}
        >
          Edit Profile
        </button>


        {/* <button
          onClick={() => setActiveSection("orderHistory")}
          className={`${
            activeSection === "orderHistory"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } p-2 rounded`}
        >
          Order History
        </button> */}


        <button
          onClick={() => setActiveSection("changePassword")}
          className={`${
            activeSection === "changePassword"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } p-2 rounded`}
        >
          Change Password
        </button>
      </div>

      {/* Conditional Rendering of Forms or Table */}
      <div>
        {activeSection === "editProfile" && renderEditProfile()}
        {/* {activeSection === "orderHistory" && renderOrderHistory()} */}
        {activeSection === "changePassword" && renderChangePassword()}
      </div>
    </div>
  );
};

export default User;
