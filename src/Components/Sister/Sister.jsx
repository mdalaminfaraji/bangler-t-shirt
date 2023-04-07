import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [Money]=useContext(MoneyContext);
    return (
        <div>
            <h2>Sister Money: {Money}</h2>
        </div>
    );
};

export default Sister;