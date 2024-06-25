import "./worldmap.scss"
import {useState, useEffect} from "react"
import WorldMap from "react-svg-worldmap";
import {getCountriesData} from "../../services/useApi"

const Worldmap = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        getCountriesData().then(jsonCountries => {
            setCountries(jsonCountries)
        });
    }, [])
    
    const data=countries
    .filter(country => country.countryInfo && country.countryInfo.iso2) // Filtra los países sin countryInfo o iso2
    .map(country => ({
      country: country.countryInfo.iso2,
      value: country.cases,
    }));
  return (
    <div className="worldmap">
        <WorldMap
        color="blue"
        value-suffix="people"
        size="lg"
        data={data}
        />
    </div>
  )
}

export default Worldmap