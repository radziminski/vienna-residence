import React from 'react';
import Reservations from '../../components/Reservations/Reservations';
import { useParams } from 'react-router-dom';
//import ReservationsHeader from './ReservationsHeader';
const ReservationsPage = () => {

    let { adultsNum, childrenNum, checkIn, checkOut } = useParams();
    console.log(adultsNum)
    console.log(childrenNum)
    console.log(checkIn)
    console.log(checkOut)
    return (
        <header className="reservations-header">
            {/* <div className="reservations-header__logo-wrapper"><LogoInline /></div> */}
            <div className="reservations-header__content-wrapper">
                <Reservations 
                    adultsNum={adultsNum}
                    childrenNum={childrenNum}
                    checkIn={checkIn}
                    checkOut={checkOut}
                />
            </div>
        </header>
    )
}

export default ReservationsPage
