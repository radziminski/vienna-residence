import React, { Component } from 'react';

import { MdArrowDownward } from 'react-icons/md';
import { Link as ScrollLink} from 'react-scroll';

export default class SpaHeader extends Component {

    onArrowClickedHandler = () => {
        window.scrollTo(0, window.innerHeight / 1.5);
    }

    render() {
        return (
            <header className="discover-header discover-header--spa">
            <div className="discover-header__hero-wrapper">
                <h1 className="discover-header__hero-big">Discover Spa & Wellness</h1><br />
                <h2 className="discover-header__hero-small">in Vienna Residence</h2>
            </div>
                <ScrollLink
                    to="section-about"
                    smooth
                    offset={-200}
                    duration={400}>
                        <MdArrowDownward className="arrow-down arrow-down--white"/>
                </ScrollLink>
            </header>
        )
    }
}
