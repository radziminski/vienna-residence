import React, { Component } from 'react';
import { IoIosCalendar, IoMdPerson } from 'react-icons/io';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import Calendar from 'react-calendar';

class ReservationsStart extends Component {

    state = {
        showCalendar: false,
        todayDate: new Date(),
        calendarDate: null,
        adultsNum: 2,
        childrenNum: 0,
    }

    toggleCalendar = () => {
        if (this.state.showCalendar) this.setState({showCalendar: false});
        else this.setState({showCalendar: true});
    }

    closeCalendar = () => {
        this.setState({showCalendar: false});
    }

    onCalendarChangeHandler = date => {
        this.setState({calendarDate: date});
    }

    addAdultHandler = () => {
        const newAdultsNum = this.state.adultsNum + 1;
        if (newAdultsNum <= 15)
            this.setState({adultsNum: newAdultsNum});
    }

    removeAdultHandler = () => {
        const newAdultsNum = this.state.adultsNum - 1;
        if (newAdultsNum > 0)
            this.setState({adultsNum: newAdultsNum});
    }

    addChildHandler = () => {
        const newChildsNum = this.state.childrenNum + 1;
        if (newChildsNum <= 15)
            this.setState({childrenNum: newChildsNum});
    }

    removeChildHandler = () => {
        const newChildsNum = this.state.childrenNum - 1;
        if (newChildsNum >= 0)
            this.setState({childrenNum: newChildsNum});
    }

    render() {
        let calendar = null;
        if (this.state.showCalendar) calendar = (
            <Calendar
                selectRange
                className="reservations-start__calendar"
                locale="en"
                minDate={new Date()}
                onChange={this.onCalendarChangeHandler}
                calue={this.state.calendarDate}
            />
        );

        const adultPlusIconStyleClass = this.state.adultsNum < 15 ? 
            'reservations-start__icon-wrapper' : 'reservations-start__icon-wrapper reservations-start__icon-wrapper--disabled';
        const adultMinusIconStyleClass = this.state.adultsNum > 1 ? 
            'reservations-start__icon-wrapper' : 'reservations-start__icon-wrapper reservations-start__icon-wrapper--disabled';
        const childPlusIconStyleClass = this.state.childrenNum < 15 ? 
            'reservations-start__icon-wrapper' : 'reservations-start__icon-wrapper reservations-start__icon-wrapper--disabled';
        const childMinusIconStyleClass = this.state.childrenNum > 0 ? 
            'reservations-start__icon-wrapper' : 'reservations-start__icon-wrapper reservations-start__icon-wrapper--disabled';

        return (
            <div className="reservations-start" >
                <div className="reservations-start__check-box" onClick={this.toggleCalendar}>
                    <IoIosCalendar className="reservations-start__check-icon"/>
                    <div className="reservations-start__check reservations-start__check--break">
                        {this.state.calendarDate ? this.state.calendarDate[0].toLocaleDateString() : 'Check-in'}</div>
                    <div className="reservations-start__check">
                        {this.state.calendarDate ? this.state.calendarDate[1].toLocaleDateString() : 'Check-out'}
                    </div>
                </div>
                {calendar}
                <div className="reservations-start__info-box">
                    <div className="reservations-start__adults">
                        <IoMdPerson className="reservations-start__icon"/>
                        &emsp;{this.state.adultsNum} {this.state.adultsNum === 1 ? ('adult') : 'adults'} 
                        <div className={adultMinusIconStyleClass} onClick={this.removeAdultHandler}><FiMinusCircle className="reservations-start__icon-small"/></div>
                        <div className={adultPlusIconStyleClass} onClick={this.addAdultHandler}><FiPlusCircle className="reservations-start__icon-small"/></div>
                        |&emsp;{this.state.childrenNum} {this.state.childrenNum === 1 ? 'child' : 'children'}
                        <div className={childMinusIconStyleClass} onClick={this.removeChildHandler}><FiMinusCircle className="reservations-start__icon-small"/></div>
                        <div className={childPlusIconStyleClass} onClick={this.addChildHandler}><FiPlusCircle className="reservations-start__icon-small"/></div>
                    </div>
                </div>
                <div className="reservations-start__options-box">

                </div>
                <button className="reservations-start__btn">Check Availability</button>
            </div>
        );
    }
}

export default ReservationsStart;
