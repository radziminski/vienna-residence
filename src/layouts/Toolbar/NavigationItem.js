import React from 'react';

export const NavigationItem = (props) => {
    return (
        <li className={props.parrentClassNames.element('navigation-item')}>
            {props.children}
        </li>
    )
}
