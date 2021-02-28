import React from 'react';
import '../assets/css/button.css';

function component(props) {
    const btnStyles = {
        "size-3": `button btn-s3`,
        "size-2": `button btn-s2`,
        "op": `button btn-op`
    };
    const btnClass = props.type ? btnStyles[props.type] : 'button';

    return (
        <>
            <button className={btnClass} onClick={e => props.click && props.click(props.label)}>
                {props.label}
            </button>
        </>
    );
}

export default component;