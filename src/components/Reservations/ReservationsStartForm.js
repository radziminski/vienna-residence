import React, { Component } from 'react'
import BEMClassNameGenerator from '../../BEMClassNameGenerator'
import Button from '../Button/Button';
import { IoIosCalendar, IoMdPerson } from 'react-icons/io';
import { FaArrowAltCircleRight, FaChild } from 'react-icons/fa';
import { MdAttachMoney, MdChildFriendly } from 'react-icons/md';
import { SelectInput } from '../Inputs/SelectInput';
import { TextInput } from '../Inputs/TextInput';

export class ReservationsStartForm extends Component {
    classNames = new BEMClassNameGenerator('reservations-form');

    state = {
        checkInDate: null,
        checkOutDate: new Date(),
        hotelNights: 0,
        adultsNum: 0,
        childrenNum: 0,
        babiesNum: 0,
        premium: false,
        
    }

    render() {

        

        return (
            <div className={this.classNames.block()}>
                    <div className={this.classNames.element("dates-wrapper")}>
                        <div className={this.classNames.element("date-wrapper")}>
                            <div className={this.classNames.element("date-label")}><FaArrowAltCircleRight className={this.classNames.element("icon")}/>Check In:</div>
                            <div className={this.classNames.element("date-input")}><IoIosCalendar className={this.classNames.element("date-icon")}/>{this.state.checkInDate ? this.state.checkInDate.toLocaleDateString() : null}</div>
                        </div>
                        <div className={this.classNames.element("date-wrapper")}>
                            <div className={this.classNames.element("date-label")}><FaArrowAltCircleRight className={this.classNames.element("icon")}/>Check Out:</div>
                            <div className={this.classNames.element("date-input")}><IoIosCalendar className={this.classNames.element("date-icon")}/>{this.state.checkOutDate ? this.state.checkOutDate.toLocaleDateString() : null}</div>
                        </div>
                    </div>
                    <div className={this.classNames.element("people-wrapper")}>
                        <SelectInput options={Array(15).fill().map((_, num) => 1 + num)} title={'Adults'} icon={<IoMdPerson />}/>
                        <SelectInput options={Array(15).fill().map((_, num) => num)} title={'Children'} icon={<FaChild />}/>
                        <SelectInput options={Array(15).fill().map((_, num) => num)} title={'Babies'} icon={<MdChildFriendly />}/>
                        <TextInput title={'Promo code'} icon={<MdAttachMoney />} />
                    </div>
                    <div className={this.classNames.element("summary")}>
                     <span style={{fontWeight: '400'}}>Summary:&ensp;</span> {this.state.hotelNights} Hotel Nights,&ensp;{this.state.adultsNum} Adults,&ensp;{this.state.childrenNum} Childs,&ensp;{this.state.babiesNum} Babies.
                    </div>
                    <div className={this.classNames.element("btn")}><Button onClick={this.props.onClick} type='full' width='100%'>Check Availability</Button></div>
                </div>
        )
    }
}

export default ReservationsStartForm
