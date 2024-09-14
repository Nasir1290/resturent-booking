import { Button, Drawer, Menu } from "antd";
import MainLogo from "../../assets/main-logo.png";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useOpenProfile from "../../hooks/useOpenProfile";

export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigage = useNavigate();
  const { loading, user } = useAuth();
  const { isOpenProfile, setIsOpenProfile } = useOpenProfile();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Fixed navbar */}
      <div
        className={`flex container py-2 bg-white items-center justify-between gap-1 md:gap-2 border-b shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${
          scrollUp ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {isMobileView && (
          <MenuOutlined
            onClick={() => setIsShowMenu(true)}
            className="md:hidden ml-3"
          />
        )}
        <div>
          <Link to="/home">
            <img
              className="h-[30px] w-[120px] md:h-[50px] md:w-[200px] md:ml-12"
              src={MainLogo}
              alt="logo"
            />
          </Link>
        </div>
        {!isMobileView && (
          <div className="hidden md:flex">
            <MenuBar isInline={false} />
          </div>
        )}
        <Drawer
          open={isShowMenu}
          closable
          placement="left"
          onClose={() => setIsShowMenu(false)}
        >
          <MenuBar isInline={true} setIsShowMenu={setIsShowMenu} />
        </Drawer>
        <div className="flex mr-2 md:mr-12">
          <Button className="px-3 py-2 mr-4 bg-primary border-1 border-b-2 border-black text-white text-xs font-bold rounded-lg">
            Download App
          </Button>
          {user?.email ? (
            <Button
              onClick={() => {
                setIsOpenProfile(true);
              }}
              className="px-3 py-2 border-1 border-b-2 border-black text-black text-xs font-bold rounded-lg"
            >
              My Profile
            </Button>
          ) : (
            <Button
              role="link"
              onClick={() => navigage("/auth/login")}
              className="px-3 py-2 border-1 mr-4 border-b-2 border-black text-black text-xs font-bold rounded-lg"
            >
              Login
            </Button>
          )}
        </div>
      </div>

      {/* Add padding to the content below the navbar */}
      <div className="pt-16 mb-4"></div>
    </>
  );
}

const MenuBar = ({ isInline, setIsShowMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  return (
    <Menu
      onClick={({ key }) => {
        navigate(key);
        setIsShowMenu(false);
        setSelectedKey(key);
      }}
      selectedKeys={[selectedKey]}
      className={`text-lg gap-4 border-none bg-white text-black`}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        { label: "Home", key: "/home" },
        { label: "Book A Table", key: "/book-a-table" },
        { label: "Foods", key: "/foods" },
      ]}
    />
  );
};
