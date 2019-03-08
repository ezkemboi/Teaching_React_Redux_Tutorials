import React from 'react';

const simpleComponent = (props) => {
    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default simpleComponent;
