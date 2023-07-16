import React from "react";
import Hero from "../images/image-web-3-desktop.jpg";

const MainArticle = () => {
  return (
    <div className=" w-full md:w-8/12  ">
      <img src={Hero} alt="" className=" pb-8" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <h1 className=" flex-1 text-5xl text-left font-extrabold md:w-1/2 ">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex-1 flex flex-col">
          <p className="text-left text-sm mb-6 text-grayish-blue ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-soft-red text-off-white font-bold text-sm h-10 w-36">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainArticle;
