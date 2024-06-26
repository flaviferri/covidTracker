import React from 'react';
import useApi from '../../services/useApi';
import './covidTableTop10.scss';

const CovidTableTop10 = () => {
  const { data } = useApi('https://disease.sh/v3/covid-19/countries');

  const getTop10 = (key) => {
    return data ? [...data].sort((a, b) => b[key] - a[key]).slice(0, 10) : [];
  };

  if (!data) {
    return <div>Cargando...</div>;
  }

  const categories = ["cases", "todayCases", "todayDeaths", "active", "critical", "recovered"];
  const categoryHeaders = {
    cases: "Top Cases",
    todayCases: "Today Cases",
    todayDeaths: "Today Deaths",
    active: "Top Active",
    critical: "Top Critical",
    recovered: "Top Recover"
  };

  const top10Data = categories.map(category => getTop10(category));

  return (
    <div>
      <h2>Top 10 Country wise Covid-19 Updates - Tiles</h2>
      <table  className="table">
        <thead>
          <tr>
              {categories.map(category => (
              <th key={category}>{categoryHeaders[category]}</th> 
            ))}
          </tr>
        </thead>
        <tbody>
          {top10Data[0].map((country, index) => ( // {[...Array(10)].map((_, rowIndex) => (
            <tr key={country.country}>
                {categories.map(category => {
                const data = top10Data[categories.indexOf(category)][index];
                return (
                  <td key={category}>
                    <img src={data.countryInfo.flag} alt={`Flag of ${data.country}`}/>
                    <div className='country-info'>
                    <span className="country-name">{data.country}</span>
                    <span className="country-value">{data[category]}</span>
                    </div>
                  </td>
                );
                })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CovidTableTop10;