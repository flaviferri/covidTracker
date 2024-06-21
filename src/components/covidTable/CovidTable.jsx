import React from 'react';
import useApi from '../../services/useApi';

const CovidTable = () => {
  const { data } = useApi('https://disease.sh/v3/covid-19/countries');

  const getTop10 = (key) => {
    return data ? [...data].sort((a, b) => b[key] - a[key]).slice(0, 10) : [];
  };

  if (!data) {
    return <div>La informacion se está cargando...</div>;
  }

  const categories = ["cases", "todayCases", "todayDeaths", "active", "critical", "recovered"];
  const top10Data = categories.map(category => getTop10(category));

  return (
    <div>
      <h1>Top 10 Country wise Covid-19 Updates - Tiles</h1>
      <table>
        <thead>
          <tr>
              {categories.map(category => (
              <th key={category}>{category}</th>
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
                    {data.country} - {data[category]}
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