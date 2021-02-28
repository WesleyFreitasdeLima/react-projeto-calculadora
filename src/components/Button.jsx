import React from 'react';
import '../assets/css/button.css';

function component(props) {
    let btnDefaultStyle = 'button';

    const btnStyles = {
        "size-3": `${btnDefaultStyle} btn-s3`,
        "size-2": `${btnDefaultStyle} btn-s2`,
        "op": `${btnDefaultStyle} btn-op`
    }
    const btnClass = props.type ? btnStyles[props.type] : btnDefaultStyle;

    return (
        <>
            <button className={btnClass}>
                {props.label}
            </button>
        </>
    );
}

export default component;