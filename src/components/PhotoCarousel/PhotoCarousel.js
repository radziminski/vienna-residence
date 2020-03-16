import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';

class PhotoCarousel extends Component {
    state = {
        activeIndex: 0
    };

    render() {
        const placeholderElement = <div style={{ height: 400, background: '#EEE' }} />;
        const rightChevron = (
            <div className="chevron">
                <div className="chevron__pointer">&#62;</div>
            </div>
        );
        const leftChevron = (
            <div className="chevron">
                <div className="chevron__pointer">&#60;</div>
            </div>
        );

        const cards = this.props.photos.map(element => (
            <div className="photo-carousel__card">
                <img src={element} className="photo-carousel__img" alt="spa feature" />
            </div>
        ));

        return (
            <div className="photo-carousel">
                <div className="items-carousel__wrapper">
                    <ItemsCarousel
                        className="items-carousel"
                        infiniteLoop
                        placeholderItem={placeholderElement}
                        enablePlaceholder
                        numberOfPlaceholderItems={4}
                        numberOfCards={4}
                        gutter={20}
                        slidesToScroll={1}
                        chevronWidth={60}
                        outsideChevron
                        showSlither={false}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeIndex}
                        requestToChangeActive={value => this.setState({ activeIndex: value })}
                        rightChevron={rightChevron}
                        leftChevron={leftChevron}
                        classes={{ wrapper: 'photo-carousel__wrapper', itemWrapper: 'photo-carousel__item-wrapper' }}
                        children={cards}
                    />
                </div>
            </div>
        );
    }
}

export default PhotoCarousel;
