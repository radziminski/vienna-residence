import React from 'react';
import Form from '../../../components/ContactForm/ContactForm';
import Section from '../../../layouts/Section/Section';
import SectionTitle from '../../../components/Typography/SectionTitle';

const SectionContact = () => {
    return (
        <Section name="section-contact" type="grey">
            <SectionTitle>Contact Us!</SectionTitle>
            <Form />
        </Section>
    )
}

export default SectionContact;
