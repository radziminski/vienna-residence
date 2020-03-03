import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import RoomCard from '../../../components/RoomCard/RoomCard';

import { viennaResRooms, colors } from '../../../data/data';
import Linker from '../../../layouts/Linker';
import BEMClassNameGenerator from '../../../BEMClassNameGenerator';
import Section from '../../../layouts/Section/Section';
import SectionTitle from '../../../components/Typography/SectionTitle';

class SectionRooms extends Component {
    constructor(props) {
        super(props);
        let cardsNum = 4;
        if (window.innerWidth < 1400) cardsNum = 3;
        if (window.innerWidth < 600) cardsNum = 2;
        if (window.innerWidth < 500) cardsNum = 1;
        this.state = {
            activeItemIndex: 0,
            roomType: 'all',
            cardsNum
        }
    }

    classNames = new BEMClassNameGenerator('section-rooms');
    

    onRoomTypeChangeHandler = (type) => {
        this.setState({roomType: type});
    }

    render() {
        const placeholderElement = (<div style={{ height: 200, background: '#EEE' }} />);
        
        // Room render
        let rooms = null;
        if (this.state.roomType === 'all') {
            rooms = viennaResRooms.map(element => (
                <RoomCard 
                    img={element.img}
                    title={element.title}
                    subTitle={element.subTitle}
                    price={element.price}
                    hotel={element.hotel}
                    bed={element.bed}
                    people={element.people}
                    desc={element.desc}
                />
            ));
        } else {
            rooms = viennaResRooms.map(element => {
                if (element.type === this.state.roomType)
                    return (
                        <RoomCard 
                            img={element.img}
                            title={element.title}
                            subTitle={element.subTitle}
                            price={element.price}
                            hotel={element.hotel}
                            bed={element.bed}
                            people={element.people}
                            desc={element.desc}
                        />
                        );
                    else return null;
                }
            ) 
        }
        

        // Chevrons
        const rightChevron = (
            <div className="chevron">
                <div className="chevron__pointer">&#62;</div>
            </div>
        )
        const leftChevron = (
            <div className="chevron">
                <div className="chevron__pointer">&#60;</div>
            </div>
        )

        return (
            <Section name={this.classNames.block()} type='blue'>
                <Linker color={colors.white} />
                <SectionTitle type='light'>Our Apartements</SectionTitle>

                <div className={this.classNames.element('room-types')}>
                    <div onClick={() => this.onRoomTypeChangeHandler('all')} 
                        className={this.state.roomType === 'all' ? this.classNames.elementWithModifiers('room-type', 'active') : this.classNames.element('room-type')}>
                        All Rooms
                    </div>
                    <div onClick={() => this.onRoomTypeChangeHandler('single')} 
                        className={this.state.roomType === 'single' ? this.classNames.elementWithModifiers('room-type', 'active') : this.classNames.element('room-type')}>
                        Single Rooms
                    </div>
                    <div onClick={() => this.onRoomTypeChangeHandler('double')} 
                        className={this.state.roomType === 'double' ? this.classNames.elementWithModifiers('room-type', 'active') : this.classNames.element('room-type')}>
                        Double Rooms
                    </div>
                    <div onClick={() => this.onRoomTypeChangeHandler('multi')} 
                        className={this.state.roomType === 'mutli' ? this.classNames.elementWithModifiers('room-type', 'active') : this.classNames.element('room-type')}>
                        Multi people Rooms
                    </div>
                </div>

                <div className="items-carousel__wrapper">
                    <ItemsCarousel
                        className="items-carousel"
                        infiniteLoop
                        placeholderItem={placeholderElement}
                        enablePlaceholder={true}
                        numberOfPlaceholderItems={this.state.cardsNum}
                        numberOfCards={this.state.cardsNum}
                        gutter={20}
                        slidesToScroll={1}
                        chevronWidth={60}
                        outsideChevron={true}
                        showSlither={false}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                        rightChevron={rightChevron}
                        leftChevron={leftChevron}
                        children={rooms}
                    />
                </div>
            </Section>
        )
    } 
}

export default SectionRooms;
