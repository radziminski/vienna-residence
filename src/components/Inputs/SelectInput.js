import React from 'react';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

export const SelectInput = props => {
    const classNames = new BEMClassNameGenerator('select-input');


    return (
        <div className={classNames.block()}>
            <div className={classNames.element("title")}>{props.title}</div>
            <div className={classNames.element("input-wrapper")}>
                <div className={classNames.element("icon")}>{props.icon}</div>
                <select 
                    className={classNames.element("input")} 
                    defaultValue={props.selected}
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
