import React from 'react';

const TalentoCard = ({ imageUrl, talentName }) => {
    return (
      <div className="talent-card text-center bg-transparent">
        <div>
          <img src={imageUrl} className="rounded-circle mb-3 img-fluid" alt={talentName}  />
          <p className="">{talentName}</p>
        </div>
      </div>
    );
  };

export default TalentoCard;