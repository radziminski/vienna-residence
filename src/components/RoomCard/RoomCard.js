import React from 'react';
import { IoIosBed } from 'react-icons/io';
import { IoMdPerson } from 'react-icons/io';

const RoomCard = (props) => {
    return (
        <div className="room-card">
            <div className="room-card__img-box">
                <img src={props.img} className="room-card__img" alt="Room"/>
                <div className="room-card__info-wrapper">
                    <div className="room-card__hotel">{props.hotel}</div>                     
                    <div className="room-card__price">from {props.price}$/night</div>
                </div>
            </div>
            <div className="room-card__details">
                <div className="room-card__bed"><IoIosBed className="room-card__icon"/>{props.bed}</div>          
                <div className="room-card__people-num"><IoMdPerson className="room-card__icon"/>{props.people > 1 ? `1 - ${props.people}`: 1}</div> 
            </div>
            <div className="room-card__text-box">
                <h2 className="room-card__title">{props.title}</h2>
                <h3 className="room-card__sub-title">{props.subTitle}</h3>
                <p className="room-card__desc">{props.desc}</p>
            </div>         
            <a href="#" className="room-card__btn">Reserve now &rarr;</a>
        </div>
    )
}

export default RoomCard;
