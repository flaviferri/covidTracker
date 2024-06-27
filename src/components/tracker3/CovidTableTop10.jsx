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
        {[...Array(10)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {categories.map(category => {
                const countrydata = top10Data[categories.indexOf(category)][rowIndex];
                return (
                  <td key={category}>
                    <div className="country-flag-info">
                    <img src={countrydata.countryInfo.flag} alt={`Flag of ${countrydata.country}`} />
                    <div className="country-info">
                      <span className="country-name">{countrydata.country}</span>
                      <span className="country-value">{countrydata[category]}</span>
                    </div>
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