import React, { Component } from 'react';
import HeaderBg from '../../../../img/header-bg.jpg';
import { MdArrowDownward } from 'react-icons/md';
import { Link as ScrollLink} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import Button from '../../../Button/Button';

export default class Header extends Component {

    onArrowClickedHandler = () => {
        window.scrollTo(0, window.innerHeight / 1.5);
    }

    render() {
        return (
            <header className="header">
                <div className="header__bg-box"><img src={HeaderBg} className="header__bg" alt="header background" /></div>
                <div className="header__text-box">
                    <h1 className="header__hero-big">Vienna Residence</h1>
                    <h2 className="header__hero-small">Experiance breath-taking beauty and magnificance of north tirol mountains in the best apartmenets in the region</h2>
                    <RouterLink to={process.env.PUBLIC_URL + "/reservations"}><Button type='full'>reserve now &rarr;</Button></RouterLink>
                </div>
                <ScrollLink
                    to="section-about"
                    smooth
                    offset={-200}
                    duration={400}>
                        <MdArrowDownward className="arrow-down"/>
                </ScrollLink>
            </header>
        )
    }
}
