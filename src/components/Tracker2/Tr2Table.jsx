import React from 'react';
import './Tr2Table.scss';

const column = [
    {
        id: "flag",
        name: "Flag",
        selector : row => row.countryInfo.flag,
        sortable: true,
        cell: row => <img src={row.countryInfo.flag} alt="flag" width="32" height="20" />
    }, 
    {
        id: "country",
        name: "Country",
        selector : row => row.country,
        sortable: true
    }, 
    {
        id: "cases",
        name: "Cases",
        selector : row => row.cases,
        sortable: true
    },
    {
        id: "newCases",
        name: "New Cases",
        selector : row => row.todayCases,
        sortable: true
    },
    {
        id: "deaths",
        name: "Deaths",
        selector : row => row.deaths,
        sortable: true
    },
    {
        id: "newDeaths",
        name: "New Deaths",
        selector : row => row.todayDeaths,
        sortable: true
    },
    {
        id: "recovered",
        name: "Recovered",
        selector : row => row.recovered,
        sortable: true
    },
    {
        id: "active",
        name: "Active",
        selector : row => row.active,
        sortable: true
    },
    {
        id: "critical",
        name: "Critical",
        selector : row => row.critical,
        sortable: true
    },
    {
        id: "critical",
        name: "Tested",
        selector : row => row.tests,
        sortable: true
    }
];


export default column;