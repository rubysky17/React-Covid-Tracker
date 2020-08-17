import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api';
// thêm component chart là Line và Bar
import { Line, Bar } from 'react-chartjs-2'
// thêm style để css
import styles from './Chart.module.css';

function Chart() {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    })
    const lineCharts = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        labels: "Infected",
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        labels: "Deaths",
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }]
                }}
            />) : null
    );
    return (
        <div className={styles.container}>
            {lineCharts}
        </div>
    )
}

export default Chart
