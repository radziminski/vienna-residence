import React, { Component } from 'react'
import BEMClassNameGenerator from '../../BEMClassNameGenerator'
import Button from '../Button/Button';
import { IoIosCalendar, IoMdPerson } from 'react-icons/io';
import { FaArrowAltCircleRight, FaChild } from 'react-icons/fa';
import { MdAttachMoney, MdChildFriendly } from 'react-icons/md';
import { SelectInput } from '../Inputs/SelectInput';
import { TextInput } from '../Inputs/TextInput';
import Calendar from 'react-calendar';

export class ReservationsStartForm extends Component {
    classNames = new BEMClassNameGenerator('reservations-form');

    state = {
        showCheckInCalendar: false,
        showCheckOutCalendar: false,
        checkInDate: null,
        checkOutDate: null,
        hotelNights: 0,
        adultsNum: 2,
        childrenNum: 0,
        babiesNum: 0,
        premium: false,
        
    }

    componentDidMount() {
        console.log('Component did mount')
        console.log(this.props.adultsNum)
        console.log(this.props.childrenNum)
        console.log(typeof this.props.checkIn)
        if (this.props.adultsNum) {
            this.setState({adultsNum: this.props.adultsNum});
        }
        if (this.props.childrenNum) {
            this.setState({adultsNum: this.props.childrenNum});
        }
        if (this.props.checkIn) {
            let checkInDate;
            checkInDate = this.dateStringToDateObj(this.props.checkIn);
            this.setState({
                checkInDate: checkInDate,
            });
        }
        if (this.props.checkOut) {
            let checkOutDate;
            checkOutDate = this.dateStringToDateObj(this.props.checkOut);
            this.setState({
                checkOutDate: checkOutDate,
            });
        }
    }

    componentDidUpdate() {
        if (this.state.checkInDate && this.state.checkOutDate) {
            if (this.state.checkInDate >= this.state.checkOutDate) {
                const minDate = new Date(this.state.checkInDate.getTime());
                minDate.setDate(minDate.getDate() + 1);
                this.setState({checkOutDate: minDate});
            }
        }
    }

    setCheckInDate(date) {
        this.setState({
            checkInDate: date
        });
    }

    setCheckOutDate(date) {
        this.setState({
            checkOutDate: date
        });
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
        date.setDate(day);
        date.setMonth(month);
        date.setFullYear(year);
        return date;
    }

    onAdultsNumChangedHandler = (value) => {
        this.setState({adultsNum: parseInt(value)});
    }

    onChildrenNumChangedHandler = (value) => {
        this.setState({childrenNum: parseInt(value)});
    }

    onBabiesNumChangedHandler = (value) => {
        this.setState({babiesNum: parseInt(value)});
    }

    onCheckInChangeHandler = date => {
        this.setState({
            checkInDate: date,
            showCheckInCalendar: false
        })
    }

    onCheckOutChangeHandler = date => {
        this.setState({
            checkOutDate: date,
            showCheckOutCalendar: false
        })
    }

    toggleyCalendar = (calendarType) => {
        if (calendarType === 'checkIn') {
            const currentShowCalendar = this.state.showCheckInCalendar;
            this.setState({showCheckInCalendar: !currentShowCalendar});
        } else {
            const currentShowCalendar = this.state.showCheckOutCalendar;
            this.setState({showCheckOutCalendar: !currentShowCalendar});
        }
    }

    closeCheckInCalendar() {
        this.setState({showCheckInCalendar: false});
    }
    closeCheckOutCalendar() {
        this.setState({showCheckOutCalendar: false});
    }

