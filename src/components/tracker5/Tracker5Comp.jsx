import React, { useState, useEffect } from "react";
import useApi from "../../services/useApi";
import { groupCountries_dates } from "../../config/urls";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


const processCountryData = (data) => {
    const chartData = {};
    const countries = Object.keys(data);

    countries.forEach(country => {
        const countryData = data[country].timeline;
        const cases = [];
        const deaths = [];
        const recoveries = [];
        const labels = [];

        Object.keys(countryData.cases).forEach(date => {
            const [month, day, year] = date.split('/');
            if (month === '10' && year === '20') {
                labels.push(date);
                cases.push(countryData.cases[date]);
                deaths.push(countryData.deaths[date]);
                recoveries.push(countryData.recovered[date]);
            }
        });

        chartData[country] = {
            labels,
            datasets: [
                {
                    label: 'Confirmed',
                    data: cases,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    fill: false,
                },
                {
                    label: 'Death',
                    data: deaths,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    fill: false,
                },
                {
                    label: 'Recovered',
                    data: recoveries,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: false,
                },
            ],
            options: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true, 
                        },
                    },
                },
            },
        };
    });

    return chartData;
};



const Tracker5Comp = () => {
    const { data: apiData, error } = useApi(groupCountries_dates);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        if (apiData) {
            const processedData = processCountryData(apiData);
            console.log('Processed Data:', processedData);
            setChartData(processedData);
        }
    }, [apiData]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!apiData || !Object.keys(chartData).length) {
        return <div>Loading...</div>;
    }
    
  
    return (
        <div>
            {Object.keys(chartData).map((country, index) => (
                <div key={index}>
                    <h2>{country.toUpperCase()}</h2>
                    <Line data={chartData[country]} />
                </div>
            ))}
        </div>
    );
};

export default Tracker5Comp;