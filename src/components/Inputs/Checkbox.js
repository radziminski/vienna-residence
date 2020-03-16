import React, { Component } from 'react';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

export class Checkbox extends Component {
    classNames = new BEMClassNameGenerator('checkbox');

    state = {
        checked: false
    };

    onChange = e => {
        // this.props.onChange(e);
        this.setState({ checked: !this.state.checked });
        console.log('changed')
    };

    render() {
        return (
            <div className={this.classNames.block()}>
                <input
                    type="checkbox"
                    id={this.props.name}
                    className={this.classNames.element('input')}
                    onChange={this.onChange}
                    checked={this.state.checked}
                />
                <label htmlFor={this.props.name} className={this.classNames.element('label')}>{this.props.children}
                </label>
                <span className={this.classNames.element('checkmark')}></span>
            </div>
        );
    }
}

export default Checkbox;
