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
                className="reservations__calendar"
                locale="en"
                minDate={new Date()}
                onChange={this.onCalendarChangeHandler}
                calue={this.state.calendarDate}
            />
        );

        const adultPlusIconStyleClass = this.state.adultsNum < 15 ? 
            'reservations__icon-wrapper' : 'reservations__icon-wrapper reservations__icon-wrapper--disabled';
        const adultMinusIconStyleClass = this.state.adultsNum > 1 ? 
            'reservations__icon-wrapper' : 'reservations__icon-wrapper reservations__icon-wrapper--disabled';
        const childPlusIconStyleClass = this.state.childrenNum < 15 ? 
            'reservations__icon-wrapper' : 'reservations__icon-wrapper reservations__icon-wrapper--disabled';
        const childMinusIconStyleClass = this.state.childrenNum > 0 ? 
            'reservations__icon-wrapper' : 'reservations__icon-wrapper reservations__icon-wrapper--disabled';

        return (
            <div className="reservations" >
                <div className="reservations__check-box" onClick={this.toggleCalendar}>
                    <IoIosCalendar className="reservations__check-icon"/>
                    <div className="reservations__check reservations__check--break">
                        {this.state.calendarDate ? this.state.calendarDate[0].toLocaleDateString() : 'Check-in'}</div>
                    <div className="reservations__check">
                        {this.state.calendarDate ? this.state.calendarDate[1].toLocaleDateString() : 'Check-out'}
                    </div>
                </div>
                {calendar}
                <div className="reservations__info-box">
                    <div className="reservations__adults">
                        <IoMdPerson className="reservations__icon"/>
                        &emsp;{this.state.adultsNum} {this.state.adultsNum === 1 ? ('adult') : 'adults'} 
                        <div className={adultMinusIconStyleClass} onClick={this.removeAdultHandler}><FiMinusCircle className="reservations__icon-small"/></div>
                        <div className={adultPlusIconStyleClass} onClick={this.addAdultHandler}><FiPlusCircle className="reservations__icon-small"/></div>
                        |&emsp;{this.state.childrenNum} {this.state.childrenNum === 1 ? 'child' : 'children'}
                        <div className={childMinusIconStyleClass} onClick={this.removeChildHandler}><FiMinusCircle className="reservations__icon-small"/></div>
                        <div className={childPlusIconStyleClass} onClick={this.addChildHandler}><FiPlusCircle className="reservations__icon-small"/></div>
                    </div>
                </div>
                <div className="reservations__options-box">

                </div>
                <button className="reservations__btn">Check Availability</button>
            </div>
        );
    }
}

export default ReservationsStart;
