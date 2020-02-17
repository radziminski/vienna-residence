import React from 'react';
import SpaHeader from './SpaHeader/SpaHeader';
import SectionAboutSpa from './SectionAboutSpa';
import SectionAwards from '../Home/Sections/SectionAwards';

const Spa = () => {
    return (
        <main>
            <SpaHeader />
            <SectionAboutSpa />
            <SectionAwards />
        </main>
    )
}

export default Spa
