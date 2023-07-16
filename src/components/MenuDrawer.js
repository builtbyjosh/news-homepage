import React from "react";
import MenuClose from "../images/icon-menu-close.svg";

const Drawer = ({
  isOpen,
  onClose,

  children,
}) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-gray-600 opacity-50"></div>}
      <div
        className={`fixed inset-y-0 right-0 w-56 bg-off-white shadow z-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end pt-4 pr-4">
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <img src={MenuClose} alt="Menu" />
          </button>
        </div>
        <div className="p-4">
          <ul className="menu w-full h-full text-base-content text-xl font-bold  flex flex-col items-start space-y-4 mt-12">
            {children}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
