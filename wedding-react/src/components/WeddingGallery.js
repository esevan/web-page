import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import {Container} from "semantic-ui-react";
import ImageGallery from "react-image-gallery";
import Gallery1 from '../img/gallery-1.jpg';
import Gallery2 from '../img/gallery-2.jpg';
import Gallery3 from '../img/gallery-3.jpg';
import Gallery4 from '../img/gallery-4.jpg';
import Gallery5 from '../img/gallery-5.jpg';
import Gallery6 from '../img/gallery-6.jpg';
import Gallery7 from '../img/gallery-7.jpg';
import Gallery8 from '../img/gallery-8.jpg';
import Gallery9 from '../img/gallery-9.jpg';
import Thumbnail8 from '../img/thumbnail-8.jpg';
import Thumbnail9 from '../img/thumbnail-9.jpg';

const images = [
    {
        original: Gallery1,
        thumbnail: Gallery1
    },
    {
        original: Gallery2,
        thumbnail: Gallery2
    },
    {
        original: Gallery3,
        thumbnail: Gallery3
    },
    {
        original: Gallery4,
        thumbnail: Gallery4
    },
    {
        original: Gallery5,
        thumbnail: Gallery5
    },
    {
        original: Gallery6,
        thumbnail: Gallery6
    },
    {
        original: Gallery7,
        thumbnail: Gallery7
    },
    {
        original: Thumbnail8,
        thumbnail: Thumbnail8,
        fullscreen: Gallery8
    },
    {
        original: Thumbnail9,
        thumbnail: Thumbnail9,
        fullscreen: Gallery9
    }
]

export const WeddingGallery = () => (
    <ImageGallery style={{height: "40vh"}} items={images} thumbnailPosition={'bottom'} showNav={false} autoPlay={true}
                  useBrowserFullscreen={false}/>
);