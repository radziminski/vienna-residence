import React, { Component } from 'react';
import { IoIosCalendar, IoMdPerson } from 'react-icons/io';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import Calendar from 'react-calendar';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';
import { Link } from 'react-router-dom';
import ToggleCheckbox from '../Inputs/ToggleCheckbox';

class ReservationsStarter extends Component {
    state = {
        showCalendar: false,
        todayDate: new Date(),
        calendarDate: null,
        adultsNum: 2,
        childrenNum: 0,
        premium: false
    };

    classNames = new BEMClassNameGenerator('reservations-start');

    toggleCalendar = () => {
        if (this.state.showCalendar) this.setState({ showCalendar: false });
        else this.setState({ showCalendar: true });
    };

    closeCalendar = () => {
        this.setState({ showCalendar: false });
    };

    onCalendarChangeHandler = date => {
        this.setState({ calendarDate: date });
    };

    addAdultHandler = () => {
        const newAdultsNum = this.state.adultsNum + 1;
        if (newAdultsNum <= 15) this.setState({ adultsNum: newAdultsNum });
    };

    removeAdultHandler = () => {
        const newAdultsNum = this.state.adultsNum - 1;
        if (newAdultsNum > 0) this.setState({ adultsNum: newAdultsNum });
    };

    addChildHandler = () => {
        const newChildsNum = this.state.childrenNum + 1;
        if (newChildsNum <= 15) this.setState({ childrenNum: newChildsNum });
    };

    removeChildHandler = () => {
        const newChildsNum = this.state.childrenNum - 1;
        if (newChildsNum >= 0) this.setState({ childrenNum: newChildsNum });
    };

    onChangeToggle = event => {
        this.setState({ premium: event.target.checked });
    };

    render() {
        let calendar = null;
        if (this.state.showCalendar)
            calendar = (
                <Calendar
                    selectRange
                    className={this.classNames.element('calendar')}
                    locale="en"
                    minDate={new Date()}
                    onChange={this.onCalendarChangeHandler}
                    calue={this.state.calendarDate}
                />
            );

        const adultPlusIconStyleClass =
            this.state.adultsNum < 15
                ? this.classNames.element('icon-wrapper')
                : this.classNames.elementWithModifiers('icon-wrapper', 'disabled');
        const adultMinusIconStyleClass =
            this.state.adultsNum > 1
                ? this.classNames.element('icon-wrapper')
                : this.classNames.elementWithModifiers('icon-wrapper', 'disabled');
        const childPlusIconStyleClass =
            this.state.childrenNum < 15
                ? this.classNames.element('icon-wrapper')
                : this.classNames.elementWithModifiers('icon-wrapper', 'disabled');
        const childMinusIconStyleClass =
            this.state.childrenNum > 0
                ? this.classNames.element('icon-wrapper')
                : this.classNames.elementWithModifiers('icon-wrapper', 'disabled');

        let reservationsLink =
            process.env.PUBLIC_URL +
            `/reservations/?adults-num=${this.state.adultsNum}&children-num=${this.state.childrenNum}`;
        if (this.state.calendarDate) {
            reservationsLink += '&check-in=' + this.state.calendarDate[0].toLocaleDateString();
            reservationsLink += '&check-out=' + this.state.calendarDate[1].toLocaleDateString();
        }
        reservationsLink += '&premium=' + this.state.premium;

        return (
            <div className={this.classNames.block()}>
                <div className={this.classNames.element('check-box')} onClick={this.toggleCalendar}>
                    <IoIosCalendar className={this.classNames.element('check-icon')} />
                    <div className={this.classNames.elementWithModifiers('check', 'break')}>
                        {this.state.calendarDate ? this.state.calendarDate[0].toLocaleDateString() : 'Check-in'}
                    </div>
                    <div className={this.classNames.element('check')}>
                        {this.state.calendarDate ? this.state.calendarDate[1].toLocaleDateString() : 'Check-out'}
                    </div>
                </div>
                {calendar}
                <div className={this.classNames.element('info-box')}>
                    <div className={this.classNames.element('adults')}>
                        <IoMdPerson className={this.classNames.element('icon')} />
                        &emsp;{this.state.adultsNum} {this.state.adultsNum === 1 ? 'adult' : 'adults'}
                        <div className={adultMinusIconStyleClass} onClick={this.removeAdultHandler}>
                            <FiMinusCircle className={this.classNames.element('icon-small')} />
                        </div>
                        <div className={adultPlusIconStyleClass} onClick={this.addAdultHandler}>
                            <FiPlusCircle className={this.classNames.element('icon-small')} />
                        </div>
                        |&emsp;{this.state.childrenNum} {this.state.childrenNum === 1 ? 'child' : 'children'}
                        <div className={childMinusIconStyleClass} onClick={this.removeChildHandler}>
                            <FiMinusCircle className={this.classNames.element('icon-small')} />
                        </div>
                        <div className={childPlusIconStyleClass} onClick={this.addChildHandler}>
                            <FiPlusCircle className={this.classNames.element('icon-small')} />
                        </div>
                    </div>
                </div>
                <div className={this.classNames.element('options-box')}>
                    <div className={this.classNames.element('options-hover')}>
                        <ToggleCheckbox onChange={this.onChangeToggle} />
                        <div className={this.classNames.element('options-label')}>Only Premium Experiance</div>
                    </div>
                </div>
                <Link to={reservationsLink} className={this.classNames.element('link')}>
                    <button className={this.classNames.element('btn')}>Check Availability</button>
                </Link>
            </div>
        );
    }
}

export default ReservationsStarter;
