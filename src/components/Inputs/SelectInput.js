import React from 'react';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

const SelectInput = props => {
    const classNames = new BEMClassNameGenerator('select-input');

    // props.defulSelect odes not work for some reason
    return (
        <div className={classNames.block()}>
            <div className={classNames.element("title")}>{props.title}</div>
            <div className={classNames.element("input-wrapper")}>
                <div className={classNames.element("icon")}>{props.icon}</div>
                <select 
                    className={classNames.element("input")} 
                    value={props.defaultSelect}
                    onChange={event => props.onChange(event.target.value)}
                >
                    {props.options.map(option => {
                        return (<option key={option} className={classNames.element('option')}>{option}</option>)
                    })}
                </select>
            </div>
        </div>
    )
}

export default SelectInput;