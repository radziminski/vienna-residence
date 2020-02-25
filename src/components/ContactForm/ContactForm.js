import React, { Component } from 'react';
import { IoMdPerson } from 'react-icons/io';
import Button from '../Button/Button';

export class ContactForm extends Component {
    render() {
        return (
            <form className="contact-form js--form">
                <h2 className="contact-form__title">Send Us A Message!</h2>

                <h2 className="contact-form__section-title">Personal data</h2>

                <div className="contact-form__input-field">
                    <label for="first-name" className="contact-form__label">First Name:</label>
                    <div className="contact-form__icon-wrapper">
                        <i className="contact-form__icon"><IoMdPerson className="contact-form__icon"/></i>
                    </div>
                    <input type="text" className="contact-form__input-text" placeholder="First Name" id="first-name" required />
                </div>

                <div className="contact-form__input-field">
                    <label for="last-name" className="contact-form__label">Last Name</label>
                    <div className="contact-form__icon-wrapper">
                        <i className="contact-form__icon"><IoMdPerson/></i>
                    </div>
                    <input type="text" className="contact-form__input-text" placeholder="Last Name" id="last-name" required />
                </div>

                <h2 className="contact-form__section-title">Contact Data</h2>
                <div className="contact-form__input-field">
                    <label for="email" className="contact-form__label">Email:</label>
                    <div className="contact-form__icon-wrapper">
                        <i className="contact-form__icon"><IoMdPerson/></i>
                    </div>
                    <input type="email" className="contact-form__input-text" placeholder="Email" id="email" required />
                </div>
                
                <label for="email" className="contact-form__label-msg">Your Messege</label>
                <textarea className="contact-form__input-messege" placeholder="Your Messege..." id="message"></textarea>
                
                                    
                <div className="contact-form__btn u-margin-bottom-small"><Button type='full' width='100%'>Wyślij!</Button></div>
            </form>
        )
    }
}

export default ContactForm;
