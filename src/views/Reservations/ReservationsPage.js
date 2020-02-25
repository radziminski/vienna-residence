import React from 'react';
import Reservations from '../../components/Reservations/Reservations';
//import ReservationsHeader from './ReservationsHeader';

const ReservationsPage = () => {
    return (
        <header className="reservations-header">
            {/* <div className="reservations-header__logo-wrapper"><LogoInline /></div> */}
            <div className="reservations-header__content-wrapper">
                <Reservations />
            </div>
        </header>
    )
}

export default ReservationsPage
