import "./selectdata.scss"
import React from 'react'

const SelectData = ({ selectedCountry, setSelectedCountry, countries }) => {

  return (
    <div className="selectdata">
        <select name="countries" id="countries" value={selectedCountry}
          onChange={e => setSelectedCountry(e.target.value)}>
        {countries.map((country) => (
          <option key={country.country} value={country.country}>{country.country}</option>
        ))}
        </select>
        <p>Updated: June 4, 2022</p>
    </div>
  )
}

export default SelectData