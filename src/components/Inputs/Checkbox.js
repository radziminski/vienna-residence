import React, { Component } from 'react';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

export class Checkbox extends Component {
    classNames = new BEMClassNameGenerator('checkbox');

    state = {
        checked: false
    };

    onChange = e => {
        this.props.onChange(!this.state.checked);
        this.setState({ checked: !this.state.checked });
        console.log('changed');
    };

    render() {
        return (
            <div
                className={
                    this.props.type
                        ? this.classNames.blockWithModifiers(this.props.type)
                        : this.classNames.block()
                }
                onClick={this.onChange}
            >
                <input
                    type="checkbox"
                    id={this.props.name}
                    className={this.classNames.element('input')}
                    checked={this.state.checked}
                    onChange={this.onChange}
                    required={this.props.required === true}
                />
                <label htmlFor={this.props.name} className={this.classNames.element('label')}>
                    {this.props.children}
                </label>
                <span className={this.classNames.element('checkmark')}></span>
            </div>
        );
    }
}

export default Checkbox;
