import React, { Component } from 'react';

import BEMClassNameGenerator from '../../BEMClassNameGenerator';

import ReservationsStartForm from './ReservationsStartForm';
import ReservationsRoomChoice from './ReservationsRoomChoice';

export class Reservations extends Component {
    classNames = new BEMClassNameGenerator('reservations');

    state = {
        reservationStep: 1,
        dates: {
            checkInDate: null,
            checkOutDate: null,
            hotelNights: 0,
        },
        people: {
            adultsNum: 0,
            childrenNum: 0,
            babiesNum: 0,
        }
    }

    onStepOneFinishedHandler = (formData) => {
        this.setState({
            reservationStep: 2,
            dates: {
                checkInDate: formData.checkInDate,
                checkOutDate: formData.checkOutDate,
                hotelNights: formData.hotelNights
            }, 
            people: {
                adultsNum: formData.adultsNum,
                childrenNum: formData.childrenNum,
                babiesNum: formData.babiesNum,
         }
        })
    }

    nextStep = () => {
        let currentStep = this.state.reservationStep;
        currentStep++;
        this.setState({reservationStep: currentStep});
    }

    prevStep = () => {
        let currentStep = this.state.reservationStep;
        currentStep--;
        this.setState({reservationStep: currentStep});
    }

    stepChangedHandler = (step) => {
        if (this.state.reservationStep !== step) {
            this.setState({reservationStep: step});
        }
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
                                queryParams={this.props.queryParams}
                                nextStep={this.onStepOneFinishedHandler}
                            />
                        </div>)
                break;

            case 2:
                subTitle = 'Choose prefered room types:';
                content = (
                    <div className={this.classNames.element("form-wrapper")}>
                        <ReservationsRoomChoice />
                    </div>)
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
                    <button className={this.classNames.elementWithModifiers("step", this.state.reservationStep === 1 ? "active" : "")}
                        onClick={() => this.stepChangedHandler(1)}
                    >
                        1. Check Availability
                    </button>
                    <button className={this.classNames.elementWithModifiers("step", this.state.reservationStep === 2 ? "active" : "")}>2. Choose Rooms</button>
                    <button className={this.classNames.elementWithModifiers("step", this.state.reservationStep === 3 ? "active" : "")}>3. Choose Features</button>
                    <button className={this.classNames.elementWithModifiers("step", this.state.reservationStep === 4 ? "active" : "")}>4. Summary</button>
                </div>

                <div className={this.classNames.element("sub-title")}>{subTitle}</div>
                {content}
                
            </div>
        )
    }
}

export default Reservations;
