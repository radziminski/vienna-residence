import React, { Component } from 'react'
import RoomCardHorizontal from '../RoomCard/RoomCardHorizontal';
import Button from '../Button/Button';
import {viennaResRooms as rooms} from '../../data/data';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

export class ReservationsRoomChoice extends Component {
    classNames = new BEMClassNameGenerator('reservations-room-choice');

    rooms = [
        <RoomCardHorizontal
            img={rooms[1].img}
            title={rooms[1].title}
            subTitle={rooms[1].subTitle}
            price={rooms[1].price}
            hotel={rooms[1].hotel}
            bed={rooms[1].bed}
            people={rooms[1].people}
            desc={rooms[1].desc}
            key={1}
        />,
        <RoomCardHorizontal
            img={rooms[5].img}
            title={rooms[5].title}
            subTitle={rooms[5].subTitle}
            price={rooms[5].price}
            hotel={rooms[5].hotel}
            bed={rooms[5].bed}
            people={rooms[5].people}
            desc={rooms[5].desc}
            key={2}
        />
    ]

    render() {
        return (
            <div>
                {this.rooms}
                <div className={this.classNames.element('summary')}>
                    <span className="u-semi-bolded-text">Summary:</span>&ensp;Selected 2 rooms, capable of accomodating maximum 3 people
                </div>
                <div className={this.classNames.element('btn-wrapper')}>
                    <Button onClick={this.onNextStepHandler} type='full' width='30rem'>Next Step</Button>
                </div>
            </div>
        )
    }
}

export default ReservationsRoomChoice;

                    // img={element.img}
                    // title={element.title}
                    // subTitle={element.subTitle}
                    // price={element.price}
                    // hotel={element.hotel}
                    // bed={element.bed}
                    // people={element.people}
                    // desc={element.desc}