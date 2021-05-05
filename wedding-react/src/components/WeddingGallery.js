import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import {Container} from "semantic-ui-react";
import ImageGallery from "react-image-gallery";
import Gallery1 from '../img/galary-1.jpg';
import Gallery2 from '../img/galary-2.jpg';
import Gallery3 from '../img/galary-3.jpg';
import Gallery4 from '../img/galary-4.jpg';
import Gallery5 from '../img/galary-5.jpg';
import Gallery6 from '../img/galary-6.jpg';
import Gallery7 from '../img/galary-7.jpg';
import Gallery8 from '../img/galary-8.jpg';

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
        original: Gallery8,
        thumbnail: Gallery8
    }
]

export const WeddingGallery = () => (
    <Container>
        <ImageGallery items={images}/>
    </Container>
);