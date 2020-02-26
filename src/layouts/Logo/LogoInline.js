import React from 'react';
import { GiMountaintop } from 'react-icons/gi';

const LogoInline = (props) => {
    return (
        <div className={props.parrentClassNames.element('logo')}>Vienna <GiMountaintop className={props.parrentClassNames.element('logo-icon')}/> Residence</div>
    )
}

export default LogoInline
