import React,  {useState, useEffect} from 'react';
import "./MainContent.css"


export default function MainContent() {
    
   const  [countries, updateResult] = useState([]);

    useEffect(() => {
        let covidDataURL = "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true";
        let targetURL = "https://api.covid19api.com/summary";

        fetch(targetURL).then(response => response.json())
            .then(response => {
            updateResult(response.Countries);             
        }).catch(e => {
            console.log("error..."+ e);
        });
    }, [])
        
    const covidData = countries.map((covidData, index) => (
                    <div  key={index} className="infoDiv" >

                        {/* <div className="imgDiv"> */}
                            <img src={`https://www.countryflags.io/${covidData.CountryCode}/flat/64.png`} width="220" height="100" />
                        {/* </div> */}
                        <div className=" cnNameDiv">{covidData.Country}</div> 
                        <div className="contentDiv"> TotalCases: {covidData.TotalConfirmed}</div>
                        <div className="contentDiv">TotalRecovered: {covidData.TotalRecovered}</div>
                        <div className="contentDiv">TotalDeaths: {covidData.TotalDeaths}</div>
                        
                    </div>
        ));

        return (
            <div>
               <div className="mainContainer">{covidData}</div>
            </div>
        )
    
}
