import React from 'react';
import BoxLinks from '../../../components/BoxLinks/BoxLinks';
import Linker from '../../../layouts/Linker';
import { colors } from '../../../data/data';

import spaImg from '../../../assets/img/spa.jpg';
import restaurantImg from '../../../assets/img/restaurant.jpg';
import sportImg from '../../../assets/img/sport.jpg';
import businessImg from '../../../assets/img/business.jpg';
import Section from '../../../layouts/Section/Section';
import SectionTitle from '../../../components/Typography/SectionTitle';

const SectionDiscover = () => {
    const links = [
        {
            title: 'SPA',
            img: spaImg,
            link: '/spa'
        },
        {
            title: 'Restaurant',
            img: restaurantImg,
            link: '/restaurant'
        },
        {
            title: 'Sport',
            img: sportImg,
            link: '/sport'
        },
        {
            title: 'Busisness',
            img: businessImg,
            link: '/business'
        }
    ];

    return (
        <Section name="section-discover" type="white">
            <Linker color={colors.primaryDarkMedium} />
            <SectionTitle>Discover Our Hotel</SectionTitle>
            {/* <h2 className="section-subtitle">Our hotel consist of many asdasdsadsadasd asdasd</h2> */}
            <BoxLinks links={links} />
        </Section>
    );
};

export default SectionDiscover;
