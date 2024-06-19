import React from 'react';

const UserInfoBox = ({text}) => {
    return (
        <div className="card bg-cream text-center">
        <div className="card-body d-flex flex-column justify-content-center py-5">
          <h5 className="py-5">{text}</h5>
        </div>
      </div>
    );
};

export default UserInfoBox;