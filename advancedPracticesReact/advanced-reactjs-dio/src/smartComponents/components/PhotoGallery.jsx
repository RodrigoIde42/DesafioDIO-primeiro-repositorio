import React, { memo, useState } from 'react';
import Button from './Button';

export default memo(function PhotoGallery({ photos }) {

    const [ gallery, setGalery ] = useState(photos)

    const handleRemove = (key) => {
        const newGallery = gallery.filter((img, index) => index !== key)
        setGalery(newGallery)
    }

    const renderPhotos = (img, key) => {
        return (
            <div className="gallery" key={`image-${key}`}>
                <img src={img} alt="?" />
                <Button onClick={() => handleRemove(key)}>
                    Remove {key}
                </Button>
            </div>
        )
    }

    return(
        <>
            <span>Photo Gallery</span>
            <br />
            {gallery.map(renderPhotos)}
        </>
    )
})