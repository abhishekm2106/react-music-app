import React from 'react';
import './item-card.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

const ItemCard = (props)=>(
    <div className="item-card">
        <div className="item-image" style={{backgroundImage:`url(${props.album.images[0].url})`}}></div>
        <div className="item-details">
            <div className="item-name">{props.name}</div>
            <div className="item-artist">Music By : {props.artists.map(i => i.name+", ")}</div>
            <div className="item-duration">Duration : {millisToMinutesAndSeconds(props.duration_ms)}</div>
        </div>
        <a href={props.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="play-button"><FontAwesomeIcon className="play-icon"  icon={faPlay} /></a>
        
    </div>
)

export default ItemCard;