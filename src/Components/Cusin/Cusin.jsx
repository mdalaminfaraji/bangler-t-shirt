import React, { Children } from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({Children, hasFriend}) => {
  
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{Children}</small></p>
            {hasFriend && <Friend></Friend>}
        </div>
    );
};

export default Cusin;