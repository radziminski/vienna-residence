import React, { Component } from 'react';
import Button from '../../Button/Button';

export class Reservations extends Component {
    render() {
        return (
            <div className="reservations">
                <h2 className="reservations__title">Reservations</h2>
                <div className="reservations__steps">
                    <button className="reservations__step reservations__step--active">1. Check Availability</button>
                    <button className="reservations__step">2. Choose Rooms</button>
                    <button className="reservations__step">3. Choose Features</button>
                    <button className="reservations__step">4. Summary</button>
                </div>
                <div className="reservations__form">
                    <div className="reservations__dates-wrapper">
                        <div className="reservations__date">Check In</div>
                        <div className="reservations__date">Check Out</div>
                    </div>
                    <div className="reservations__btn"><Button type='full' width='100%'>Check Availability</Button></div>
                </div>
                
            </div>
        )
    }
}

export default Reservations;
