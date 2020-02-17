import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { GiMountaintop } from 'react-icons/gi';

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
                <h1 className="toolbar__logo">Vienna <GiMountaintop className="toolbar__logo-icon"/> Residence</h1>
                <Navigation parrentClassName={'toolbar'}/>
            </div>
        )
    }
}
