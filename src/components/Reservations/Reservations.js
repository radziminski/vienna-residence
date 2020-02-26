import React, { Component } from 'react';

import BEMClassNameGenerator from '../../BEMClassNameGenerator';

import ReservationsStartForm from './ReservationsStartForm';

export class Reservations extends Component {
    classNames = new BEMClassNameGenerator('reservations');

    state = {
        reservationStep: 1,
    }

    nextStep = () => {
        let currentStep = this.state.reservationStep;
        currentStep++;
        console.log(currentStep);
        this.setState({reservationStep: currentStep});
    }

    prevStep = () => {
        let currentStep = this.state.reservationStep;
        currentStep--;
        this.setState({reservationStep: currentStep});
    }

    render() {
        let subTitle = null;
        let content = null;
        switch (this.state.reservationStep) {
            case 1: 
                subTitle = 'Please fill out information below:';
                content = (
                        <div className={this.classNames.element("form-wrapper")}>
                            <ReservationsStartForm
                                onClick={this.nextStep}
                                adultsNum={this.props.adultsNum}
                                childrenNum={this.props.childrenNum}
                                checkIn={this.props.checkIn}
                                checkOut={this.props.checkOut}
                            />
                        </div>)
                break;

            case 2:
                subTitle = 'Choose prefered room types:';
                break;
            
            case 3:
                subTitle = 'Fill in your contact information';
                break;

            case 4:
                subTitle = 'Summary';
                break;

            default:
                break;
        }



        return (
            <div className={this.classNames.block()}>
                <h2 className={this.classNames.element("title")}>Reservations</h2>
                <div className={this.classNames.element("steps")}>
                    <button className={this.classNames.elementWithModifiers("step", "active")}>1. Check Availability</button>
                    <button className={this.classNames.element("step")}>2. Choose Rooms</button>
                    <button className={this.classNames.element("step")}>3. Choose Features</button>
                    <button className={this.classNames.element("step")}>4. Summary</button>
                </div>

                <div className={this.classNames.element("sub-title")}>{subTitle}</div>
                {content}
                
            </div>
        )
    }
}

export default Reservations;
