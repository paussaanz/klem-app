import React from 'react';

const Button = ({ text, onClick, type, variant, size, disabled, href }) => {
    const classNames = `btn btn-${variant} ${size ? `btn-${size}` : ''}`;

    if (href) {
        return (
            <a href={href} className={classNames} role="button">
                {text}
            </a>
        );
    }

    return (
        <button type={type} className={classNames} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;