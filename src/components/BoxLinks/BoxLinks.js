import React from 'react'
import BoxLink from './BoxLink'

const BoxLinks = (props) => {
    const linkWidth = String(100 / props.links.length) + '%';
    const links = props.links.map(element => {
        return <BoxLink 
                    title={element.title}
                    img={element.img}
                    //onClickHandler={element.link}
                    onClickHandler={() => console.log("clicked")}
                    width={linkWidth}
                    key={element.title}
                />
    })

    return (
        <div className="box-links">
            {links}
        </div>
    )
}

export default BoxLinks
