/**
 * Purpose: A gallery that displays the li and img elements
 */


/**
 * imported dependencies
 */

import React from 'react';
import Photo from './Photo';


const Gallery = (props)  => {

    const Gallery = props.data
    let photos;
    if(Gallery.length > 0) {
        photos = Gallery.map(photo =>
            <Photo
                photoId={photo.id}
                key={photo.secret}
                alt={photo.title}
                secretId={photo.secret}
                serverId={photo.server}
            />
        )
    } else {
    }

    return (
        <div className= "photo-container" >
        <h2>Photo Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )};

export default Gallery;