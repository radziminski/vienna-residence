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
        personalData: {
            firstName: '',
            lastName: '',
            address: {
                street: '',
                city: '',
                country: '',
                zip: ''
            },
            email: '',
            phone: ''
        },
        features: {
            earlyCheckIn: false,
            lateCheckOut: false,
            spaAccess: false,
            airportTransfer: false,
            breakfests: false,
            parking: false
        }
    };

    onFeatureChangedHandler(value, fetureType) {
        const features = { ...this.state.features };
        features[fetureType] = value;
        this.setState({ features });
    }

    onSendHandler = e => {
        e.preventDefault();
        console.log(JSON.parse(JSON.stringify(this.state)));
        this.props.nextStep(JSON.parse(JSON.stringify(this.state)));
    };

    onTextInputHandler(value, inputType) {
        const personalData = { ...this.state.personalData };
        personalData[inputType] = value;
        this.setState({ personalData });
    }

    onAddressInputHandler(value, inputType) {
        const personalData = { ...this.state.personalData };
        personalData.address[inputType] = value;
        this.setState({ personalData });
    }

    classNames = new BEMClassNameGenerator('reservations-form');

    render() {
        return (
            <form className={this.classNames.block()} onSubmit={this.onSendHandler}>
                <div className={this.classNames.element('columns')}>
                    <div className={this.classNames.element('column')}>
                        <h3 className={this.classNames.element('column-title')}>Personal data</h3>
                        <TextInputInline
                            label="First Name"
                            icon={<IoMdPerson />}
                            onChange={val => this.onTextInputHandler(val, 'firstName')}
                            required
                        />
                        <TextInputInline
                            label="Last Name"
                            icon={<IoMdPerson />}
                            onChange={val => this.onTextInputHandler(val, 'lastName')}
                            required
                        />
                        <h3 className={this.classNames.element('column-title')}>Contact data</h3>
                        <TextInputInline
                            label="Email"
                            type={'email'}
                            icon={<MdEmail />}
                            onChange={val => this.onTextInputHandler(val, 'email')}
                            required
                        />
                        <TextInputInline
                            label="Phone"
                            icon={<MdPhone />}
                            onChange={val => this.onTextInputHandler(val, 'phone')}
                        />
                    </div>
                    <div className={this.classNames.element('column')}>
                        <h3 className={this.classNames.element('column-title')}>
                            Current Wherebaouts
                        </h3>
                        <TextInputInline
                            label="Street"
                            icon={<FaAddressCard />}
                            onChange={val => this.onAddressInputHandler(val, 'street')}
                            required
                        />
                        <TextInputInline
                            label="City"
                            icon={<FaAddressCard />}
                            onChange={val => this.onAddressInputHandler(val, 'city')}
                            required
                        />
                        <TextInputInline
                            label="Country"
                            icon={<IoIosFlag />}
                            onChange={val => this.onAddressInputHandler(val, 'country')}
                            required
                        />
                        <TextInputInline
                            label="Zip-Code"
                            icon={<FaAddressCard />}
                            onChange={val => this.onAddressInputHandler(val, 'zip')}
                        />
                    </div>
                </div>
                <div className={this.classNames.element('features')}>
                    <h3
                        className={this.classNames.elementWithModifiers('column-title', 'centered')}
                    >
                        Features:
                    </h3>
                    <div className={this.classNames.elementWithModifiers('columns', 'around')}>
                        <div className={this.classNames.element('column')}>
                            <Checkbox
                                name="check-in"
                                onChange={val => this.onFeatureChangedHandler(val, 'earlyCheckIn')}
                            >
                                Early check in
                            </Checkbox>
                            <Checkbox
                                name="check-in"
                                onChange={val => this.onFeatureChangedHandler(val, 'lateCheckOut')}
                            >
                                Late check out
                            </Checkbox>
                            <Checkbox
                                name="check-in"
                                onChange={val => this.onFeatureChangedHandler(val, 'spaAccess')}
                            >
                                Premium spa access
                            </Checkbox>
                        </div>
                        <div className={this.classNames.element('column')}>
                            <Checkbox
                                name="check-in"
                                onChange={val =>
                                    this.onFeatureChangedHandler(val, 'airportTransfer')
                                }
                            >
                                Airport transfer
                            </Checkbox>
                            <Checkbox
                                name="check-in"
                                onChange={val => this.onFeatureChangedHandler(val, 'breakfests')}
                            >
                                Breakfests
                            </Checkbox>
                            <Checkbox
                                name="check-in"
                                onChange={val => this.onFeatureChangedHandler(val, 'parking')}
                            >
                                Private Parking
                            </Checkbox>
                        </div>
                    </div>
                </div>
                <Checkbox
                    name="check-in"
                    type="black"
                    onChange={val => this.onFeatureChangedHandler(val, 'parking')}
                    required
                >
                    I accept terms and conditions of Vienna Residence Reservation
                </Checkbox>
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
