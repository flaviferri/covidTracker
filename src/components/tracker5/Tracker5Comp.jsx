import './tracker5Comp.scss';
import React, { useState, useEffect } from "react";
import useApi from "../../services/useApi";
import { groupCountries_dates } from "../../config/urls";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


const processCountryData = (data) => {
    const chartData = {};
    

    data.forEach(countryData => {
        const countryName = countryData.country;
        const timeline = countryData.timeline;
        const cases = [];
        const deaths = [];
        const recoveries = [];
        const labels = [];

        Object.keys(timeline.cases).forEach(date => {
            const [month, day, year] = date.split('/');
            if (month === '10' && year === '20') {
                labels.push(date);
                cases.push(timeline.cases[date]);
                deaths.push(timeline.deaths[date]);
                recoveries.push(timeline.recovered[date]);
            }
        });

        chartData[countryName] = {
            labels,
            datasets: [
                {
                    label: 'Confirmed',
                    data: cases,
                    borderColor: '#3639AE',
                    backgroundColor: '#3639AE',
                    fill: false,
                    pointStyle: 'circle',
                },
                {
                    label: 'Death',
                    data: deaths,
                    borderColor: '#ff0000',
                    backgroundColor: '#ff0000',
                    fill: false,
                    pointStyle: 'circle',
                },
                {
                    label: 'Recovered',
                    data: recoveries,
                    borderColor: '#82c519',
                    backgroundColor: '#82c519',
                    fill: false,
                    pointStyle: 'circle',
                },
            ],
            
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
    
    const options = {
        plugins: {
            legend: {
                display: true,
                labels: {
                    usePointStyle: true, 
                },
            },
        },
    };
  
    return (
        <div className="tracker5-container">
            {Object.entries(chartData).map(([countryName, data], index) => (
                <div key={index} className='chart-container'>
                    <h2 className='chart-title'>{countryName}</h2>
                    <Line data={data} options={options} />
                </div>
            ))}
        </div>
    );
};

export default Tracker5Comp;