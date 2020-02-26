import React from 'react';

const SectionTitle = props => {
    return (
        <h1 className={"section-title" + (props.type ? ' section-title--' + props.type : '')}>{props.children}</h1>
    )
}

export default SectionTitle;
