import React from 'react';
import Button from './Button';

const FormCard = ({ imageSrc, imageAlt, title, text, imageClass, buttonText, buttonHref }) => {
    return (
        <div className="card">
            <img src={imageSrc} className={`card-img-top ${imageClass}`} alt={imageAlt} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <Button text={buttonText} variant="primary" href={buttonHref} />
            </div>
        </div>
    );
};

export default FormCard;