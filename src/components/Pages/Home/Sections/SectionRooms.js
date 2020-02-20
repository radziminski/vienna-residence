import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import RoomCard from '../../../RoomCard/RoomCard';

import { viennaResRooms, colors } from '../../../../data';
import Linker from '../../../Layout/Linker';

class SectionRooms extends Component {
    constructor(props) {
        super(props);
        let cardsNum = 4;
        if (window.innerWidth < 900) cardsNum = 3;
        if (window.innerWidth < 600) cardsNum = 2;
        if (window.innerWidth < 500) cardsNum = 1;
        this.state = {
            activeItemIndex: 0,
            roomType: 'all',
            cardsNum
        }
    }
    

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
            <section className="section-rooms section--blue">
                <Linker color={colors.white} />
                <h1 className="section-title section-title--light">Our Apartements</h1>
                <div className="section-rooms__room-types">
                    <div onClick={() => this.onRoomTypeChangeHandler('all')} 
                        className={"section-rooms__room-type " + 
                                    (this.state.roomType === 'all' ? 'section-rooms__room-type--active' : null)}>
                        All Rooms
                    </div>
                    <div onClick={() => this.onRoomTypeChangeHandler('single')} 
                        className={"section-rooms__room-type " + 
                                    (this.state.roomType === 'single' ? 'section-rooms__room-type--active' : null)}>
                        Single Rooms
                    </div>
                    <div onClick={() => this.onRoomTypeChangeHandler('double')} 
                        className={"section-rooms__room-type " + 
                                    (this.state.roomType === 'double' ? 'section-rooms__room-type--active' : null)}>
                        Double Rooms
                    </div>
                    <div onClick={() => this.onRoomTypeChangeHandler('multi')} 
                        className={"section-rooms__room-type " + 
                                    (this.state.roomType === 'multi' ? 'section-rooms__room-type--active' : null)}>
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
            </section>
        )
    } 
}

export default SectionRooms;
