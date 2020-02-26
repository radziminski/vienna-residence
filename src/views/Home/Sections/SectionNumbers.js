import React, { Component } from 'react';
import CountUp from 'react-countup';
import Section from '../../../layouts/Section/Section';

class SectionNumbers extends Component {
    state = {
        countUpStart: -1,
        elementRef: React.createRef(),
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHandler);
    }

    onScrollHandler = () => {
        const scrollOffset = window.scrollY;
        if (scrollOffset > (this.state.elementRef.current.offsetTop - window.innerHeight)) this.setState({countUpStart: 0});
    }

    render() {
        return (
            <div ref={this.state.elementRef} >
                <Section name="section-numbers">
                <div className="section-numbers__wrapper">
                    <div className="count-up">
                        <div className="count-up__title">Years of work:</div>
                        <CountUp
                            className="count-up__number"
                            end={8}
                            duration={3}
                            start={this.state.countUpStart}
                            
                        />
                    </div>
                    <div className="count-up">
                        <div className="count-up__title">Monthly visitors:</div>
                        <CountUp
                            className="count-up__number"
                            end={140}
                            duration={3.2}
                            start={this.state.countUpStart}
                        />
                    </div>
                    <div className="count-up">
                        <div className="count-up__title">Overrall booking.com rate:</div>
                        <CountUp
                            className="count-up__number"
                            end={8.9}
                            decimals={1}
                            duration={4}
                            start={this.state.countUpStart}
                        />
                    </div>
                    <div className="count-up">
                        <div className="count-up__title">Total satisfied customers:</div>
                        <CountUp
                            className="count-up__number"
                            end={9500}
                            duration={3.8}
                            start={this.state.countUpStart}
                        />
                    </div>
                    </div>
                </Section>
            </div>
        )
    } 
}

export default SectionNumbers;