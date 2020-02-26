import React from 'react'
import LogoInline from '../Logo/LogoInline'
import BEMClassNameGenerator from '../../BEMClassNameGenerator'
import ColumnTitle from '../../components/Typography/ColumnTitle';

const FooterBig = () => {
    const parrentClassNames = new BEMClassNameGenerator('footer-big');

    return (
        <section className="footer-big">
            <div className="row">
                <div className="col-1-of-4">
                    <ColumnTitle><LogoInline parrentClassNames={parrentClassNames}/></ColumnTitle>
                    <p className="paragraph">
                        Phone:&emsp;+48 123 345 456<br/> 
                        Email:&emsp;contact@viennares.com<br/> 
                        Address:&emsp;Tirol Street 14/23a<br/> 
                        Postal:&emsp;03-253
                    </p>
                </div>
                <div className="col-1-of-4">
                    <ColumnTitle>Site Map</ColumnTitle>
                    Home<br/>
                    About<br/>
                    Apartements<br/>
                    Reservations<br/>
                    Discover<br/>
                    Transport<br/>
                    Transport<br/>
                </div>
                <div className="col-1-of-4">
                    <ColumnTitle>Apartements</ColumnTitle>
                </div>
                <div className="col-1-of-4">
                    <ColumnTitle>Social Media</ColumnTitle>
                </div>
            </div>
        </section>
    )
}

export default FooterBig
