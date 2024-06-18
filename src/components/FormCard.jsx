import React from 'react';
import Button from './Button';

const FormCard = ({ imageSrc, imageAlt, title, text, imageClass, buttonText, buttonHref }) => {
    return (
        <div className="card h-100">
            <img src={imageSrc} className={`card-img-top ${imageClass}`} alt={imageAlt} />
            <div className="card-body">
                <p className="legend text-primary">nº de views</p>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default FormCard;