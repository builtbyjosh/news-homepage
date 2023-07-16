import React from "react";

const Sidebar = () => {
  return (
    <div className="p-4 space-y-6 text-left w-full md:w-4/12 bg-very-dark-blue">
      <h1 className=" text-4xl font-extrabold text-soft-orange">New</h1>
      {articlesArr.map((article, index) => (
        <React.Fragment key={index}>
          <SidebarArticle article={article} />
          {index !== articlesArr.length - 1 && (
            <hr className="my-4 border-t-1 border-grayish-blue" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;

const SidebarArticle = ({ article }) => {
  return (
    <div className="">
      <h3 className=" text-md font-bold text-off-white">{article.title}</h3>
      <p className="text-sm text-dark-grayish-blue">{article.desc}</p>
    </div>
  );
};

const articlesArr = [
  {
    title: "Hydrogen VS Electric Cars",
    desc: "Will hydrogen-feuled caars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VS Funding Drying Up?",
    desc: "Private funding by VS firms is down 50% YOY. We take a look at what that means.",
  },
];
