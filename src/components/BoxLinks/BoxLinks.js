import React from 'react';
import BoxLink from './BoxLink';
import { Link } from 'react-router-dom';
import { colors } from '../../data/data';
import BEMClassNameGenerator from '../../BEMClassNameGenerator';

const BoxLinks = props => {
    const classNames = new BEMClassNameGenerator('box-links');

    const linkWidth = window.innerWidth >= 900 ? String(100 / props.links.length) + '%' : '100%';
    const links = props.links.map(element => {
        return (
            <Link
                style={{ color: colors.white, textDecoration: 'none' }}
                to={process.env.PUBLIC_URL + element.link}
                key={element.title}>
                <BoxLink
                    title={element.title}
                    img={element.img}
                    //onClickHandler={element.link}
                    width={linkWidth}
                    classNames={classNames}
                />
            </Link>
        );
    });

    return <div className={classNames.block()}>{links}</div>;
};

export default BoxLinks;
