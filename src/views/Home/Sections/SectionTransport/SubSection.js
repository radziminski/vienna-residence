import React from 'react';

const ByPlane = (props) => {
    return (
        <div className="u-animation-fade-in">
            <h3 class="section-subtitle section-subtitle--light u-margin-top-small">{props.title}</h3>
            <div className="row">
            <p className="paragraph u-centered-text">{props.text}</p>
            </div>
        </div>
    )
}

export default ByPlane;
