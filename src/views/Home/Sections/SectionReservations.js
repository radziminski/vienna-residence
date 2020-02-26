import React, { Component } from 'react';
import Linker from '../../../layouts/Linker';
import ReservationsStart from '../../../components/Reservations/ReservationsStart';
import Section from '../../../layouts/Section/Section';
import SectionTitle from '../../../components/Typography/SectionTitle';

class SectionReservations extends Component {

    render() {
        return (
            <Section name="section-reservations" type="grey">
                <Linker color={this.props.linkerColor} />
                <SectionTitle>Reservations</SectionTitle>
                
                <h2 className="section-reservations__subtitle">Reserve your dream vacations right now!</h2>
                <p className="section-reservations__desc">Use following reservations form to check availability of our apartements and to reserve
                your dream vacations...</p>
                <ReservationsStart />
            </Section>
        )
    }
}

export default SectionReservations;
