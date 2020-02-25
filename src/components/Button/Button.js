import React from 'react';

// types: full, 

const Button = (props) => {
    let selector = null;
    if (props.type) selector = 'btn--' + String(props.type);

    return (
        <button className={"btn " + selector} style={{width: props.width ? props.width : 'auto'}}>{props.children}</button>
    )
}

export default Button;