    nextDay(date) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 1);
        return newDate;
    } 


    render() {
        const today = new Date();
 
        let summary = `${this.state.hotelNights} Hotel Nights: `;
        summary += ` ${this.state.adultsNum} Adult${this.state.adultsNum !== 1 ? `s` : ``}`;
        
        if (this.state.childrenNum > 0) 
            (summary += `, ${this.state.childrenNum} Child${this.state.childrenNum !== 1 ? `ren` : ``}`);
        if (this.state.babiesNum > 0) 
            (summary += `, ${this.state.babiesNum} Bab${this.state.babiesNum !== 1 ? `ies` : `y`}`);


        let checkInCalendar = (
            <Calendar 
                className={this.classNames.element("calendar")}
                locale="en"
                minDate={today}
                onChange={this.onCheckInChangeHandler}
            />
        );
        if (this.state.checkInDate) {
            checkInCalendar = (
                <Calendar 
                    className={this.classNames.element("calendar")}
                    locale="en"
                    minDate={today}
                    onChange={this.onCheckInChangeHandler}
                    value={this.state.checkInDate}
                />
            );
        }
        let minDate = this.nextDay(today)
        let checkOutCalendar = (
            <Calendar 
                className={this.classNames.element("calendar")}
                locale="en"
                minDate={minDate}
                onChange={this.onCheckOutChangeHandler}
            />
        );
        if (this.state.checkOutDate) {
            minDate = this.state.checkInDate ? this.nextDay(this.state.checkInDate) : this.nextDay(today);
            checkOutCalendar = (
                <Calendar 
                    className={this.classNames.element("calendar")}
                    locale="en"
                    minDate={minDate}
                    onChange={this.onCheckOutChangeHandler}
                    value={this.state.checkOutDate}
                />
            )
        }


        return (
            <div className={this.classNames.block()}>
                    <div className={this.classNames.element("dates-wrapper")}>
                        <div className={this.classNames.element("date-wrapper")}>
                            <div className={this.classNames.element("date-label")}>
                                <FaArrowAltCircleRight className={this.classNames.element("icon")}/>
                                Check In:
                            </div>
                            <div className={this.classNames.element("date-input")}
                                onClick={() => this.toggleyCalendar('checkIn')}
                            >
                                <IoIosCalendar className={this.classNames.element("date-icon")}/>
                                {this.state.checkInDate ? this.state.checkInDate.toLocaleDateString() : ''}
                            </div>
                            {this.state.showCheckInCalendar ? checkInCalendar : null}
                        </div>

                        <div className={this.classNames.element("date-wrapper")}>
                            <div className={this.classNames.element("date-label")}>
                                <FaArrowAltCircleRight className={this.classNames.element("icon")}/>
                                Check Out:
                            </div>
                            <div className={this.classNames.element("date-input")} 
                                onClick={() => this.toggleyCalendar('checkOut')}
                            >
                                <IoIosCalendar className={this.classNames.element("date-icon")}/>
                                {this.state.checkOutDate ? this.state.checkOutDate.toLocaleDateString() : ''}
                            </div>
                            {this.state.showCheckOutCalendar ? checkOutCalendar : null}
                        </div>
                    </div>
                    <div className={this.classNames.element("people-wrapper")}>
                        <SelectInput 
                            selected={this.state.adultsNum} 
                            options={Array(15).fill().map((_, num) => 1 + num)} 
                            title={'Adults'} 
                            icon={<IoMdPerson />}
                            onChange={this.onAdultsNumChangedHandler}
                        />
                        <SelectInput 
                            selected={this.state.childrenNum} 
                            options={Array(15).fill().map((_, num) => num)} 
                            title={'Children'} 
                            icon={<FaChild />}
                            onChange={this.onChildrenNumChangedHandler}
                        />
                        <SelectInput 
                            options={Array(15).fill().map((_, num) => num)} 
                            title={'Babies'} 
                            icon={<MdChildFriendly />}
                            onChange={this.onBabiesNumChangedHandler}
                        />
                        <TextInput title={'Promo code'} icon={<MdAttachMoney />} />
                    </div>
                    <div className={this.classNames.element("summary")}>
                     <span style={{fontWeight: '400'}}>Summary:&ensp;</span> {summary}
                    </div>
                    <div className={this.classNames.element("btn")}><Button onClick={this.props.onClick} type='full' width='100%'>Check Availability</Button></div>
                </div>
        )
    }
}

export default ReservationsStartForm
