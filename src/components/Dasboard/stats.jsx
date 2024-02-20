import React, { useState, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import './css/largespace.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LargeSpace = () => {
  const [topRevenueData, setTopRevenueData] = useState([]);
  const [floodRiskScores, setFloodRiskScores] = useState([]);
  const [environmentalSafetyData, setEnvironmentalSafetyData] = useState([]);
  const [revenueError, setRevenueError] = useState(null);
  const [floodRiskError, setFloodRiskError] = useState(null);
  const [environmentalSafetyError, setEnvironmentalSafetyError] = useState(null);

  useEffect(() => {
    const fetchTopRevenue = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/top-revenue');
        setTopRevenueData(response.data);
      } catch (error) {
        console.error('Error fetching top revenue:', error);
        setRevenueError('Error fetching revenue data. Please try again later.');
      }
    };

    fetchTopRevenue();
  }, []);

  useEffect(() => {
    const fetchFloodRisk = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/flood-risk');
        setFloodRiskScores(response.data);
      } catch (error) {
        console.error('Error fetching flood risk scores:', error);
        setFloodRiskError('Error fetching flood risk data. Please try again later.');
      }
    };

    fetchFloodRisk();
  }, []);

  useEffect(() => {
    const fetchEnvironmentalSafety = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/envi-safety');
        setEnvironmentalSafetyData(response.data);
      } catch (error) {
        console.error('Error fetching environmental safety data:', error);
        setEnvironmentalSafetyError('Error fetching environmental safety data. Please try again later.');
      }
    };

    fetchEnvironmentalSafety();
  }, []);

  const sliderSettings = useMemo(() => ({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }), []);

  return (
    <div className="large-space">
      {revenueError || floodRiskError || environmentalSafetyError ? (
        <div className="error-message">
          {revenueError || floodRiskError || environmentalSafetyError}
        </div>
      ) : (
        <Slider {...sliderSettings}>
          <div className="slide-content revenue-slide">
            <h2>Top Revenue Areas</h2>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Revenue</th>
                  <th>Commercial</th>
                  <th>No. of Platforms</th>
                  <th>Accessibility score</th>
                </tr>
                {/* Name Rev Com Plat Acc_Score */}
                {topRevenueData.map((area, index) => (
                  <tr key={index}>
                    <td>{area.Name}</td>
                    <td>{area.Rev}</td>
                    <td>{area.Com}</td>
                    <td>{area.Plat}</td>
                    <td>{area.Acc_Score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="slide-content flood-risk-slide">
            <h2>Flood Risk Scores</h2>
            <table>
              <tbody>
                <tr>

                  {/* //Name FloodRiskScore HistoricalFloodEvents FloodProtectionMeasures FloodZone' */}
                  <th>Name</th>
                  <th>Flood Risk Score</th>
                  <th>Past Flood Events</th>
                  <th>FloodProtectionMeasures</th>
                  <th>FloodZone</th>
                </tr>
                {floodRiskScores.map((area, index) => (
                  <tr key={index}>
                    <td>{area.Name}</td>
                    <td>{area.FloodRiskScore}</td>
                    <td>{area.HistoricalFloodEvents}</td>
                    <td>{area.FloodProtectionMeasures}</td>
                    <td>{area.FloodZone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="slide-content environmental-safety-slide">
            <h2>Environmental Safety Data</h2>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Air Quality Index (AQI)</th>
                  <th>Bicycle Infrastructure</th>
                  <th>Environmental Features</th>
                  <th>Vegetation Cover</th>
                </tr>
                {environmentalSafetyData.map((area, index) => (
                  <tr key={index}>
                    <td>{area.Name}</td>
                    <td>{area.AQI}</td>
                    <td>{area.BicycleInfrastructure}</td>
                    <td>{area.EnvironmentalFeatures}</td>
                    <td>{area.VegetationCover}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Slider>
      )}
    </div>
  );
};

export default LargeSpace;
