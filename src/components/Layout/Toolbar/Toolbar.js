import React, { Component } from 'react';
import { Navigation } from './Navigation';
import LogoInline from '../Logo/LogoInline';
import { Link } from 'react-router-dom';
import { colors } from '../../../data';

export default class Toolbar extends Component {
    
    state = {
        sticked: false,
    }

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
            <div className={this.state.sticked ? "toolbar toolbar--sticked" : "toolbar"}>
                <Link style={{color: colors.white, textDecoration: 'none'}} to="/home"><LogoInline parrentClassName={'toolbar__'}/></Link>
                <Navigation parrentClassName={'toolbar__'}/>
            </div>
        )
    }
}
