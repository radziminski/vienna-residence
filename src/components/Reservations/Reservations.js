import React, { Component } from 'react';
import Button from '../Button/Button';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

export class Reservations extends Component {
    classNames = new BEMClassNameGenerator('reservations');

    render() {
        return (
            <div className={this.classNames.block()}>
                <h2 className={this.classNames.element("title")}>Reservations</h2>
                <div className={this.classNames.element("steps")}>
                    <button className={this.classNames.elementWithModifiers("step", "active")}>1. Check Availability</button>
                    <button className={this.classNames.element("step")}>2. Choose Rooms</button>
                    <button className={this.classNames.element("step")}>3. Choose Features</button>
                    <button className={this.classNames.element("step")}>4. Summary</button>
                </div>
                <div className={this.classNames.element("form")}>
                    <div className={this.classNames.element("dates-wrapper")}>
                        <div className={this.classNames.element("date")}>Check In</div>
                        <div className={this.classNames.element("date")}>Check Out</div>
                    </div>
                    <div className={this.classNames.element("btn")}><Button type='full' width='100%'>Check Availability</Button></div>
                </div>
                
            </div>
        )
    }
}

export default Reservations;
