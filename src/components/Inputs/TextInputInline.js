import React, { Component } from 'react';

export class TextInputInline extends Component {
    state = {
        value: ''
    };

    onChangeHandler = e => {
        this.props.onChange(e.target.value);
        this.setState({
            value: e.target.value
        });
    };

    render() {
        return (
            <div className="text-input-inline">
                <label
                    htmlFor={'text-input-inline-' + this.props.label}
                    className="text-input-inline__label"
                >
                    {this.props.label}
                </label>
                <input
                    type={this.props.type ? this.props.type : 'text'}
                    id={'text-input-inline-' + this.props.label}
                    className="text-input-inline__input"
                    placeholder={this.props.label}
                    required={this.props.required === true}
                    onChange={this.onChangeHandler}
                />
                <div className="text-input-inline__icon">{this.props.icon}</div>
            </div>
        );
    }
}

export default TextInputInline;
