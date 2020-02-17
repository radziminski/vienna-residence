import React, { Component } from 'react';

import { MdArrowDownward } from 'react-icons/md';
import { Link as ScrollLink} from 'react-scroll';
import ReservationsStart from '../../Reservations/ReservationsStart';

export default class ReservationsHeader extends Component {

    onArrowClickedHandler = () => {
        window.scrollTo(0, window.innerHeight / 1.5);
    }

    render() {
        return (
            <header className="reservations-header">
                <div className="reservations-header__content-wrapper">
                    <ReservationsStart />
                </div>
            </header>
        )
    }
}
