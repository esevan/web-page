import React from 'react';
import {Container, Header} from "semantic-ui-react";
import indexSection from '../img/index-section.jpg';
import {Parallax} from "react-parallax";
import {InvitationParagraph} from "./InvitationParagraph";
import {WeddingGallery} from "./WeddingGallery";
import {Map} from "./Map";
import {Contact} from "./Contact";
import {Account} from "./Account";

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
            .ui.header {
                font-family: 'Nanum Myeongjo';
                font-weight: 500;
            }
            `
        }
    </style>
);

const eventUrl = 'https://www.google.com/calendar/render?action=TEMPLATE&text=%EA%B2%BD%EB%AF%BC%26%EC%84%A0%EC%9A%B0+%EA%B2%B0%ED%98%BC%EC%8B%9D&details=%ED%95%98%EB%82%98%EB%8B%98%EC%9D%98+%EC%82%AC%EB%9E%91%EC%9C%BC%EB%A1%9C+%EC%9E%90%EB%9D%BC%EC%98%A8+%EB%91%90+%EC%82%AC%EB%9E%8C%EC%9D%B4+%EC%9D%B4%EC%A0%9C+%EC%83%88%EB%A1%9C%EC%9A%B4+%EA%B0%80%EC%A0%95%EC%9D%84+%EC%9D%B4%EB%A3%A8%EB%8A%94+%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4+%EC%95%BD%EC%86%8D%EC%9D%84+%ED%95%98%EB%A0%A4+%ED%95%A9%EB%8B%88%EB%8B%A4.+%EC%96%B8%EC%A0%9C%EB%82%98+%EC%95%84%EB%A6%84%EB%8B%B5%EA%B3%A0+%EC%A3%BC%EC%9C%84%EC%97%90+%EC%82%AC%EB%9E%91%EC%9D%84+%EB%82%98%EB%88%84%EB%8A%94+%ED%96%89%EB%B3%B5%ED%95%9C+%EA%B0%80%EC%A0%95%EC%9D%84+%EC%9D%B4%EB%A3%A8%EB%8F%84%EB%A1%9D+%EC%98%A4%EC%85%94%EC%84%9C+%EC%B6%95%EB%B3%B5%ED%95%B4+%EC%A3%BC%EC%8B%9C%EA%B3%A0+%EC%A7%80%EC%BC%9C%EB%B4%90+%EC%A3%BC%EC%8B%AD%EC%8B%9C%EC%98%A4.&location=%ED%8F%AC%EC%B2%9C%EC%8B%9C%EB%AF%BC%EA%B5%90%ED%9A%8C&dates=20210723T160000Z%2F20210724T060000Z'

const Content = () => {

    return (
        <div style={{'paddingTop': '4vh', 'paddingBottom': '4vh'}}>
            <InlineStyle/>
            <a href={eventUrl}
               target="_blank" rel="nofollow"><Header as={'h3'} className={'wedding-text'} style={{textDecoration: 'underline'}}>SAVE THE DATE</Header></a>

            <Container text style={{'margin': '8vh', width: '100vw'}}>
                <Header as={'h1'} className={'date'}>2021</Header>
                <Header as={'h1'} className={'date'} style={{fontSize: '1.8em'}}>07.24</Header>
            </Container>

            <Parallax className={'top-image'} bgImage={indexSection} strength={20}>
            </Parallax>

            <Container text className={'wedding-announce'}>
                <Header as={'h2'} className={'couple-name'}>서경민 & 이선우</Header>
                <Header as={'h3'} className={'wedding-text'} style={{fontSize: '1em', 'color': 'black'}}>2021. 07.
                    24. SAT</Header>
                <Header as={'h3'} className={'wedding-text'}
                        style={{fontSize: '1em', 'color': 'black'}}>포천시민교회</Header>
            </Container>
            <InvitationParagraph/>
            <Contact/>
            <WeddingGallery style={{marginBottom: '10vh'}}/>
            <br />
            <br />
            <br />
            <Map/>
            <br />
            <br />
            <br />
            <Account/>
            <br />
            <br />
            <br />

        </div>
    );
}

export default Content;