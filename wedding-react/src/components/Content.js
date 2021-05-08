import React from 'react';
import {Container, Header} from "semantic-ui-react";
import indexSection from '../img/index-section.jpg';
import {Parallax} from "react-parallax";
import {InvitationParagraph} from "./InvitationParagraph";
import {WeddingGallery} from "./WeddingGallery";
import {Map} from "./Map";

const InlineStyle = () => (
    <style>
        {
            `
            .date {
                color: #666;
                font-size: 2em;
                margin: 3%;
                font-weight: 500;
            }
            .top-image {
                height: 40vh;
                width: 100vw !important;
            }
            .wedding-announce {
                color: #666;
                margin: 0 0 10vh 0;
                font-size: 1.0em;
            }
            .wedding-text {
                font-size: 0.9em;
                font-weight: 500;
            }
            .couple-name {
                font-weight: 500;
            }
            `
        }
    </style>
);

const Content = () => {

    return (
        <div style={{'paddingTop': '4vh', 'paddingBottom': '4vh'}}>
            <InlineStyle/>
            <Header as={'h3'} className={'wedding-text'} style={{'text-decoration': 'underline'}}>SAVE THE DATE</Header>
            <Container text style={{'margin': '8vh'}}>
                <Header as={'h1'} className={'date'}>2021</Header>
                <Header as={'h1'} className={'date'} style={{'font-size': '1.8em'}}>07.24</Header>
            </Container>

            <Container>
                <Parallax className={'top-image'} bgImage={indexSection} strength={20}>
                </Parallax>
            </Container>

            <Container text className={'wedding-announce'}>
                <Header as={'h2'} className={'couple-name'}>서경민 & 이선우</Header>
                <Header as={'h3'} className={'wedding-text'} style={{'font-size': '1em', 'color': 'black'}}>2021. 07.
                    24. SAT</Header>
                <Header as={'h3'} className={'wedding-text'}
                        style={{'font-size': '1em', 'color': 'black'}}>포천시민교회</Header>
            </Container>
            <InvitationParagraph/>
            <Container text style={{marginBottom: '10vh'}}>
                <WeddingGallery/>
            </Container>
            <Container text>
                <Map/>
            </Container>
        </div>
    );
}

export default Content;