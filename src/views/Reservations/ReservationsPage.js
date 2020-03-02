import React from 'react';
import Reservations from '../../components/Reservations/Reservations';
import { useLocation } from 'react-router-dom';
//import ReservationsHeader from './ReservationsHeader';
const ReservationsPage = () => {

    let queryParams = new URLSearchParams(useLocation().search);
    console.log(queryParams)
    return (
        <header className="reservations-header">
            {/* <div className="reservations-header__logo-wrapper"><LogoInline /></div> */}
            <div className="reservations-header__content-wrapper">
                <Reservations 
                    queryParams={queryParams}
                />
            </div>
        </header>
    )
}

export default ReservationsPage
