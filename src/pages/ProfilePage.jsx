import React from 'react';
import Button from '../components/Button';
import UserInfoBox from '../components/UserInfoBox';

const ProfilePage = () => {
    return (
        <>
            <div className="row pt5 bg-light border shadow border-bottom border-end-0 border-start-0 border-top-0">
                <div className="col-12 text-center py-4 ">
                    <img src="https://via.placeholder.com/150" className="img-fluid rounded-circle" />
                    <h1 className="h3 pt-3">USERNAME</h1>
                    <Button
                    href="/"
                    variant="primary"
                    text="Retar"/>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-2">
                    <UserInfoBox
                    text="MIO Group"/>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;