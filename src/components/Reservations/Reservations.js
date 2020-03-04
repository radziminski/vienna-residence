import React, { Component } from 'react';

import BEMClassNameGenerator from '../../BEMClassNameGenerator';

import ReservationInfoStep from './ReservationInfoStep';
import RoomChoiceStep from './RoomChoiceStep';

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
            adultsNum: 2,
            childrenNum: 0,
            babiesNum: 0,
        },
        rooms: {},
        features: {
            earlyCheckIn: false,
            lateCheckOut: false,
            spaEntrance: false,
        }
    }

    componentDidMount() {
        let dates = {};
        let people = {};

        if (this.props.queryParams.has('adults-num')) {
            people = {
                ...people,
                adultsNum: parseInt(this.props.queryParams.get('adults-num'))
            }
        }
        if (this.props.queryParams.has('children-num')) {
            people = {
                ...people,
                childrenNum: parseInt(this.props.queryParams.get('children-num'))
            }
        }
        if (this.props.queryParams.has('check-in')) {
            let checkInDate;
            checkInDate = this.dateStringToDateObj(this.props.queryParams.get('check-in'));
            dates = {
                ...dates,
                checkInDate: checkInDate
            }
        }
        if (this.props.queryParams.has('check-out')) {
            let checkOutDate;
            checkOutDate = this.dateStringToDateObj(this.props.queryParams.get('check-out'));
            dates = {
                ...dates,
                checkOutDate: checkOutDate,
            }
        }

        this.setState({
            dates: {
                ...this.state.dates,
                ...dates
            },
            people: {
                ...this.state.people,
                ...people
            }
        })
        console.log('component did mount')
    }

    dateStringToDateObj(dateString) {
        const firstDotIndex = dateString.indexOf('.')
        const day = dateString.slice(0, firstDotIndex);
        const monthAndYear = dateString.slice(firstDotIndex + 1, dateString.length);
        const month = monthAndYear.slice(0, 2);
        const year = monthAndYear.slice(3, dateString.length);
        
        return this.dayMonthYearToDateObj(day, month - 1, year);
    }

    dayMonthYearToDateObj(day, month, year) {
        const date = new Date();
        date.setHours(0,0,0,0);
        date.setDate(day);
        date.setMonth(month);
        date.setFullYear(year);
        return date;
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
        });
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
                            <ReservationInfoStep
                                dates={this.state.dates}
                                people={this.state.people}
                                nextStep={this.onStepOneFinishedHandler}
                            />
                        </div>)
                break;

            case 2:
                subTitle = 'Choose prefered room types:';
                content = (
                    <div className={this.classNames.element("form-wrapper")}>
                        <RoomChoiceStep 
                            dates={this.state.dates}
                            people={this.state.people}
                        />
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
