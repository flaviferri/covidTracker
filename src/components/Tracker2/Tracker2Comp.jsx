import React, { useState } from "react";
import DataTable from "react-data-table-component";
import useApi from "../../services/useApi";
import column from "./Tr2Table";
import './tracker2Comp.scss';

export default function Tracker2Comp() {
    const { data: apiData, error } = useApi('https://disease.sh/v3/covid-19/countries');
    const [records, setRecords] = useState([]);
    const [filterRecords, setFilterRecords] = useState([]);

 
    React.useEffect(() => {
        if (apiData) {
            setRecords(apiData);
            setFilterRecords(apiData);
        }
    }, [apiData]);

    const handleFilter = (event) => {
        const newData = filterRecords.filter(row => row.country.toLowerCase().includes(event.target.value.toLowerCase()))
        setRecords(newData);
    }

     return (
        <div className="tr2Table">
            <div className="title">
                <h3>Ajax Data Table - Covid-19 Country Wise State</h3>
            </div>
            <div className="searchField">
                <label htmlFor="search" className="searchLabel">Search: </label>
                <input type="text" id="search" onChange={handleFilter}></input>
            </div>
            <DataTable
            columns={column}
            data={records} 
            pagination
            defaultSortFieldId="cases"
            defaultSortAsc={false}
            striped
            highlightOnHover
            
            />
        </div>
    );
}