import React, { Component } from 'react';

import { MdArrowDownward } from 'react-icons/md';
import { Link as ScrollLink} from 'react-scroll';

export class SportHeader extends Component {
    onArrowClickedHandler = () => {
        window.scrollTo(0, window.innerHeight / 1.5);
    }

    render() {
        return (
            <header className="discover-header discover-header--sport">
            <div className="discover-header__hero-wrapper">
                <h1 className="discover-header__hero-big">Experiance Skiing at Tirol</h1><br />
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

export default SportHeader