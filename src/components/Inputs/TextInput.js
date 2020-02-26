import React from 'react';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

export const TextInput = props => {
    const classNames = new BEMClassNameGenerator('text-input');


    return (
        <div className={classNames.block()}>
            <div className={classNames.element("title")}>{props.title}</div>
            <div className={classNames.element("input-wrapper")}>
                <div className={classNames.element("icon")}>{props.icon}</div>
                <input className={classNames.element("input")} type="text" />
            </div>
        </div>
    )
}
