import React from 'react'

export const NavigationItem = (props) => {
    return (
        <li className={props.parrentClassName + 'navigation-item'}>
            {props.children}
        </li>
    )
}
