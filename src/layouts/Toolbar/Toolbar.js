import React, { Component } from 'react';
import { Navigation } from './Navigation';
import LogoInline from '../Logo/LogoInline';
import { Link } from 'react-router-dom';
import { colors } from '../../data/data';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

export default class Toolbar extends Component {
    
    state = {
        sticked: false,
    }

    classNames = new BEMClassNameGenerator('toolbar');

    componentDidMount() {
        window.addEventListener('scroll', this.onScrollHandler);
    }
    
    onScrollHandler = () => {
        const scrollOffset = window.scrollY;
        if (scrollOffset > 0) {
            this.setState({
                sticked: true
            })
        } else {
            this.setState({
                sticked: false
            })
        }
    }

    render() {
        return (
            <div className={this.state.sticked ? this.classNames.blockWithModifiers('sticked') : this.classNames.block()}>
                <Link style={{color: colors.white, textDecoration: 'none'}} to={process.env.PUBLIC_URL + "/home"}><LogoInline parrentClassNames={this.classNames}/></Link>
                <Navigation parrentClassNames={this.classNames}/>
            </div>
        )
    }
}
