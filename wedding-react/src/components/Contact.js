import React from 'react';
import {Button, Grid, Header, Image} from "semantic-ui-react";
import GroomImage from '../img/groom.jpg';
import BrideImage from '../img/bride.jpg';

const PhoneSms = ({phoneNumber}) => (
    <>
        <a href={`tel:${phoneNumber}`}>
            <Button circular icon={'phone'}/>
        </a>
        <a href={`sms:${phoneNumber}`}>
            <Button circular icon={'envelope'}/>
        </a>
    </>
);

export const Contact = () => (
    <>
        <Grid columns={2} style={{padding: '0', margin: '0'}} verticalAlign={'middle'}>
            <Grid.Column>
                <Header as={'h3'}>신랑</Header>
                <Header as={'h2'}>서경민</Header>
                <PhoneSms phoneNumber={'010-8681-0291'}/>
            </Grid.Column>
            <Grid.Column style={{padding: '0'}}>
                <Image fluid src={GroomImage}/>
            </Grid.Column>
        </Grid>
        <Grid columns={2} style={{padding: '0', margin: '0'}} verticalAlign={'middle'}>
            <Grid.Column style={{padding: '0'}}>
                <Image fluid src={BrideImage}/>
            </Grid.Column>
            <Grid.Column>
                <Header as={'h3'}>신부</Header>
                <Header as={'h2'}>이선우</Header>
                <PhoneSms phoneNumber={'010-2600-4311'}/>
            </Grid.Column>
        </Grid>
        <Header as={'h3'}>혼주님께 연락하기</Header>
        <Grid columns={2} relaxed={'very'} style={{height: '30vh', margin: '0', padding: '0'}} verticalAlign={'middle'}>
            <Grid.Column>
                <p>신랑</p>
                <p>아버지 서정국</p>
                <p><PhoneSms phoneNumber={'010-4559-0191'}/></p>
                <p>어머니 박인경</p>
                <p><PhoneSms phoneNumber={'010-4534-0191'}/></p>
            </Grid.Column>
            <Grid.Column>
                <p>신부측 혼주</p>
                <p>아버지 이명철</p>
                <p><PhoneSms phoneNumber={'010-4723-1528'}/></p>
                <p>아머니 오유순</p>
                <p><PhoneSms phoneNumber={'010-4724-1528'}/></p>
            </Grid.Column>
        </Grid>
        <br />
        <br />
    </>
);