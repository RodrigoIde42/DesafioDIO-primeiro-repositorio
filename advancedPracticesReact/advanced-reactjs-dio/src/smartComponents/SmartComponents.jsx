import React, { memo } from 'react';
import PhotoGallery from './components/PhotoGallery';

export default memo(function SmartComponents() {

    const photos = [
        'https://placeimg.com/300/150/animals',
        'https://placeimg.com/300/150/nature'
    ]

    return (
        <>
            <h1>Smart Components</h1>
            <PhotoGallery 
                photos={ photos }
            />
        </>
    )
})