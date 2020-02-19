import React from 'react';
import SpaHeader from './SpaHeader/SpaHeader';
import SectionAboutSpa from './SectionAboutSpa';
import SectionReservations from '../Home/Sections/SectionReservations';
import { colors } from '../../../data';

const Spa = () => {
    return (
        <main>
            <SpaHeader />
            <SectionAboutSpa />
            <SectionReservations linkerColor={colors.primaryDark}/>
        </main>
    )
}

export default Spa
