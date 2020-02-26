import React, { Component } from 'react';
import { IoIosAirplane, IoIosCar, IoIosTrain } from 'react-icons/io';
import Linker from '../../../../layouts/Linker';
import { colors } from '../../../../data/data';
import SubSection from './SubSection';
import Section from '../../../../layouts/Section/Section';
import SectionTitle from '../../../../components/Typography/SectionTitle';
import BEMClassNameGenerator from '../../../../BEMClassNameGenerator';

class SectionTransport extends Component {

    state = {
        content: 'all',
    }

    classNames = new BEMClassNameGenerator('section-transport');

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
            <Section name={this.classNames.block()} type='transparent'>
                <Linker color={colors.white} />
                <SectionTitle type='light'>How to get here?</SectionTitle>

                {content}

                <div className={this.classNames.element('btn-wrapper')}>
                    <button 
                        className={this.state.content === 'byPlane' ? this.classNames.elementWithModifiers('btn', 'active'): this.classNames.element('btn')}
                        onClick={() => this.onButtonClickedHandler('byPlane')}>
                        <IoIosAirplane className={this.classNames.element('btn-icon')} /> By Plane
                    </button>
                    <button 
                        className={this.state.content === 'byCar' ? this.classNames.elementWithModifiers('btn', 'active'): this.classNames.element('btn')}
                        onClick={() => this.onButtonClickedHandler('byCar')}>
                        <IoIosCar className={this.classNames.element('btn-icon')}/>
                        By Car
                    </button>
                    <button 
                        className={this.state.content === 'byTrain' ? this.classNames.elementWithModifiers('btn', 'active'): this.classNames.element('btn')}
                        onClick={() => this.onButtonClickedHandler('byTrain')}>
                        <IoIosCar className={this.classNames.element('btn-icon')}/>
                        By Train
                    </button>
                    </div>
            </Section>
        )
    }
}

export default SectionTransport;
