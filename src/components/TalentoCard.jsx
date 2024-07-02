import React from 'react';

const TalentoCard = ({ imageUrl, talentName }) => {
  return (
    <div className="talent-card text-center bg-transparent">
      <div className="w-100 rounded-circle overflow-hidden position-relative" style={{ paddingTop: '100%' }}>
        <img src={imageUrl} className="position-absolute top-0 start-0 w-100 h-100" alt={talentName} style={{ objectFit: 'cover' }} />
      </div>
      <p className="mt-3">{talentName}</p>
    </div>
  );
};

export default TalentoCard;
