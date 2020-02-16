import React from 'react'

const BoxLink = (props) => {
    return (
        <div className="box-links__link" onClick={props.onClickHandler} style={{width: props.width}}>
            <img src={props.img} alt="background" className="box-links__bg-img" />
            <h2 className="box-links__link-title">{props.title}</h2>
        </div>
    )
}

export default BoxLink
