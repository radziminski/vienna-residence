import React from 'react';
import { NavigationItem } from './NavigationItem';

export const Navigation = (props) => {
    return (
        
        <div className={props.parrentClassNames.element('navigation')}>
            <ul className={props.parrentClassNames.element('navigation-list')}>
                <NavigationItem parrentClassNames={props.parrentClassNames}>home</NavigationItem>
                <NavigationItem parrentClassNames={props.parrentClassNames}>about</NavigationItem>
                <NavigationItem parrentClassNames={props.parrentClassNames}>apartments</NavigationItem>
                <NavigationItem parrentClassNames={props.parrentClassNames}>reservation</NavigationItem>
            </ul>
        </div>
    )
}
