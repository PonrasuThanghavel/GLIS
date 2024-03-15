import React from 'react';
import './css/landrevenue.css';
const LandRevenueInfo = () => {
  // Static sample data as an object
  const staticData = {
    totalArea: 5000, // acres
    revenueGenerated: 150000, // USD
    pastYearRevenue: 120000, // USD
    predictedNextYearRevenue: 180000, // USD
  };

  return (
    <div className="land-revenue-info">
      <h2>Land and Revenue Information</h2>
      <div className="info-item">
        <h3>Total Area of Land</h3>
        <p>{staticData.totalArea} acres</p>
      </div>
      <div className="info-item">
        <h3>Revenue Generated</h3>
        <p>{staticData.revenueGenerated} USD</p>
      </div>
      <div className="info-item">
        <h3>Past Year Revenue</h3>
        <p>{staticData.pastYearRevenue} USD</p>
      </div>
      <div className="info-item">
        <h3>Predicted Next Year Revenue</h3>
        <p>{staticData.predictedNextYearRevenue} USD</p>
      </div>
    </div>
  );
};

export default LandRevenueInfo;
