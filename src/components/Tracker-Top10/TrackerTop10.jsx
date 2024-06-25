
import UseApi from '../../services/useApi';
import { countries_url } from '../../config/urls';
import "./trackerTop10.scss";

const Tracker = () => {
    const { data, error } = UseApi(countries_url);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
    <section>
        <h2>Top 10 Country </h2>
        <div>
        
            {data
            .sort((a, b) => b.cases - a.cases) 
            .slice(0, 10)
            .map((country) => (
                <div className="dataBox" key={country.cases}>
                    <div className="country">
                    <img src = {country.countryInfo.flag}/>
                    <p>{country.country}</p>
                    </div>
                    <p> {country.cases}</p>
                </div>
            ))}
        </div>
    </section>
);
};

export default Tracker;