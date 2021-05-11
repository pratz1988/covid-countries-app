import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./filter.css"
export default  function Filter() {

    const options = [
        'India', 'USA'
      ];
      const defaultOption = options[0];
    return (
        <div className="filterContainer">
            
            <Dropdown  options={options} 
             value={defaultOption} 
             placeholder="Select an option" />

        </div>
    )
}
