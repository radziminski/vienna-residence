import React from 'react'

const Section = props => {
    return (
        <section className={props.name + (props.type ? (' section--' + props.type) : '')} name={props.name}>
            {props.children}
        </section>
    )
}

export default Section
