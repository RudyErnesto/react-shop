import React from 'react';

const Layaout = (props) => {
    return (
        <div className = "Layaout">
                {props.children}
        </div>
    );
}

export default Layaout;