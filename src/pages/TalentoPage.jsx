import React from 'react';
import CompanyCard from '../components/CompanyCard';

const TalentoPage = () => {
    return (
        <>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-primary text-center text-uppercase h2">Encuentra todo el talento de tu empresa</h1>
                    </div>
                </div>
                <div className="row justify-content-center bg-cream rounded pt-3">
                    <CompanyCard/>
                </div>
            </div>
        </>
    );
};

export default TalentoPage;