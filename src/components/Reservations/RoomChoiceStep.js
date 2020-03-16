import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Button from '../Button/Button';
import RoomCardHorizontal from '../RoomCard/RoomCardHorizontal';
import { viennaResRooms as rooms } from '../../data/data';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

const toPeopleString = people => {
    let finalString = people.adultsNum === 1 ? '1 Adult' : `${people.adultsNum} Adults`;
    if (people.childrenNum) {
        finalString += '\t|\t';
        finalString += people.childrenNum === 1 ? '1 Child' : `${people.childrenNum} Children`;
    }
    if (people.babiesNum) {
        finalString += '\t|\t';
        finalString += people.babiesNum === 1 ? '1 Baby' : `${people.babiesNum} Babies`;
    }
    return finalString;
};

export class ReservationsRoomChoice extends Component {
    classNames = new BEMClassNameGenerator('reservations-form');

    state = {
        maxPeopleNum: 3,
        rooms: [rooms[1], rooms[3], rooms[5]],
        btnEnabled: true
    };

    componentDidMount() {
        const maxPeopleNum = this.state.rooms.reduce(
            (sum, element) => sum + parseInt(element.people),
            0
        );
        const propsPeopleNum = this.props.people.adultsNum + this.props.people.childrenNum;
        this.setState({ maxPeopleNum: maxPeopleNum, btnEnabled: propsPeopleNum <= maxPeopleNum });
    }

    componentDidUpdate() {
        const maxPeopleNum = this.state.rooms.reduce(
            (sum, element) => sum + parseInt(element.people),
            0
        );
        const propsPeopleNum = this.props.people.adultsNum + this.props.people.childrenNum;
        if (maxPeopleNum !== this.state.maxPeopleNum)
            this.setState({
                maxPeopleNum: maxPeopleNum,
                btnEnabled: propsPeopleNum <= maxPeopleNum
            });
    }

    deleteRoom = title => {
        const newRooms = this.state.rooms.filter(element => element.title !== title);
        this.setState({ rooms: newRooms });
    };

    render() {
        let rooms = this.state.rooms.map(element => (
            <RoomCardHorizontal
                img={element.img}
                title={element.title}
                subTitle={element.subTitle}
                price={element.price}
                hotel={element.hotel}
                bed={element.bed}
                people={element.people}
                desc={element.desc}
                key={element.title}
                onDelete={this.deleteRoom}
            />
        ));

        if (rooms.length === 0) {
            rooms = (
                <div className="room-card-horizontal">
                    <h2>Add room +</h2>
                </div>
            )
        }

        let sendBtn = (
            <div
                className={this.classNames.element('btn')}
                data-tip="Your room choice cannot accomodate all of people for this reservtion.<br /> Please add more rooms or change reservation details."
                data-for="btn"
            >
                <ReactTooltip id="btn" place="top" type="dark" effect="solid" html/>
                <Button type="disabled" width="100%">
                    Next Step
                </Button>
            </div>
        );
        if (this.state.btnEnabled) {
            sendBtn = (
                <div className={this.classNames.element('btn')}>
                    <Button onClick={this.props.nextStep} type="full" width="100%">
                        Next Step
                    </Button>
                </div>
            );
        }

        return (
            <div className={this.classNames.block()}>
                <div className={this.classNames.element('reservations-info')}>
                    <span className="u-semi-bolded-text">Showing room availability for:&ensp;</span>
                    {this.props.dates.checkInDate.toLocaleDateString()}&ensp;-&ensp;
                    {this.props.dates.checkOutDate.toLocaleDateString()}&ensp;|&ensp;
                    {toPeopleString(this.props.people)
                        .split('\t')
                        .map((element, key) => (
                            <span key={key}>{element}&ensp;</span>
                        ))}
                </div>
                {rooms}
                <div className={this.classNames.element('summary')}>
                    <span className="u-semi-bolded-text">Summary:</span>&ensp;Selected 2 rooms,
                    capable of accomodating maximum {this.state.maxPeopleNum} people
                </div>
                {sendBtn}
            </div>
        );
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
