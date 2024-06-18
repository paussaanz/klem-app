import React from 'react';

const RankingPage = () => {
    return (
        <div>
            <div className="row py-4 align-items-center border border-bottom-2">
                <div className="col-6">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img src="./src/assets/dist/img/klem-logo.png" alt="Klem Logo" className="img-fluid" />
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <h1 className="h3">Hola UserName Surname</h1>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <h4>Puesto</h4>
                    <h4 className="h2">5º</h4>
                    <h4>124 pts</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h1>hola</h1>
                </div>
                <div className="col-6">
                </div>
            </div>
        </div>
    );
};

export default RankingPage;

