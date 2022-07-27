/**
 * Purpose: A gallery that displays the li and img elements
 */


/**
 * imported dependencies
 */

import React from 'react';
import Photo from './Photo';

//created a component for Gallery and pulled values such as photo id, photo secret, photo title, etc
const Gallery = (props)  => {

    const results = props.data
    let photos;
    if(Gallery.length > 0) {
        photos = results.map(photo =>
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
//inserted into the html
    return (
        <div className= "photo-container" >
        <h2>Photo Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )};

export default Gallery;