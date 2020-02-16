import React from 'react';
import { IoIosAirplane, IoIosCar, IoIosTrain } from 'react-icons/io';
import Linker from './Linker';
import { colors } from '../../data';

const SectionTransport = () => {
    return (
        <section className="section-transport section--transparent">
        <Linker color={colors.white} />
            <h1 className="section-title section-title--light">How to get here?</h1>
            <div className="row">
                <div className="col-1-of-3">
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
        </section>
    )
}

export default SectionTransport;
