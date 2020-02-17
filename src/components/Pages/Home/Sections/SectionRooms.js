import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import RoomCard from '../../../RoomCard/RoomCard';

import { viennaResRooms, colors } from '../../../../data';
import Linker from '../../../Layout/Linker';

class SectionRooms extends Component {
    state = {
        activeItemIndex: 0,
    }

    render() {
        const placeholderElement = (<div style={{ height: 200, background: '#EEE' }} />);
        const rooms = viennaResRooms.map(element => (
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
                    <ItemsCarousel
                        infiniteLoop
                        placeholderItem={placeholderElement}
                        enablePlaceholder={true}
                        numberOfPlaceholderItems={4}
                        numberOfCards={4}
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
            </section>
        )
    } 
}

export default SectionRooms;
