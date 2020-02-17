import React from 'react'
import { GiMountaintop } from 'react-icons/gi';

const LogoInline = (props) => {
    return (
        <div className={props.parrentClassName + 'logo'}>Vienna <GiMountaintop className={props.parrentClassName + 'logo-icon'}/> Residence</div>
    )
}

export default LogoInline
