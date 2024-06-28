import React from 'react';
import useApi from '../../services/useApi';
import './covidTableTop10.scss';

const categories = [
  { key: "cases", label: "Top Cases" },
  { key: "todayCases", label: "Today Cases" },
  { key: "todayDeaths", label: "Today Deaths" },
  { key: "active", label: "Top Active" },
  { key: "critical", label: "Top Critical" },
  { key: "recovered", label: "Top Recover" }
];


const CovidTableTop10 = () => {
  const { data } = useApi('https://disease.sh/v3/covid-19/countries');

  if (!data) return <p>Loading...</p>;

  const top10ByCategory = categories.map(category => ({
    category: category.label,
    countries: data
      .sort((a, b) => b[category.key] - a[category.key])
      .slice(0, 10)
  }));

  return (
    <div className="covid-table">
      <h2>Top 10 Country wise Covid-19 Updates - Tiles</h2>
      <div className="grid-container">
        {top10ByCategory.map((item, index) => (
          <div key={index} className="grid-item">
            <h3>{item.category}</h3>
            {item.countries.map((countryData, idx) => (
              <div key={idx} className="country-data">
                <img src={countryData.countryInfo.flag} alt={`Flag of ${countryData.country}`} />
                <div className="country-info">
                  <span className="country-name">{countryData.country}</span>
                  <span className="country-value">{countryData[categories[index].key]}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CovidTableTop10;