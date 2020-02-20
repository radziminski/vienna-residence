import React from 'react';
import LogoInline from '../../Layout/Logo/LogoInline';
import ReservationsStart from '../../Reservations/ReservationsStart';
//import ReservationsHeader from './ReservationsHeader';

const Reservations = () => {
    return (
        <header className="reservations-header">
            <div className="reservations-header__logo-wrapper"><LogoInline /></div>
            <div className="reservations-header__content-wrapper">
                <h2 className="reservations-header__title">Vienna Residence - Innsbruck, Tirol, Italy</h2>
                <ReservationsStart />
            </div>
        </header>
    )
}

export default Reservations
