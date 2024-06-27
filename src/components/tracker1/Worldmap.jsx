import "./worldmap.scss"
import UseApi from "../../services/useApi"
import WorldMap from "react-svg-worldmap";
import { countries_url } from "../../config/urls";

const Worldmap = () => {
  const { data, error } = UseApi(countries_url);

  if (error) {
      return <div>Error: {error}</div>;
  }

  if (!data) {
      return <div>Loading...</div>;
  }

    
    const dataCountries=data
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
        data={dataCountries}
        />
    </div>
  )
}

export default Worldmap