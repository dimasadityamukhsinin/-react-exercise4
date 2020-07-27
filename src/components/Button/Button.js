import React from 'react';
import './Button.css';

const Button = ({buttonName}) => {
    return(
        <>
            <a href="/blog/Ted Sarandos appointed co-CEO of Netflix" className="button">
                <span className="spanButton">
                    <div className="divButton">
                        <span>{buttonName}</span>
                        <svg>
                            <path d="M.274 8.48l1.452 1.375 4.615-4.87L1.73.11.274 1.488l3.312 3.496" />
                        </svg>
                    </div>
                </span>
            </a>
        </>
    );
}

export default Button;