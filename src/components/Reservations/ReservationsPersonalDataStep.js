import React, { Component } from 'react';
import TextInputInline from '../Inputs/TextInputInline';
import { IoMdPerson, IoIosFlag } from 'react-icons/io';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa';

import BEMClassNameGenerator from '../../BEMClassNameGenerator';
import ReactTooltip from 'react-tooltip';
import Button from '../Button/Button';
import Checkbox from '../Inputs/Checkbox';

export class ReservationsPersonalDataStep extends Component {
    state = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        passportNumber: '',
        address: {
            street: '',
            streetNum: '',
            country: '',
            zip: ''
        },
        email: '',
        phone: '',
        features: {
            earlyCheckIn: '',
            lateCheckOut: ''
        }
    };

    classNames = new BEMClassNameGenerator('reservations-form');

    render() {
        return (
            <form className={this.classNames.block()}>
                <div className={this.classNames.element('columns')}>
                    <div className={this.classNames.element('column')}>
                        <h3 className={this.classNames.element('column-title')}>Personal data</h3>
                        <TextInputInline label="First Name" icon={<IoMdPerson />} required />
                        <TextInputInline label="Last Name" icon={<IoMdPerson />} required />
                        <h3 className={this.classNames.element('column-title')}>Contact data</h3>
                        <TextInputInline label="Email" icon={<MdEmail />} required />
                        <TextInputInline label="Phone" icon={<MdPhone />} />
                    </div>
                    <div className={this.classNames.element('column')}>
                        <h3 className={this.classNames.element('column-title')}>Current Wherebaouts</h3>
                        <TextInputInline label="Street" icon={<FaAddressCard />} />
                        <TextInputInline label="City" icon={<FaAddressCard />} />
                        <TextInputInline label="Country" icon={<IoIosFlag />} />
                        <TextInputInline label="Zip-Code" icon={<FaAddressCard />} />
                    </div>
                </div>
                <div className={this.classNames.element('features')}>
                    <h3 className={this.classNames.element('column-title')}>Features:</h3>
                    <Checkbox name="check-in">Early check in</Checkbox>
                    <Checkbox name="check-in">late check out</Checkbox>
                    <Checkbox name="check-in">premium spa access</Checkbox>
                </div>

                <div
                    className={this.classNames.element('btn')}
                    data-tip="Please double check if all provided data is correct"
                    data-for="btn"
                >
                    <ReactTooltip id="btn" place="top" type="info" effect="solid" html />
                    <Button type="full" width="100%">
                        Go to summary
                    </Button>
                </div>
            </form>
        );
    }
}

export default ReservationsPersonalDataStep;
