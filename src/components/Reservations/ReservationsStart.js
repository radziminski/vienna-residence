import React, { Component } from 'react';
import { IoIosCalendar } from 'react-icons/io';
import Calendar from 'react-calendar';

class ReservationsStart extends Component {

    state = {
        showCalendar: false,
        todayDate: new Date(),
        calendarDate: null,
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
                
                <div className="reservations__info">INFO</div>
                <button className="reservations__btn">Check Availability</button>
            </div>
        );
    }
}

export default ReservationsStart;
