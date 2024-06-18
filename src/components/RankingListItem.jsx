import React from 'react';

const RankingListItem = () => {
    return (
        <div className="py-2">
            <div className="d-flex align-items-center border rounded py-2 px-3">
                <div className="flex-shrink-0">
                    <img src="https://via.placeholder.com/80" alt="Imagen" className="img-fluid  rounded-5" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <div className="text-container">
                        <p className="mb-1">USER PUESTO DE TRABAJO</p>
                        <p className="mb-1">Username</p>
                        <p className="mb-0">230 pts</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RankingListItem;