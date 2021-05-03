import React from 'react';
import {Image} from "semantic-ui-react";

const InlineStyle = () => (
    <style>
        {
            `
            .top-image {
                height: 10%
            }
            `
        }
    </style>
);

const Content = () => {
    return (
        <div style={{'paddingTop': '25%'}}>
            <InlineStyle />
            <Image className={'top-image'} fluid/>
        </div>
    );
}

export default Content;