import React from 'react';
import SearchBar from '../components/SearchBar';
import RankingListItem from '../components/RankingListItem';
import GameTable from '../components/GameTable';

const RankingPage = () => {
    return (
        <div>
            <div className="row py-4 align-items-center border border-bottom border-end-0 border-start-0 border-top-0">
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
            <div className="row pt-4">
                <div className="col-6">
                    <SearchBar />
                    <RankingListItem />
                    <RankingListItem />
                    <RankingListItem />
                </div>
                <div className="col-6">
                    <h3 className="text-center text-primary">Está pasando...</h3>
                    
                        <GameTable />
                    
                </div>
            </div>
        </div>
    );
};

export default RankingPage;

