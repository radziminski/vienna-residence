import React from 'react'
import LogoInline from '../Logo/LogoInline'

const FooterBig = () => {
    return (
        <section className="footer-big">
            <div className="row">
                <div className="col-1-of-4">
                    <h3 className="column-title"><LogoInline parrentClassName={'footer-big__'}/></h3>
                    <p className="paragraph">
                        Phone:&emsp;+48 123 345 456<br/> 
                        Email:&emsp;contact@viennares.com<br/> 
                        Address:&emsp;Tirol Street 14/23a<br/> 
                        Postal:&emsp;03-253
                    </p>
                </div>
                <div className="col-1-of-4">
                    <h3 className="column-title">Site Map</h3>
                    Home<br/>
                    About<br/>
                    Apartements<br/>
                    Reservations<br/>
                    Discover<br/>
                    Transport<br/>
                    Transport<br/>
                </div>
                <div className="col-1-of-4">
                    <h3 className="column-title">Apartements</h3>
                </div>
                <div className="col-1-of-4">
                    <h3 className="column-title">Social Media</h3>
                </div>
            </div>
        </section>
    )
}

export default FooterBig
