import SearchField from "react-search-field";
import "./search.css";
export default function Search() {

    return (
        <div className="seachContainer">
            <SearchField
                placeholder="Search..."
                // onChange={onChange}
                searchText="Search for a country"
                classNames="test-class"
                />
                
        </div>
    )
}