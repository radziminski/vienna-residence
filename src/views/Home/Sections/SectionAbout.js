import React from 'react';
import Section from '../../../layouts/Section/Section';
import SectionTitle from '../../../components/Typography/SectionTitle';

const SectionAbout = () => {
    return (
        <Section type='white' name="section-about">
            <SectionTitle>About Us</SectionTitle>
            <div className="row">
                <div className="col-1-of-2">
                    <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue orci ut egestas aliquet. Proin vel sagittis libero. Fusce ullamcorper risus et augue volutpat, sit amet ornare nibh laoreet. Integer sit amet eros nisl. Donec condimentum vestibulum justo, id euismod lacus vehicula id. Nam facilisis leo eu sagittis faucibus. Mauris pharetra neque a elit placerat faucibus. Nam porta ligula a porta pretium. Proin convallis ante nibh, a aliquet erat lobortis a. Cras iaculis, purus in lobortis finibus, quam orci auctor neque.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default SectionAbout;

