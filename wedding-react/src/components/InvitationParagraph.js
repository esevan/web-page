import React from 'react';
import {Container} from "semantic-ui-react";

const InlineStyle = () => (
    <style>
        {`
            .invitation-paragraph {
                font-size: 0.9em;
                background: #f7f7f7;
                color: #555;
                padding: 10% 0;
                font-weight: 500;
            }
            .invitation-paragraph > p {
                white-space: pre-line;
                line-height: 1.8em;
            }
        `}
    </style>
)

export const InvitationParagraph = () => (
    <>
        <InlineStyle />
        <Container text className={'invitation-paragraph'}>
            <p>{
                '하나님의 사랑으로 만난 두 사람이\n'
                + '이제 새로운 가정을 이루는\n'
                + '아름다운 약속을 하려 합니다.\n'
                + '언제나 아름답고 주위에 사랑을\n'
                + '나누는 행복한 가정을 이루도록\n'
                + '오셔서 축복해 주시고 지켜봐 주십시오.'}</p>
        </Container>
    </>
);