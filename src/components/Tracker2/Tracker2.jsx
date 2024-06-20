//import axios from "axios"
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import useApi from "../../services/useApi";
import column from "./Tr2Table";

export default function Tracker2() {
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
        <div>
            <div>
                <h3>Ajax Data Table - Covid-19 Country Wise State</h3>
            </div>
            <div style={{display:"flex", justifyContent:"right"}}>
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" onChange={handleFilter}></input>
            </div>
            <DataTable
            columns={column}
            data={records} 
            pagination
            defaultSortField="cases"
            defaultSortAsc={false}
            
            />
        </div>
    );
}