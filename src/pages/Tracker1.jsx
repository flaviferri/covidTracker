import { useState, useEffect } from "react";
import CardData from "../components/tracker1/CardData";
import CardGeneralData from "../components/tracker1/CardGeneralData";
import SelectData from "../components/tracker1/SelectData";
import Worldmap from "../components/tracker1/Worldmap";
import useApi from "../services/useApi";
import { countries_url } from "../config/urls"; 
import "../styles/responsive-tracker1.scss"

const Tracker1 = () =>{
    const [selectedCountry, setSelectedCountry] = useState('Afghanistan');
    const { data: countries, error } = useApi(countries_url);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!countries) {
      return <div>Loading...</div>;
    }
  
    return(
        <article>
        <SelectData selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        countries={countries}
        />
        <CardData selectedCountry={selectedCountry} countries={countries} />
        <Worldmap />
        <CardGeneralData />
        </article>
    )
};

export default Tracker1