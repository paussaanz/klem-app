import React from 'react';
import Button from '../components/Button';

const ProfilePage = () => {
    return (
        <div>
            <div className="row pt-5 bg-light">
                <div className="col-12 text-center">
                    <img src="https://via.placeholder.com/150" className="img-fluid rounded-5" />
                    <h1 className="h3 pt-3">USERNAME</h1>
                    <Button
                    href="/"
                    variant="primary"
                    text="Retar"/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;