import React from 'react';
import { IoIosBed, IoMdPerson, IoIosStar } from 'react-icons/io';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

const RoomCard = props => {
    const classNames = new BEMClassNameGenerator('room-card');

    return (
        <div className={classNames.block()}>
            <div className={classNames.element('img-box')}>
                <img src={props.img} className={classNames.element('img')} alt="Room" />
                <div className={classNames.element('info-wrapper')}>
                    <div className={classNames.element('hotel')}>
                        {props.hotel}
                        <span className={classNames.element('stars')}>
                            {' '}
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                        </span>
                    </div>
                    <div className={classNames.element('price-wrapper')}>
                        from <span className={classNames.element('price')}>{props.price}$</span> /night
                    </div>
                </div>
            </div>
            <div className={classNames.element('details')}>
                <div className={classNames.element('bed')}>
                    <IoIosBed className={classNames.element('icon')} />
                    {props.bed}
                </div>
                <div className={classNames.element('people-num')}>
                    <IoMdPerson className={classNames.element('icon')} />
                    {props.people > 1 ? `1 - ${props.people}` : 1}
                </div>
            </div>
            <div className={classNames.element('text-box')}>
                <h2 className={classNames.element('title')}>{props.title}</h2>
                <h3 className={classNames.element('sub-title')}>{props.subTitle}</h3>
                <p className={classNames.element('desc')}>{props.desc}</p>
            </div>
            <a href="/" className={classNames.element('btn')}>
                Reserve now &rarr;
            </a>
        </div>
    );
};

export default RoomCard;
