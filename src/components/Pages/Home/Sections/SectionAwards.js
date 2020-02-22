import React from 'react';
import Award1 from '../../../../img/awards/award-1.png';
import Award2 from '../../../../img/awards/award-2.png';
import Award3 from '../../../../img/awards/award-3.png';
import Award4 from '../../../../img/awards/award-4.png';
//import ItemsCarousel from 'react-items-carousel';

const SectionAwards = () => {
    //const placeholderElement = (<div style={{ height: 20, background: '#EEE' }} />);
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
            <img src={Award1} className="section-awards__award" alt="award" />
            <img src={Award2} className="section-awards__award" alt="award" />
            <img src={Award3} className="section-awards__award" alt="award" />
            <img src={Award4} className="section-awards__award" alt="award" />
        </div> 
    )
}

export default SectionAwards
