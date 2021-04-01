import React from 'react';
import './music-list.style.scss';
import ItemCard from '../item-card/item-card.component';

const MusicList = ({items}) => (
    <div className="list">
        {
            items.map((track,id) => <ItemCard {...track}  key={id}/>)
        }  
    </div>
)

export default MusicList;