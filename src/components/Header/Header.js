import React, { Component } from 'react';
import HeaderBg from '../../img/header-bg.jpg';
import { MdArrowDownward } from 'react-icons/md';

export default class Header extends Component {

    onArrowClickedHandler = () => {
        window.scrollTo(0, window.innerHeight / 1.5);
    }

    render() {
        return (
            <header className="header">
                <div className="header__text-box">
                    <h1 className="header__hero-big">Vienna Residence</h1>
                    <h2 className="header__hero-small">Experiance breath-taking beauty and magnificance of north tirol mountains in the best apartmenets in the region</h2>
                    <a href="index.html" className="btn btn-full">reserve now &rarr;</a>
                </div>
                <div className="header__bg-box"><img src={HeaderBg} className="header__bg" alt="header background" /></div>
                <MdArrowDownward className="header__arrow" onClick={this.onArrowClickedHandler}/>
            </header>
        )
    }
}
