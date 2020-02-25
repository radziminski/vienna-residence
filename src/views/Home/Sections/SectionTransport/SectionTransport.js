import React, { Component } from 'react';
import { IoIosAirplane, IoIosCar, IoIosTrain } from 'react-icons/io';
import Linker from '../../../../layouts/Linker';
import { colors } from '../../../../data/data';
import SubSection from './SubSection';

class SectionTransport extends Component {

    state = {
        content: 'all',
    }

    onButtonClickedHandler = (button) => {
        if (this.state.content === button) this.setState({content: 'all'});
        else this.setState({content: button});
    }

    render() {
        let content = (
            <div className="row u-animation-fade-in">
                <div className="col-1-of-3 ">
                    <IoIosAirplane className="icon-title" />
                    <h3 className="column-title">By Plane</h3>
                    <p className="paragraph">
                        Lorem Experiance breath-taking beauty and magnificance of north tirol mountains in the best apartmenets in the region
                    </p>
                </div>
                <div className="col-1-of-3">
                    <IoIosCar className="icon-title" />
                        <h3 className="column-title">By Car</h3>
                        <p className="paragraph">
                            Lorem Experiance breath-taking beauty and magnificance of north tirol mountains in the best apartmenets in the region
                        </p>
                    </div>
                <div className="col-1-of-3">
                    <IoIosTrain className="icon-title" />
                    <h3 className="column-title">By Train</h3>
                    <p className="paragraph">
                        Lorem Experiance breath-taking beauty and magnificance of north tirol mountains in the best apartmenets in the region
                    </p>
                </div>
            </div>
        );
        if (this.state.content === 'byPlane') {
            content = <SubSection
                        title="By Plane"
                        text="Id veniam cupidatat incididunt tempor. Ipsum sint deserunt occaecat cillum nulla. Excepteur amet adipisicing anim tempor ea dolore occaecat laboris ipsum. Cupidatat elit sunt dolore magna dolor eiusmod adipisicing do commodo adipisicing. Ea ut incididunt incididunt consequat et ullamco elit nisi ullamco ullamco mollit consequat proident ex. Mollit est ex elit occaecat esse labore. Ut pariatur proident mollit irure." 
                        />;
        } else if (this.state.content === 'byCar') {
            content = <SubSection
                        title="By Car"
                        text="Ad veniam cupidatat incididunt tempor. Ipsum sint deserunt occaecat cillum nulla. Excepteur amet adipisicing anim tempor ea dolore occaecat laboris ipsum. Cupidatat elit sunt dolore magna dolor eiusmod adipisicing do commodo adipisicing. Ea ut incididunt incididunt consequat et ullamco elit nisi ullamco ullamco mollit consequat proident ex. Mollit est ex elit occaecat esse labore. Ut pariatur proident mollit irure." 
                        />;
        } else if (this.state.content === 'byTrain') {
            content = <SubSection
                        title="By Train"
                        text="Ed veniam cupidatat incididunt tempor. Ipsum sint deserunt occaecat cillum nulla. Excepteur amet adipisicing anim tempor ea dolore occaecat laboris ipsum. Cupidatat elit sunt dolore magna dolor eiusmod adipisicing do commodo adipisicing. Ea ut incididunt incididunt consequat et ullamco elit nisi ullamco ullamco mollit consequat proident ex. Mollit est ex elit occaecat esse labore. Ut pariatur proident mollit irure." 
                        />;
        }


        return (
            <section className="section-transport section--transparent">
            <Linker color={colors.white} />
            <h1 className="section-title section-title--light">How to get here?</h1>

            {content}

            <div className="section-transport__btn-wrapper">
                <button 
                    className={"section-transport__btn " + 
                                (this.state.content === 'byPlane' ? " section-transport__btn--active" : null)}
                    onClick={() => this.onButtonClickedHandler('byPlane')}>
                    <IoIosAirplane className="section-transport__btn-icon" /> By Plane
                </button>
                <button 
                    className={"section-transport__btn " + 
                                (this.state.content === 'byCar' ? " section-transport__btn--active" : null)}
                    onClick={() => this.onButtonClickedHandler('byCar')}>
                    <IoIosCar className="section-transport__btn-icon"/>
                     By Car
                </button>
                <button 
                    className={"section-transport__btn " + 
                                (this.state.content === 'byTrain' ? " section-transport__btn--active" : null)}
                    onClick={() => this.onButtonClickedHandler('byTrain')}>
                    <IoIosCar className="section-transport__btn-icon"/>
                     By Train
                </button>
                </div>
            </section>
        )
    }
}

export default SectionTransport;
