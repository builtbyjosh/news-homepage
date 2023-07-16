import { useState } from "react";
import logo from "../images/logo.svg";
import MenuDrawer from "./MenuDrawer";
import MenuOpen from "../images/icon-menu.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <nav className="bg-white py-12 ">
      <div className="flex px-4  sm:items-center justify-between">
        <div>
          <img src={logo} alt="Logo" className=" mr-2" />
        </div>
        <div className="justify-end ">
          <div className="hidden md:flex items-center">
            <a className="py-4 px-2 text-gray-500 font-semibold">Home</a>
            <a className="py-4 px-2 text-gray-500 font-semibold">New</a>
            <a className="py-4 px-2 text-gray-500 font-semibold">Popular</a>
            <a className="py-4 px-2 text-gray-500 font-semibold">Trending</a>
            <a className="py-4 px-2 text-gray-500 font-semibold">Categories</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className={`outline-none drawer-button pt-2 `}
            >
              <img src={MenuOpen} alt="" />
            </button>

            <MenuDrawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>New</a>
              </li>
              <li>
                <a>Popular</a>
              </li>
              <li>
                <a>Trending</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
            </MenuDrawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
