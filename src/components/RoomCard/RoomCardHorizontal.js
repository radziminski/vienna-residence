import React from 'react';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';
import { IoIosBed, IoMdPerson } from 'react-icons/io';
import { MdStar, MdClose } from 'react-icons/md';

import ReactTooltip from 'react-tooltip';

const RoomCardHorizontal = props => {
    const classNames = new BEMClassNameGenerator('room-card-horizontal');

    return (
        <div className={classNames.block()}>
            <div className={classNames.element('content-wrapper')}>
                <div className={classNames.element('img-wrapper')}>
                    <img src={props.img} alt="Room" className={classNames.element('img')} />
                </div>

                <div className={classNames.element('text-wrapper')}>
                    <h3 className={classNames.element('title')}>{props.title}</h3>
                    <h4 className={classNames.element('sub-title')}>{props.subTitle}</h4>
                    <div className={classNames.element('features')}>
                        <div className={classNames.element('feature')}>
                            <IoIosBed className={classNames.element('icon')} />
                            {props.bed}
                        </div>
                        <div className={classNames.element('feature')}>
                            <IoMdPerson className={classNames.element('icon')} />
                            {props.people}
                        </div>
                    </div>
                    <div className={classNames.element('desc')}>{props.desc}</div>

                    <div className={classNames.element('btns-wrapper')}>
                        <button
                            className={classNames.elementWithModifiers('btn', 'red')}
                            data-tip="Delete room from reservation"
                            data-for={"btn-delete-" + props.title}
                            onClick={() => props.onDelete(props.title)}
                        >
                            <MdClose className={classNames.element('btn-icon')} />
                        </button>
                        <ReactTooltip id={"btn-delete-" + props.title} place="right" type="error" delayShow={200} effect="solid" />

                        <button
                            className={classNames.elementWithModifiers('btn', 'gold')}
                            data-tip="Upgrade to premium experiance"
                            data-for="btn-upgrade"
                        >
                            <MdStar className={classNames.element('btn-icon')} />
                        </button>
                        <ReactTooltip id="btn-upgrade" place="top" type="info" delayShow={200} effect="solid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCardHorizontal;
