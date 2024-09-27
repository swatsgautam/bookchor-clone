import React from 'react';

const QualityPoints = ({ points }) => {
  return (
    <div className="points-quality">
      {points.map((point, index) => (
        <div className="points-quality-row" key={index}>
          <p>
            <img src={point.src} alt={`Point ${index}`} />
          </p>
          <span>{point.desc}</span>
        </div>
      ))}
    </div>
  );
};

export default QualityPoints;
