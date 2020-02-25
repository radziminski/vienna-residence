import React from 'react';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel';
import { spaPhotos } from '../../data/data';


const SectionAboutSpa = () => {
    return (
        <section className="section-about-spa section--blue" name="section-about">
            <h2 className="section-title section-title--light">Spa & Wellness</h2>
            <h3 className="section-subtitle section-subtitle--light">Experiance relaxing hot waters coming from hearts of Tirol mountains</h3>
            <p className="section-desc">W hotelowych przestrzeniach SPA i Wellness Goście obiorą kurs na odprężenie. Od łagodnych sesji w saunie, łaźni i na basenie, poprzez dobroczynny relaks w grocie śnieżnej, po upiększające rytuały na twarz i ceremonie na ciało – wiemy, jak uatrakcyjnić wypoczynek podczas morskiej wyprawy.
            </p>
            <PhotoCarousel photos={spaPhotos}/>
            
        </section>
    )
}

export default SectionAboutSpa
