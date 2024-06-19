import React from 'react';
import TalentoCard from './TalentoCard';

const DepartamentCard = ({DepartamentName}) => {
    return (
        <>
            <div className="container"> 
                <div className="row">
                    <h3 className="legend">{DepartamentName}</h3>
                </div>
                <div className="row">
                    <div className="col-2">
                        <TalentoCard
                         imageUrl="https://via.placeholder.com/100"
                         talentName="Nombre del Talento 1"
                         />
                    </div>
                    <div className="col-2">
                        <TalentoCard
                         imageUrl="https://via.placeholder.com/100"
                         talentName="Nombre del Talento 1"
                         />
                    </div>
                    <div className="col-2">
                        <TalentoCard
                         imageUrl="https://via.placeholder.com/100"
                         talentName="Nombre del Talento 1"
                         />
                    </div>
                    <div className="col-2">
                        <TalentoCard
                         imageUrl="https://via.placeholder.com/100"
                         talentName="Nombre del Talento 1"
                         />
                    </div>
                    <div className="col-2">
                        <TalentoCard
                         imageUrl="https://via.placeholder.com/100"
                         talentName="Nombre del Talento 1"
                         />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DepartamentCard;