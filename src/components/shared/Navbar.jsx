import { Button, Drawer, Menu } from "antd";
import MainLogo from "../../assets/main-logo.png";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const navigage = useNavigate();

  // Effect to check screen size and handle Drawer behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Set breakpoint for mobile
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex container py-2 items-center justify-between gap-1 md:gap-2 border-b shadow-md">
      {/* Menu Icon for Mobile */}
      {isMobileView && (
        <MenuOutlined
          onClick={() => setIsShowMenu(true)}
          className="md:hidden ml-3"
        />
      )}
      <div>
        <Link to="/home">
          <img
            className=" h-[30px] w-[120px] md:h-[50px] md:w-[200px] md:ml-12"
            src={MainLogo}
            alt="logo"
          />
        </Link>
      </div>
      {/* Show MenuBar based on screen size */}
      {!isMobileView && (
        <div className="hidden md:flex">
          <MenuBar isInline={false} />
        </div>
      )}
      {/* Drawer for Mobile */}
      <Drawer
        open={isShowMenu}
        // bodyStyle={{ backgroundColor: "black" }}
        closable
        placement="left"
        onClose={() => setIsShowMenu(false)}
      >
        <MenuBar isInline={true} /> {/* Inline mode for Drawer */}
      </Drawer>
      <div className="flex mr-2 md:mr-12">
        <Button className="px-3 py-2 mr-4 bg-primary border-1 border-b-2 border-black text-white text-xs font-bold rounded-lg">
          Download App
        </Button>
        <Button
          role="link"
          onClick={() => navigage("/auth/login")}
          className="px-3 py-2 border-1 mr-4 border-b-2 border-black text-black text-xs font-bold rounded-lg"
        >
          Login
        </Button>
        <Button className="px-3 py-2 border-1 border-b-2 border-black text-black text-xs font-bold rounded-lg">
          My Profile
        </Button>
      </div>
    </div>
  );
}

const MenuBar = ({ isInline }) => {
  const navigate = useNavigate();

  return (
    <Menu
      onClick={({ key }) => {
        navigate(key);
      }}
      defaultSelectedKeys={window.location.pathname}
      className={`text-lg gap-4 border-none bg-white text-black`}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: "Home",
          key: "/home",
        },
        {
          label: "Book A Table",
          key: "/about",
        },
        {
          label: "Food",
          key: "/food",
        },
      ]}
    />
  );
};
