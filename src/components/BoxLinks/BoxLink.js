import React from 'react';

const BoxLink = props => {
    return (
        <div className={props.classNames.element('link')} onClick={props.onClickHandler} style={{ width: props.width }}>
            <img src={props.img} alt="background" className={props.classNames.element('bg-img')} />
            <h2 className={props.classNames.element('link-title')}>{props.title}</h2>
        </div>
    );
};

export default BoxLink;
