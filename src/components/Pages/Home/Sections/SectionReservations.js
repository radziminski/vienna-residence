import React, { Component } from 'react';
import Linker from '../../../Layout/Linker';
import { colors } from '../../../../data';
import ReservationsStart from '../../../Reservations/ReservationsStart';

class SectionReservations extends Component {

    render() {
        return (
            <section className="section-reservations section--grey">
                <Linker color={colors.primaryDarkSuper} />
                <h1 className="section-title">Reservations</h1>
                <h2 className="section-reservations__subtitle">Reserve your dream vacations right now!</h2>
                <p className="section-reservations__desc">Use following reservations form to check availability of our apartements and to reserve
                your dream vacations...</p>
                <ReservationsStart />
            </section>
        )
    }
}

export default SectionReservations;
