//A Photo component that displays the li and img elements.

import React from 'react';
import Photo from './Photo';
import PageNotFound from './PageNotFound';

const Results = (props)  => {

    const results = props.data
    let photos;
    if(results.length > 0) {
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
        photos = <PageNotFound />
    }

    return (
        <div className="photo-container">
        <h2>Photo</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )};

export default Results;