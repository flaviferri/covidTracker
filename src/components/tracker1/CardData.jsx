import "./carddata.scss"
import React from 'react'

const CardData = ({ selectedCountry, countries }) => {
  const countryData = countries.find(country => country.country === selectedCountry);

  if (!countryData) {
    return <div>No data available for the selected country.</div>;
  }

  return (
    <div className="carddata">
      <div className="singlecard">
        <div className="cardimg">
          <img src="images/icons/covid-defult.svg" />
        </div>
        <h4>Total Cases</h4>
        <h3 className="data1">{countryData.cases}</h3>
      </div>
      <div className="singlecard">
        <div className="cardimg">
          <img src="images/icons/covid-red.svg" />
        </div>
        <h4>Total Deaths</h4>
        <h3 className="data2">{countryData.deaths}</h3>
      </div>
      <div className="singlecard">
        <div className="cardimg">
          <img src="images/icons/covid-green.svg" />
        </div>
        <h4>Total Recovered</h4>
        <h3 className="data3">{countryData.recovered}</h3>
      </div>
      <div className="singlecard">
        <div className="cardimg">
          <img src="images/icons/covid-blue.svg" />
        </div>
        <h4>Total Active</h4>
        <h3 className="data4">{countryData.active}</h3>
      </div>
      <div className="singlecard">
        <div className="cardimg">
          <img src="images/icons/covid-orange.svg" />
        </div>
        <h4>New Cases</h4>
        <h3 className="data5">{countryData.todayCases}</h3>
      </div>
      <div className="singlecard">
        <div className="cardimg">
          <img src="images/icons/covid-redark.svg" />
        </div>
        <h4>New Deaths</h4>
        <h3 className="data6">{countryData.todayDeaths}</h3>
      </div>   
    </div>
    
  )
}

export default CardData