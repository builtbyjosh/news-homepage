import React from "react";
import retro from "../images/image-retro-pcs.jpg";
import topLaptop from "../images/image-top-laptops.jpg";
import gamingGrowth from "../images/image-gaming-growth.jpg";

const articlesArr = [
  {
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
    img: retro,
  },
  {
    title: "Top 10 laptops of 2022",
    desc: "Our best picks for vairous needs and budgets",
    img: topLaptop,
  },
  {
    title: "The Frowth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities.",
    img: gamingGrowth,
  },
];

const BottomArticles = () => {
  return (
    <div className="sm:flex sm:flex-row justify-around items-center space-y-6 md:space-y-0">
      {articlesArr.map((article, index) => (
        <SingleArticle
          articleData={{ ...article, index: index + 1 }}
          key={index}
        />
      ))}
    </div>
  );
};

export default BottomArticles;

const SingleArticle = ({ articleData }) => {
  const { title, desc, img, index } = articleData;
  return (
    <div className="flex items-center h-28 w-72">
      <img src={img} alt={title} className="h-full" />
      <div className="ml-4 flex flex-col justify-center items-start w-full space-y-2">
        <h1 className="text-2xl font-bold text-grayish-blue mb-2">0{index}</h1>
        <div className=" space-y-2">
          <h3 className="text-md font-bold text-very-dark-blue text-left">
            {title}
          </h3>
          <p className="text-xs text-dark-grayish-blue text-left">{desc}</p>
        </div>
      </div>
    </div>
  );
};
