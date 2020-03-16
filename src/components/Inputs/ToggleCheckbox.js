import React, { Component } from 'react';

class ToggleCheckbox extends Component {
    state = {
        checked: false
    };

    onChange = e => {
        this.props.onChange(e);
        this.setState({ checked: !this.state.checked });
    };

    componentDidUpdate() {
        if (this.props.checked === true && !this.state.checked) {
            this.setState({checked: this.props.checked === true})
        }
    }

    render() {
        return (
            <label className="toggle">
                <input
                    type="checkbox"
                    className="toggle__input"
                    onChange={this.onChange}
                    checked={this.state.checked}
                />
                <span className="toggle__slider"></span>
            </label>
        );
    }
}

export default ToggleCheckbox;
