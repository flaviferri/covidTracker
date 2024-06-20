import React from 'react';

const column = [
    {
        name: "Flag",
        selector : row => row.countryInfo.flag,
        sortable: true,
        cell: row => <img src={row.countryInfo.flag} alt="flag" width="32" height="20" />
    }, 
    {
        name: "Country",
        selector : row => row.country,
        sortable: true
    }, 
    {
        name: "Cases",
        selector : row => row.cases,
        sortable: true
    },
    {
        name: "New Cases",
        selector : row => row.todayCases,
        sortable: true
    },
    {
        name: "Deaths",
        selector : row => row.deaths,
        sortable: true
    },
    {
        name: "New Deaths",
        selector : row => row.todayDeaths,
        sortable: true
    },
    {
        name: "Recovered",
        selector : row => row.recovered,
        sortable: true
    },
    {
        name: "Active",
        selector : row => row.active,
        sortable: true
    },
    {
        name: "Critical",
        selector : row => row.critical,
        sortable: true
    },
    {
        name: "Tested",
        selector : row => row.tests,
        sortable: true
    }
];


export default column;