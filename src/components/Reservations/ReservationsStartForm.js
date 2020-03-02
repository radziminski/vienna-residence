import React, { Component } from 'react'
import BEMClassNameGenerator from '../../BEMClassNameGenerator'
import Button from '../Button/Button';
import { IoIosCalendar, IoMdPerson } from 'react-icons/io';
import { FaArrowAltCircleRight, FaChild } from 'react-icons/fa';
import { MdAttachMoney, MdChildFriendly } from 'react-icons/md';
import SelectInput from '../Inputs/SelectInput';
import TextInput from '../Inputs/TextInput';
import Calendar from 'react-calendar';
import PopUpMsg from '../PopUpMsg/PopUpMsg';

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
        showCheckInMsg: false,
        showCheckOutMsg: false,
        
    }

    timeout = null;

    // Component Lifecycle

    componentDidMount() {
        console.log('Component did mount');
        if (this.props.queryParams.has('adults-num')) {
            this.setState({adultsNum: parseInt(this.props.queryParams.get('adults-num'))});
        }
        if (this.props.queryParams.has('children-num')) {
            this.setState({childrenNum: parseInt(this.props.queryParams.get('children-num'))});
        }
        if (this.props.queryParams.has('check-in')) {
            let checkInDate;
            checkInDate = this.dateStringToDateObj(this.props.queryParams.get('check-in'));
            this.setState({
                checkInDate: checkInDate,
            });
        }
        if (this.props.queryParams.has('check-out')) {
            let checkOutDate;
            checkOutDate = this.dateStringToDateObj(this.props.queryParams.get('check-out'));
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
            let dateDifference = new Date(this.state.checkOutDate - this.state.checkInDate);
            dateDifference = dateDifference.getDate() - 1;
            if (dateDifference !== this.state.hotelNights)
                this.setState({hotelNights: dateDifference});
        }
        console.log('Comp_Did_UPDT')
    }

    // Component methods

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
        date.setHours(0,0,0,0);
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
            showCheckInCalendar: false,
            showCheckOutCalendar: true
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

    onNextStepHandler = () => {
        ;
        if (!this.state.checkInDate && !this.state.showCheckInMsg) {
            this.setState({showCheckInMsg: true});
            this.timeout = setTimeout(() => {
                this.setState({showCheckInMsg: false})
            }, 3500);
        } else
        if (!this.state.checkOutDate && !this.state.showCheckOutMsg && this.state.checkInDate) {
            this.setState({showCheckOutMsg: true});
            if (this.timeout) clearTimeout(this.timeout);
            console.log(this.timeout)
            this.timeout = setTimeout(() => {
                this.setState({showCheckOutMsg: false})
            }, 3500)
        } else
        if (this.state.checkInDate && this.state.checkOutDate) {
            if (this.timeout) clearTimeout(this.timeout);
            this.props.nextStep({...this.state});
        }
    }


    render() {
        const today = new Date();
        let maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() + 1)
        today.setHours(0,0,0,0);
 
        let summary = `${this.state.hotelNights} Hotel Nights\t`;
        summary += `|\t${this.state.adultsNum} Adult${this.state.adultsNum !== 1 ? `s` : ``}\t`;

        if (this.state.childrenNum > 0) 
            (summary += `|\t${this.state.childrenNum} Child${this.state.childrenNum !== 1 ? `ren` : ``}\t`);
        if (this.state.babiesNum > 0) 
            (summary += `|\t${this.state.babiesNum} Bab${this.state.babiesNum !== 1 ? `ies` : `y`}\t`);

        summary = summary.split("\t").map((element, key) => (<span key={key}>{element}&ensp;</span>));


        let checkInCalendar = (
            <Calendar 
                className={this.classNames.element("calendar")}
                locale="en"
                minDate={today}
                maxDate={maxDate}
                onChange={this.onCheckInChangeHandler}
            />
        );
        if (this.state.checkInDate) {
            checkInCalendar = (
                <Calendar 
                    className={this.classNames.element("calendar")}
                    locale="en"
                    minDate={today}
                    maxDate={maxDate}
                    onChange={this.onCheckInChangeHandler}
                    value={this.state.checkInDate}
                />
            );

            // Max length of reservations can be 30 days
            maxDate = new Date(this.state.checkInDate);
            maxDate.setMonth(maxDate.getMonth() + 1);
            maxDate.setDate(maxDate.getDate() - 1); 
        }
        let minDate = this.state.checkInDate ? this.nextDay(this.state.checkInDate) : this.nextDay(today);
        let checkOutCalendar = (
            <Calendar 
                className={this.classNames.element("calendar")}
                locale="en"
                minDate={minDate}
                maxDate={maxDate}
                onChange={this.onCheckOutChangeHandler}
            />
        );
        if (this.state.checkOutDate) {
            
            checkOutCalendar = (
                <Calendar 
                    className={this.classNames.element("calendar")}
                    locale="en"
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={this.onCheckOutChangeHandler}
                    value={this.state.checkOutDate}
                />
            )
        }

        let checkInPopUp = this.state.showCheckInMsg ? <PopUpMsg >Fill this first</PopUpMsg> : null;
        let checkOutPopUp = this.state.showCheckOutMsg ? <PopUpMsg >Fill this first</PopUpMsg> : null;


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
                                {checkInPopUp}
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
                                {checkOutPopUp}
                            </div>

                            {this.state.showCheckOutCalendar ? checkOutCalendar : null}
                        </div>
                    </div>
                    <div className={this.classNames.element("people-wrapper")}>
                        <SelectInput 
                            defaultSelect={this.state.adultsNum} 
                            options={Array(15).fill().map((_, num) => 1 + num)} 
                            title={'Adults'} 
                            icon={<IoMdPerson />}
                            onChange={this.onAdultsNumChangedHandler}
                        />
                        <SelectInput 
                            defaultSelect={this.state.childrenNum} 
                            
                            options={Array(15).fill().map((_, num) => num)} 
                            title={'Children'} 
                            icon={<FaChild />}
                            onChange={this.onChildrenNumChangedHandler}
                        />
                        <SelectInput 
                            options={Array(15).fill().map((_, num) => num)} 
                            title={'Babies'} 
                            defaultSelect={this.state.babiesNum} 
                            icon={<MdChildFriendly />}
                            onChange={this.onBabiesNumChangedHandler}
                        />
                        <TextInput title={'Promo code'} icon={<MdAttachMoney />} />
                    </div>
                    <div className={this.classNames.element("summary")}>
                     <span style={{fontWeight: '400'}}>Summary:&ensp;</span> {summary}
                    </div>
                    <div className={this.classNames.element("btn")}><Button onClick={this.onNextStepHandler} type='full' width='100%'>Check Availability</Button></div>
                </div>
        )
    }
}

export default ReservationsStartForm
