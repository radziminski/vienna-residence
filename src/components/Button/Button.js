import React from 'react';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

// types: full, 

const Button = (props) => {
    const classNames = new BEMClassNameGenerator('btn');

    return (
        <button onClick={props.onClick} className={classNames.blockWithModifiers(props.type)} style={{width: props.width ? props.width : 'auto'}}>{props.children}</button>
    )
}

export default Button;
