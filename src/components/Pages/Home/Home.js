import React from 'react';
import Header from './Header/Header';
import SectionAbout from './Sections/SectionAbout';
import SectionNumbers from './Sections/SectionNumbers';
import SectionRooms from './Sections/SectionRooms';
import SectionTransport from './Sections/SectionTransport';
import SectionDiscover from './Sections/SectionDiscover';
import SectionReservations from './Sections/SectionReservations';
import SectionContact from './Sections/SectionContact';
import SectionAwards from './Sections/SectionAwards';

const Home = () => {
    return (
        <main>
            <Header />
			<SectionNumbers />
			<SectionAbout />
			<SectionRooms />
			<SectionDiscover />
			<SectionTransport />
            <SectionReservations />
            <SectionAwards />
            <SectionContact />
        </main>
    )
}

export default Home;
