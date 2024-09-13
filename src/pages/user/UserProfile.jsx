import { Drawer, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import useOpenProfile from "../../hooks/useOpenProfile";
import { CloseOutlined } from "@ant-design/icons";
import useAuth from "../../hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebaseConfig";
import Loading from "../../components/general/Loading";
import { toast } from "react-toastify";
import toastValue from "../../components/shared/toastValue";

const UserProfile = () => {
  const { user, loading } = useAuth();
  const auth = getAuth(app);

  const navigate = useNavigate();
  const { isOpenProfile, setIsOpenProfile } = useOpenProfile();

  if (loading) {
    return <Loading />;
  }

  const firstLetter = user?.displayName?.charAt(0);

  return (
    <div>
      <Drawer
        open={isOpenProfile}
        placement="right"
        onClose={() => setIsOpenProfile(false)}
        style={{ backgroundColor: "#809292", color: "white" }}
        closeIcon={
          <CloseOutlined className="py-1 px-3 border-2 border-black bg-white text-red-600 font-extrabold rounded-lg" />
        }
      >
        <div className=" flex flex-col justify-center items-center mb-8">
          {user?.photoURL ? (
            <div className=" flex items-center justify-center">
              <img
                className="h-32 w-32 rounded-full object-cover"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
          ) : (
            <div className=" h-32 w-32 flex items-center justify-center bg-gray-400 rounded-full text-white text-xl uppercase">
              {firstLetter}
            </div>
          )}
          <h3 className=" text-center text-xl font-semibold mt-2">
            {user?.displayName}
          </h3>
        </div>
        <Menu
          onClick={async ({ key }) => {
            if (key === "logout") {
              await signOut(auth);
              navigate("/home");
              toast.warning("Successfully logged out", toastValue);
            } else {
              navigate(key);
              setIsOpenProfile(false);
            }
          }}
          selectedKeys={[window?.location?.pathname]} // Keeps the selected item highlighted
          mode="vertical"
          style={{ backgroundColor: "#809292" }}
          className=" text-xl"
          items={[
            {
              label: "Personal Details",
              key: "/user-info",
              style: { color: "white" }, // Regular items
            },
            {
              label: "Booking History",
              key: "/booking-history",
              style: { color: "white" }, // Regular items
            },
            {
              label: "Favourites",
              key: "/favourite-items",
              style: { color: "white" }, // Regular items
            },
            {
              label: "Logout",
              key: "logout",
              style: {
                color: "orange",
                background: "white",
                fontWeight: 500,
                textAlign: "center",
              }, // Logout item with a distinct red color
            },
          ]}
        />
      </Drawer>
    </div>
  );
};

export default UserProfile;
