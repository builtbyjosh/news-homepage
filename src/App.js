import "./App.css";
import BottomArticles from "./components/BottomArticles";
import MainArticle from "./components/MainArticle";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App  px-8">
      <Navbar />
      <div className=" flex flex-col md:flex-row pb-8 mb-2 md:mb-8 md:space-x-8 space-y-8 md:space-y-0 w-full">
        <MainArticle />
        <Sidebar />
      </div>
      <BottomArticles />
    </div>
  );
}

export default App;
