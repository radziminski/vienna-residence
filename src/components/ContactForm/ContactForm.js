import React, { Component } from 'react';
import { IoMdPerson } from 'react-icons/io';
import Button from '../Button/Button';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

export class ContactForm extends Component {
    classNames = new BEMClassNameGenerator('contact-form');

    render() {
        return (
            <form className={this.classNames.block() + ' js--form'}>
                <h2 className={this.classNames.element('title')}>Send Us A Message!</h2>

                <h2 className={this.classNames.element('section-title')}>Personal data</h2>

                <div className={this.classNames.element('input-field')}>
                    <label className={this.classNames.element('label')}>First Name:</label>
                    <div className={this.classNames.element('icon-wrapper')}>
                        <i className={this.classNames.element('icon')}>
                            <IoMdPerson className={this.classNames.element('icon')} />
                        </i>
                    </div>
                    <input
                        type="text"
                        className={this.classNames.element('input-text')}
                        placeholder="First Name"
                        id="first-name"
                        required
                    />
                </div>

                <div className={this.classNames.element('input-field')}>
                    <label className={this.classNames.element('label')}>Last Name</label>
                    <div className={this.classNames.element('icon-wrapper')}>
                        <i className={this.classNames.element('icon')}>
                            <IoMdPerson />
                        </i>
                    </div>
                    <input
                        type="text"
                        className={this.classNames.element('input-text')}
                        placeholder="Last Name"
                        id="last-name"
                        required
                    />
                </div>

                <h2 className={this.classNames.element('section-title')}>Contact Data</h2>
                <div className={this.classNames.element('input-field')}>
                    <label className={this.classNames.element('label')}>Email:</label>
                    <div className={this.classNames.element('icon-wrapper')}>
                        <i className={this.classNames.element('icon')}>
                            <IoMdPerson />
                        </i>
                    </div>
                    <input
                        type="email"
                        className={this.classNames.element('input-text')}
                        placeholder="Email"
                        id="email"
                        required
                    />
                </div>

                <label className={this.classNames.element('label-msg')}>Your Messege</label>
                <textarea
                    className={this.classNames.element('input-messege')}
                    placeholder="Your Messege..."
                    id="message"></textarea>

                <div className={this.classNames.element('btn u-margin-bottom-small')}>
                    <Button type="full" width="100%">
                        Wyślij!
                    </Button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
