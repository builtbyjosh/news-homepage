import { useState } from "react";
import logo from "../images/logo.svg";
import MenuOpen from "../images/icon-menu.svg";
import MenuClose from "../images/icon-menu-close.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
                Home
              </a>
              <a lass="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                New
              </a>
              <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Popular
              </a>
              <a lass="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Trending
              </a>
              <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Categories
              </a>
            </div>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <img src={isOpen ? MenuClose : MenuOpen} alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      <div
        className={`mobile-menu flex flex-col justify-end ${
          isOpen ? "" : "hidden"
        }`}
      >
        <a className="block text-sm px-2 py-4 font-semibold">Home</a>
        <a className="block text-sm px-2 py-4 ">New</a>
        <a className="block text-sm px-2 py-4 ">Popular</a>
        <a className="block text-sm px-2 py-4 ">Trending</a>
        <a className="block text-sm px-2 py-4 ">Categories</a>
      </div>
    </nav>
  );
};

export default Navbar;

// <nav className="flex items-center justify-between flex-wrap p-6">
//   <div className="flex items-center flex-shrink-0 text-white mr-6">
//     <img src={logo} alt="" />
//   </div>
//   <div className="block sm:hidden">
//     <button
//       onClick={() => setIsOpen(!isOpen)}
//       className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
//     >
//       <img src={isOpen ? MenuClose : MenuOpen} alt="" />
//     </button>
//   </div>
//   {!isOpen && (
//     <div className="w-full block flex-grow md:flex md:w-auto">
//       <div className="text-sm md:flex-grow md:justify-end md:text-right">
//         <a className="block mt-4 md:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white mr-4">
//           Home
//         </a>
//         <a className="block mt-4 md:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white mr-4">
//           New
//         </a>
//         <a className="block mt-4 md:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white mr-4">
//           Popular
//         </a>
//         <a className="block mt-4 md:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white mr-4">
//           Trending
//         </a>
//         <a className="block mt-4 md:inline-block lg:mt-0 text-hsl(240, 100%, 5%) hover:text-white">
//           Categories
//         </a>
//       </div>
//     </div>
//   )}
//   <div className="hidden mobile-menu">
//     <ul className="">
//       <li className="active">
//         <a
//           href="index.html"
//           className="block text-sm px-2 py-4 text-black  font-semibold"
//         >
//           Home
//         </a>
//       </li>
//       <li>
//         <a
//           href="#services"
//           className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//         >
//           Services
//         </a>
//       </li>
//       <li>
//         <a
//           href="#about"
//           className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//         >
//           About
//         </a>
//       </li>
//       <li>
//         <a
//           href="#contact"
//           className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//         >
//           Contact Us
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>
