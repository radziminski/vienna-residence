import React from 'react';
import Header from './Header/Header';
import SectionAbout from './Sections/SectionAbout';
import SectionNumbers from './Sections/SectionNumbers';
import SectionRooms from './Sections/SectionRooms';
import SectionTransport from './Sections/SectionTransport/SectionTransport';
import SectionDiscover from './Sections/SectionDiscover';
import SectionReservations from './Sections/SectionReservations';
import SectionContact from './Sections/SectionContact';
import SectionAwards from './Sections/SectionAwards';
import { colors } from '../../data/data';

const Home = () => {
    return (
        <main>
            <Header />
            <SectionNumbers />
            <SectionAbout />
            <SectionRooms />
            <SectionDiscover />
            <SectionTransport />
            <SectionReservations linkerColor={colors.primaryDarkSuper} />
            <SectionAwards />
            <SectionContact />
        </main>
    );
};

export default Home;
