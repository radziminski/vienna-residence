import React from 'react';
import { NavigationItem } from './NavigationItem';

export const Navigation = (props) => {
    return (
        
        <div className={props.parrentClassName + '__navigation'}>
            <ul className={props.parrentClassName + '__navigation-list'}>
                <NavigationItem parrentClassName={props.parrentClassName}>home</NavigationItem>
                <NavigationItem parrentClassName={props.parrentClassName}>about</NavigationItem>
                <NavigationItem parrentClassName={props.parrentClassName}>apartments</NavigationItem>
                <NavigationItem parrentClassName={props.parrentClassName}>reservation</NavigationItem>
            </ul>
        </div>
    )
}
