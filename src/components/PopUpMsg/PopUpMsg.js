import React, { Component } from 'react';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

export class PopUpMsg extends Component {
    state = {
        display: 'active',
        animationStarted: 'true'
    };

    componentDidMount() {}

    componentWillUnmount() {
        this.setState({ display: 'hidden', animationStarted: 'false' });
    }

    classNames = new BEMClassNameGenerator('pop-up-msg');
    render() {
        return <div className={this.classNames.blockWithModifiers(this.state.display)}>{this.props.children}</div>;
    }
}

export default PopUpMsg;
