import React from 'react';
import useApi from '../../services/useApi';
import './CovidTable.scss';

const categoryHeaders = {
  cases: "Top Cases",
  todayCases: "Today Cases",
  todayDeaths: "Today Deaths",
  active: "Top Active",
  critical: "Top Critical",
  recovered: "Top Recover"
};

const CovidTable = () => {
  const { data } = useApi('https://disease.sh/v3/covid-19/countries');

  const getTop10 = (key) => {
    return data ? [...data].sort((a, b) => b[key] - a[key]).slice(0, 10) : [];
  };

  if (!data) {
    return <div>La informacion se está cargando...</div>;
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
      <h1>Top 10 Country wise Covid-19 Updates - Tiles</h1>
      <table  className="table">
        <thead>
          <tr>
              {categories.map(category => (
              <th key={category}>{categoryHeaders[category]}</th> //personalizacion de las categorias
            ))}
          </tr>
        </thead>
        <tbody>
          {top10Data[0].map((country, index) => (
            <tr key={country.country}>
                {categories.map(category => {
                const data = top10Data[categories.indexOf(category)][index];
                return (
                  <td key={category}>
                    <img src={data.countryInfo.flag} alt={`Flag of ${data.country}`} style={{ width: '30px', marginRight: '10px' }} />
                    <span className="country-name">{data.country}</span>
                    <span className="country-value">{data[category]}</span>
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

export default CovidTable;