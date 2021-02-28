import React from 'react';
import '../assets/css/display.css';

function Component(props) {
    return (
        <div className="display">
            {props.defaultValue}
        </div>
    );
}

export default Component;