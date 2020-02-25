import React from 'react';
import SpaHeader from './SpaHeader';
import SectionAboutSpa from './SectionAboutSpa';
import SectionReservations from '../Home/Sections/SectionReservations';
import { colors } from '../../data/data';

const Spa = () => {
    return (
        <main>
            <SpaHeader />
            <SectionAboutSpa />
            <SectionReservations linkerColor={colors.primaryDarkMedium}/>
        </main>
    )
}

export default Spa
