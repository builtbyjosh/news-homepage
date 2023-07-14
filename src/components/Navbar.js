import { useState } from "react";
import logo from "../images/logo.svg";
import MenuOpen from "../images/icon-menu.svg";
import MenuClose from "../images/icon-menu-close.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="" />
      </div>
      <div class="block sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <img src={isOpen ? MenuClose : MenuOpen} alt="" />
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:w-auto">
        <div class="text-sm lg:flex-grow lg:justify-end lg:text-right">
          <a class="block mt-4 lg:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white mr-4">
            Home
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white mr-4">
            New
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white mr-4">
            Popular
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white mr-4">
            Trending
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white">
            Categories
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
