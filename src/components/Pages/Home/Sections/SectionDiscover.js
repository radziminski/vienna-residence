import React from 'react';
import BoxLinks from '../../../BoxLinks/BoxLinks';
import Linker from '../../../Layout/Linker';
import { colors } from '../../../../data';

import spaImg from '../../../../img/spa.jpg';
import restaurantImg from '../../../../img/restaurant.jpg';
import sportImg from '../../../../img/sport.jpg';
import businessImg from '../../../../img/business.jpg';

const SectionDiscover = () => {
    const links = [
        {
            title: 'SPA',
            img: spaImg,
        },
        {
            title: 'Restaurant',
            img: restaurantImg,
        },
        {
            title: 'Sport',
            img: sportImg,
        },
        {
            title: 'Busisness',
            img: businessImg,
        },
    ]

    return (
        <section className="section-discover section--white">
            <Linker color={colors.primaryDark} />
            <h1 className="section-title">Discover Our Hotel</h1>
            <h2 className="section-subtitle">Our hotel consist of many asdasdsadsadasd asdasd</h2>
            <BoxLinks links={links}/>
        </section>
    )
}

export default SectionDiscover
