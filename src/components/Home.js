import Header  from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import MainContent from "./MainContent";
import "./home.css";

export default function Home() {
    return (
        <div className="wholeContainer">
            <div> <Header /> </div>
            
            <div className="searchFilterDiv">
                <Search />
                <Filter />
            </div>
            <div><MainContent /></div>
           
        </div>
    ) 
}