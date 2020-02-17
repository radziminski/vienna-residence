import React from 'react';
import BoxLink from './BoxLink';
import { Link } from 'react-router-dom';
import { colors } from '../../data';

const BoxLinks = (props) => {
    const linkWidth = String(100 / props.links.length) + '%';
    const links = props.links.map(element => {
        return <Link style={{color: colors.white, textDecoration: 'none'}} to={process.env.PUBLIC_URL + element.link} key={element.title}><BoxLink 
                    title={element.title}
                    img={element.img}
                    //onClickHandler={element.link}
                    width={linkWidth}
                /></Link>
    })

    return (
        <div className="box-links">
            {links}
        </div>
    )
}

export default BoxLinks
