import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import Lottie from 'lottie-react';

const LineChart = () => {
  const [chartData, setChartData] = useState({
    loading: true,
    error: null,
    data: [],
  });

  useEffect(() => {
    axios.get('https://glis-backend.onrender.com/api/bus-stations')
      .then(response => {
        setChartData({
          loading: false,
          error: null,
          data: response.data,
        });
      })
      .catch(error => {
        setChartData({
          loading: false,
          error: 'Error fetching data. Please try again later.',
          data: [],
        });
        console.error('Error fetching data:', error);
      });
  }, []);

  const fixedRevenues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300];
  const lineChartData = chartData.data.map(station => station.Size); // Assuming station.Size contains size values

  const options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'Size',
      data: lineChartData
    }],
    xaxis: {
      categories: fixedRevenues.map(String),
      title: {
        text: 'Revenue'
      }
    },
    yaxis: {
      title: {
        text: 'Size'
      }
    },
    title: {
      text: 'Size vs Revenue'
    },
    tooltip: {
      enabled: true,
    }
  };

  return (
    <div className="chart-container">
      <h2>Size vs Revenue</h2>
      {chartData.loading ? (
        <div className="loading-animation">
          <Lottie animationData={require('../../loading.json')} loop autoplay />
        </div>
      ) : chartData.error ? (
        <div className="error-message">{chartData.error}</div>
      ) : (
        <Chart options={options} series={options.series} type={options.chart.type} height={500} />
      )}
    </div>
  );
};

export default LineChart;
