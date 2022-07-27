/**
 * Purpose: returned photo from json to html
 */


import React from 'react';

//function that takes in the props and sets variables which can be inserted into line 19 template literal
const Photo = (props) => {
    let photoId = props.photoId;
    let serverId = props.serverId;
    let secret = props.secretId;


    return (
        <div className="photo-container">
                <ul>
                    <li>
                        <img src={`https://live.staticflickr.com/${serverId}/${photoId}_${secret}_w.jpg`} alt={props.alt}/>
                    </li>
                </ul>
        </div>
    )
}

export default Photo;


/**
 * Source:
 * googled sample of static flicker photo: https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg from stack overflow
 */
