import React, { Component } from 'react';

export class TextInputInline extends Component {
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
                    type="text"
                    id={'text-input-inline-' + this.props.label}
                    className="text-input-inline__input"
                    placeholder={this.props.label}
                    required={this.props.required === true}
                />
                <div className="text-input-inline__icon">{this.props.icon}</div>
            </div>
        );
    }
}

export default TextInputInline;
