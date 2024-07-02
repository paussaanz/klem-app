import React, { useEffect, useState } from 'react';
import TalentoCard from './TalentoCard';
import { getUsers } from '../services/UserService';

const DepartamentCard = ({ DepartamentName }) => {
    const [dbUsers, setDBUsers] = useState([]);
    useEffect(() => {
        getUsers()
            .then(users => {
                setDBUsers(users)
            })

    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="legend">{DepartamentName}</h3>
                </div>
                <div className="row">
                    {dbUsers.map((dbUser) => (
                        <div className="col-2" key={dbUser.id}>
                            <TalentoCard
                                imageUrl={dbUser.profileImage}
                                talentName={dbUser.firstName + ' ' + dbUser.lastName}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DepartamentCard;