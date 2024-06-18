import React from 'react';

const GameTable = () => {
    return (
        <div className="row">
            <div className="col-2 offset-2">
                <p>Retador</p>
            </div>
            <div className="col-2">
                <p>Retado</p>
            </div>
            <div className="col-2">
                <p>Formación</p>
            </div>
            <div className="col-2">
                <p>Ganador</p>
            </div>
        </div>
    );
};

export default GameTable;