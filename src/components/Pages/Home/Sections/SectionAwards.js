import React from 'react';
import ItemsCarousel from 'react-items-carousel';

const SectionAwards = () => {
    const placeholderElement = (<div style={{ height: 20, background: '#EEE' }} />);
    return (
        <div className="section-awards">
            {/* <ItemsCarousel
                placeholderItem={placeholderElement}
                enablePlaceholder={true}
                numberOfPlaceholderItems={4}
                numberOfCards={4}
                gutter={20}
                slidesToScroll={1}

                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={0}

                //children={rooms}
            >
                <div className="section-awards__award">Award 1</div>
                <div className="section-awards__award">Award 2</div>
                <div className="section-awards__award">Award 1</div>
                <div className="section-awards__award">Award 2</div>
                <div className="section-awards__award">Award 1</div>
                <div className="section-awards__award">Award 2</div>
                
            </ItemsCarousel>*/}
        </div> 
    )
}

export default SectionAwards
