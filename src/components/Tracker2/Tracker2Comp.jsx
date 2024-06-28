import React, { useState } from "react";
import DataTable from "react-data-table-component";
import useApi from "../../services/useApi";
import { countries_url } from "../../config/urls";
import column from "./Tr2Table";
import './tracker2Comp.scss';


export default function Tracker2Comp() {
    const { data: apiData, error } = useApi(countries_url);
    const [records, setRecords] = useState([]);
    const [filterRecords, setFilterRecords] = useState([]);
 
    React.useEffect(() => {
        if (apiData) {
            setRecords(apiData);
            setFilterRecords(apiData);
        }
    }, [apiData]);
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!apiData || !Object.keys(records).length) {
        return <div>Loading...</div>;
    }

    const handleFilter = (event) => {
        const newData = filterRecords.filter(row => row.country.toLowerCase().includes(event.target.value.toLowerCase()))
        setRecords(newData);
    };

     return (
        <div className="tr2Table-container">
            <div className="title">
                <h3>Ajax Data Table - Covid-19 Country Wise State</h3>
            </div>
            <div className="searchField">
                <label htmlFor="search" className="searchLabel">Search:</label>
                <input type="text" id="search" onChange={handleFilter}></input>
            </div>
            <div className="dataTable">
                <DataTable
                    columns={column}
                    data={records} 
                    pagination
                    defaultSortFieldId="cases"
                    defaultSortAsc={false}
                    striped
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
}